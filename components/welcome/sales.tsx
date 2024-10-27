import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { motion } from "framer-motion";
import * as z from "zod";
import { 
  Revenue,
  Lead,
  SChallenge,
  SStrategy,
  SGoal,
  SRisk
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

interface SalesFormProps {
  revenues: Revenue[];
  leads: Lead[];
  schallenges: SChallenge[];
  sstrategies: SStrategy[];
  sgoals: SGoal[];
  srisks: SRisk[];
}

const formSchema = z.object({
  revenueId: z.string().min(1, {
      message: "Revenue model is required"
  }),
  leadId: z.string().min(1, {
      message: "Lead mode is required"
  }),
  schallengeId: z.string().min(1, {
      message: "Sales challenge is required"
  }),
  sstrategyId: z.string().min(1, {
      message: "Sales strategy is required"
  }),
  sgoalId: z.string().min(1, {
      message: "Sales goal is required"
  }),
  sriskId: z.string().min(1, {
      message: "Sales risk is required"
  }),
  })

export default function Sales({ revenues, leads, schallenges, sstrategies, sgoals, srisks}: SalesFormProps) {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const searchParams = useSearchParams();

  const businessData = {
    name: searchParams.get('name'),
    description: searchParams.get('description'),
    stageId: searchParams.get('stageId'),
    sizeId: searchParams.get('sizeId'),
    industryId: searchParams.get('industryId'),
    networkId: searchParams.get('networkId'),
    experienceId: searchParams.get('experienceId'),
    ownershipId: searchParams.get('ownershipId'),
    memberId: searchParams.get('memberId'),
    expertiseId: searchParams.get('expertiseId'),
    decisionId: searchParams.get('decisionId')
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    revenueId: undefined,
    leadId: undefined,
    schallengeId: undefined,
    sstrategyId: undefined,
    sgoalId: undefined,
    sriskId: undefined
    }
  })

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const allData = {
        ...businessData,
        ...values
      }
      console.log("SALES_DATA=>", allData);
      const queryParams = new URLSearchParams(allData as Record<string, string>).toString();

      router.push(`/welcome?type=marketing&${queryParams}`);
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
        <h1 className="font-display max-w-md text-3xl font-semibold transition-colors sm:text-4xl">
          Sales Strategy
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
      >
        <Form {...form}>
        <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 pb-10"
            >
        <div className="gap-2">
        <FormField
              name="revenueId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What is your business revenue model?</FormLabel>
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
                    placeholder="Select a revenue"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {revenues.map((revenue) => (
                      <SelectItem key={revenue.id} value={revenue.id}>
                        {revenue.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="leadId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What is your most effective method for generating leads and filling your sales pipeline?</FormLabel>
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
                    placeholder="Select lead generation"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {leads.map((lead) => (
                      <SelectItem key={lead.id} value={lead.id}>
                        {lead.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="sstrategyId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What is your current sales strategy?</FormLabel>
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
                    placeholder="Select sales strategy"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sstrategies.map((sstrategy) => (
                      <SelectItem key={sstrategy.id} value={sstrategy.id}>
                        {sstrategy.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="schallengeId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What is your main sales challenge right now?</FormLabel>
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
                    placeholder="Select sales challenge"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {schallenges.map((schallenge) => (
                      <SelectItem key={schallenge.id} value={schallenge.id}>
                        {schallenge.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="sriskId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What's the biggest sales risk you foresee in scaling your startup?</FormLabel>
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
                    placeholder="Select sales risk"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {srisks.map((srisk) => (
                      <SelectItem key={srisk.id} value={srisk.id}>
                        {srisk.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="sgoalId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What are your main sales goals for the next 6–12 months?</FormLabel>
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
                    placeholder="Select sales challenge"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sgoals.map((sgoal) => (
                      <SelectItem key={sgoal.id} value={sgoal.id}>
                        {sgoal.name}
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
            type="submit"
            className="py-5 px-10 text-base bg-tealCustom font-medium mt-5 hover:bg-teal-700 rounded transition-colors">
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