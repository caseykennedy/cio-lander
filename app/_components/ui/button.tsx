"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/util";

export const buttonVariants = cva(
  "flex flex-row items-center justify-start gap-3 rounded font-sans text-xs font-bold uppercase tracking-[2px] ring-offset-background-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none active:translate-y-0.5 disabled:opacity-50 border hover:border-black whitespace-nowrap group",
  {
    variants: {
      variant: {
        default: "text-xs",
        primary:
          "border border-primary-500 hover:border-primary-600 bg-primary-500 hover:bg-primary-600 active:bg-transparent active:border-primary-400 active:text-primary-400",
        secondary:
          "border border-primary-500 hover:border-primary-600 bg-primary-500 hover:bg-primary-600 active:bg-transparent active:border-primary-400 active:text-primary-400",
      },
      size: {
        default: "h-[47px] px-6 md:px-8 py-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export default Button;
