import mangoPickle from "@/assets/mango-pickle.jpg";
import lemonPickle from "@/assets/lemon-pickle.jpg";
import mixedPickle from "@/assets/mixed-pickle.jpg";
import murukku from "@/assets/murukku.jpg";
import mixture from "@/assets/mixture.jpg";
import bananaChips from "@/assets/banana-chips.jpg";
import biryani from "@/assets/biryani.jpg";
import vegThali from "@/assets/veg-thali.jpg";
import birthdayPack from "@/assets/birthday-pack.jpg";
import mealsPack from "@/assets/meals-pack.jpg";
import snacksPack from "@/assets/snacks-pack.jpg";

export interface WeightOption {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weights: WeightOption[];
  image: string;
  category: "pickles" | "snacks" | "meals" | "party-packs";
  rating: number;
  vendor: string;
  isVeg: boolean;
  unit?: string; // "g" for grams, "plate" for meals
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mango Pickle",
    description: "Traditional homemade mango pickle with authentic spices, sun-dried for the perfect taste.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: mangoPickle,
    category: "pickles",
    rating: 4.8,
    vendor: "Amma's Kitchen",
    isVeg: true,
  },
  {
    id: "2",
    name: "Lemon Pickle",
    description: "Tangy and spicy lemon pickle made with love, perfect with rice and dal.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: lemonPickle,
    category: "pickles",
    rating: 4.6,
    vendor: "Grandma's Recipes",
    isVeg: true,
  },
  {
    id: "3",
    name: "Mixed Vegetable Pickle",
    description: "A delightful mix of seasonal vegetables pickled to perfection.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: mixedPickle,
    category: "pickles",
    rating: 4.5,
    vendor: "HomeMate Special",
    isVeg: true,
  },
  {
    id: "4",
    name: "Murukku",
    description: "Crispy, crunchy rice flour murukku — the perfect tea-time snack.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: murukku,
    category: "snacks",
    rating: 4.7,
    vendor: "Amma's Kitchen",
    isVeg: true,
  },
  {
    id: "5",
    name: "Mixture",
    description: "South Indian style mixture with peanuts, dal, and crispy noodles.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: mixture,
    category: "snacks",
    rating: 4.4,
    vendor: "Grandma's Recipes",
    isVeg: true,
  },
  {
    id: "6",
    name: "Banana Chips",
    description: "Thin, crispy banana chips fried in coconut oil — Kerala's favorite!",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: bananaChips,
    category: "snacks",
    rating: 4.9,
    vendor: "HomeMate Special",
    isVeg: true,
  },
  {
    id: "7",
    name: "Chicken Biryani",
    description: "Aromatic dum biryani with tender chicken, layered with fragrant basmati rice.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: biryani,
    category: "meals",
    rating: 4.8,
    vendor: "Amma's Kitchen",
    isVeg: false,
  },
  {
    id: "8",
    name: "Veg Thali",
    description: "Complete vegetarian meal with rice, dal, sabzi, roti, and dessert.",
    price: 100,
    weights: [{ weight: "500g", price: 100 }, { weight: "1kg", price: 200 }, { weight: "2kg", price: 400 }],
    image: vegThali,
    category: "meals",
    rating: 4.6,
    vendor: "Grandma's Recipes",
    isVeg: true,
  },
];

export interface PartyPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  items: string[];
  serves: string;
  emoji: string;
}

export const partyPackages: PartyPackage[] = [
  {
    id: "pp1",
    name: "Birthday Party Pack",
    description: "Everything you need for a memorable birthday celebration with homemade goodness.",
    price: 2999,
    image: birthdayPack,
    items: ["Biryani (serves 10)", "Paneer Tikka", "Gulab Jamun", "Raita", "Salad", "Drinks"],
    serves: "10-15 people",
    emoji: "🥳",
  },
  {
    id: "pp2",
    name: "Homemade Meals Pack",
    description: "Wholesome home-cooked meals delivered with warmth and love.",
    price: 1499,
    image: mealsPack,
    items: ["Rice", "Dal Fry", "Mixed Sabzi", "Roti (10)", "Pickle", "Papad"],
    serves: "5-7 people",
    emoji: "🍛",
  },
  {
    id: "pp3",
    name: "Pickles & Snacks Pack",
    description: "A curated box of homemade pickles and crispy snacks — perfect for gifting!",
    price: 899,
    image: snacksPack,
    items: ["Mango Pickle", "Lemon Pickle", "Murukku", "Mixture", "Banana Chips"],
    serves: "Gift box",
    emoji: "🫙",
  },
];
