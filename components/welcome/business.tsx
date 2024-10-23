import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { motion } from "framer-motion";
import * as z from "zod";
import { 
  Industry, 
  Stage, 
  Size, 
  Network } from "@prisma/client";
import { 
  Form,
  FormControl,
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

interface BusinessFormProps {
  industries: Industry[];
  stages: Stage[];
  sizes: Size[];
  networks: Network[];
}

const formSchema = z.object({
  name: z.string().min(1, {
      message: "Business name is required."
  }),
  description: z.string().min(20, {
      message: "Business description is required"
  }),
  stageId: z.string().min(1, {
      message: "Business stage is required"
  }),
  sizeId: z.string().min(1, {
      message: "Business size must be at least 1."
  }),
  industryId: z.string().min(1, {
      message: "Business industry is required"
  }),
  networkId: z.string().min(1, {
      message: "Network is required"
  })
  })

export default function Business({industries, stages, sizes, networks}: BusinessFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = React.useState('');
  const experienceId = searchParams.get('experienceId');
  const ownershipId = searchParams.get('ownershipId');
  const memberId = searchParams.get('memberId');
  const expertiseId = searchParams.get('expertiseId');
  const decisionId = searchParams.get('decisionId');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name: "",
    description: "",
    stageId: undefined,
    sizeId: undefined,
    industryId: undefined,
    networkId: undefined,
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const allData = {
        ...values,
        experienceId,
        ownershipId,
        memberId,
        expertiseId,
        decisionId
      };

      const queryParams = new URLSearchParams(allData as Record<string, string>).toString();

      // Navigate to the Sales page with all the data
      router.push(`/onboarding/sales?${queryParams}`);
      // const res = await 
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
          Business Profile
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
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What is your business name?</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder=""
                      {...field}
                      className="w-full bg-white"
                    /> 
                  </FormControl>
                </FormItem>
              )}
            />
              <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">Describe what your company does in 50 characters or less.</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isLoading}
                      placeholder=""
                      {...field}
                      className="w-full bg-white p-2 border rounded-lg resize-vertical"
                      rows={3}
                    /> 
                  </FormControl>
                </FormItem>
              )}
            />
              <FormField
              name="industryId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What industry does your startup operate in?</FormLabel>
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
                    placeholder="Select an industry"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry.id} value={industry.id}>
                        {industry.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="stageId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What stage is your business in?</FormLabel>
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
                    placeholder="Select a stage"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {stages.map((stage) => (
                      <SelectItem key={stage.id} value={stage.id}>
                        {stage.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="sizeId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">How large is your current team?</FormLabel>
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
                    placeholder="Select a size"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size.id} value={size.id}>
                        {size.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            /> 
             <FormField
              name="networkId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">Which of the following networks can you leverage in your industry?</FormLabel>
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
                    placeholder="Select a Network"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {networks.map((network) => (
                      <SelectItem key={network.id} value={network.id}>
                        {network.name}
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