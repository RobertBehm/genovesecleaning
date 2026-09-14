import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { buttonClassName } from "@/components/ui/button";

const links = [
  // { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  // { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="gold-divider border-b border-[var(--border)]/60 bg-[rgba(10,10,10,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <BrandLogo />
        <nav className="flex flex-wrap items-center gap-3 text-sm font-semibold text-[var(--muted)]/90 md:gap-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[var(--primary)]">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={buttonClassName()}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
