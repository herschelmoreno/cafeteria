import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery-cafe-rincon.webp",
    alt: "Rincón acogedor del café",
  },
  {
    src: "/images/espresso-doble.webp",
    alt: "Espresso recién extraído",
  },
  {
    src: "/images/latte-vainilla.webp",
    alt: "Arte en el latte",
  },
  {
    src: "/images/club-sandwich.webp",
    alt: "Sanguches artesanales del día",
  },
  {
    src: "/images/cinnamon-roll.webp",
    alt: "Vitrina de pasteles frescos",
  },
  {
    src: "/images/cold-brew.webp",
    alt: "Cold brew en preparación",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-linen-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-12">
          <span className="inline-block font-body text-xs font-semibold text-terra uppercase tracking-widest mb-4">
            El local
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-moss leading-tight">
            Un vistazo al Pasaje San Bernardo
          </h2>
        </div>

        {/* 3x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-card overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-moss/0 group-hover:bg-moss/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Values row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-linen-border">
          {[
            { value: "5+", label: "años en Surco", emoji: "🌿" },
            { value: "12", label: "orígenes de café", emoji: "☕" },
            { value: "50K+", label: "tazas por mes", emoji: "🫶" },
            { value: "100%", label: "comercio justo", emoji: "🤝" },
          ].map(({ value, label, emoji }) => (
            <div key={label} className="text-center flex flex-col items-center gap-2">
              <span className="text-3xl" aria-hidden="true">{emoji}</span>
              <span className="font-display font-bold text-3xl text-moss">{value}</span>
              <span className="font-body text-sm text-moss-light">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
