"use client";
import * as z from "zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Wand2 } from "lucide-react";
import { Loader2 } from "lucide-react";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";
import { 
  Decision,
  Experience,
  Expertise,
  Industry,
  Member,
  Network,
  Ownership,
  Product,
  Profile,
  Revenue,
  Size,
  Stage,
  Target, 
  Lead,
  SChallenge,
  SStrategy,
  SGoal,
  Usp,
  MChannel,
  MChallenge,
  MGoal,
  MRisk,
  SRisk,
  DRisk,
  DChallenge,
  Update,
  Feature,
  Innovation
} from "@prisma/client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
    SelectItem 
    } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface ProfileFormProps {
    initialData: Profile | null;
    experiences : Experience[];
    ownerships: Ownership[];
    expertises: Expertise[];
    networks: Network[];
    revenues: Revenue[];
    stages: Stage[];
    sizes: Size[];
    industries: Industry[];
    products: Product[];
    decisions: Decision[];
    targets: Target[];
    members: Member[];
    leads: Lead[];
    schallenges: SChallenge[];
    sstrategies: SStrategy[];
    sgoals: SGoal[];
    usps: Usp[];
    mchannels: MChannel[];
    mchallenges: MChallenge[];
    mgoals: MGoal[];
    mrisks: MRisk[];
    srisks: SRisk[];
    drisks: DRisk[];
    dchallenges: DChallenge[];
    updates: Update[];
    features: Feature[];
    innovations: Innovation[];
}

    const formSchema = z.object({
    name: z.string().min(1, {
        message: "Business name is required."
    }),
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
        message: "Expertise is required"
    }),
    networkId: z.string().min(1, {
        message: "Network is required"
    }),
    revenueId: z.string().min(1, {
        message: "Revenue model is required"
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
    productId: z.string().min(1, {
        message: "Product stage is required"
    }),
    decisionId: z.string().min(1, {
        message: "Business decision is required"
    }),
    targetId: z.string().min(1, {
        message: "Target customer is required"
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
    mchannelId: z.string().min(1, {
      message: "Marketing channel is required"
    }),
    mgoalId: z.string().min(1, {
      message: "Marketing goal is required"
    }),
    uspId: z.string().min(1, {
      message: "Unique selling point is required"
    }),
    mchallengeId: z.string().min(1, {
      message: "Marketing challenge is required"
    }),
    mriskId: z.string().min(1, {
      message: "Marketing risk is required"
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

export const ProfileForm = ({
  initialData,
  experiences,
  ownerships,
  expertises,
  networks,
  revenues,
  stages,
  sizes,
  industries,
  products,
  decisions,
  members,
  targets,
  leads,
  schallenges,
  sstrategies,
  sgoals,
  usps,
  mchannels,
  mchallenges,
  mgoals,
  mrisks,
  srisks,
  drisks,
  dchallenges,
  updates,
  features,
  innovations
}: ProfileFormProps) => {
    const router = useRouter();
    const {toast} = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:  {
            name: initialData?.name || "",
            description: initialData?.description || "",
            ownershipId: initialData?.ownershipId || undefined,
            experienceId: initialData?.experienceId || undefined,
            memberId: initialData?.memberId || undefined,
            expertiseId: initialData?.expertiseId || undefined,
            networkId: initialData?.networkId || undefined,
            revenueId: initialData?.revenueId || undefined,
            stageId: initialData?.stageId || undefined,
            sizeId: initialData?.sizeId || undefined,
            industryId: initialData?.industryId || undefined,
            productId: initialData?.productId || undefined,
            decisionId: initialData?.decisionId || undefined,
            targetId: initialData?.targetId || undefined,
            leadId: initialData?.leadId || undefined,
            schallengeId: initialData?.schallengeId || undefined,
            sstrategyId: initialData?.sstrategyId || undefined,
            sgoalId: initialData?.sgoalId || undefined,
            sriskId: initialData?.sriskId || undefined,
            mchannelId: initialData?.mchannelId || undefined,
            mgoalId: initialData?.mgoalId || undefined,
            uspId: initialData?.uspId || undefined,
            mchallengeId: initialData?.mchallengeId || undefined,
            mriskId: initialData?.mriskId || undefined,
            dchallengeId: initialData?.dchallengeId || undefined,
            updateId: initialData?.updateId || undefined,
            driskId: initialData?.driskId || undefined,
            featureId: initialData?.featureId || undefined,
            innovationId: initialData?.innovationId || undefined
        }
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        if(initialData) {
          await axios.patch(`/api/profile/${initialData.id}`, values);
          toast({
            title: "Success",
            description: "Your profile has been updated."
          })
        }

        router.refresh();
        router.push('/home');
      } catch (error) {
        toast({
          title: "Error",
          description: "Something went wrong",
          variant: "destructive"
        });
      }
    }

    return (
        <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
            <Form {...form}>
                <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 pb-10"
                >
                <div className="space-y-2 w-full">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Founder Profile</h3>
                        <p className="text-sm text-muted-foreground">
                        Give insights into your experience and role as a founder
                        </p>
                        <Separator className="my-4"/>
                    </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              name="experienceId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
            </div>           
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm mt-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Business Profile</h3>
                  <p className="text-sm text-gray-500 mt-1">
                  Share essential details about your business and its journey
              </p>
                  <Separator className="bg-primary/10"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-8 w-3/4">
                  <FormLabel className="font-bold text-base">What is your business name?</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder=""
                      {...field}
                      className="w-full bg-white"
                    /> 
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="industryId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                    placeholder="Select a business stage"
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
                <FormItem className="mt-5 w-3/4">
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
                    placeholder="Select team size"
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
                <FormItem className="mt-5 w-3/4">
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
              </div>
                </div>
              <div className="p-4 bg-white rounded-lg shadow-sm mt-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Sales Strategy</h3>
                  <p className="text-sm text-gray-500 mt-1">
                  Share essential details about your business and its journey
              </p>
                  <Separator className="bg-primary/10"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
              name="revenueId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                    placeholder="Select sales goal"
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
              </div>
                </div>
            <div className="p-4 bg-white rounded-lg shadow-sm mt-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Marketing Strategy</h3>
                  <p className="text-sm text-gray-500 mt-1">
                  Share essential details about your business and its journey
              </p>
                  <Separator className="bg-primary/10"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
              name="targetId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel className="font-bold text-base">Who are your target customers?</FormLabel>
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
              <FormField
              name="uspId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel className="font-bold text-base">What is your brand’s unique selling proposition (USP)?</FormLabel>
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
                    placeholder="Select unique selling point"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {usps.map((usp) => (
                      <SelectItem key={usp.id} value={usp.id}>
                        {usp.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="mchannelId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel className="font-bold text-base">Which marketing channels have been most effective for your business?</FormLabel>
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
                    placeholder="Select marketing channel"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mchannels.map((mchannel) => (
                      <SelectItem key={mchannel.id} value={mchannel.id}>
                        {mchannel.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="mchallengeId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel className="font-bold text-base">What challenges do you face in your marketing efforts right now?</FormLabel>
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
                    placeholder="Select marketing challenge"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mchallenges.map((mchallenge) => (
                      <SelectItem key={mchallenge.id} value={mchallenge.id}>
                        {mchallenge.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
              <FormField
              name="mriskId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel className="font-bold text-base">What's the biggest marketing risk you foresee in scaling your startup?</FormLabel>
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
                    placeholder="Select marketing risk"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mrisks.map((mrisk) => (
                      <SelectItem key={mrisk.id} value={mrisk.id}>
                        {mrisk.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="mgoalId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
                  <FormLabel className="font-bold text-base">What are your main marketing goals for the next 6 – 12 months?</FormLabel>
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
                    placeholder="Select marketing goal"
                    />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {mgoals.map((mgoal) => (
                      <SelectItem key={mgoal.id} value={mgoal.id}>
                        {mgoal.name}
                      </SelectItem>  
                    ))}
                  </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            </div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm mt-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">Development Strategy</h3>
                  <p className="text-sm text-gray-500 mt-1">
                  Share essential details about your business and its journey
              </p>
                  <Separator className="bg-primary/10"/>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              name="productId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
                <FormItem className="mt-5 w-3/4">
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
            </div>
            </div>
          <div className="flex justify-center mt-8">
            <Button type="submit" className="px-8 py-2 bg-tealCustom hover:bg-teal-700 text-white rounded-md shadow-sm transition-colors" disabled={isLoading}>
              {isLoading ? (
                    <div className="flex items-center gap-2">
                    <span>Saving...</span>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    </div>   
              ) : ( 
                <div className="flex items-center gap-2">
                <span>Save Changes</span>
                <Wand2 className="w-4 h-4" />
            </div>
              )}
            </Button>
          </div>
             </div>
            </form>
            </Form>
        </div>
    )
}