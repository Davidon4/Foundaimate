"use client";

import {Personality, Message} from "@prisma/client";
import { useRouter } from "next/navigation";
import {useCompletion} from "ai/react";
import { FormEvent, useState } from "react";
import { ChatForm } from "@/components/chat-form";
import { ChatMessages } from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";
import { ChatHeader } from "@/components/chat-header";

interface ChatClientProps {
    personality: Personality & {
        messages: Message[];
        _count: {
            messages: number;
        }
    }
}

export const ChatClient = ({personality}: ChatClientProps) => {
    const router = useRouter();
    const [messages, setMessages] = useState<ChatMessageProps[]>([
        {
            role: "system",
            content: `Hi, How can I help you today?`,
            personalityName: personality?.name || "",
        },
        ...(personality?.messages || []).map((message: Message) => ({
            role: message.role as "system" | "user",
            content: message.content,
            personalityName: personality?.name || "",
            modelName: "gpt-4-turbo-preview"
        }))
    ]);

    const {
        input,
        isLoading,
        handleInputChange,
        handleSubmit: completion,
        setInput
    } = useCompletion({
        api: `/api/chat/${personality?.id}`,
        onResponse: (response) => {
            // Optional: Handle streaming response metadata
            if (response.status === 429) {
                console.warn("Rate limit reached");
            }
        },
        body: {
            personalityName: personality?.name,
            messages
        },
        onError: (error) => {
            console.error("Completion error:", error);
            setMessages(current => [...current, {
                role: "assistant", // Changed from "system" to "assistant"
                content: "Sorry, I encountered an error. Please try again.",
                personalityName: personality?.name || "",
            }]);
        },
        onFinish(_prompt, completion) {
         const systemMessage: ChatMessageProps = {
            role: "system",
            content: completion,
            personalityName: personality?.name || "",
         }; 
         setMessages((current) => [...current, systemMessage]);
         setInput("");
         router.refresh();
        }
    });

    if(!personality?.name) {
        console.error("Personality or personality name is missing=>", personality);
        return null;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: ChatMessageProps = {
            role: "user",
            content: input,
            personalityName: personality?.name || "",
        };
        setMessages((current) => [...current, userMessage]);

        try {
            await completion(e);
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return ( 
        <div className="flex flex-col h-full w-full max-w-6xl mx-auto">
           <ChatHeader personality={personality}/>
            <ChatMessages
            messages={messages}
            isLoading={isLoading}
            personality={personality}
            />
           <ChatForm
           isLoading={isLoading}
           input={input}
           handleInputChange={handleInputChange}
           onSubmit={handleSubmit}
           />
        </div>
     );
}