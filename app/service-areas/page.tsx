import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Genovese Cleaning Service serves homes and offices across Southern New Hampshire, including Nashua, Manchester, Salem, Bedford, Merrimack, Derry, and Londonderry."
};

export default function ServiceAreasPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Service Areas"
        title="Professional cleaning across Southern New Hampshire."
        description="From busy family homes in Bedford and Merrimack to condos in Nashua and offices in Manchester, Genovese Cleaning Service is positioned for the communities that rely most on dependable, local support."
      />

      <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Built for New England Homes"
            title="Seasonal mess is different here, and the service should reflect that."
            description="Southern New Hampshire homes see winter salt, spring mud, fall leaf debris, and the steady wear of family routines throughout the year. That means floors, entryways, bathrooms, kitchens, and shared living spaces benefit from a cleaning approach that understands the region instead of relying on generic boilerplate."
          />
        </div>
        <div className="grid gap-4">
          {[
            ["Winter-ready upkeep", "Salt, moisture, and tracked-in debris can wear on floors and mats fast without regular attention."],
            ["Spring and summer reset", "Open-window dust, pollen, and busier family schedules make detailed cleaning especially valuable."],
            ["Busy-week support", "Recurrence matters when long commutes, school activities, and weekend obligations stack up."]
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
        <SectionHeading
          eyebrow="Primary Coverage"
          title="Core towns and nearby communities."
          description="Availability may vary by route and frequency, but these are the main Southern New Hampshire communities the site is positioned to target for local SEO and service inquiries."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl text-[var(--heading)]">Hillsborough County</h3>
              <ul className="mt-4 grid gap-2 text-[var(--muted)]">
                <li>Nashua</li>
                <li>Manchester</li>
                <li>Bedford</li>
                <li>Merrimack</li>
                <li>Hudson</li>
                <li>Amherst</li>
                <li>Milford</li>
                <li>Hollis</li>
                <li>Hooksett</li>
                <li>Auburn</li>
                <li>Chester</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl text-[var(--heading)]">Rockingham County</h3>
              <ul className="mt-4 grid gap-2 text-[var(--muted)]">
                <li>Salem</li>
                <li>Windham</li>
                <li>Derry</li>
                <li>Londonderry</li>
                <li>Pelham</li>
                <li>Atkinson</li>
                <li>Hampstead</li>
                <li>Plaistow</li>
                <li>Sandown</li>
                <li>Danville</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="rounded-[36px] bg-[rgba(234,241,237,0.54)] px-6 py-10 md:px-8">
        <SectionHeading
          eyebrow="Need a Nearby Town?"
          title="Ask us about neighboring areas."
          description="If you’re just outside the core towns above, we can still review your address and service goals. Recurring schedules often make it easier to extend service beyond the main routes."
        />
      </section>
    </main>
  );
}
