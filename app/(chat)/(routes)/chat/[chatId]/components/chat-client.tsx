"use client";

import { Personality, Message } from "@prisma/client";
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
    const [messages, setMessages] = useState<any[]>(personality.messages);

    const {
        input,
        isLoading,
        handleInputChange,
        handleSubmit,
        setInput
    } = useCompletion({
        api: `/api/chat/${personality.id}`,
        onFinish(_prompt, completion) {
         const systemMessage: ChatMessageProps = {
            role: "system",
            content: completion
         };
         
         setMessages((current) => [...current, systemMessage]);
         setInput("");

         router.refresh();
        }
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        const userMessage: ChatMessageProps = {
            role: "user",
            content: input,
        };

        setMessages((current) => [...current, userMessage]);

        handleSubmit(e);
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
           onSubmit={onSubmit}
           />
        </div>
     );
}