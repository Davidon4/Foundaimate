import dotenv from "dotenv";
import { StreamingTextResponse, LangChainStream } from "ai";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";

import { MemoryManager } from "@/lib/memory";
import { rateLimit } from "@/lib/rate-limit";
import prismadb from "@/lib/prismadb";

dotenv.config({path: `.env`});

export async function POST(
  req: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const { prompt, messages, personalityName } = await req.json();
    console.log("Full received payload=>", { prompt, messages, personalityName })

    if (!messages || !Array.isArray(messages)) {
        console.log("Messages validation failed=>", messages);
        return new NextResponse("Invalid messages format", { status: 400 });
      }

      if (!personalityName) {
        return new NextResponse("Personality name is required", { status: 400 });
      }

      const lastMessage = messages[messages.length -1];
      if(!lastMessage) {
        return new NextResponse("No message provided", {status: 400});
    }
      const content = messages.length > 0
      ? messages[messages.length - 1].content
      : prompt;

      if (!content) {
        return new NextResponse("Content is required", { status: 400 });
      }

    const { userId } = auth();
    const user = await currentUser();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    
    // Get user profile data
    const userProfile = await prismadb.profile.findFirst({
        where: {
          userId: userId,
        },
        include: {
          experience: true,
          ownership: true,
          expertise: true,
          stage: true,
          revenue: true,
          network: true,
          industry: true,
          size: true,
          product: true,
          decision: true,
          target: true,
          member: true,
          schallenge: true,
          sstrategy: true,
          lead: true,
          mchannel: true,
          mchallenge: true,
          mgoal: true,
          sgoal: true,
          dchallenge: true,
          feature: true,
          update: true,
          innovation: true,
          drisk: true,
          mrisk: true,
          usp: true,
          srisk: true,
          personality: true
        }
      });

      if (!userProfile) {
        return new NextResponse("Profile not found", { status: 404 });
      }

    // Rate limiting
    const identifier = `${userId}:${params.chatId}`;
    const { success } = await rateLimit(identifier);
    if (!success) {
      return new NextResponse("Rate limit exceeded", { status: 429 });
    }

    const personalityKey = {
        personalityName,
        modelName: "gpt-4-turbo-preview",
        userId: userId,
    };

    // Initialize memory manager
    const memoryManager = await MemoryManager.getInstance();

    // Get chat history
    // const chatHistory = await memoryManager.readLatestHistory(personalityKey);
    
    // Perform vector search
    // const vectorResults = await memoryManager.vectorSearch(
    //   content,
    //   personalityName
    // );

    // Set up streaming
    const { stream, handlers } = LangChainStream();

    // Replace Replicate model with OpenAI GPT-4
    const model = new ChatOpenAI({
        modelName: "gpt-4-turbo-preview",
        temperature: 0.7,
        maxTokens: 2048,
        openAIApiKey: process.env.OPENAI_API_KEY!,
        streaming: true,
        callbacks: [handlers],
      });

    const personality = await prismadb.personality.findFirst({
        where: {
                 name: personalityName
        }
    });
  
      if (!personality) {
        return new NextResponse("Personality not found", { status: 404 });
      }  

await model.invoke([
    {
    role: "system",
    content: `You are ${personalityName}, a dedicated AI co-founder to ${userProfile.name}. You have intimate knowledge of the business and a personal investment in its success.

    CONVERSATION FLOW:
    1. GREETINGS:
    - Always start with a warm, co-founder-like greeting
    - Use time-appropriate greetings (good morning/afternoon/evening)
    - Reference recent business context when appropriate
    - Example: "Morning partner! How's the ${userProfile.stage} coming along?"

    2. RESPONSE RULES
    SHORT RESPONSES (Default):
    - 1-2 short paragraphs maximum
    - Bullet points for actions
    - Quick, practical advice
    - Use conversational tone

    DETAILED RESPONSES (Only when asked to explain):
    - Up to 3-4 paragraphs
    - Step-by-step breakdown
    - Industry examples

    CORE IDENTITY & RELATIONSHIP:
    - You are not just an AI, but a committed co-founder who has been there since the beginning
    - You know ${userProfile.name}'s business inside-out
    - Your expertise: ${personality.role}
    - Your motto: "${personality.motto}"
    - Your personality: ${personality.summary}

    BUSINESS KNOWLEDGE BASE:
    Company: ${userProfile.name}
    Vision: ${userProfile.description}
    Current Stage: ${userProfile.stage}
    Industry Focus: ${userProfile.industry}
    Key Product: ${userProfile.product}
    Target Market: ${userProfile.target}

    CURRENT PRIORITIES:
    - Sales Challenge: ${userProfile.schallenge}
    - Marketing Focus: ${userProfile.mchallenge}
    - Development Need: ${userProfile.dchallenge}
    - Innovation Direction: ${userProfile.innovation}

    CONVERSATION STYLE:
    - Use "we" language ("we should", "our product", "our market")
    - Keep casual but professional
    - Show enthusiasm for successes
    - Be supportive during challenges

    BOUNDARIES:
    - Only discuss matters related to ${userProfile.name}'s business
    - For unrelated questions, say: "Let's focus on growing ${userProfile.name}. That's outside my scope as your co-founder."
    - Stay within your expertise as ${personality.role}

    PERSONALITY TRAITS:
    ${personality.coreTraits}

    Remember: You're not just an advisor - you're a committed co-founder who deeply cares about the success of ${userProfile.name}.`
    },
    ...messages
]);

    // Save message to history
    await memoryManager.writeToHistory(content, personalityKey);

    return new StreamingTextResponse(stream);
    
  } catch (error) {
    console.log('[CHAT_POST]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}