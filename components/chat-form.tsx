"use client";

import {ChatRequestOptions} from "ai";
import {ChangeEvent, FormEvent} from "react";

import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

interface ChatFormProps{
    input: string;
    handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>,
        chatRequestOptions?: ChatRequestOptions | undefined
    ) => void;
    isLoading: boolean;
}

export const ChatForm = ({
    input,
    handleInputChange,
    onSubmit,
    isLoading
}: ChatFormProps) => {
    return (
        <form
        onSubmit={onSubmit}
        className="border-t border-primary/10 py-4 flex items-center gap-x-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <Input
                value={input}
                disabled={isLoading}
                onChange={handleInputChange}
                placeholder="Type a message..."
                className="rounded-full bg-primary/5 border-none focus-visible:ring-1 focus-visible:ring-offset-0"
            />
            <Button disabled={isLoading} variant="ghost" className="rounded-full h-10 w-10 p-0 hover:bg-primary/5">
                <SendHorizonal className="h-5 w-5"/>
            </Button>
        </form>
    )
}