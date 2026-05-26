import Image from "next/image";
import MossitosMenuSection from "@/components/menu/MossitosMenuSection";

export const metadata = {
  title: "Menú — Café Mossitos",
  description: "Explora nuestro menú: café de especialidad peruano, pasteles frescos, sanguches artesanales y bebidas frías. En Surco, Lima.",
};

export default function MenuPage() {
  return (
    <div className="bg-linen min-h-screen">
      {/* ── Hero header ── */}
      <div className="relative h-64 md:h-80 flex items-end overflow-hidden">
        <Image
          src="/images/hero-interior.webp"
          alt="Café Mossitos — menú"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss/90 via-moss/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10 w-full">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-linen leading-tight mb-2">
            Nuestro Menú
          </h1>
          <p className="font-body text-linen/70 text-base max-w-xl leading-relaxed">
            Ingredientes de origen único, preparación artesanal. Algo para cada momento del día.
          </p>
        </div>
      </div>

      {/* ── Menu content ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <MossitosMenuSection />
      </div>
    </div>
  );
}
