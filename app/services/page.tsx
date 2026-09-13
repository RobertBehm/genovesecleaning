import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/lib/site";

const services = [
  {
    id: "standard-cleaning",
    title: "Standard Cleaning",
    description:
      "Our routine home cleaning covers the spaces you use every day: kitchens, bathrooms, bedrooms, hallways, and shared living areas.",
    bullets: [
      "Dust reachable surfaces, decor, and fixtures",
      "Vacuum rugs and carpets; mop hard-surface floors",
      "Clean and sanitize counters, sinks, and exterior appliance surfaces",
      "Scrub bathrooms, mirrors, and fixtures",
      "Empty trash and refresh liners",
      "Tidy visible room surfaces and straighten where appropriate"
    ],
    bestFor: "Weekly, bi-weekly, or monthly upkeep for occupied homes that need consistent support."
  },
  {
    id: "deep-cleaning",
    title: "Deep Cleaning",
    description:
      "A more detailed reset for homes that haven’t been professionally cleaned in a while, homes coming out of a busy season, or first visits before starting recurring service.",
    bullets: [
      "Everything in standard cleaning, plus additional detail work",
      "Hand-wipe baseboards, trim, door frames, and window sills",
      "Clean vents, ceiling fans, and light fixtures where reachable",
      "Target kitchen buildup, backsplash splatter, and bathroom grime",
      "Spot-clean switch plates, handles, and high-touch areas",
      "Focus on corners, edges, and neglected accumulation zones"
    ],
    bestFor: "Seasonal refreshes, first-time service, spring cleaning, and homes recovering from a hectic stretch."
  },
  {
    id: "move-cleaning",
    title: "Move-In / Move-Out Cleaning",
    description:
      "When timing matters and the home needs to look ready for handoff, we focus on the empty-space details that stand out most during walkthroughs, photos, and inspection checklists.",
    bullets: [
      "Interior cabinet and drawer wipe-downs",
      "Detailed cleaning of kitchen appliances and surrounding surfaces",
      "Bathroom sanitizing with attention to fixtures, tile, and edges",
      "Window sills, tracks, and reachable interior glass",
      "Vacuuming, mopping, and edge-detailing all accessible floors",
      "Spot-cleaning marks left by moving, packing, and traffic"
    ],
    bestFor: "Closings, rental turnovers, staging prep, apartment transitions, and settling into a new home."
  },
  {
    id: "recurring-cleaning",
    title: "Recurring Cleaning",
    description:
      "Recurring service keeps the home under control before clutter and buildup become a project again. It’s the easiest way to stay ahead of busy schedules, family traffic, and New England weather changes.",
    bullets: [
      "Choose weekly, bi-weekly, or monthly service",
      "Consistent checklist and service expectations",
      "Priority scheduling for active recurring clients",
      "Easy adjustments based on travel, guests, or events",
      "Optional deep-clean starting point for best ongoing results",
      "Great fit for families, professionals, and retirees alike"
    ],
    bestFor: "Clients who want a consistently clean home without sacrificing weekends to catch-up cleaning."
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    description:
      "We also provide light commercial cleaning for offices, studios, and small professional spaces that need a neat, dependable environment for staff and clients.",
    bullets: [
      "Office suites, reception spaces, and conference rooms",
      "Restroom cleaning and basic supply checks",
      "Break rooms and kitchenette wipe-downs",
      "Vacuuming, mopping, and spot treatment for common areas",
      "Flexible scheduling for lower-traffic hours when available",
      "Custom scopes for smaller professional environments"
    ],
    bestFor: "Boutique offices, agencies, studios, and small businesses throughout Southern New Hampshire."
  }
];

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Explore recurring cleaning, deep cleaning, move-in/move-out cleaning, and office cleaning from Genovese Cleaning Service in Southern New Hampshire."
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Our Services"
        title="Cleaning services built around the way Southern New Hampshire households actually live."
        description="Whether you need dependable maintenance cleanings, a detailed top-to-bottom reset, or help turning over a space before a move, Genovese Cleaning Service offers practical options with clear expectations."
      />

      <div className="grid gap-8">
        {services.map((service, index) => (
          <section
            id={service.id}
            key={service.id}
            className={`scroll-mt-24 rounded-[36px] px-6 py-8 md:px-8 ${index % 2 === 1 ? "bg-[rgba(234,241,237,0.54)]" : ""}`}
          >
            <div className="grid gap-6 md:grid-cols-[1.4fr_0.8fr]">
              <div>
                <h2 className="font-serif text-4xl text-[var(--heading)]">{service.title}</h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">{service.description}</p>
                <ul className="mt-6 grid gap-3 text-[var(--foreground)]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl text-[var(--heading)]">Best for</h3>
                  <p className="mt-3 text-[var(--muted)]">{service.bestFor}</p>
                </CardContent>
              </Card>
            </div>
          </section>
        ))}
      </div>

      <section className="pt-20">
        <SectionHeading eyebrow="Common Questions" title="Answers before you even ask." />
        <div className="grid gap-4 md:grid-cols-3">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-[var(--heading)]">{faq.question}</h3>
                <p className="mt-3 text-[var(--muted)]">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
