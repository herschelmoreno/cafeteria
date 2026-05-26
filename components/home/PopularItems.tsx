import Image from "next/image";
import Link from "next/link";
import { popularItems } from "@/lib/data/mossitos-menu";
import SectionHeading from "@/components/ui/SectionHeading";

export default function PopularItems() {
  const items = popularItems.slice(0, 4);

  return (
    <section className="bg-linen py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Los Más Pedidos"
            subtitle="Lo que nuestros vecinos eligen una y otra vez."
          />
          <Link
            href="/menu"
            className="font-body text-sm font-medium text-terra hover:text-terra-light transition-colors duration-150 flex items-center gap-1.5 shrink-0"
          >
            Ver todo el menú
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <article
              key={item.id}
              className="group bg-linen-dark rounded-card overflow-hidden border border-linen-border/60 hover:border-moss/30 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.imagen}
                  alt={item.nombre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {item.insigna && (
                  <span className="absolute top-3 left-3 bg-gold text-moss text-[10px] font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {item.insigna}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="font-body text-xs text-moss-muted uppercase tracking-widest">
                  {item.categoria}
                </span>
                <h3 className="font-display font-bold text-moss text-lg mt-1 leading-tight">
                  {item.nombre}
                </h3>
                <p className="font-body text-sm text-moss-light mt-2 leading-relaxed line-clamp-2">
                  {item.descripcion}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-display font-bold text-xl text-terra">
                    S/ {item.precio.toFixed(2)}
                  </span>
                  <Link
                    href="/menu"
                    className="text-xs font-body font-medium text-moss hover:text-terra transition-colors duration-150"
                  >
                    Ver más →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
