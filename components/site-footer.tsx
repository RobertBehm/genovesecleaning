import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[var(--border)]/60 bg-[#080808] text-white/85">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-6">
        <div>
          <BrandLogo inverted />
          <p className="mt-4 max-w-sm text-white/70">
            Residential and small-office cleaning for Southern New Hampshire.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-white">Explore</h3>
          <Link className="block text-white/75" href="/about">
            About
          </Link>
          <Link className="block text-white/75" href="/services">
            Services
          </Link>
          <Link className="block text-white/75" href="/service-areas">
            Service Areas
          </Link>
          <Link className="block text-white/75" href="/contact">
            Contact
          </Link>
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-white">Service Region</h3>
          <p className="text-white/70">
            Nashua, Manchester, Bedford, Merrimack, Salem, Derry, Londonderry, Windham, and nearby towns.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="font-serif text-xl text-white">Legal</h3>
          <Link className="block text-white/75" href="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="block text-white/75" href="/terms">
            Terms &amp; Conditions
          </Link>
          <a className="block text-white/75" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-10 text-sm text-white/55 md:px-6">
        © 2026 Genovese Cleaning Service. All rights reserved.
      </div>
    </footer>
  );
}
