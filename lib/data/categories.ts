export type Category = {
  id: string;
  label: string;
  color: string;
  lightColor: string;
  emoji: string;
};

export const categories: Category[] = [
  {
    id: "coffee",
    label: "COFFEE",
    color: "#7A8B52",
    lightColor: "#9AAD6A",
    emoji: "☕",
  },
  {
    id: "drinks",
    label: "DRINKS",
    color: "#3A8B7A",
    lightColor: "#4BA898",
    emoji: "🥤",
  },
  {
    id: "tea",
    label: "TEA",
    color: "#B84A3A",
    lightColor: "#D06050",
    emoji: "🍵",
  },
  {
    id: "bakery",
    label: "BAKERY",
    color: "#C47A8A",
    lightColor: "#D8919F",
    emoji: "🧁",
  },
];
