import Image from "next/image";
import FoundersSection from "@/components/about/FoundersSection";
import GallerySection from "@/components/about/GallerySection";

export const metadata = {
  title: "Nosotros — Café Mossitos",
  description: "Conoce la historia de Ana Sofía y Diego, los fundadores de Café Mossitos en Santiago de Surco, Lima.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── Hero banner ── */}
      <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="/images/about-hero.webp"
          alt="Café Mossitos — interior"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss/85 via-moss/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-10 w-full">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-linen leading-tight">
            Nuestra Historia
          </h1>
          <p className="font-body text-linen/70 text-base mt-2">
            El café que nació de un pasaje con musgo en Santiago de Surco.
          </p>
        </div>
      </div>

      <FoundersSection />
      <GallerySection />
    </>
  );
}
