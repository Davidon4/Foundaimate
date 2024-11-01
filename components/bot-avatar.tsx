import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
    src: string;
    size?: number;
    className?: string;
}

export const BotAvatar = ({src, size, className}: BotAvatarProps) => {
    return (
        <Avatar
        className={
            size ? `h-${size} w-${size}` : 'h-6 w-6 sm:h-8 md:h-10 md:w-10'
        }
        >
            <AvatarImage src={src}/>
        </Avatar>
    )
}