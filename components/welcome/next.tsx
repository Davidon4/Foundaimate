"use client";

import { useRouter } from "next/navigation";
import * as z from "zod";
import React from "react";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileIcon, ServerIcon } from "lucide-react";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { useUser } from '@clerk/nextjs';
import { completeOnboarding } from "@/app/welcome/_actions";
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
import { Experience } from "@prisma/client";

import { Separator } from "../ui/separator";

interface FounderFormProps {
    experiences: Experience[];
}

const formSchema = z.object({
    experienceId: z.string().min(1, {
        message: "Experience level is required."
    })
})


export default function Next({experiences}: FounderFormProps) {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const { user } = useUser()

  console.log("EXPERIENCES=>", experiences)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        experienceId: undefined
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('experienceId', values.experienceId);
      const res = await completeOnboarding(formData);
      if (res?.message) {
        await user?.reload();
        router.push('/');
      }
      if (res?.error) {
        setError(res.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
    }
  };

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
          Founder Profile
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
              name="experienceId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel>What is your level of experience as a founder?</FormLabel>
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
                    placeholder="Select your experience level"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {experiences.map((experience) => (
                      <SelectItem key={experience.id} value={experience.id}>
                        {experience.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
                          {/* <FormField
              name="ownershipId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel>Can you describe your ownership in the business?</FormLabel>
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
                    placeholder="Select your ownership stake"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ownerships.map((ownership) => (
                      <SelectItem key={ownership.id} value={ownership.id}>
                        {ownership.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}
                          {/* <FormField
              name="memberId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel>How many founding members does your company have?</FormLabel>
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
                    placeholder="Select member"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {members.map((member) => (
                      <SelectItem key={member.id} value={member.id}>
                        {member.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}
                          {/* <FormField
              name="expertiseId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel>What are your core skills or expertise?</FormLabel>
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
                    placeholder="Select expertise"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {expertises.map((expertise) => (
                      <SelectItem key={expertise.id} value={expertise.id}>
                        {expertise.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}
                          {/* <FormField
              name="decisionId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel>How do you approach major business decisions?</FormLabel>
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
                    placeholder="Select a decision"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {decisions.map((decision) => (
                      <SelectItem key={decision.id} value={decision.id}>
                        {decision.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> */}
            </div>
            </form>
            </Form>
      </motion.div>
    </motion.div>
  );
}


{/* <button type="submit" disabled={isLoading}>
{isLoading ? "Submitting..." : "Submit"}
</button>
{error && <p className="text-red-500">{error}</p>} */}