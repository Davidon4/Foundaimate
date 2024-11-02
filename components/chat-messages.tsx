"use client";

import {ElementRef, useEffect, useRef, useState} from "react";
import { Personality } from "@prisma/client";
import { ChatMessage, ChatMessageProps } from "@/components/chat-message";

interface ChatMessagesProps {
    messages: ChatMessageProps[];  
    isLoading: boolean;
    personality: Personality;
}

export const ChatMessages = ({messages = [], isLoading, personality}: ChatMessagesProps) => {
    const scrollRef = useRef<ElementRef<"div">>(null);
    const [fakeLoading, setFakeLoading] = useState(
        messages.length === 0 ? true : false
    );

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFakeLoading(false)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    useEffect(() => {
        scrollRef?.current?.scrollIntoView({behavior: "smooth"});
    }, [messages.length]);

    return (
    <div className="flex-1 overflow-y-auto px-4 no-scrollbar">
      {/* <ChatMessage
      isLoading={fakeLoading}
      imageUrl={personality.imageUrl}
      role="system"
      content={`Hi, How can I help you today?`}
      personalityName={personality.name}
      />  */}
        {messages.map((message) => (
        <ChatMessage
          key={message.content}
          imageUrl={personality.imageUrl}
          role={message.role}
          content={message.content}
          personalityName={personality.name}
        />
      ))} 
      {isLoading && (
      <ChatMessage 
      role="system" 
      imageUrl={personality.imageUrl} 
      isLoading
      personalityName={personality.name}
      />
      )}
      <div ref={scrollRef}/>
    </div>
    )
}