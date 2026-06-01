import { ArrowRight, Boxes, HardHat, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const supply = ["Medical Consumables", "Office Stationery", "Hardware & Tools"];
const contracting = [
  "Civil & MEP",
  "HVAC Systems",
  "Sand Blasting",
  "Protective Coating",
  "Industrial Painting",
];

export function PSI() {
  return (
    <section id="psi" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Parent Company"
          title="Projects and Supplies Investment LLC"
          subtitle="Excellence in the Supply of Medical Consumables, Hardware, and Industrial Solutions in Oman"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">
          Projects and Supplies Investment LLC is a leading provider of comprehensive supply solutions and industrial
          contracting services across the Sultanate of Oman. With years of industry experience, we have established
          ourselves as a trusted partner for businesses seeking reliable supply chains and professional services.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ServiceCard icon={Boxes} title="Supply Services" items={supply} />
          <ServiceCard icon={HardHat} title="Contracting Services" items={contracting} />
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#contact">
              Know More About PSI <ArrowRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 text-xl font-bold">{title}</h3>
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent-foreground">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="font-medium text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
