"use client";

import { useState } from "react";
import MenuFilters from "@/components/menu/MenuFilters";
import MenuGrid from "@/components/menu/MenuGrid";

interface MenuSectionProps {
  initialCategory?: string;
}

export default function MenuSection({ initialCategory = "all" }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  return (
    <div className="flex flex-col gap-12">
      <MenuFilters activeCategory={activeCategory} onSelect={setActiveCategory} />
      <MenuGrid category={activeCategory} />
    </div>
  );
}
