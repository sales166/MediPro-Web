import { Phone, Mail, MapPin } from "lucide-react";
import { LogoPlaceholder } from "./LogoPlaceholder";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#psi", label: "PSI" },
  { href: "#brands", label: "Companies" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <LogoPlaceholder />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Medipro by PSI – Medical Supply Division of PSI LLC. Your trusted partner for comprehensive healthcare
            equipment and supplies across the Sultanate of Oman.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              +968 97409370
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              mediprobypsi@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              P.O Box 111, Sultanate of Oman
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <div>© 2025 Medipro by PSI. All rights reserved.</div>
          <div>Developed by Dotgen</div>
        </div>
      </div>
    </footer>
  );
}
