import Image from "next/image";
import { MenuItem } from "@/lib/data/mossitos-menu";

const badgeColors: Record<string, string> = {
  "Popular": "bg-gold-pale text-moss border border-gold/30",
  "Favorito de la casa": "bg-terra-pale text-terra border border-terra/20",
  "Nuevo": "bg-moss-pale text-moss border border-moss/20",
};

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="group bg-linen rounded-card overflow-hidden border border-linen-border/60 hover:border-moss/30 hover:shadow-lg transition-all duration-300">
      {/* Image — 4:3 ratio */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.imagen}
          alt={item.nombre}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        {item.insigna && (
          <span className={`absolute top-3 left-3 text-[10px] font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColors[item.insigna] ?? ""}`}>
            {item.insigna}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-moss text-lg leading-tight mb-1.5">
          {item.nombre}
        </h3>
        <p className="font-body text-sm text-moss-light leading-relaxed line-clamp-2 mb-4">
          {item.descripcion}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-xl text-terra">
            S/ {item.precio.toFixed(2)}
          </span>
          <button
            type="button"
            aria-label={`Añadir ${item.nombre}`}
            className="w-9 h-9 rounded-full bg-moss text-linen flex items-center justify-center hover:bg-terra transition-colors duration-200 hover:scale-110 active:scale-95"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
