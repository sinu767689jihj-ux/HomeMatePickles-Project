import { partyPackages } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, Users, Check } from "lucide-react";
import { toast } from "sonner";

const Packages = () => {
  const { addPackage } = useCart();

  const handleAdd = (pkg: typeof partyPackages[0]) => {
    addPackage(pkg);
    toast.success(`${pkg.name} added to cart!`);
  };

  return (
    <div className="min-h-screen">
      <div className="bg-warm border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">🎉 Party Packages</h1>
          <p className="text-muted-foreground">Book a complete homemade food package for your next celebration!</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partyPackages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-52 object-cover" />
                <span className="absolute top-4 left-4 text-3xl">{pkg.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users className="h-4 w-4" />
                  <span>{pkg.serves}</span>
                </div>

                <div className="space-y-1.5 mb-6">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-bold">₹{pkg.price}</span>
                  <button
                    onClick={() => handleAdd(pkg)}
                    className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
