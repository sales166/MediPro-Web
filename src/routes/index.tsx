import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { PSI } from "@/components/site/PSI";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Products } from "@/components/site/Products";
import { Brands } from "@/components/site/Brands";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const title = "Medipro by PSI — Medical Supplies in Oman";
const description =
  "Premium medical equipment, consumables, and healthcare supplies for hospitals and clinics across the Sultanate of Oman.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Medipro by PSI",
          legalName: "Projects and Supplies Investment LLC",
          email: "mediprobypsi@gmail.com",
          telephone: "+968 97409370",
          address: {
            "@type": "PostalAddress",
            postOfficeBoxNumber: "111",
            postalCode: "111",
            addressCountry: "OM",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PSI />
        <WhyChoose />
        <Products />
        <Brands />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
