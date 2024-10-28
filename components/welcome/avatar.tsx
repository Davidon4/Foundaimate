import { useRouter } from "next/navigation";
import React from "react";

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
          What do you want to share today?
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="grid w-full grid-cols-1 divide-y divide-border rounded-md border border-border text-foreground md:grid-cols-2 md:divide-x"
      >
        <button
          onClick={() => console.log("Clicked!!")}
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <FileIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>John</p>
        </button>
        <button
          onClick={() => console.log("Gifted Clicked!!")}
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <ServerIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>Williams</p>
        </button>
      </motion.div>
    </motion.div>
  );
}
