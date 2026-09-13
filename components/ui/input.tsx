import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Input({
  className,
  type,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-2xl border border-[var(--border)] bg-[#111111] px-4 py-2 text-sm text-[var(--foreground)] shadow-sm transition-colors placeholder:text-[var(--muted)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        className
      )}
      {...props}
    />
  );
}
