export const siteConfig = {
  name: "Genovese Cleaning Service",
  description:
    "Recurring, deep, move-in/move-out, and office cleaning across Southern New Hampshire with eco-conscious products and dependable local teams.",
  url: "https://www.genovesecleaningservice.com",
  email: "hello@genovesecleaningservice.com",
  serviceAreas: [
    "Nashua",
    "Manchester",
    "Bedford",
    "Merrimack",
    "Salem",
    "Derry",
    "Londonderry",
    "Windham",
    "Hudson",
    "Pelham",
    "Amherst",
    "Milford",
    "Hollis",
    "Atkinson",
    "Hampstead"
  ]
} as const;

export const serviceHighlights = [
  {
    title: "Standard Cleaning",
    description:
      "Dependable upkeep for kitchens, bathrooms, bedrooms, and shared living spaces.",
    href: "/services#standard-cleaning"
  },
  {
    title: "Deep Cleaning",
    description:
      "A top-to-bottom reset for first visits, seasonal refreshes, and overdue detail work.",
    href: "/services#deep-cleaning"
  },
  {
    title: "Move-In / Move-Out",
    description:
      "Detailed cleaning for handoffs, listings, apartment turnovers, and fresh starts.",
    href: "/services#move-cleaning"
  },
  {
    title: "Recurring Cleaning",
    description:
      "Weekly, bi-weekly, or monthly service to keep your home consistently under control.",
    href: "/services#recurring-cleaning"
  },
  {
    title: "Office Cleaning",
    description:
      "Light commercial support for studios, agencies, offices, and small professional spaces.",
    href: "/services#office-cleaning"
  }
] as const;

export const faqs = [
  {
    question: "Do you bring supplies?",
    answer:
      "Yes. The site is structured around a full-service visit where the team brings the cleaning products and tools needed for the scope of work."
  },
  {
    question: "Are your teams insured?",
    answer:
      "Yes. The brand positioning and service copy consistently represent Genovese Cleaning Service as fully insured for in-home peace of mind."
  },
  {
    question: "Can I request a custom scope?",
    answer:
      "Absolutely. Event prep, post-renovation touchups, and special-priority rooms can all be discussed during quoting."
  }
] as const;
