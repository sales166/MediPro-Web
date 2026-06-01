import { SectionHeading } from "./SectionHeading";
import { LogoPlaceholder } from "./LogoPlaceholder";

// Replace src with real logo paths to swap placeholders for real images.
const brands: { name: string; src?: string }[] = [
  { name: "Brand One" },
  { name: "Brand Two" },
  { name: "Brand Three" },
  { name: "Brand Four" },
  { name: "Brand Five" },
  { name: "Brand Six" },
  { name: "Brand Seven" },
  { name: "Brand Eight" },
  { name: "Brand Nine" },
  { name: "Brand Ten" },
];

export function Brands() {
  return (
    <section id="brands" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Companies"
          title="Brands We Have"
          subtitle="We are proud to be official dealers and partners of trusted healthcare brands."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((b) =>
            b.src ? (
              <div
                key={b.name}
                className="flex h-16 items-center justify-center rounded-md border border-border bg-card p-3 grayscale transition hover:grayscale-0 hover:border-primary/40"
              >
                <img src={b.src} alt={b.name} className="max-h-full max-w-full object-contain" />
              </div>
            ) : (
              <LogoPlaceholder key={b.name} variant="brand" label={b.name} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
