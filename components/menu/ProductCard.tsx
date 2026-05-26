import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";
import CircleImage from "@/components/ui/CircleImage";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { name, description, price, emoji, circleColor, tags } = product;

  return (
    <article
      className={cn(
        "group relative flex flex-col items-center text-center",
        "bg-cream-dark rounded-card shadow-sm border border-cream-border/40",
        "pt-14 pb-7 px-5",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-2 hover:shadow-xl hover:border-cream-border",
        className
      )}
    >
      {/* Circle image — floats above card top edge */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
        <CircleImage
          color={circleColor}
          emoji={emoji}
          alt={name}
          size="md"
        />
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1.5 mb-3">
          {tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-body font-semibold uppercase tracking-wider
                         text-chocolate-muted bg-cream-deeper px-2.5 py-0.5 rounded-btn"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Name */}
      <h3 className="font-display font-bold text-lg text-chocolate leading-snug mb-2">
        {name}
      </h3>

      {/* Description */}
      <p className="font-body text-xs text-chocolate-muted leading-relaxed mb-5 line-clamp-2">
        {description}
      </p>

      {/* Price + Add button */}
      <div className="flex items-center justify-between w-full mt-auto">
        <span className="font-display font-bold text-xl text-chocolate">
          ${price.toFixed(2)}
        </span>
        <button
          type="button"
          className="w-9 h-9 rounded-full bg-chocolate text-cream flex items-center justify-center
                     transition-all duration-200 hover:bg-coral hover:scale-110 active:scale-95"
          aria-label={`Agregar ${name} al pedido`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      </div>
    </article>
  );
}
