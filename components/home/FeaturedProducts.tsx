import Link from "next/link";
import CircleImage from "@/components/ui/CircleImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProducts } from "@/lib/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-cream py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <SectionHeading
            title="Nuestros Favoritos"
            subtitle="Selección de la casa — los sabores que todos piden."
          />
          <Link
            href="/menu"
            className="link-underline font-body text-sm font-semibold text-chocolate-light
                       hover:text-chocolate transition-colors shrink-0"
          >
            Ver todo el menú →
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-16">
          {featuredProducts.map((product, i) => (
            <Link
              key={product.id}
              href={`/menu`}
              className="group flex flex-col items-center text-center gap-4
                         transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Circle image with hover scale */}
              <div
                className="transition-transform duration-300 group-hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <CircleImage
                  color={product.circleColor}
                  emoji={product.emoji}
                  alt={product.name}
                  size="lg"
                />
              </div>

              {/* Name */}
              <h3
                className="font-display font-bold text-xl text-chocolate leading-snug
                           animate-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.15}s` }}
              >
                {product.name}
              </h3>

              {/* Price */}
              <span
                className="font-body font-semibold text-coral text-lg animate-fade-up"
                style={{ animationDelay: `${0.2 + i * 0.15}s` }}
              >
                ${product.price.toFixed(2)}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
