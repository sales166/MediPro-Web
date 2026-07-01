import { Check } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { LogoPlaceholder } from "./LogoPlaceholder";

const features = [
  "Certified Quality Products",
  "Competitive Pricing",
  "24/7 Customer Support",
  "Nationwide Distribution",
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Medipro by PSI"
          subtitle="Excellence in Medical Supply Distribution"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-white to-accent/10 shadow-elegant">
              <div className="flex h-full flex-col items-center justify-center gap-6 p-10">
                <LogoPlaceholder variant="primary" imageClassName="h-20 sm:h-24" />
                <div className="h-px w-24 bg-border" />
                <div className="text-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Division of
                  </div>
                  <img
                    src="/PSI%20LOGO%209-Photoroom%20(1).png"
                    alt="Projects and Supplies Investment LLC"
                    className="mx-auto mt-3 h-20 w-auto object-contain sm:h-24"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="mt-3 font-display text-lg font-bold">Projects and Supplies Investment LLC</div>
                </div>
              </div>
            </div>
            {/* <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-elegant sm:block">
              <div className="text-2xl font-bold">A Decade+</div>
              <div className="text-xs uppercase tracking-wider opacity-90">Of Healthcare Service</div>
            </div> */}
          </div>

          <div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Medipro by PSI is a specialized division dedicated to providing comprehensive healthcare supply
                solutions to medical facilities, hospitals, clinics, and healthcare providers across Oman. With over
                a decade of experience in the healthcare industry, we have established ourselves as a trusted partner
                in medical supply distribution.
              </p>
              <p>
                Our commitment to quality and service excellence has made us the preferred choice for healthcare
                institutions seeking reliable medical consumables and supplies. We work with internationally recognized
                manufacturers to ensure that every product meets the highest standards of quality and safety.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition hover:border-primary/40 hover:shadow-card"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-accent-foreground">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
