import { Loader } from "lucide-react";
import {cva, type VariantProps} from "class-variance-authority"
import { cn } from "@/lib/utils";

const spinnerVariants = cva(
    "text-muted-forefround animate-spin",
    {
        variants:{
            size:{
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10"
            }
        },
        defaultVariants:{
            size: "default",

        },
    }

)
// interface SpinnerProp extends VariantProps<typeof spinnerVariants>{}
type SpinnerProp = VariantProps<typeof spinnerVariants>
export const Spinner = ({size,

}: SpinnerProp)=>{
    return(
        <Loader className={cn(spinnerVariants({size}))}/>
    )
}