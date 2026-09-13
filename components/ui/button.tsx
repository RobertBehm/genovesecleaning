import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-[0.16em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-black shadow-[0_14px_30px_rgba(201,161,74,0.18)] hover:bg-[var(--primary-hover)]",
        secondary:
          "border border-[var(--border)] bg-transparent text-[var(--ivory)] hover:border-[var(--primary)] hover:bg-[rgba(201,161,74,0.08)] hover:text-[var(--primary-hover)]",
        ghost: "text-[var(--primary)] hover:bg-[rgba(201,161,74,0.08)]"
      },
      size: {
        default: "h-11 px-5 py-2.5",
        lg: "h-12 px-6 py-3 text-base",
        sm: "h-9 px-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
}

export function buttonClassName({ className, variant, size }: ButtonProps = {}) {
  return cn(buttonVariants({ variant, size }), className);
}
