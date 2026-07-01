import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, ShieldCheck, Truck, HeartPulse, Stethoscope, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: BadgeCheck, label: "Quality Assured" },
  { icon: Truck, label: "Fast Delivery" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.white/0),theme(colors.white))]" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Trusted across Oman
          </div> */}
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Trusted Partner in{" "}
            <span className="text-primary">Medical Supply</span> Solutions
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Delivering premium quality medical consumables and supplies to healthcare facilities across Oman.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <a href="#products">Explore Products</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative hidden lg:block"
          aria-hidden
        >
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/10 via-white to-accent/10 shadow-elegant" />
            <div className="absolute inset-6 rounded-[1.75rem] border border-border bg-white/80 backdrop-blur-sm" />

            <FloatCard className="left-6 top-10" delay={0.2}>
              <Stethoscope className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Equipment</div>
                <div className="text-sm font-bold">Diagnostic Tools</div>
              </div>
            </FloatCard>

            <FloatCard className="right-6 top-32" delay={0.35}>
              <HeartPulse className="h-6 w-6 text-primary" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Monitoring</div>
                <div className="text-sm font-bold">Patient Care</div>
              </div>
            </FloatCard>

            <FloatCard className="bottom-12 left-10" delay={0.5}>
              <Syringe className="h-6 w-6 text-accent-foreground" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Consumables</div>
                <div className="text-sm font-bold">Sterile Supplies</div>
              </div>
            </FloatCard>

            <div className="absolute bottom-8 right-8 rounded-2xl bg-primary px-5 py-4 text-primary-foreground shadow-elegant">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-xs font-medium uppercase tracking-wider opacity-90">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute flex items-center gap-3 rounded-xl border border-border bg-white px-4 py-3 shadow-card ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
