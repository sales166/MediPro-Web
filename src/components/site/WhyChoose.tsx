import { Award, Users, Zap, Wallet } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Award,
    title: "Certified Products",
    desc: "All our products are certified and comply with international medical standards and regulations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced professionals dedicated to providing exceptional service and technical support.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Fast turnaround times for orders and immediate support for urgent medical supply requirements.",
  },
  {
    icon: Wallet,
    title: "Competitive Prices",
    desc: "Best value for money with transparent pricing and flexible payment options.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Medipro by PSI"
          subtitle="Your Success is Our Priority"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
