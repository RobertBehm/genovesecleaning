import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for the Genovese Cleaning Service website and service inquiries."
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Terms & Conditions"
        title="Website and inquiry terms for Genovese Cleaning Service."
        description="Effective date: August 26, 2026"
      />
      <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
        <p>
          These Terms and Conditions (&quot;Terms&quot;) govern your use of the Genovese Cleaning Service website and any quote request or communication submitted through it. By accessing this site, you agree to these Terms.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Website Use</h2>
        <p>You agree to use this website only for lawful purposes and in a way that does not interfere with the operation, security, or availability of the site.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Quotes and Service Information</h2>
        <p>
          Information submitted through the site is used to evaluate interest in services and prepare estimates. A quote request does not guarantee availability, scheduling, or acceptance of a job. Final pricing, scope, and timing are subject to confirmation by Genovese Cleaning Service.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">No Professional Advice</h2>
        <p>Content on this website is provided for general informational purposes only. It does not constitute legal, financial, insurance, or professional advice.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Intellectual Property</h2>
        <p>Unless otherwise stated, the website content, design, branding, copy, and layout are the property of Genovese Cleaning Service and may not be copied, reproduced, or distributed without permission.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Third-Party Services</h2>
        <p>The site may link to or integrate with third-party services such as form processors, analytics providers, email systems, or scheduling tools. We are not responsible for the content, policies, or performance of those third-party services.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Disclaimer of Warranties</h2>
        <p>This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, express or implied, to the fullest extent permitted by law.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Genovese Cleaning Service will not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of the website.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Indemnification</h2>
        <p>You agree to indemnify and hold harmless Genovese Cleaning Service from claims, liabilities, damages, and expenses arising from your misuse of the site or violation of these Terms.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Governing Law</h2>
        <p>These Terms are governed by the laws of the State of New Hampshire, without regard to conflict of law principles.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Changes to These Terms</h2>
        <p>We may update these Terms from time to time. When we do, we will revise the effective date on this page.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Contact</h2>
        <p>
          Questions about these Terms can be sent to <a className="text-[var(--primary)]" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  );
}
