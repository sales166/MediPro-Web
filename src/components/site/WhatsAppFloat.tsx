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
        className="pointer-events-auto inline-flex items-center rounded-full border border-[#027b84]/20 bg-[#027b84] p-3 sm:gap-2 sm:px-4 sm:py-3 text-sm font-semibold text-white shadow-premium transition-all hover:-translate-y-0.5 hover:bg-[#026b73] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#027b84] focus-visible:ring-offset-2"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <MessageCircle className="h-4 w-4" />
        </span>
        <span className="hidden pr-1 sm:inline">WhatsApp Us</span>
      </a>
    </div>
  );
}
