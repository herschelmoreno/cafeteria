import Link from "next/link";
import { categories } from "@/lib/data/categories";

export default function CategorySidebar() {
  return (
    <aside className="flex flex-row md:flex-col items-center justify-center gap-5 md:gap-6">
      {categories.map(({ id, label, color, emoji }, i) => (
        <Link
          key={id}
          href={`/menu?category=${id}`}
          className="flex flex-col items-center gap-2 group"
          aria-label={`Ver ${label}`}
        >
          {/* Colored circle */}
          <div
            className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center
                       text-2xl shadow-md
                       transition-all duration-300 ease-out
                       group-hover:scale-110 group-hover:shadow-lg
                       animate-fade-up"
            style={{
              backgroundColor: color,
              animationDelay: `${0.1 + i * 0.1}s`,
            }}
          >
            <span aria-hidden="true">{emoji}</span>
          </div>
          {/* Label */}
          <span
            className="font-body text-[10px] font-semibold tracking-widest text-chocolate-light
                       group-hover:text-chocolate transition-colors duration-200
                       animate-fade-up"
            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
          >
            {label}
          </span>
        </Link>
      ))}
    </aside>
  );
}
