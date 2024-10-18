require("dotenv").config();
const {MongoClient} = require("mongodb");

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

seedOwnership();
seedExperience();
seedExpertise();
seedStage();
seedSize();
seedRevenue();
seedNetwork();
seedProduct()
seedIndustry();
seedTarget();
seedMember();
seedDecision();