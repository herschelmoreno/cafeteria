export type ProductCategory = "coffee" | "drinks" | "tea" | "bakery";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  emoji: string;
  circleColor: string;
  featured: boolean;
  tags: string[];
};

export const products: Product[] = [
  // ── Coffee ──────────────────────────────
  {
    id: "nutella-mudslide",
    name: "Nutella Mudslide",
    description: "Rich chocolate-hazelnut shake with whipped cream, cocoa drizzle and a fresh cherry.",
    price: 30,
    category: "coffee",
    emoji: "🍫",
    circleColor: "#E07B54",
    featured: true,
    tags: ["popular", "chocolate", "cold"],
  },
  {
    id: "caramel-frappuccino",
    name: "Caramel Frappuccino",
    description: "Blended ice coffee with golden caramel swirls and a crown of fresh cream.",
    price: 40,
    category: "coffee",
    emoji: "🥤",
    circleColor: "#D4A017",
    featured: true,
    tags: ["popular", "cold", "sweet"],
  },
  {
    id: "hot-chocolate",
    name: "Hot Chocolate",
    description: "Velvety Belgian cocoa with steamed milk, served in a warmed ceramic cup.",
    price: 35,
    category: "coffee",
    emoji: "☕",
    circleColor: "#C96A30",
    featured: true,
    tags: ["warm", "cozy", "classic"],
  },
  {
    id: "espresso-macchiato",
    name: "Espresso Macchiato",
    description: "A bold single-origin shot marked with a cloud of steamed milk foam.",
    price: 25,
    category: "coffee",
    emoji: "☕",
    circleColor: "#7A8B52",
    featured: false,
    tags: ["strong", "classic"],
  },
  // ── Drinks ──────────────────────────────
  {
    id: "mango-smoothie",
    name: "Mango Smoothie",
    description: "Sun-ripened mangoes blended with coconut milk and a squeeze of lime.",
    price: 32,
    category: "drinks",
    emoji: "🥭",
    circleColor: "#D4A017",
    featured: false,
    tags: ["fruity", "tropical", "fresh"],
  },
  {
    id: "berry-blast",
    name: "Berry Blast",
    description: "Açaí, blueberry and raspberry in a deep purple blend with vanilla.",
    price: 38,
    category: "drinks",
    emoji: "🫐",
    circleColor: "#3A8B7A",
    featured: false,
    tags: ["fruity", "healthy", "antioxidant"],
  },
  {
    id: "sparkling-lemonade",
    name: "Sparkling Lemonade",
    description: "Hand-squeezed lemons, sparkling spring water and fresh garden mint.",
    price: 22,
    category: "drinks",
    emoji: "🍋",
    circleColor: "#E07B54",
    featured: false,
    tags: ["refreshing", "cold", "citrus"],
  },
  {
    id: "avocado-shake",
    name: "Avocado Shake",
    description: "Creamy Hass avocado blended with whole milk, honey and a pinch of sea salt.",
    price: 42,
    category: "drinks",
    emoji: "🥑",
    circleColor: "#7A8B52",
    featured: false,
    tags: ["healthy", "creamy", "wholesome"],
  },
  // ── Tea ─────────────────────────────────
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked to a foam with warm oat milk and local honey.",
    price: 36,
    category: "tea",
    emoji: "🍵",
    circleColor: "#7A8B52",
    featured: false,
    tags: ["healthy", "earthy", "japanese"],
  },
  {
    id: "chai-masala",
    name: "Chai Masala",
    description: "Cardamom, ginger, cinnamon and clove brewed with Assam tea and full-cream milk.",
    price: 28,
    category: "tea",
    emoji: "🫖",
    circleColor: "#B84A3A",
    featured: false,
    tags: ["spiced", "warm", "aromatic"],
  },
  // ── Bakery ──────────────────────────────
  {
    id: "butter-croissant",
    name: "Butter Croissant",
    description: "Flaky, golden layers made with slow-fermented dough and cultured French butter.",
    price: 18,
    category: "bakery",
    emoji: "🥐",
    circleColor: "#D4A017",
    featured: false,
    tags: ["fresh", "pastry", "buttery"],
  },
  {
    id: "chocolate-fondant",
    name: "Chocolate Fondant",
    description: "Warm dark-chocolate cake with a molten ganache center and vanilla bean gelato.",
    price: 45,
    category: "bakery",
    emoji: "🎂",
    circleColor: "#C47A8A",
    featured: false,
    tags: ["decadent", "dessert", "warm"],
  },
];

export const featuredProducts = products.filter((p) => p.featured);
