import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Genovese Cleaning Service, a locally focused cleaning company serving homes and offices across Southern New Hampshire."
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="About Us"
        title="A local cleaning company built for the pace of Southern New Hampshire life."
        description="Genovese Cleaning Service is designed around something simple: when a home feels clean, everything else in the week runs better. We bring structure, reliability, and care to homes that need one less thing on the to-do list."
      />

      <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Our Approach"
            title="Detail-oriented service without the corporate feel."
            description="We’re not trying to sound like a national chain. We’re building a strong local brand that homeowners in Nashua, Bedford, Salem, and surrounding communities can trust for consistent results, practical scheduling, and respectful care inside the home."
          />
          <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Every visit is meant to feel organized and calming, not rushed or generic. That means paying attention to
            the rooms families use hardest, adjusting for seasonal mess, and cleaning in a way that supports healthier,
            more manageable routines.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            ["Locally relevant service", "Cleaning plans shaped around New England weather, school-year rhythms, commuting households, and busy families."],
            ["Professional standards", "Insured visits, clear scopes of work, and dependable communication from quote through follow-up."],
            ["Long-term trust", "We want to be the team clients keep for years, not a one-time stopgap when life gets overwhelming."]
          ].map(([title, text]) => (
            <Card key={title} className="bg-[var(--accent)]">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-[var(--heading)]">{title}</h3>
                <p className="mt-3 text-[var(--muted)]">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20">
        <SectionHeading eyebrow="What We Stand For" title="Three principles guide every clean." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Respect the home", "We treat every home carefully, from entryway floors and kitchen counters to personal spaces that require extra thoughtfulness and professionalism."],
            ["Make consistency visible", "Clients should know what to expect each time: a clear checklist, dependable quality, and honest follow-up if something needs attention."],
            ["Keep things practical", "Our service is designed to make real life easier, whether that means staying ahead of muddy paw prints, weeknight clutter, or a move with too many deadlines."]
          ].map(([title, text]) => (
            <Card key={title}>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-[var(--heading)]">{title}</h3>
                <p className="mt-3 text-[var(--muted)]">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="Built for the Region"
          title="Proud to serve Southern New Hampshire communities."
          description="From family neighborhoods in Bedford and Merrimack to condos in Nashua, townhomes in Salem, and homes with long winter driveways in Derry and Londonderry, our goal is to provide a cleaning service that feels rooted in the region instead of imported into it."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Hillsborough County", "Nashua, Manchester, Bedford, Merrimack, Amherst, Hollis, Milford, Hudson, and nearby towns."],
            ["Rockingham County", "Salem, Windham, Derry, Londonderry, Hampstead, Atkinson, Pelham, and neighboring communities."],
            ["Flexible Routing", "We can review nearby locations case by case depending on scheduling and service frequency."]
          ].map(([title, text]) => (
            <Card key={title}>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-[var(--heading)]">{title}</h3>
                <p className="mt-3 text-[var(--muted)]">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
