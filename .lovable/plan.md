
## Medipro by PSI — Website Plan

A premium, trust-forward medical supplier site for Oman. Clean corporate medical aesthetic: white base, medical red primary, soft green accent.

### Design system
- Palette (tokens in `src/styles.css`, oklch):
  - background: white, foreground: deep slate
  - primary: medical red (~oklch(0.55 0.18 25))
  - accent: soft medical green (~oklch(0.72 0.12 155))
  - muted/border: cool gray tints
- Typography: Inter-alternative pairing — `Plus Jakarta Sans` (headings) + `Inter` (body) via Google Fonts link in `__root.tsx`.
- Radius: 0.75rem. Subtle shadows, generous spacing, thin separators.
- Motion: Framer Motion fade/slide-in on scroll, smooth-scroll anchor nav, button hover lift, logo grayscale→color on hover.

### Routing
Single landing page with in-page anchor sections (Home, About, PSI, Brands, Contact) — matches the requested nav and content scope. Smooth scroll via `scroll-behavior: smooth` + anchor IDs.

Files:
- `src/routes/index.tsx` — replaces placeholder, composes all sections + sets SEO meta (title, description, og tags, JSON-LD Organization).
- `src/routes/__root.tsx` — add Google Fonts link, keep shell.

### Components (`src/components/site/`)
- `Navbar.tsx` — sticky, blurred white bg, logo placeholder, links, mobile sheet menu, "Get in Touch" CTA.
- `Hero.tsx` — heading, subheading, two CTAs, trust badges (ISO Certified, Quality Assured, Fast Delivery) with Lucide icons (ShieldCheck, BadgeCheck, Truck), abstract medical visual (layered SVG shapes + placeholder image slot).
- `About.tsx` — title/subtitle, two-column copy + feature bullets with check icons.
- `PSI.tsx` — title/subtitle, intro copy, two service cards (Supply / Contracting) with icon lists, "Know More About PSI" button.
- `WhyChoose.tsx` — 4 feature cards (Certified, Expert, Quick Response, Competitive) with icons.
- `Products.tsx` — 8 category cards in responsive grid (Stethoscope, Syringe, HeartPulse, Microscope, FileText, Wrench, Wind, PaintBucket icons).
- `Brands.tsx` — "Brands We Have" grid of 8–12 placeholder logo tiles (greyscale → color on hover). Easy to swap via a `brands` array of `{ name, src }`.
- `Contact.tsx` — two-column: contact info card (address, phone, email, hours) + form (shadcn Input/Textarea/Select, react-hook-form + zod, UI-only with success toast via sonner).
- `Footer.tsx` — logo, description, quick links, contact info, bottom credit line.
- `LogoPlaceholder.tsx` — reusable component renders a labeled placeholder box (for Medipro, PSI, and brands) so swapping to real images is one prop change.
- `SectionHeading.tsx` — shared title/subtitle styling.

All copy used verbatim from the brief.

### Responsiveness & polish
- Mobile: hamburger sheet menu, single-column stacks, tap-friendly buttons.
- Tablet: 2-col grids.
- Desktop: 3–4 col grids, max-width 1200px containers.
- Hover: card lift + border color shift to primary; button micro-interactions; logo desaturate.
- Accessibility: semantic landmarks, single H1 in Hero, alt text on placeholders, focus-visible rings.

### SEO
- Title: "Medipro by PSI — Medical Supplies & Healthcare Equipment in Oman" (<60 chars)
- Meta description (<160 chars), og tags, twitter card, JSON-LD Organization with address/phone/email.

### Out of scope (not requested)
- No backend, no real form submit, no Lovable Cloud, no auth, no DB.
- Brand and company logos are placeholders, structured for easy swap.

### Technical notes
- Add Framer Motion: `bun add framer-motion`.
- Tokens added to `src/styles.css` (`--primary` red, `--accent` green) — components use semantic classes only (`bg-primary`, `text-accent`, etc.), no raw hex.
- Use existing shadcn `button`, `card`, `input`, `textarea`, `select`, `sheet`, `sonner`.
