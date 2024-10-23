import { useRouter } from "next/navigation";
import React from "react";

import { motion } from "framer-motion";
import * as z from "zod";
import {  
  Target
 } from "@prisma/client";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { 
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem 
} from "../ui/select";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface MarketingFormProps {
  targets: Target[];
}

const formSchema = z.object({
  targetId: z.string().min(1, {
      message: "Target customer is required"
  })
  })

export default function Marketing({targets}: MarketingFormProps) {
  const router = useRouter();
  const [error, setError] = React.useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    targetId: undefined
    }
  })

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('targetId', values.targetId);
  } catch (err) {
    console.log("Error message")
  }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 scrollbar-hide">
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
        {/* <p className="text-2xl font-bold tracking-tighter text-foreground">
          Foundaimate
        </p> */}
        <h1 className="font-display max-w-md text-3xl font-semibold transition-colors sm:text-4xl">
          Marketing Strategy
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        // className="grid w-full grid-cols-1 divide-y divide-border rounded-md border border-border text-foreground md:grid-cols-2 md:divide-x"
      >
        <Form {...form}>
        <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 pb-10"
            >
        <div className="gap-2">
        <FormField
              name="targetId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel>Who are your target customers?</FormLabel>
                  <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                  >
                  <FormControl>
                    <SelectTrigger className="bg-background">
                    <SelectValue
                    defaultValue={field.value}
                    placeholder="Select a target"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {targets.map((target) => (
                      <SelectItem key={target.id} value={target.id}>
                        {target.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          <motion.div
          variants={STAGGER_CHILD_VARIANTS}
          className="flex justify-center mt-8"
          >
            <Button
            className="py-5 px-10 text-base bg-tealCustom font-medium mt-5 hover:bg-teal-700 rounded transition-colors"
            onClick={() =>
              router.push("/welcome?type=development")
            }  >
            {isLoading ? "Submitting..." : "Next"}
            </Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            </motion.div>
            </div>
            </form>
            </Form>
            </motion.div>
            </motion.div>
            </div>
  );
}