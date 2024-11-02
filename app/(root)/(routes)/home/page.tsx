import prismadb from "@/lib/prismadb";
import React from "react";
import {auth} from "@clerk/nextjs/server";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HomePage = async () => { 
    const {userId} = auth();

    if (!userId) {
        return (
            <div className="h-full flex items-center justify-center">
                <p className="text-gray-800 font-medium text-lg">Please sign in to continue.</p>
            </div>
        );
    }

    const profile = await prismadb.profile.findFirst({
        where: {
            userId: userId.toString()
        },
        include: {
            personality: true,
        }
    });

    if(!profile) {
        return (
            <div className="h-full flex items-center justify-center">
                <p className="text-gray-800 font-medium text-lg">No profile found. Please create one first.</p>
            </div>  
        )
    }

    const personality = profile.personality;

    return ( 
        <div className="h-full p-4 space-y-6 max-w-4xl mx-auto relative">
                        {/* Fixed Chat Button */}
                <div className="fixed bottom-8 right-8 z-50">
                <Button 
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-6 shadow-lg flex items-center gap-2 text-lg font-semibold transition-all hover:scale-105"
                    asChild
                >
                    <Link href={`/chat/${personality.id}`}>
                        <MessageCircle className="w-6 h-6" />
                        <span>Chat Now</span>
                    </Link>
                </Button>
            </div>

            {/* Header with Avatar and Chat Button */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-6">
                {personality.imageUrl && (
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-primary/10">
                        <Image 
                            src={personality.imageUrl}
                            alt={personality.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{personality.name}</h1>
                    <p className="text-xl font-medium text-gray-700">{personality.role}</p>
                </div>
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Motto Card */}
                <Card className="p-8 shadow-lg col-span-full bg-primary/5 border-2 border-primary/20">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Motto</h2>
                        <p className="text-xl italic text-gray-800 font-medium">"{personality.motto}"</p>
                    </div>
                </Card>

                {/* Core Traits */}
                <Card className="p-8 shadow-lg border-2">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Core Traits</h2>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                        {Object.entries(personality.coreTraits as Record<string, string>).map(([trait, description]) => (
                            <div key={trait} className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{trait}</h3>
                                <p className="text-base text-gray-700 leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Tone Examples */}
                <Card className="p-8 shadow-lg border-2">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Communication Style</h2>
                    <Separator className="my-4" />
                    <div className="space-y-4">
                        {Object.entries(personality.toneExamples as Record<string, string>).map(([situation, example]) => (
                            <div key={situation} className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{situation}</h3>
                                <p className="text-base text-gray-700 italic leading-relaxed">"{example}"</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Sample Interaction */}
                <Card className="p-8 shadow-lg col-span-full border-2">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Sample Interaction</h2>
                    <Separator className="my-4" />
                    <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
                        {Object.entries(personality.sampleInteraction as Record<string, string>).map(([speaker, text]) => (
                            <div key={speaker} className="flex gap-4">
                                <span className="font-bold text-gray-900 min-w-[100px]">{speaker}:</span>
                                <p className="text-gray-700 leading-relaxed flex-1">{text}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Summary */}
                <Card className="p-8 shadow-lg col-span-full border-2">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">Personality Summary</h2>
                    <Separator className="my-4" />
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {personality.summary}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
 
export default HomePage;