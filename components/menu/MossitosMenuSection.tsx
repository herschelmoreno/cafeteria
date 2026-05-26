"use client";

import { useState } from "react";
import { menuItems, MenuCategory } from "@/lib/data/mossitos-menu";
import MenuItemCard from "@/components/menu/MenuItemCard";

const categories: { id: MenuCategory | "Todos"; label: string; emoji: string }[] = [
  { id: "Todos",         label: "Todos",         emoji: "🍽️" },
  { id: "Café Expreso",  label: "Café Expreso",  emoji: "☕" },
  { id: "Pasteles",      label: "Pasteles",      emoji: "🥐" },
  { id: "Sanguches",     label: "Sanguches",     emoji: "🥪" },
  { id: "Bebidas Frías", label: "Bebidas Frías", emoji: "🧃" },
];

interface Props {
  initialCategory?: string;
}

export default function MossitosMenuSection({ initialCategory = "Todos" }: Props) {
  const [active, setActive] = useState<string>(initialCategory);

  const filtered =
    active === "Todos"
      ? menuItems
      : menuItems.filter((item) => item.categoria === active);

  return (
    <div>
      {/* ── Category tabs ── */}
      <nav
        role="navigation"
        aria-label="Filtrar por categoría"
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map(({ id, label, emoji }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium border transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-moss text-linen border-moss shadow-md scale-105"
                  : "bg-linen text-moss border-linen-border hover:border-moss/40 hover:bg-linen-deeper"
              }`}
            >
              <span aria-hidden="true">{emoji}</span>
              {label}
            </button>
          );
        })}
      </nav>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <span className="text-5xl mb-4 block" aria-hidden="true">🫙</span>
          <p className="font-body text-moss-muted text-base">
            No hay productos en esta categoría todavía.
          </p>
        </div>
      )}
    </div>
  );
}
