import { cn } from "@/lib/utils";

type Props = {
  label?: string;
  variant?: "primary" | "neutral" | "brand";
  className?: string;
  imageClassName?: string;
};

export function LogoPlaceholder({
  label = "Medipro by PSI",
  variant = "primary",
  className,
  imageClassName,
}: Props) {
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

  return (
    <div className={cn("flex items-center", className)} aria-label={`${label} logo`}>
      <img
        src="/MediPro%20Logo.png"
        alt={label}
        className={cn("h-10 w-auto object-contain", imageClassName)}
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
