import ProductCard from "@/components/menu/ProductCard";
import { products } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/data/products";

interface MenuGridProps {
  category: string;
}

export default function MenuGrid({ category }: MenuGridProps) {
  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === (category as ProductCategory));

  if (filtered.length === 0) {
    return (
      <div className="text-center py-24 text-chocolate-muted font-body">
        <span className="text-5xl block mb-4">🫙</span>
        No hay productos en esta categoría todavía.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
