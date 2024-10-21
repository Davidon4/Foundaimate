import { useRouter } from "next/navigation";

import { motion } from "framer-motion";
import * as z from "zod";
import { FileChartPieIcon, FileIcon, PresentationIcon } from "lucide-react";
import { Industry, Product, Revenue, Target, Stage, Size, Network } from "@prisma/client";
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
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface BusinessFormProps {
  industries: Industry[];
  products: Product[];
  revenues: Revenue[];
  targets: Target[];
  stages: Stage[];
  sizes: Size[];
  networks: Network[];
}

const formSchema = z.object({
  name: z.string().min(1, {
      message: "Business name is required."
  }),
  revenueId: z.string().min(1, {
      message: "Revenue model is required"
  }),
  description: z.string().min(200, {
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
  targetId: z.string().min(1, {
      message: "Target customer is required"
  })
  })



export default function Business({industries, products, revenues, targets, stages, sizes, networks}: BusinessFormProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    name: "",
    description: "",
    revenueId: undefined,
    stageId: undefined,
    sizeId: undefined,
    industryId: undefined,
    productId: undefined,
    targetId: undefined
    }
  })

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('revenueId', values.revenueId);
      formData.append('stageId', values.stageId);
      formData.append('sizeId', values.sizeId);
      formData.append('industryId', values.industryId);
      formData.append('productId', values.productId);
      formData.append('targetId', values.targetId);
      // const res = await 
  } catch (err) {
    console.log("Error message")
  }
  }
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
          Papermark
        </p>
        <h1 className="font-display max-w-md text-3xl font-semibold transition-colors sm:text-4xl">
          Which document do you want to share today?
        </h1>
      </motion.div>
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="grid w-full grid-cols-1 divide-y divide-border rounded-md border border-border text-foreground md:grid-cols-4 md:divide-x"
      >
        <button
          onClick={() =>
            router.push("./welcome?type=pitchdeck")
          }
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <PresentationIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>Pitchdeck</p>
        </button>

        <button
          onClick={() =>
            router.push("./welcome?type=sales")
          }
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <FileChartPieIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>Sales document</p>
        </button>

        <button
          onClick={() =>
            router.push("./welcome?type=notion")
          }
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          {/* <NotionIcon className="pointer-events-none h-auto w-12 sm:w-12" /> */}
          <p>Notion Page</p>
        </button>
        <button
          onClick={() =>
            router.push("./welcome?type=document")
          }
          className="flex min-h-[200px] flex-col items-center justify-center space-y-5 overflow-hidden p-5 transition-colors hover:bg-gray-200 hover:dark:bg-gray-800 md:p-10"
        >
          <FileIcon className="pointer-events-none h-auto w-12 sm:w-12" />
          <p>Another document</p>
        </button>
      </motion.div>

      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="text-center text-sm text-muted-foreground"
      >
        {/* <button
          className="text-center text-sm text-muted-foreground underline-offset-4 transition-all hover:text-gray-800 hover:underline hover:dark:text-muted-foreground/80"
          onClick={() =>
            router.push({
              pathname: "/welcome",
              query: {
                type: "dataroom",
              },
            })
          }
        > */}
        You can start by sharing documents and create a data room later.
        {/* </button> */}
      </motion.div>
    </motion.div>
  );
}