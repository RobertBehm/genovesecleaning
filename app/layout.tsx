import type { Metadata } from "next";
import type { ReactNode } from "react";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | House Cleaning in Southern New Hampshire`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "Southern New Hampshire cleaning service",
    "house cleaning Nashua NH",
    "maid service Manchester NH",
    "deep cleaning Southern NH",
    "Genovese Cleaning Service"
  ],
  openGraph: {
    title: `${siteConfig.name} | House Cleaning in Southern New Hampshire`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | House Cleaning in Southern New Hampshire`,
    description: siteConfig.description
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans text-[var(--foreground)] antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
