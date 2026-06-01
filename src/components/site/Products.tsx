import {
  Syringe,
  Stethoscope,
  HeartPulse,
  Microscope,
  FileText,
  Wrench,
  Wind,
  PaintBucket,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { icon: Syringe, title: "Medical Consumables", desc: "Sterile supplies for daily clinical use." },
  { icon: Stethoscope, title: "Healthcare Equipment", desc: "Reliable tools for diagnosis and care." },
  { icon: HeartPulse, title: "Hospital Supplies", desc: "Comprehensive inventory for facilities." },
  { icon: Microscope, title: "Diagnostic Supplies", desc: "Lab and diagnostic essentials." },
  { icon: FileText, title: "Office Stationery", desc: "Stationery and admin supplies." },
  { icon: Wrench, title: "Industrial Hardware", desc: "Hardware and tooling solutions." },
  { icon: Wind, title: "MEP & HVAC Solutions", desc: "Mechanical and HVAC services." },
  { icon: PaintBucket, title: "Protective Coating Services", desc: "Industrial coating and painting." },
];

export function Products() {
  return (
    <section id="products" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title="Products & Solutions"
          subtitle="A complete supply portfolio for healthcare, commercial, and industrial sectors."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
