import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-10 max-w-3xl text-center" : "mb-10 max-w-3xl"}>
      {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
      <h2 className="font-serif text-4xl leading-tight text-[var(--heading)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-[var(--muted)]/88">{description}</p>
      ) : null}
    </div>
  );
}
