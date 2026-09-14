import { CheckCircle2, Home, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Bonded & Insured",
    description:
      "Professional coverage and careful handling on every visit for added peace of mind."
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction Guaranteed",
    description:
      "If something isn't right, let us know and we'll make every reasonable effort to make it right."
  },
  {
    icon: Home,
    title: "Locally Owned & Eco-Conscious",
    description:
      "A Southern New Hampshire cleaning company using thoughtful products for homes, families, and pets."
  }
];

export function TrustBar() {
  return (
    <section
      aria-label="Why customers trust Genovese Cleaning Service"
      className="border-y border-[#C9A14A]/20 bg-[#11100E]"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-0">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={[
                  "relative flex gap-4 md:px-8 lg:px-10",
                  index === 0 ? "md:pl-0" : "",
                  index === trustItems.length - 1 ? "md:pr-0" : ""
                ].join(" ")}
              >
                {index > 0 && (
                  <div className="absolute bottom-2 left-0 top-2 hidden w-px bg-[#C9A14A]/20 md:block" />
                )}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C9A14A]/40 bg-[#C9A14A]/10 text-[#C9A14A]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-[#F5F1E8]">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 max-w-sm text-sm leading-6 text-[#CFCFCF] sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
