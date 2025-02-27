import React from "react";
import Image from "next/image";
import { useUser} from '@clerk/nextjs'
import { motion } from "framer-motion";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { completeOnboarding } from "@/app/welcome/_actions";
import { Personality } from "@prisma/client";
import { useToast } from "@/hooks/use-toast";

export interface ProfileData {
        experienceId: string;
        ownershipId: string;
        memberId: string;
        expertiseId: string;
        decisionId: string;
        name: string;
        description: string;
        stageId: string;
        sizeId: string;
        industryId: string;
        networkId: string;
        revenueId: string;
        productId: string;
        targetId: string;
        schallengeId: string;
        leadId: string;
        sstrategyId: string;
        uspId: string;
        mchannelId: string;
        mchallengeId: string;
        mgoalId: string;
        sgoalId: string;
        featureId: string;
        updateId: string;
        dchallengeId: string;
        innovationId: string;
        driskId: string;
        mriskId: string;
        sriskId: string;
        userId: string;
    };

interface PersonalityProps {
  initialData: ProfileData;
  personalities: Personality[];
  onDataUpdate: (data: ProfileData) => void;
}

export default function Avatar({initialData, personalities}: PersonalityProps) {
  const { user, isLoaded } = useUser();
  const {toast} = useToast();
  const [error, setError] = React.useState('');

  if (!isLoaded || !user) {
    return null;
  }

  const handlePersonalitySelect = async (personalityId: string) => {
    setError('');
    
    try {
      const profileData = {
        ...initialData,
        personalityId,
        userId: user.id,
      };
  
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      const responseText = await response.text();

      let data;
      try {
        data = JSON.parse(responseText);
        console.log('Parsed response data:', data);
      } catch (e) {
        console.error('Failed to parse response as JSON:', e);
        throw new Error(`Invalid JSON response: ${responseText}`);
      }

      if (!response.ok) {
        throw new Error(data.error || `Server error: ${response.status}`);
      }
  
      if (data.profile?.id) {
        const selectedPersonalityData = personalities.find(p => p.id === personalityId);
        const formData = new FormData();
        formData.append('applicationName', 'AI Personalized Co-founder');
        formData.append('applicationType', selectedPersonalityData?.name || 'default'); 

        const result = await completeOnboarding(formData);
        
        if(result.success) {
          await new Promise(resolve => setTimeout(resolve, 1500));
          window.location.replace('/home');
        } else {
          throw new Error(result.error || 'Failed to complete onboarding');
        }
      }
  
    } catch (error: Error | unknown) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred while creating the profile";
      console.error("Error in handlePersonalitySelect:", error);
      setError(errorMessage);
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
};

  return (
    <motion.div
      className="mb-8"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.3, type: "spring" }}
    >
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="flex flex-col items-center mt-10 space-y-10 text-center"
      >
        <h1 className="font-display max-w-md text-3xl font-semibold transition-colors sm:text-4xl">
          Choose Your AI Personality
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="grid w-full grid-cols-1 divide-y divide-border rounded-md border border-border text-foreground md:grid-cols-3 md:divide-x"
      >
        {personalities.map((personality) => (
          <button
            key={personality.id}
            onClick={() => handlePersonalitySelect(personality.id)}
            className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
          >
        {personality.imageUrl ? (
          <Image 
            src={personality.imageUrl} 
            className="rounded-xl object-cover" 
            width={300} 
            height={300} 
            alt={personality.name}
          />
            ) : (
              <Image 
                src="/default-image.png" 
                className="rounded-xl object-cover" 
                width={300} 
                height={300} 
                alt="Default Avatar"
              />
            )}
            <h2 className="text-2xl font-bold">
              {personality.name}
            </h2>
            <h3 className="text-2xl font-medium">Core Traits:</h3>
            <div className="text-left">
        {personality.coreTraits && typeof personality.coreTraits === 'object'
          ? Object.entries(personality.coreTraits as Record<string, string>).map(([trait, description]) => (
            <div key={trait} className="mb-2">
              <span className="font-semibold">{trait}:</span> {description}
            </div>
          ))
          : <p>No core traits available</p>}
        </div>
        <div>
          
        </div>
          </button>
        ))}
      </motion.div>
      {error && (
        <p className="mt-4 text-center text-red-500">{error}</p>
      )}
    </motion.div>
  );
}