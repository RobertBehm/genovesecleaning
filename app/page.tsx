import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import { TrustBar } from "@/components/trust-bar";
import { buttonClassName } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig, serviceHighlights } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1.08fr_0.92fr] md:px-6 md:py-20">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">
            SOUTHERN NEW HAMPSHIRE&apos;S TRUSTED CLEANING SERVICE
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-none text-[var(--heading)] md:text-7xl">
            Professional House Cleaning Across Southern New Hampshire
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            Reclaim your time and come home to a spotless space. Genovese Cleaning Service provides reliable,
            fully insured residential cleaning throughout Southern New Hampshire, including recurring cleaning,
            deep cleaning, move-in and move-out cleaning, and more.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className={buttonClassName({ size: "lg" })}>
              GET A FREE QUOTE
            </Link>
            <Link href="/services" className={buttonClassName({ variant: "secondary", size: "lg" })}>
              OUR SERVICES
            </Link>
          </div>
        </div>
        <Card className="overflow-hidden border-[var(--primary)]/35 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.14),transparent_34%),linear-gradient(180deg,rgba(20,20,20,0.98),rgba(10,10,10,0.98))] p-4 md:p-5">
          <div className="relative overflow-hidden rounded-[24px] border border-[var(--border)]/80">
            <Image
              src="/owner.png"
              alt="Owner of Genovese Cleaning Service"
              width={1288}
              height={1288}
              className="h-[420px] w-full object-cover object-center"
              priority
            />
          </div>
          <div className="p-4 md:p-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">
              Owner Led
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[var(--heading)]">Meet the owner behind Genovese Cleaning Service.</h2>
            <p className="mt-4 max-w-lg text-[var(--muted)]">
              A personal, high-touch brand built around trust, presentation, and a more refined cleaning experience for
              Southern New Hampshire homes.
            </p>
          </div>
        </Card>
      </section>

      <TrustBar />

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="What We Do"
          title="Reliable Cleaning for Busy Homes and Offices"
          description="From recurring cleaning to deep cleans, move-in and move-out service, and office cleaning, Genovese Cleaning Service makes it easier to keep your space clean and cared for throughout Southern New Hampshire."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--muted)]">{service.description}</p>
                <Link href={service.href} className="mt-5 inline-block font-semibold text-[var(--primary)]">
                  Learn more
                </Link>
              </CardContent>
            </Card>
          ))}
          <Card className="border-[var(--primary)]/30 bg-[radial-gradient(circle_at_top,rgba(201,161,74,0.12),transparent_42%),linear-gradient(180deg,rgba(20,20,20,0.98),rgba(10,10,10,0.98))]">
            <CardHeader>
              <CardTitle>Need something custom?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--muted)]">
                We can build a tailored scope for post-renovation touchups, event prep, or special requests.
              </p>
              <Link href="/contact" className="mt-5 inline-block font-semibold text-[var(--primary)]">
                Ask for a custom quote
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[0.95fr_1.05fr] md:px-6">
        <div>
          <SectionHeading
            eyebrow="Why Genovese"
            title="Cleaning You Can Trust, From a Local Team You Can Count On"
          />
        </div>
        <div className="grid gap-4">
          {[
            ["Thorough, checklist-based visits", "We focus on consistency so your kitchen, baths, floors, and detail surfaces stay reliably clean."],
            ["Carefully Vetted & Trained Team", "Every member of our cleaning team is screened, vetted, and trained before entering your home."],
            ["Easy communication", "Clear scheduling, friendly updates, and a direct local point of contact for questions or changes."]
          ].map(([title, text]) => (
            <Card key={title} className="bg-[linear-gradient(180deg,rgba(26,26,26,0.98),rgba(14,14,14,0.98))]">
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl text-[var(--heading)]">{title}</h3>
                <p className="mt-3 text-[var(--muted)]">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Where We Clean"
          title="Proudly serving Southern New Hampshire."
          description="Our core service area includes high-demand communities across Hillsborough and Rockingham Counties, with flexible routing for nearby towns."
        />
        <div className="flex flex-wrap gap-3">
          {siteConfig.serviceAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[var(--border)] bg-[rgba(20,20,20,0.95)] px-4 py-3 font-semibold text-[var(--primary)] shadow-sm"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/*
      <section className="mx-auto max-w-6xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="What Clients Value"
          title="The kind of feedback this brand is built to earn."
          description="Since this is a fresh rollout, these statements act as testimonial-direction placeholders until real client reviews are available."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            [
              "The best part wasn’t just how clean everything looked. It was walking in after work and not having the house hanging over us.",
              "Ideal recurring client story"
            ],
            [
              "They paid attention to the messy details that usually get skipped, especially around the mudroom, trim, and bathroom tile.",
              "Ideal deep clean client story"
            ],
            [
              "Professional, easy to coordinate with, and a big help before listing photos and showings.",
              "Ideal move / real estate client story"
            ]
          ].map(([quote, label]) => (
            <Card key={label}>
              <CardContent className="p-6">
                <blockquote className="text-lg leading-8 text-[var(--foreground)]">“{quote}”</blockquote>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                  {label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      */}

      <section className="mx-auto mb-12 max-w-6xl rounded-[36px] border border-[var(--border)] bg-[linear-gradient(135deg,#0f0f0f,#161616)] px-6 py-10 text-white md:px-10 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">Ready When You Are</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">Request a quote for your home or office.</h2>
            <p className="mt-4 text-lg leading-8 text-white/76">
              Tell us your town, the size of the space, and the type of cleaning you need. We’ll use that to shape a
              practical estimate for Southern New Hampshire service.
            </p>
          </div>
          <Link
            href="/contact"
            className={buttonClassName({ size: "lg" })}
          >
            Start Your Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
