"use client";

import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
    size?: number;
    className?: string;
}

export const UserAvatar = ({size}: UserAvatarProps) => {
    const {user} = useUser();

    return (
        <Avatar
        className={
            size ? `h-${size} w-${size}` : 'h-6 w-6 sm:h-8 md:h-10 md:w-10'
        }
        >  
            <AvatarImage src={user?.imageUrl}/>
        </Avatar>
    )
}