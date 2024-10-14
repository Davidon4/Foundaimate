"use client";
import * as z from "zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Wand2 } from "lucide-react";
import axios from "axios";
import {zodResolver} from "@hookform/resolvers/zod";

import {
    Form,
    FormControl,
    FormDescription,
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

// interface ProfileFormProps {
//     initialData: 
// }

    const formSchema = z.object({
    experience: z.string().min(1, {
        message: "Experience level is required."
    }),
    ownership: z.string().min(1, {
        message: "Ownership level is required."
    }),
    member: z.string().min(1, {
        message: "Founding member is required."
    }),
    expertise: z.string().min(1, {
        message: "Expertise is required"
    }),
    network: z.string().min(1, {
        message: "Network is required"
    }),
    revenue: z.string().min(1, {
        message: "Revenue model is required"
    }),
    description: z.string().min(200, {
        message: "Business description is required"
    }),
    stage: z.string().min(1, {
        message: "Business stage is required"
    }),
    size: z.number().min(1, {
        message: "Business size must be at least 1."
    }),
    industry: z.string().min(1, {
        message: "Business industry is required"
    }),
    product: z.string().min(1, {
        message: "Product stage is required"
    })
    })

export const ProfileForm = () => {
    const router = useRouter();
    const {toast} = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:  {
            ownership: "",
            experience: "",
            member: "",
            expertise: "",
            network: "",
            revenue: "",
            description: "",
            stage: "",
            size: 1,
            industry: "",
            product: ""
        }
    })

    const isLoading = form.formState.isSubmitting;

    return (
        <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
            <Form {...form}>
                <form
                className="space-y-8 pb-10"
                >
                <div className="space-y-2 w-full">
                    <div>
                        <h3 className="text-lg font-medium">Founder’s Profile</h3>
                        <p className="text-sm text-muted-foreground">
                        Founder’s Profile
                        </p>
                    </div>
                    <Separator className="bg-primary/10"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="experience"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>What is your previous experience as a founder or in the industry?</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Experience"
                      {...field}
                    /> 
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div> 
                </form>
            </Form>
        </div>
    )
}