"use client";

import { categories } from "@/lib/data/categories";
import { cn } from "@/lib/utils";

interface MenuFiltersProps {
  activeCategory: string;
  onSelect: (id: string) => void;
}

const allOption = { id: "all", label: "TODO", color: "#1C1208", emoji: "✨" };

export default function MenuFilters({ activeCategory, onSelect }: MenuFiltersProps) {
  const options = [allOption, ...categories];

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-3"
      aria-label="Filtrar por categoría"
    >
      {options.map(({ id, label, color, emoji }) => {
        const isActive = activeCategory === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-btn font-body text-sm font-semibold",
              "border-2 transition-all duration-200 ease-out active:scale-95",
              isActive
                ? "text-cream shadow-md scale-105"
                : "bg-transparent text-chocolate-light border-cream-border hover:border-chocolate-muted hover:text-chocolate"
            )}
            style={
              isActive
                ? { backgroundColor: color, borderColor: color }
                : {}
            }
            aria-pressed={isActive}
          >
            <span aria-hidden="true">{emoji}</span>
            {label}
          </button>
        );
      })}
    </nav>
  );
}
