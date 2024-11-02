import dotenv from "dotenv";
import { StreamingTextResponse, LangChainStream } from "ai";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Replicate } from "@langchain/community/llms/replicate";
import { CallbackManager } from "@langchain/core/callbacks/manager";
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
    const chatHistory = await memoryManager.readLatestHistory(personalityKey);
    
    // Perform vector search
    const vectorResults = await memoryManager.vectorSearch(
      content,
      personalityName
    );

    // Set up streaming
    const { stream, handlers } = LangChainStream();

    // Replace Replicate model with OpenAI GPT-4
    const model = new ChatOpenAI({
        modelName: "gpt-4-turbo-preview",  // or "gpt-4" depending on your needs
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

    // Generate response
     await model.invoke([
        {
        role: "system",
        content: `You are ${personalityName}, an AI co-founder specializing in ${personality.role}. 
        
        YOUR CORE PERSONALITY:
        ${personality.summary}
        "${personality.motto}"

        YOUR COMMUNICATION RULES:
        1. ALWAYS respond as ${personalityName}, maintaining a consistent personality
        2. Use the communication style defined in your personality traits
        3. Keep responses focused, practical, and actionable
        4. Reference specific details about the user's business when giving advice
        5. Acknowledge and address the user's current business challenges
        
        ABOUT THE BUSINESS YOU'RE ADVISING:
        Business: ${userProfile.name} - ${userProfile.description}
        Stage: ${userProfile.stage}
        Industry: ${userProfile.industry}
        Current Challenges: 
        - Sales: ${userProfile.schallenge}
        - Marketing: ${userProfile.mchallenge}
        
        CONVERSATION CONTEXT:
        Previous messages: ${chatHistory}
        Relevant context: ${vectorResults}

        Remember: Every response should be practical, specific to their business context, and align with your personality traits.`
        },
        ...messages.map(msg => ({
            role: msg.role === "user" ? "user" : "assistant",
            content: msg.content
        })),
        {
            role: "user",
            content: content
        }
    ]);

    // Save message to history
    await memoryManager.writeToHistory(content, personalityKey);

    return new StreamingTextResponse(stream);
    
  } catch (error) {
    console.log('[CHAT_POST]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}