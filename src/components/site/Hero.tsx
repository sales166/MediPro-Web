import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: BadgeCheck, label: "Certified Sourcing" },
  { icon: ShieldCheck, label: "Clinical-Grade Quality" },
  { icon: Truck, label: "Reliable Oman Delivery" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-border"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.76),rgb(255_255_255_/_0.94)_56%,rgb(255_255_255))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white/75 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-[0_10px_30px_-24px_rgb(20_24_39_/_0.45)] backdrop-blur">
            Trusted healthcare supply partner
          </div>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.03] text-foreground sm:text-5xl lg:text-6xl">
            Premium medical supply solutions for{" "}
            <span className="text-primary">modern healthcare</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Medipro by PSI delivers certified consumables, disposable items, and responsive procurement support to hospitals,
            clinics, and healthcare teams across Oman.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-6 shadow-premium">
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            {/* <Button asChild size="lg" variant="outline" className="rounded-full border-primary/20 bg-white/70 px-6 backdrop-blur hover:bg-white">
              <a href="#brands">View Partner Companies</a>
            </Button> */}
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-border/80 bg-white/65 px-3 py-3 text-sm text-muted-foreground shadow-card backdrop-blur">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-foreground">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-semibold leading-snug text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative hidden lg:block mt-12 lg:mt-0"
        >
          <div className="relative -top-16 mx-auto w-full max-w-xl overflow-hidden rounded-[2rem]">
            <img
              src="/Landing.png"
              alt="MediPro Healthcare Solutions"
              className="w-full h-auto rounded-[1.75rem] object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

