import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { completeOnboarding } from "@/app/welcome/_actions";
import { Personality } from "@prisma/client";

interface PersonalityProps {
    initialData: {
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
    };
    onDataUpdate: (data: any) => void;
    personalities: Personality[];
}

export default function Avatar({initialData, onDataUpdate, personalities}: PersonalityProps) {
  console.log("PERSONALITIES DATA:", personalities);
  const router = useRouter();
  const [error, setError] = React.useState('');

  const handlePersonalitySelect = async (personalityId: string) => {
    try {
      // Combine initialData with selected personality
      const finalData = {
        ...initialData,
        personalityId
      };

      const formData = new FormData();
      Object.entries(finalData).forEach(([key, value]) => {
        formData.append(key, value);
      })

      // Update parent component with final data
      onDataUpdate(formData);

      // Submit all data to complete onboarding
      const response = await completeOnboarding(formData);
      
      if (response?.error) {
        setError(response.error);
        return;
      }

      // Redirect to dashboard after successful completion
      router.push('/home');
    } catch (error) {
      console.error("Error completing onboarding:", error);
      setError("An error occurred while completing the onboarding process.");
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
  {personality.coreTraits
    ? Object.entries(personality.coreTraits).map(([trait, description]) => (
        <div key={trait} className="mb-2">
          <span className="font-semibold">{trait}:</span> {description}
        </div>
      ))
    : <p>No core traits available</p>}
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