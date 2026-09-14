import Image from "next/image";
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
    <div className={cn("inline-flex items-center", className)}>
      <Image
        src="/genovese-cleaning-logo.png"
        alt="Genovese Cleaning Service"
        width={2000}
        height={802}
        className={cn(
          "h-auto w-[190px] object-contain",
          compact ? "md:w-[170px]" : "md:w-[230px]",
          inverted && "brightness-110"
        )}
        priority={!compact}
      />
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
