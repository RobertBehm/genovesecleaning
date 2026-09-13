import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Genovese Cleaning Service, covering how information is collected, used, and protected."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
      <SectionHeading
        eyebrow="Privacy Policy"
        title="How Genovese Cleaning Service handles your information."
        description="Effective date: August 26, 2026"
      />
      <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
        <p>
          Genovese Cleaning Service (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit this website,
          submit a quote request, or otherwise communicate with our business.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Information We Collect</h2>
        <ul className="grid gap-3">
          <li>Contact information such as your name, email address, phone number, and mailing or service address.</li>
          <li>Quote details such as home size, requested services, scheduling preferences, and notes you provide.</li>
          <li>Technical data such as browser type, device information, IP address, and usage analytics if analytics tools are installed.</li>
          <li>Communication records when you email us, fill out a form, or otherwise contact the business.</li>
        </ul>
        <h2 className="font-serif text-3xl text-[var(--heading)]">How We Use Information</h2>
        <ul className="grid gap-3">
          <li>To respond to quote requests and customer service inquiries.</li>
          <li>To schedule, deliver, and improve cleaning services.</li>
          <li>To send service-related updates, appointment information, or requested follow-up.</li>
          <li>To maintain site security, monitor performance, and understand website usage.</li>
          <li>To comply with legal obligations and protect our rights when necessary.</li>
        </ul>
        <h2 className="font-serif text-3xl text-[var(--heading)]">When We Share Information</h2>
        <p>We do not sell personal information. We may share information with:</p>
        <ul className="grid gap-3">
          <li>Service providers who help operate the website, email, CRM, payment, scheduling, or analytics systems.</li>
          <li>Professional advisors or authorities when required to comply with law, enforce agreements, or protect safety and property.</li>
          <li>A successor entity if the business is reorganized, sold, or transferred.</li>
        </ul>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Cookies and Analytics</h2>
        <p>
          This site may use cookies or similar technologies for functionality, analytics, or marketing if those tools are later added.
          You can usually manage cookie preferences through your browser settings.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Data Retention</h2>
        <p>
          We retain personal information for as long as reasonably necessary to respond to inquiries, provide services,
          maintain business records, and comply with legal obligations.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Your Choices</h2>
        <p>
          You may contact us to request access to, correction of, or deletion of your personal information, subject to applicable law and legitimate business recordkeeping requirements.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Children&apos;s Privacy</h2>
        <p>
          This website is not directed to children under 13, and we do not knowingly collect personal information from children through the site.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Security</h2>
        <p>
          We use reasonable administrative, technical, and organizational safeguards intended to protect information.
          However, no internet transmission or storage method is guaranteed to be completely secure.
        </p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. When we do, we will revise the effective date shown on this page.</p>
        <h2 className="font-serif text-3xl text-[var(--heading)]">Contact Us</h2>
        <p>
          For privacy questions, contact Genovese Cleaning Service at <a className="text-[var(--primary)]" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </main>
  );
}
