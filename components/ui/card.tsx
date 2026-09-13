import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type DivProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: DivProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(20,20,20,0.98),rgba(10,10,10,0.98))] shadow-[0_20px_45px_rgba(0,0,0,0.38)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: DivProps) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("font-serif text-2xl leading-none tracking-tight text-[var(--heading)]", className)}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-[var(--muted)]/90", className)} {...props} />;
}

export function CardContent({ className, ...props }: DivProps) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}
