import { SectionHeading } from "./SectionHeading";

const brands = [
  { name: "Brand 01", src: "/Brands/01.png" },
  { name: "Brand 02", src: "/Brands/02.png" },
  { name: "Brand 03", src: "/Brands/06.png" },
  { name: "Brand 03 Alternate", src: "/Brands/03.png" },
  { name: "Brand 04", src: "/Brands/04.jpeg" },
  { name: "Brand 05", src: "/Brands/05.jpeg" },
  { name: "Brand 08", src: "/Brands/08.jpg" },
  { name: "Brand 09", src: "/Brands/09.jpeg" },
];

export function Brands() {
  return (
    <section id="brands" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Brands We Have"
          subtitle="We are proud to be official dealers and partners of trusted healthcare brands."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((b) => (
            <div
              key={b.src}
              className="flex h-20 items-center justify-center rounded-md border border-border bg-card p-3 grayscale transition hover:border-primary/40 hover:grayscale-0 sm:h-24"
            >
              <img src={b.src} alt={b.name} className="max-h-full max-w-full object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
