import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { FileIcon, ServerIcon } from "lucide-react";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { completeOnboarding } from "@/app/welcome/_actions";

interface AvatarProps {
    initialData: any;
    onDataUpdate: (data: any) => void;
}

export default function Avatar({initialData, onDataUpdate}: AvatarProps) {
    const [error, setError] = React.useState('');
    // const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //     try {
    //       onDataUpdate(values)
    //       const queryParams = new URLSearchParams({
    //         ...initialData,
    //         ...values
    //       } as Record<string, string>).toString();
    //       router.push(`/welcome?type=avatar&${queryParams}`);
    //       // const res = await completeOnboarding(formData);
    //       // if (res?.message) {
    //       //   await user?.reload();
    //       //   router.push('/');
    //       // }
    //       // if (res?.error) {
    //       //   setError(res.error);
    //       // }
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //     setError("An error occurred while submitting the form.");
    //   }
    //   }
  return (
    <motion.div
      className="z-10 mx-5 flex flex-col items-center space-y-10 text-center sm:mx-auto"
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
        className="flex flex-col items-center space-y-10 text-center"
      >
        <p className="text-2xl font-bold tracking-tighter text-foreground">
          Foundaimate
        </p>
        <h1 className="font-display max-w-md text-3xl font-semibold transition-colors sm:text-4xl">
            Choose Your Co-Founder
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="grid w-full grid-cols-1 divide-y divide-border rounded-md border border-border text-foreground md:grid-cols-3 md:divide-x"
      >
        <button
          onClick={() => console.log("Clicked!!")}
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          {/* <FileIcon className="pointer-events-none h-auto w-12 sm:w-12" /> */}
          <Image src="/Alex.png" className="rounded-xl object-cover" width={300} height={300} alt="Alex"/>
          <h2 className="text-2xl font-bold">Personality: Alex (The Savvy Strategist)</h2>
          <h3 className="text-2xl font-medium">Core Traits:</h3>
          <p>
        <b>Insightful and Strategic</b>: Always looks at the big picture and anticipates the needs and challenges a founder might face.<br/>
        Encouraging but Honest: Provides honest feedback with tact, encouraging founders to stay grounded yet motivated.<br/>
        Problem-Solver Mindset: Thinks in terms of solutions, quickly offering practical options to handle tough situations.<br/>
          </p>
          <p>
Example Tone and Language:
    Supportive: “I’ve got your back on this. Let’s break it down together and find the most viable path forward.”
    Curious and Analytical: “Let’s dig into this a bit more—what’s the core challenge you’re aiming to solve for your users? Maybe we can find an angle that really sets your product apart.”
    Optimistic Realism: “This approach has potential, though there’s a risk we’ll need to manage here. Let’s weigh the upsides and work on a backup plan.”

Sample Interaction:
    Founder: “I’m not sure our product will stand out in a competitive market. Any thoughts?”
    AI Co-Founder: “Competition can be daunting, but it’s also a sign you’re in a valuable space. Let’s pinpoint a unique value proposition. What do your current users appreciate most about your solution? Let’s build on that and see where we can enhance it.”

Persona Summary:
    Name: Alex (a neutral, friendly name that feels approachable).
    Role: The Savvy Strategist
    Motto: “Every challenge has a solution waiting to be found.”
    Personality Summary: Alex is sharp and driven, with a knack for seeing patterns and spotting opportunities. They approach each problem with fresh eyes and are your partner in strategy, cheering you on while keeping things real.</p>
        </button>
        <button
          onClick={() => console.log("Gifted Clicked!!")}
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <ServerIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>Vee</p>
        </button>
        <button
          onClick={() => console.log("Gifted Clicked!!")}
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <ServerIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>Riley</p>
        </button>
      </motion.div>
    </motion.div>
  );
}
