import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  variant?: "primary" | "neutral" | "brand";
  className?: string;
};

export function LogoPlaceholder({ label = "Medipro by PSI", variant = "primary", className }: Props) {
  if (variant === "brand") {
    return (
      <div
        className={cn(
          "flex h-16 w-full items-center justify-center rounded-md border border-border bg-card px-4 text-xs font-medium uppercase tracking-widest text-muted-foreground grayscale transition hover:grayscale-0 hover:border-primary/40 hover:text-foreground",
          className,
        )}
        aria-label={`${label} logo placeholder`}
      >
        {label}
      </div>
    );
  }

  const accent = variant === "primary" ? "text-primary" : "text-foreground";
  return (
    <div className={cn("flex items-center gap-2", className)} aria-label={`${label} logo`}>
      <span className={cn("inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10", accent)}>
        <Activity className="h-5 w-5" strokeWidth={2.5} />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-bold tracking-tight">Medipro</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">by PSI</span>
      </span>
    </div>
  );
}
