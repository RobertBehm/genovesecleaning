import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-32 w-full rounded-3xl border border-[var(--border)] bg-[#111111] px-4 py-3 text-sm text-[var(--foreground)] shadow-sm transition-colors placeholder:text-[var(--muted)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
        className
      )}
      {...props}
    />
  );
}
