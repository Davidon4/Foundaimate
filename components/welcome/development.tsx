import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

import { motion } from "framer-motion";
import * as z from "zod";
import { 
  Product,
  DChallenge,
  Update,
  DRisk,
  Feature, 
  Innovation
} from "@prisma/client";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { 
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem 
} from "../ui/select";
import { useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface DevelopmentFormProps {
  products: Product[];
  dchallenges: DChallenge[];
  features: Feature[];
  updates: Update[];
  drisks: DRisk[];
  innovations: Innovation[];
}

const formSchema = z.object({
  productId: z.string().min(1, {
      message: "Product stage is required"
  }),
  dchallengeId: z.string().min(1, {
      message: "Development challenge is required"
  }),
  updateId: z.string().min(1, {
      message: "Update is required"
  }),
  driskId: z.string().min(1, {
      message: "Devlopment risk is required"
  }),
  featureId: z.string().min(1, {
      message: "Feature is required"
  }),
  innovationId: z.string().min(1, {
      message: "Innovation is required"
  })
  })

export default function Development({products, dchallenges, updates, drisks, innovations, features, initialData, onDataUpdate}: DevelopmentFormProps & {
  initialData: any,
  onDataUpdate: (data: any) => void;
}) {
  const router = useRouter();
  const [error, setError] = React.useState('');
  const searchParams = useSearchParams();
  const { user } = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    productId: initialData.productId || undefined,
    updateId: initialData.updateId || undefined,
    dchallengeId: initialData.dchallengeId || undefined,
    driskId: initialData.driskId || undefined,
    featureId: initialData.featureId || undefined,
    innovationId: initialData.innovationId || undefined
    }
  })

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      onDataUpdate(values)
      const queryParams = new URLSearchParams({
        ...initialData,
        ...values
      } as Record<string, string>).toString();
      router.push(`/welcome?type=avatar&${queryParams}`);
  } catch (error) {
    console.error("Error submitting form:", error);
    setError("An error occurred while submitting the form.");
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
          Development Strategy
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
              name="productId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What stage is your product in?</FormLabel>
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
                    placeholder="Select a product"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product.id} value={product.id}>
                        {product.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="dchallengeId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What are the biggest development challenges your team is facing?</FormLabel>
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
                    placeholder="Select challenge"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {dchallenges.map((dchallenge) => (
                      <SelectItem key={dchallenge.id} value={dchallenge.id}>
                        {dchallenge.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="updateId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">How do you handle updates and deployements?</FormLabel>
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
                    placeholder="Select update"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {updates.map((update) => (
                      <SelectItem key={update.id} value={update.id}>
                        {update.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="driskId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What's the biggest technical risk you foresee in scaling your startup?</FormLabel>
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
                    placeholder="Select development risk"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {drisks.map((drisk) => (
                      <SelectItem key={drisk.id} value={drisk.id}>
                        {drisk.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="featureId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">How do you priotize new features and product updates?</FormLabel>
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
                    placeholder="Select Feature"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {features.map((feature) => (
                      <SelectItem key={feature.id} value={feature.id}>
                        {feature.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
        <FormField
              name="innovationId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-full">
                  <FormLabel className="font-bold text-base">What's your approach to technical innovation within your product?</FormLabel>
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
                    placeholder="Select Approach to Innovation"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {innovations.map((innovation) => (
                      <SelectItem key={innovation.id} value={innovation.id}>
                        {innovation.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          <motion.div
          variants={STAGGER_CHILD_VARIANTS}
          className="flex items-center justify-center mt-8"
          >
            <Button
            type="submit"
            className="py-5 px-10 text-base bg-tealCustom font-medium mt-5 hover:bg-teal-700 rounded transition-colors"
              >
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