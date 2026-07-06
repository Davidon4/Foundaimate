import {Redis} from "@upstash/redis";
import {OpenAIEmbeddings} from "@langchain/openai";
import {Pinecone} from "@pinecone-database/pinecone";
import {PineconeStore} from "@langchain/pinecone";

export type PersonalityKey = {
    personalityName: string;
    modelName: string;
    userId: string;
    profileId?: string;
    experiences?:string;
    ownerships?: string; 
    members?: string;  
    expertises?: string;
    decisions?: string; 
    revenues?: string;
    stages?: string; 
    sizes?: string; 
    industries?: string; 
    products?: string; 
    targets?: string; 
    networks?: string; 
    leads?: string; 
    schallenges?: string; 
    sstrategies?: string; 
    sgoals?: string; 
    usps?: string; 
    mchannels?: string;
    mchallenges?: string;
    mgoals?: string; 
    mrisks?: string; 
    srisks?: string; 
    drisks?: string; 
    dchallenges?: string;
    updates?: string; 
    features?: string;
    innovations?: string;
    name?: string;
    description?: string;
};

interface BusinessProfile {
    // Basic Info
    name: string;
    description: string;
    
    // Business Foundation
    stages: string[];
    industries: string[];
    sizes: string[];
    revenues: string[];
    
    // Team & Experience
    experiences: string[];
    ownerships: string[];
    members: string[];
    expertises: string[];
    decisions: string[];
    
    // Market & Strategy
    products: string[];
    targets: string[];
    networks: string[];
    leads: string[];
    
    // Strategic Elements
    sstrategies: string[];
    sgoals: string[];
    schallenges: string[];
    srisks: string[];
    
    // Marketing Elements
    mchannels: string[];
    mgoals: string[];
    mchallenges: string[];
    mrisks: string[];
    usps: string[];
    
    // Development & Innovation
    features: string[];
    updates: string[];
    innovations: string[];
    dchallenges: string[];
    drisks: string[];
}

interface AIPersonality {
    id: string;
    name: string;
    role: string;
    motto: string;
    coreTraits: Record<string, string>;
    toneExamples: Record<string, string>;
    sampleInteraction: Record<string, string>;
    summary: string;
    imageUrl?: string;
}

export class MemoryManager {
    private static instance: MemoryManager;
    private history: Redis;
    private vectorDBClient: Pinecone;

    private constructor() {
        this.history = Redis.fromEnv();
        this.vectorDBClient = new Pinecone();
    }

    public async init() {
        if (this.vectorDBClient instanceof Pinecone) {
            this.vectorDBClient = new Pinecone({
                apiKey: process.env.PINECONE_API_KEY!
            })
        }
    }  

    public async vectorSearch(
        recentChatHistory: string,
        personalityFileName: string,

        contextFilter? :{
            profileId?: string;
            experiences?:string;
            ownerships?: string; 
            members?: string;  
            expertises?: string;
            decisions?: string; 
            revenues?: string;
            stages?: string; 
            sizes?: string; 
            industries?: string; 
            products?: string; 
            targets?: string; 
            networks?: string; 
            leads?: string; 
            schallenges?: string; 
            sstrategies?: string; 
            sgoals?: string; 
            usps?: string; 
            mchannels?: string;
            mchallenges?: string;
            mgoals?: string; 
            mrisks?: string; 
            srisks?: string; 
            drisks?: string; 
            dchallenges?: string;
            updates?: string; 
            features?: string;
            innovations?: string;
            name?: string;
            description?: string;
        }
    ) {
        const pineconeClient = <Pinecone>this.vectorDBClient;

        const pineconeIndex = pineconeClient.index(
            process.env.PINECONE_INDEX! || ""
        );

        const vectorStore = await PineconeStore.fromExistingIndex(
            new OpenAIEmbeddings({ openAIApiKey: process.env.CLAUDE_API_KEY}),
            {   
                pineconeIndex: pineconeIndex as any,
                filter: contextFilter,
            }
        );

        const similarDocs = await vectorStore 
        .similaritySearch(recentChatHistory, 5, {
            fileName: personalityFileName,
            ...contextFilter 
        })
        .catch((err: Error | unknown) => {
            console.log("WARNING: failed to get vector search results.", err);
        });
        return similarDocs;
    }

    public static async getInstance(): Promise<MemoryManager> {
        if (!MemoryManager.instance) {
         MemoryManager.instance = new MemoryManager();
         await MemoryManager.instance.init();
        } 
        return MemoryManager.instance;
     }

     private generateRedisPersonalityKey(personalityKey: PersonalityKey): string {
        return `${personalityKey.personalityName}-${personalityKey.modelName}-${personalityKey.userId}`;
     }

     public async writeToHistory(text: string, personalityKey: PersonalityKey) {
        if (!personalityKey || typeof personalityKey.userId == "undefined") {
            console.log("Personality key set incorrectly");
            return "";
        }

        const key = this.generateRedisPersonalityKey(personalityKey);
        const result = await this.history.zadd(key, {
            score: Date.now(),
            member: text,
        });

        return result;
    }

    public async readLatestHistory(personalityKey: PersonalityKey): Promise<string> {
        if(!personalityKey || typeof personalityKey.userId == "undefined") {
            console.log("Personality key set incorrectly");
            return "";
        }

        const key = this.generateRedisPersonalityKey(personalityKey);
        let result = await this.history.zrange(key, 0, Date.now(), {
            byScore: true,
        });

        result = result.slice(-50).reverse();
        const recentChats = result.reverse().join('\n');
        return recentChats;
        }
            public async seedChatHistory(
                personalityKey: PersonalityKey,
                profile: BusinessProfile,
                selectedPersonality: AIPersonality
            ): Promise<void> {
                const key = this.generateRedisPersonalityKey(personalityKey);
                
                try {
                    if(await this.history.exists(key)) {
                        console.log("User already has chat history");
                        return;
                    }

                    const seedContent = await this.generateSeedContent(profile, selectedPersonality);
                    await this.saveSeedContent(key, seedContent);
                } catch (error) {
                    console.error("Error seeding chat history:", error);
                    throw new Error("Failed to seed chat history");
                }
            }

            private async saveSeedContent(key: string, content: string[]): Promise<void> {
                let counter = 0;
                for (const line of content) {
                    await this.history.zadd(key, {score: counter, member: line});
                    counter += 1;
                }
            }

            private getPersonalizedIntro(personality: AIPersonality, businessName: string): string {
                const traits = Object.keys(personality.coreTraits);
                
                const introMap: Record<string, string> = {
                    'Analytical': `After conducting a detailed analysis of ${businessName}, I've prepared a comprehensive breakdown of your business metrics and opportunities.`,
                    'Innovative': `I'm excited to explore ${businessName}'s potential! I've identified several innovative approaches we could take to revolutionize your market position.`,
                    'Strategic': `I've mapped out ${businessName}'s strategic landscape and identified key leverage points we can use to maximize our market impact.`
                };

                const matchedTrait = traits.find(trait => trait in introMap);
                return matchedTrait ? introMap[matchedTrait] : `I've completed a thorough review of ${businessName}'s business profile.`;
            }

            private getPersonalizedClosing(personality: AIPersonality, profile: BusinessProfile): string[] {
                const traits = Object.keys(personality.coreTraits);
                const closingStatements: string[] = [];

                const closingMap: Record<string, () => string[]> = {
                    'Analytical': () => [
                        "Based on the quantitative analysis:",
                        `1. Your ${profile.stages[0]} stage shows a ${profile.revenues[0]} revenue pattern`,
                        `2. Market metrics in ${profile.industries[0]} suggest optimization opportunities`,
                        `3. Your current KPIs indicate several data-driven growth levers we can pull`
                    ],
                    'Innovative': () => [
                        "I see exciting opportunities for innovation:",
                        `1. Disruptive potential in your ${profile.industries[0]} approach`,
                        `2. Novel solutions to ${profile.mchallenges[0]}`,
                        `3. Creative ways to leverage your ${profile.usps[0]}`
                    ],
                    'Strategic': () => [
                        "From a strategic perspective:",
                        `1. Your position in ${profile.industries[0]} offers unique advantages`,
                        `2. We can leverage ${profile.networks[0]} for accelerated growth`,
                        `3. Your ${profile.sgoals[0]} aligns well with market opportunities`
                    ]
                };

                const matchedTrait = traits.find(trait => trait in closingMap);
                if (matchedTrait) {
                    closingStatements.push(...closingMap[matchedTrait]());
                }

                closingStatements.push(
                    "",
                    personality.toneExamples['Collaboration'] || 
                    "Let's explore these opportunities together. Which area would you like to discuss first?"
                );

                return closingStatements;
            }

            private async generateSeedContent(profile: BusinessProfile, personality: AIPersonality): Promise<string[]> {
                const seedContent: string[] = [];
                
                // Add personalized intro
                seedContent.push(this.getPersonalizedIntro(personality, profile.name));
                
                // Add personalized closing statements
                seedContent.push(...this.getPersonalizedClosing(personality, profile));
                
                return seedContent;
            }
        }