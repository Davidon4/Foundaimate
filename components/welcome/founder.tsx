"use client";

import { useRouter } from "next/navigation";
import * as z from "zod";
import React from "react";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { useUser } from '@clerk/nextjs';
import { Button } from "../ui/button";
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
import { Experience, Ownership, Member, Expertise, Decision } from "@prisma/client";
import { Separator } from "../ui/separator";

interface FounderFormProps {
    experiences: Experience[];
    ownerships: Ownership[];
    members: Member[];
    expertises: Expertise[];
    decisions: Decision[]
}

const formSchema = z.object({
    experienceId: z.string().min(1, {
        message: "Experience level is required."
    }),
    ownershipId: z.string().min(1, {
        message: "Ownership level is required."
    }),
    memberId: z.string().min(1, {
        message: "Founding member is required."
    }),
    expertiseId: z.string().min(1, {
        message: "Expertise is required."
    }),
    decisionId: z.string().min(1, {
        message: "Business decision is required."
    })
})

export default function Founder({experiences, ownerships, members, expertises, decisions}: FounderFormProps) {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const { user } = useUser()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        experienceId: undefined,
        ownershipId: undefined,
        memberId: undefined,
        expertiseId: undefined,
        decisionId: undefined
    }
  })

  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('experienceId', values.experienceId);
      formData.append('ownershipId', values.ownershipId);
      formData.append('memberId', values.memberId);
      formData.append('expertiseId', values.expertiseId);
      formData.append('decisionId', values.decisionId);
      // const res = await completeOnboarding(formData);
      // if (res?.message) {
      //   await user?.reload();
      //   router.push('/');
      // }
      // if (res?.error) {
      //   setError(res.error);
      // }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred while submitting the form.");
    }
  };

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
          Founder Profile
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        // className="grid w-full grid-cols-1 divide-y divide-border rounded-md border border-border text-foreground md:grid-cols-2 md:divide-x"
      >
        <Form {...form}>
        <form
        onSubmit={() => console.log("NEXT")}
        className="space-y-8 pb-10"
            >
        <div className="gap-2">
            <FormField
              name="experienceId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What is your level of experience as a founder?</FormLabel>
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
              <FormField
              name="ownershipId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">Can you describe your ownership in the business?</FormLabel>
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
            />
              <FormField
              name="memberId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">How many founding members does your company have?</FormLabel>
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
            />
            <FormField
              name="expertiseId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What are your core skills or expertise?</FormLabel>
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
            />
              <FormField
              name="decisionId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">How do you approach major business decisions?</FormLabel>
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
            />
        <motion.div
          variants={STAGGER_CHILD_VARIANTS}
          className="flex justify-center mt-8"
          >
            <Button
            className="py-5 px-10 text-base bg-tealCustom font-medium mt-5 hover:bg-teal-700 rounded transition-colors"
            onClick={() =>
              router.push("/welcome?type=business")
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


