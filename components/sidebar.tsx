"use client";
import { cn } from "@/lib/utils";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {useEffect, useState} from "react";

export const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [profileId, setProfileId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfileId = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/profile');
                const data = await response.json();
                if (data.profile?.id) {
                    setProfileId(data.profile.id);
                }
            } catch (error) {
                console.error("Error fetching profile=>", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProfileId();
    }, []);

    const routes = [
        {
            icon: Home,
            href: "/home",
            label: "Home",
            pro: false
        },
        {
            icon: Plus,
            href: `/profile/${profileId}`,
            label: "Edit Profile",
            pro: true
        },
        {
            icon: Settings,
            href: "/settings",
            label: "Settings", 
            pro: false
        }
    ];

    const onNavigate = (url: string, pro: boolean, index: number) => {
            router.push(url);
    };

    return (
        <div className="space-y-4 flex-col h-full text-primary bg-secondary">
            <div className="g-3 flex flex-1 justify-center">
                <div className="space-y-2">  
                    {routes.map((route, index) => (
                        <div
                            onClick={() => onNavigate(route.href, route.pro, index)}
                            key={route.href}
                            className={cn(
                                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                                pathname === route.href && "bg-primary/10 text-primary",
                            )}
                        >
                            <div className="flex flex-col gap-y-2 items-center flex-1">
                                <route.icon className="h-5 w-5"/> 
                                {route.label}
                            </div>  
                        </div>
                    ))}
                </div>  
            </div>
        </div>
    );
};