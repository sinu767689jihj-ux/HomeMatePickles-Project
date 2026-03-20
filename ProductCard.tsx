import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addProduct } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(0);

  const currentWeight = product.weights[selectedWeight];

  const handleAdd = () => {
    addProduct(product, currentWeight.weight, currentWeight.price);
    toast.success(`${product.name} (${currentWeight.weight}) added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isVeg && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
            🌿 Veg
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-display font-semibold text-foreground">{product.name}</h3>
          <div className="flex items-center gap-1 text-amber">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mb-1">by {product.vendor}</p>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{product.description}</p>

        {/* Weight selector */}
        <div className="flex gap-1.5 mb-3">
          {product.weights.map((w, i) => (
            <button
              key={w.weight}
              onClick={() => setSelectedWeight(i)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                selectedWeight === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-secondary-foreground border-border hover:border-primary/40"
              }`}
            >
              {w.weight}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="font-display font-bold text-lg text-foreground">₹{currentWeight.price}</span>
            <span className="text-xs text-muted-foreground ml-1">/ {currentWeight.weight}</span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
