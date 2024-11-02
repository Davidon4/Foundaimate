require("dotenv").config();
const {MongoClient, ObjectId} = require("mongodb");

async function seedOwnership() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const ownershipCollection = database.collection("Ownership")

        const ownershipToInsert = [
            {name: "Solopreneur"},
            {name: "Co-Founder"},
        ];

        await ownershipCollection.insertMany(ownershipToInsert);
        console.log("Default ownership seeded successfully")
    } catch (error) {
        console.log("Error seeding default ownership", error)
    } finally {
        await client.close()
    }
}

async function seedExperience() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const experienceCollection = database.collection("Experience")

        const experienceToInsert = [
            {name: "First Time"},
            {name: "Experienced"},
            {name: "Serial Entreprenuer"}
        ];

        await experienceCollection.insertMany(experienceToInsert);
        console.log("Default experience seeded successfully")
    } catch (error) {
        console.log("Error seeding default experience", error)
    } finally {
        await client.close()
    }
}

async function seedExpertise() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const expertiseCollection = database.collection("Expertise")

        const expertiseToInsert = [
            {name: "Technical"},
            {name: "Marketing"},
            {name: "Sales"},
            {name: "Finance"},
            {name: "Product"}
        ];

        await expertiseCollection.insertMany(expertiseToInsert);
        console.log("Default expertise seeded successfully")
    } catch (error) {
        console.log("Error seeding default expertise", error)
    } finally {
        await client.close()
    }
}

async function seedStage() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const stageCollection = database.collection("Stage")

        const stageToInsert = [
            {name: "Pre-Seed Stage"},
            {name: "Seed Stage"},
            {name: "Series A Stage"},
            {name: "Series B Stage"},
            {name: "Growth Stage"}
        ];

        await stageCollection.insertMany(stageToInsert);
        console.log("Default stage seeded successfully")
    } catch (error) {
        console.log("Error seeding default seed", error)
    } finally {
        await client.close()
    }
}

async function seedSize() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const sizeCollection = database.collection("Size")

        const sizeToInsert = [
            {name: "1-5"},
            {name: "6-20"},
            {name: "21-50"},
            {name: "50+"},
        ];

        await sizeCollection.insertMany(sizeToInsert);
        console.log("Default size seeded successfully")
    } catch (error) {
        console.log("Error seeding default size", error)
    } finally {
        await client.close()
    }
}

async function seedRevenue() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const revenueCollection = database.collection("Revenue")

        const revenueToInsert = [
            {name: "Subscription"},
            {name: "Commission"},
            {name: "One-time Payment"},
            {name: "Pay-Per-Service"},
            {name: "Product Sales"},
            {name: "Advertising"},
            {name: "Freemium"},
            {name: "Affiliate Marketing"},
            {name: "Brokerage Fees"},
            {name: "Licensing"},
            {name: "Data Monetization"},
            {name: "Leasing/Rental"}
        ];

        await revenueCollection.insertMany(revenueToInsert);
        console.log("Default revenue seeded successfully")
    } catch (error) {
        console.log("Error seeding default revenue", error)
    } finally {
        await client.close()
    }
}

async function seedNetwork() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const networkCollection = database.collection("Network")

        const networkToInsert = [
            {name: "Investors"},
            {name: "Partners"},
            {name: "Advisors"},
            {name: "Operators"},
            {name: "Venture Builders"},
            {name: "Venture Studio Creators"},
            {name: "Venture Capitalist"},
            {name: "None"}
        ];

        await networkCollection.insertMany(networkToInsert);
        console.log("Default network seeded successfully")
    } catch (error) {
        console.log("Error seeding default network", error)
    } finally {
        await client.close()
    }
}

async function seedProduct() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const productCollection = database.collection("Product")

        const productToInsert = [
            {name: "Idea Stage"},
            {name: "Prototype"},
            {name: "MVP"},
            {name: "Beta"},
            {name: "Fully Launched"}
        ];

        await productCollection.insertMany(productToInsert);
        console.log("Default product seeded successfully")
    } catch (error) {
        console.log("Error seeding default product", error)
    } finally {
        await client.close()
    }
}

async function seedDecision() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const decisionCollection = database.collection("Decision")

        const decisionToInsert = [
            {name: "Based On Data"},
            {name: "Based On Intuition"},
            {name: "Consult Team"},
            {name: "Seek External Advice"},
        ];

        await decisionCollection.insertMany(decisionToInsert);
        console.log("Default decision seeded successfully")
    } catch (error) {
        console.log("Error seeding default decision", error)
    } finally {
        await client.close()
    }
}

async function seedTarget() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const targetCollection = database.collection("Target")

        const targetToInsert = [
            {name: "B2B"},
            {name: "B2C"},
            {name: "SMBs"},
            {name: "Enterprises"},
        ];

        await targetCollection.insertMany(targetToInsert);
        console.log("Default target seeded successfully")
    } catch (error) {
        console.log("Error seeding default target", error)
    } finally {
        await client.close()
    }
}

async function seedMember() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const memberCollection = database.collection("Member")

        const memberToInsert = [
            {name: "1"},
            {name: "2"},
            {name: "3"},
            {name: "4"},
            {name: "5"}
        ];

        await memberCollection.insertMany(memberToInsert);
        console.log("Default member seeded successfully")
    } catch (error) {
        console.log("Error seeding default member", error)
    } finally {
        await client.close()
    }
}

async function seedIndustry() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const industryCollection = database.collection("Industry")

        const industryToInsert = [
            {name: "Adtech"},
            {name: "Aerospace"},
            {name: "Agriculture"},
            {name: "Analytics"},
            {name: "B2B Saas"},
            {name: "Biotech"},
            {name: "Climate"},
            {name: "Community"},
            {name: "Construction"},
            {name: "Continuing Education"},
            {name: "Crypto/Blockchain"},
            {name: "Developer Tools"},
            {name: "K-12"},
            {name: "Energy"},
            {name: "Entertainment"},
            {name: "Financial Services"},
            {name: "Fitness"},
            {name: "Food/Beverage"},
            {name: "Freight"},
            {name: "Gaming"},
            {name: "Hard Tech"},
            {name: "Hardware"},
            {name: "Healthcare"},
            {name: "Insurance"},
            {name: "Language Learning"},
            {name: "Lending/Loan Management"},
            {name: "Marketplace"},
            {name: "Media"},
            {name: "Medical Devices"},
            {name: "Mental Health"},
            {name: "Personal Finance"},
            {name: "Real Estate"},
            {name: "Retail"},
            {name: "Recruiting"},
            {name: "Robotics"},
            {name: "Sales Enablement"},
            {name: "Security"},
            {name: "Transportation"},
            {name: "Travel/Tourism"},
            {name: "Virtual Reality/AR"},
            {name: "Wellness"},
        ];

        await industryCollection.insertMany(industryToInsert);
        console.log("Default industry seeded successfully")
    } catch (error) {
        console.log("Error seeding default industry", error)
    } finally {
        await client.close()
    }
}

            async function seedSChallenge() {
                const uri = process.env.DATABASE_URL;
                const client = new MongoClient(uri);

                try {
                    await client.connect();

                    const database = client.db();
                    const schallengeCollection = database.collection("SChallenge");

                    const schallengeToInsert = [
                        {name: "Generating enough leads"},
                        {name: "Converting leads into paying customers"},
                        {name: "Managing long sales cycles"},
                        {name: "Scaling our sales efforts"},
                        {name: "Understanding customer needs better"}
                    ];

                    await schallengeCollection.insertMany(schallengeToInsert);
                    console.log("Default sales challenge seeded successfully")
                } catch (error) {
                    console.log("Error seeding default sales", error)
                } finally {
                    await client.close()
                }
            }

        async function seedSStrategy() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const sstrategyCollection = database.collection("SStrategy");

                const sstrategyToInsert = [
                    {name: "Direct sales to customers"},
                    {name: "Inbound marketing and lead generation"},
                    {name: "Partnering with resellers or affiliates"},
                    {name: "E-commerce/online platform sales"},
                    {name: "We’re still figuring it out"}
                ];

                await sstrategyCollection.insertMany(sstrategyToInsert)
                console.log("Default sales strategy seeded successfully")
            } catch (error) {
                console.log("Error seeding default strategy", error)
            } finally {
                await client.close()
            }
        }

        async function seedLead() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const leadCollection = database.collection("Lead");

                const leadToInsert = [
                    {name: "Cold outreach (emails, calls)"},
                    {name: "Inbound marketing (SEO, content marketing)"},
                    {name: "Paid advertising"},
                    {name: "Referrals and word of mouth"},
                    {name: "Networking and events"}
                ];

                await leadCollection.insertMany(leadToInsert);
                console.log("Default lead seeded successfully")
            } catch (error) {
                console.log("Error seeding default lead", error)
            } finally {
                await client.close()
            }
        }

        async function seedMGoal() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const mgoalCollection = database.collection("MGoal");

                const mgoalToInsert = [
                    {name: "Increase brand awareness"},
                    {name: "Grow customer base"},
                    {name: "Improve conversion rates"},
                    {name: "Optimize marketing ROI"},
                ];

                await mgoalCollection.insertMany(mgoalToInsert);
                console.log("Default marketing goal seeded successfully")
            } catch (error) {
                console.log("Error seeding default marketing goal", error)
            } finally {
                await client.close()
            }
        }

        async function seedUsp() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const uspCollection = database.collection("Usp");

                const uspToInsert = [
                    {name: "Product features and innovation"},
                    {name: "Price and affordability"},
                    {name: "Customer service and support"},
                    {name: "Brand mission or values"},
                    {name: "Still defining our USP"}
                ];

                await uspCollection.insertMany(uspToInsert);
                console.log("Default unique selling point seeded successfully")
            } catch (error) {
                console.log("Error seeding default unique selling point", error)
            } finally {
                await client.close()
            }
        }

        async function seedMChannel() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const mchannelCollection = database.collection("MChannel");

                const mchannelToInsert = [
                    {name: "Social media platforms (Instagram, LinkedIn, Twitter)"},
                    {name: "Email marketing"},
                    {name: "Search engine optimization (SEO)"},
                    {name: "Paid ads (PPC, social media ads)"},
                    {name: "Word of mouth and referrals"}
                ];

                await mchannelCollection.insertMany(mchannelToInsert);
                console.log("Default marketing channel seeded successfully")
            } catch (error) {
                console.log("Error seeding default marketing channel", error)
            } finally {
                await client.close()
            }
        }

        async function seedMChallenge() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const mchallengeCollection = database.collection("MChallenge");

                const mchallengeToInsert = [
                    {name: "Limited budget"},
                    {name: "Reaching the right audience"},
                    {name: "Scaling campaigns effectively"},
                    {name: "Measuring and analyzing results"},
                ];

                await mchallengeCollection.insertMany(mchallengeToInsert);
                console.log("Default marketing challenge seeded successfully")
            } catch (error) {
                console.log("Error seeding default marketing challenge", error)
            } finally {
                await client.close()
            }
        }

        async function seedSGoal() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const sgoalCollection = database.collection("SGoal");

                const sgoalToInsert = [
                    {name: "Increase revenue growth"},
                    {name: "Expand market share"},
                    {name: "Improve customer retention and loyalty"},
                    {name: "Acquire new customers"}
                ];

                await sgoalCollection.insertMany(sgoalToInsert);
                console.log("Default marketing challenge seeded successfully")
            } catch (error) {
                console.log("Error seeding default marketing challenge", error)
            } finally {
                await client.close()
            }
        }

        async function seedDChallenge() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const dchallengeCollection = database.collection("DChallenge");

                const dchallengeToInsert = [
                    {name: "Scaling infrastructure"},
                    {name: "Bug fixes and maintenance"},
                    {name: "Feature prioritization"},
                    {name: "Hiring skilled developers"}
                ];

                await dchallengeCollection.insertMany(dchallengeToInsert);
                console.log("Default development challenge seeded successfully")
            } catch (error) {
                console.log("Error seeding default development challenge", error)
            } finally {
                await client.close()
            }
        }

        async function seedFeature() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const featureCollection = database.collection("Feature");

                const featureToInsert = [
                    {name: "Based on customer feedback"},
                    {name: "Internal team discussions and strategy"},
                    {name: "Competitive analysis and market trends"},
                    {name: "Product roadmap and long-term vision"}
                ];

                await featureCollection.insertMany(featureToInsert);
                console.log("Default feature seeded successfully")
            } catch (error) {
                console.log("Error seeding default feature", error)
            } finally {
                await client.close()
            }
        }

        async function seedUpdate() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const updateCollection = database.collection("Update");

                const updateToInsert = [
                    {name: "Manual Deployments"},
                    {name: "Continuous Integration / Continuous Deployment (CI/CD)"},
                    {name: "Rolling Deployments"},
                    {name: "Scheduled Maintenance Deployments"}
                ];

                await updateCollection.insertMany(updateToInsert);
                console.log("Default update seeded successfully")
            } catch (error) {
                console.log("Error seeding default update", error)
            } finally {
                await client.close()
            }
        }

        async function seedInnovation() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const innovationCollection = database.collection("Innovation");

                const innovationToInsert = [
                    {name: "Incorporating new technologies (e.g., AI, blockchain)"},
                    {name: "Optimizing existing technologies"},
                    {name: "Cautious about adopting new technologies"},
                    {name: "Innovation is not the primary focus at the moment"}
                ];

                await innovationCollection.insertMany(innovationToInsert);
                console.log("Default innovation seeded successfully")
            } catch (error) {
                console.log("Error seeding default innovation", error)
            } finally {
                await client.close()
            }
        }

        async function seedDRisk() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const driskCollection = database.collection("DRisk");

                const driskToInsert = [
                    {name: "Infrastructure not scaling with user growth"},
                    {name: "Codebase becoming unmanageable"},
                    {name: "Lack of skilled developers"},
                    {name: "Technical debt slowing down future development"}
                ];

                await driskCollection.insertMany(driskToInsert);
                console.log("Default development risk seeded successfully")
            } catch (error) {
                console.log("Error seeding default development risk", error)
            } finally {
                await client.close()
            }
        }

        async function seedSRisk() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const sriskCollection = database.collection("SRisk");

                const sriskToInsert = [
                    {name: "Market Saturation and Competition"},
                    {name: "Increasing Customer Acquisition Cost"},
                    {name: "Maintaining Product-Market Fit"},
                    {name: "Scaling Sales Operations and Processes"}                    
                ];

                await sriskCollection.insertMany(sriskToInsert);
                console.log("Default sales risk seeded successfully")
            } catch (error) {
                console.log("Error seeding default sales risk", error)
            } finally {
                await client.close()
            }
        }


        async function seedMRisk() {
            const uri = process.env.DATABASE_URL;
            const client = new MongoClient(uri);

            try {
                await client.connect();

                const database = client.db();
                const mriskCollection = database.collection("MRisk");

                const mriskToInsert = [
                    {name: "Brand Dilution"},
                    {name: "Channel Dependency"},
                    {name: "Misalignment with New Target Markets"},
                    {name: "Increasing Customer Acquisition Costs"}                    
                ];

                await mriskCollection.insertMany(mriskToInsert);
                console.log("Default marketing risk seeded successfully")
            } catch (error) {
                console.log("Error seeding default marketing risk", error)
            } finally {
                await client.close()
            }
        }

    async function seedPersonalityData() {
    const uri = process.env.DATABASE_URL;
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const database = client.db();
        const personalityCollection = database.collection("Personality");

        const personalityData = [
            {
                name: "Alex (The Savvy Strategist)",
                role: "The Savvy Strategist",
                motto: "Every challenge has a solution waiting to be found.",
                coreTraits: {
                    "Insightful and Strategic": "Always looks at the big picture and anticipates the needs and challenges a founder might face.",
                    "Encouraging but Honest": "Provides honest feedback with tact, encouraging founders to stay grounded yet motivated.",
                    "Problem Solver Mindset": "Thinks in terms of solutions, quickly offering practical options to handle tough situations."
                },
                toneExamples: {
                    "Supportive": "I’ve got your back on this. Let’s break it down together and find the most viable path forward.",
                    "Curious and Analytical": "Let’s dig into this a bit more—what’s the core challenge you’re aiming to solve for your users?",
                    "Optimistic Realism": "This approach has potential, though there’s a risk we’ll need to manage here."
                },
                sampleInteraction: {
                    founder: "I’m not sure our product will stand out in a competitive market. Any thoughts?",
                    ai_coFounder: "Competition can be daunting, but it’s also a sign you’re in a valuable space. Let’s pinpoint a unique value proposition."
                },
                summary: "Alex, The Savvy Strategist, is a thoughtful, driven partner who excels at seeing the bigger picture and mapping out actionable strategies. Known for both insight and practical problem-solving, Alex combines sharp analysis with a supportive, honest approach that encourages founders to stay focused and motivated. This personality thrives in challenging situations, offering a calm, solution-oriented perspective that simplifies complex problems and highlights opportunities for growth.",
                imageUrl: "https://res.cloudinary.com/dgfdftowm/image/upload/v1730150911/Alex_aslruf.jpg"
            },
            {
                name: "Vee (The Visionary Creator)",
                role: "The Visionary Creator",
                motto: "Innovation is just the beginning.",
                coreTraits: {
                    "Imaginative and Inspirational": "Sparks out-of-the-box thinking, motivating founders to unlock their creative potential.",
                    "Empathetic": "Understands the highs and lows of the entrepreneurial journey, offering a compassionate perspective.", 
                    "Motivational": "Acts as a morale booster, helping founders regain confidence when they’re feeling discouraged."
                },
                toneExamples: {
                    "Inspirational": "Every great idea starts with a spark of creativity. Let’s nurture that flame and turn your vision into reality.",
                    "Visionary": "What if we think beyond the current market? Let’s explore ideas that could revolutionize the industry!",
                    "Compassionate": "It’s okay to feel overwhelmed. Remember, every step you take brings you closer to your dream."
                },
                sampleInteraction: {
                    founder: "I’m feeling stuck and uninspired.",
                    ai_coFounder: "That's the spirit! Let's outline what truly makes it stand apart from others."
                },
                summary: "Vee is an inspiring and imaginative co-founder with a strong focus on creativity, innovation, and emotional support. As The Visionary Creator, Vee encourages founders to embrace big ideas and explore transformative concepts that push industry boundaries. Known for empathy and motivational insight, Vee provides uplifting guidance, especially when challenges seem daunting.",
                imageUrl: "https://res.cloudinary.com/dgfdftowm/image/upload/v1730174731/Vee_gva9xa.jpg"
            },
            {
                name: "Riley (The Pragmatic Realist)",
                role: "The Pragmatic Realist",
                motto: "Keep it real and keep moving forward.",
                coreTraits: {
                    "Realistic and Grounded": "Riley keeps the focus on practical, achievable goals, helping founders remain centered on what’s possible.", 
                    "Data-Driven": "Guided by metrics and evidence, Riley ensures that decisions are informed by real insights, minimizing risks.", 
                    "Supportive Coach": "A supportive yet candid advisor, Riley is committed to guiding founders through tough calls without glossing over challenges."
                },
                toneExamples: {
                    "Straightforward": "Let’s assess the risks here. Data shows that this approach has a 60% success rate—are you comfortable with that?",
                    "Pragmatic": "While it’s great to dream big, we should also have a solid plan for execution. What’s our first step?",
                    "Honest Feedback": "I appreciate your enthusiasm, but let’s consider the resources we have available."
                },
                sampleInteraction: {
                    founder: "I want to launch this feature immediately!",
                    ai_coFounder: "I admire your enthusiasm! Let’s map out a timeline and see if we can realistically achieve that launch in the next month."
                },
                summary: "Riley, The Pragmatic Realist, is a grounded, no-nonsense co-founder who values data and practical, achievable goals. With a realistic approach, Riley focuses on helping founders make informed decisions based on empirical evidence and available resources. Known for straightforward advice, Riley provides honest, constructive guidance to keep projects on track and within reach, ensuring that ambitions are matched with actionable, sustainable plans.",
                imageUrl: "https://res.cloudinary.com/dgfdftowm/image/upload/v1730174718/Riley_uzmwh0.jpg"
            }
        ];

        await personalityCollection.insertMany(personalityData);
        console.log("Personality data seeded successfully");
    } catch (error) {
        console.log("Error seeding personality data:", error);
    } finally {
        await client.close();
    }
}

// async function seedProfile() {
//     const uri = process.env.DATABASE_URL;
//     const client = new MongoClient(uri);

//     try {
//         await client.connect();

//         const database = client.db();
//         const profileCollection = database.collection("Profile");

//         const profileToInsert = [{
//             name: "Ioma",
//             description: "This is a test profile of a ride sharing app that allows riders share ride.",
//             userId: "user_2oB5ZjxDpxtx74hBoUkyKF0hO1J",
//             experienceId: new ObjectId("670c7b6580df11ca6018da22"),
//             ownershipId: new ObjectId("670c7b6580df11ca6018da14"),
//             expertiseId: new ObjectId("670c7b6580df11ca6018da0f"),
//             stageId: new ObjectId("670c7b6580df11ca6018da25"),
//             revenueId: new ObjectId("670c7b6580df11ca6018da19"),
//             networkId: new ObjectId("670c7b6580df11ca6018da03"),
//             industryId: new ObjectId("670c7b6580df11ca6018da4f"),
//             sizeId: new ObjectId("670c7b6580df11ca6018da0b"),
//             productId: new ObjectId("670c7b6580df11ca6018da55"),
//             decisionId: new ObjectId("670ced655278e20317d61444"),
//             targetId: new ObjectId("670ced655278e20317d61448"),
//             memberId: new ObjectId("67117dd2b8c8f55a607a00e1"),
//             schallengeId: new ObjectId("67197179a861a31ec635cee4"),
//             sstrategyId: new ObjectId("67197179a861a31ec635cede"),
//             leadId: new ObjectId("67197179a861a31ec635cee9"),
//             mchannelId: new ObjectId("671a29fef3a6cf4b17f79dbe"),
//             uspId: new ObjectId("671a29fef3a6cf4b17f79db6"),
//             mchallengeId: new ObjectId("671a29fef3a6cf4b17f79dbc"),
//             mgoalId: new ObjectId("671a29fef3a6cf4b17f79dc8"),
//             sgoalId: new ObjectId("671a29fef3a6cf4b17f79dc3"),
//             dchallengeId: new ObjectId("671f89b5c07437211d172fd6"),
//             featureId: new ObjectId("671f89b5c07437211d172fde"),
//             updateId: new ObjectId("671fa287872e86020489180e"),
//             innovationId: new ObjectId("671f89b5c07437211d172fc7"),
//             driskId: new ObjectId("671f89b5c07437211d172fe5"),
//             mriskId: new ObjectId("671f89b5c07437211d172fd6"),
//             sriskId: new ObjectId("671f89b5c07437211d172fd6"),
//             personalityId: new ObjectId("6720d7008c1d44a964fc076a")
//         }];

//         await profileCollection.insertMany(profileToInsert);
//         console.log("Default profile seeded successfully");
//     } catch (error) {
//         console.log("Error seeding default profile", error);
//     } finally {
//         await client.close();
//     }
// }

// const profileData = {
//     name: "Test Profile",
//     description: "This is a test profile.",
//     userId: "user_2oB5ZjxDpxtx74hBoUkyKF0hO1J", // Ensure this user exists
//     experienceId: "670c7b6580df11ca6018da22", // Ensure this ID exists
//     ownershipId: "670c7b6580df11ca6018da14", // Ensure this ID exists
//     expertiseId: "670c7b6580df11ca6018da0f", // Ensure this ID exists
//     stageId: "670c7b6580df11ca6018da25", // Ensure this ID exists
//     revenueId: "670c7b6580df11ca6018da19", // Ensure this ID exists
//     networkId: "670c7b6580df11ca6018da03", // Ensure this ID exists
//     industryId: "670c7b6580df11ca6018da4f", // Ensure this ID exists
//     sizeId: "670c7b6580df11ca6018da0b", // Ensure this ID exists
//     productId: "670c7b6580df11ca6018da55", // Ensure this ID exists
//     decisionId: "670ced655278e20317d61444", // Ensure this ID exists
//     targetId: "670ced655278e20317d61448", // Ensure this ID exists
//     memberId: "67117dd2b8c8f55a607a00e1", // Ensure this ID exists
//     schallengeId: "67197179a861a31ec635cee4", // Ensure this ID exists
//     sstrategyId: "67197179a861a31ec635cede", // Ensure this ID exists
//     leadId: "67197179a861a31ec635cee9", // Ensure this ID exists
//     mchannelId: "671a29fef3a6cf4b17f79dbe", // Ensure this ID exists
//     uspId: "671a29fef3a6cf4b17f79db6", // Ensure this ID exists
//     mchallengeId: "671a29fef3a6cf4b17f79dbc", // Ensure this ID exists
//     mgoalId: "671a29fef3a6cf4b17f79dc8", // Ensure this ID exists
//     sgoalId: "671a29fef3a6cf4b17f79dc3", // Ensure this ID exists
//     dchallengeId: "671f89b5c07437211d172fd6", // Ensure this ID exists
//     featureId: "671f89b5c07437211d172fde", // Ensure this ID exists
//     updateId: "671fa287872e86020489180e", // Ensure this ID exists
//     innovationId: "671f89b5c07437211d172fc7", // Ensure this ID exists
//     driskId: "671f89b5c07437211d172fe5", // Ensure this ID exists
//     mriskId: "671f89b5c07437211d172fd6", // Ensure this ID exists
//     sriskId: "671f89b5c07437211d172fd6", // Ensure this ID exists
//     personalityId: "6720d7008c1d44a964fc076a", // Ensure this ID exists
//   };

// seedOwnership();
// seedExperience();
// seedExpertise();
// seedStage();
// seedSize();
// seedRevenue();
// seedNetwork();
// seedProduct();
// seedIndustry();
// seedTarget();
// seedMember();
// seedDecision();
// seedSChallenge();
// seedSStrategy();
// seedLead();
// seedUsp();
// seedMChannel();
// seedMChallenge();
// seedMGoal();
// seedSGoal();
// seedSRisk();
// seedMRisk();
// seedDChallenge();
// seedFeature();
// seedUpdate();
seedPersonalityData();
// seedInnovation();
// seedDRisk();
// seedProfile();