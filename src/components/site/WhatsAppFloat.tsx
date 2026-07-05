import { MessageCircle } from "lucide-react";

const whatsappHref =
  "https://wa.me/+96895089578?text=Hello%20Medipro%20by%20PSI%2C%20I%20need%20help%20with%20medical%20supplies.";

export function WhatsAppFloat() {
  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-premium transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-4 w-4" />
        </span>
        <span className="pr-1">WhatsApp Us</span>
      </a>
    </div>
  );
}