import * as React from "react"

import { cn } from "../utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }

// import { Textarea } from "@/components/ui/textarea"
{/* <Textarea /> */}

// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

// export function TextareaWithLabel() {
//   return (
//     <div className="grid w-full gap-1.5">
//       <Label htmlFor="message">Your message</Label>
//       <Textarea placeholder="Type your message here." id="message" />
//     </div>
//   )
// }
