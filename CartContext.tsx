import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, PartyPackage } from "@/data/products";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  type: "product" | "package";
  weight?: string;
}

interface CartContextType {
  items: CartItem[];
  addProduct: (product: Product, weight: string, price: number) => void;
  addPackage: (pkg: PartyPackage) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("homemate-cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("homemate-cart", JSON.stringify(items));
  }, [items]);

  const addProduct = (product: Product, weight: string, price: number) => {
    const cartId = `${product.id}-${weight}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.id === cartId);
      if (existing) {
        return prev.map((i) => i.id === cartId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: cartId, name: product.name, price, image: product.image, quantity: 1, type: "product", weight }];
    });
  };

  const addPackage = (pkg: PartyPackage) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === pkg.id);
      if (existing) {
        return prev.map((i) => i.id === pkg.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: pkg.id, name: pkg.name, price: pkg.price, image: pkg.image, quantity: 1, type: "package" }];
    });
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return removeItem(id);
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity } : i));
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addProduct, addPackage, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
};
