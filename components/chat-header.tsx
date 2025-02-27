"use client"

import { Personality, Message } from "@prisma/client";
import { 
    ChevronLeft,
    MessagesSquare,
 } from "lucide-react";
import { useRouter } from "next/navigation";
import { BotAvatar } from "@/components/bot-avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";

interface ChatHeaderProps {
    personality: Personality & {
        messages: Message[];
        _count: {
            messages: number;
        }
    }
}

export const ChatHeader = ({personality}: ChatHeaderProps) => {
    const router = useRouter();

    return (
        <div className="flex w-full items-center justify-between border-b border-primary/10 pb-4 px-4 h-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex gap-x-3 items-center pt-4">
                <SidebarTrigger className="h-8 w-8"/>
               <Button onClick={() => router.back()} size="icon" variant="ghost" className="hover:bg-primary/5">
                <ChevronLeft className="h-8 w-8"/>
                </Button> 

                <BotAvatar src={personality.imageUrl ?? ""} size={14} className="shadow-sm"/>

                <div className="flex flex-col gap-y-0.5">
                <div className="flex items-center gap-x-2">
                    <p className="font-semibold text-lg">{personality.name}</p>
                    <div className="flex items-center text-xs text-muted-foreground bg-primary/5 px-2 py-1 rounded-md">
                        <MessagesSquare className="w-3 h-3 mr-1"/>
                        {personality._count.messages}
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}