import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a cleaning quote from Genovese Cleaning Service for your Southern New Hampshire home or office."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Contact"
        title="Request a quote for Southern New Hampshire cleaning service."
        description="Share the size of the space, the town, and the kind of cleaning you’re looking for. Your inquiry will be saved securely for follow-up once the database connection is configured."
      />

      <section className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <ContactForm />
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">Email</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--heading)]">
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </h2>
              <p className="mt-3 text-[var(--muted)]">
                Use this address for quote requests, scheduling questions, and general service inquiries.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">Coverage</p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--heading)]">Southern New Hampshire</h2>
              <p className="mt-3 text-[var(--muted)]">
                Nashua, Manchester, Bedford, Merrimack, Salem, Derry, Londonderry, Windham, and nearby towns.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">
                Best quote details
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[var(--heading)]">What to include</h2>
              <p className="mt-3 text-[var(--muted)]">
                Bedrooms, bathrooms, square footage, pets, parking notes, and whether it’s routine, deep, or move-related cleaning.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
