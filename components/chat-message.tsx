"use client";

import {useTheme} from "next-themes";
import { Copy } from "lucide-react";
import {BeatLoader} from "react-spinners";

import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";

export interface ChatMessageProps {
    role: "system" | "user";
    content?: string;
    isLoading?: boolean;
    imageUrl?: string | null;
}

export const ChatMessage = ({role, content, isLoading, imageUrl}: ChatMessageProps) => {
    const {toast} = useToast();
    const {theme} = useTheme();

    const onCopy = () => {
        if(!content) {
            return
        }

        navigator.clipboard.writeText(content);
        toast({
          description: "Message copied to clipboard",
          duration: 3000,  
        })
    }
    return (
        <div 
        className={cn(
            'group flex items-start gap-x-3 py-4 w-full',
            role === "user" && "justify-end"
        )}
        >
        {role !== "user" && imageUrl && <BotAvatar src={imageUrl} size={12} className="shadow-sm"/>}
        <div className={cn(
            "rounded-2xl px-4 py-2 max-w-sm text-sm",
            role === "user" ? "bg-primary text-primary-foreground" : "bg-primary/10"
        )}>
            {isLoading ? (
                <BeatLoader size={5} color={theme === "light" ? "black" : "white"}/>
            ) : (
                content
            )}
        </div>
        {role === "user" && <UserAvatar className="shadow-sm"/>}
        {role !== "user" && !isLoading && (
            <Button 
            onClick={onCopy}
            className="opacity-0 group-hover:opacity-100 transition"
            size="icon"
            variant="ghost"
            >
                <Copy className="w-4 h-4"/>
            </Button>
        )}
        </div>
    )
}