import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        default: "border border-[var(--border)] bg-[rgba(201,161,74,0.08)] text-[var(--primary)]",
        outline: "border border-[var(--border)] bg-transparent text-[var(--primary)]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
