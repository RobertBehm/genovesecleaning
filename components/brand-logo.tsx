import Link from "next/link";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  href?: string;
  className?: string;
  compact?: boolean;
  inverted?: boolean;
};

export function BrandLogo({
  href = "/",
  className,
  compact = false,
  inverted = false
}: BrandLogoProps) {
  const content = (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-script text-5xl leading-none tracking-tight",
            inverted ? "text-[var(--ivory)]" : "text-[var(--primary)]",
            compact ? "text-4xl" : "text-5xl"
          )}
        >
          Genovese
        </span>
        <div className="mt-1 flex items-center gap-3">
          <span className="h-px w-10 bg-[var(--primary)]/80" />
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.34em]",
              inverted ? "text-white/76" : "text-[var(--muted)]"
            )}
          >
            Cleaning Service
          </span>
          <span className="h-px w-10 bg-[var(--primary)]/80" />
        </div>
      </div>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="inline-flex items-center">
      {content}
    </Link>
  );
}
