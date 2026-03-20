import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, Heart, ShieldCheck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, partyPackages } from "@/data/products";
import heroImage from "@/assets/hero-food.jpg";

const categories = [
  { name: "Pickles", emoji: "🫙", path: "/products?cat=pickles", color: "bg-primary/10 text-primary" },
  { name: "Snacks", emoji: "🍿", path: "/products?cat=snacks", color: "bg-accent/10 text-accent" },
  { name: "Meals", emoji: "🍛", path: "/products?cat=meals", color: "bg-amber/10 text-amber" },
  { name: "Party Packs", emoji: "🥳", path: "/packages", color: "bg-destructive/10 text-destructive" },
];

const features = [
  { icon: Heart, title: "Homemade with Love", desc: "Every item is crafted by passionate home cooks" },
  { icon: Truck, title: "Fast Delivery", desc: "Fresh to your doorstep, same-day delivery" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Hygiene certified home kitchens" },
];

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-warm">
        <div className="container mx-auto px-4 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                🏠 Homemade with Love ❤️
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
                Authentic <span className="text-primary">Homemade</span> Pickles & Snacks
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                From grandma's kitchen to your table. Order fresh pickles, crispy snacks, and book home cooks for your next party!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Browse Products <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-xl font-semibold border border-border hover:bg-secondary transition-colors"
                >
                  🎉 Party Packages
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:block"
          >
            <img src={heroImage} alt="Homemade pickles and snacks" className="rounded-3xl shadow-2xl w-full object-cover max-h-96" />
          </motion.div>
        </div>
        <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Link
                to={cat.path}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl ${cat.color} hover:scale-105 transition-transform`}
              >
                <span className="text-4xl">{cat.emoji}</span>
                <span className="font-semibold">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          <Link to="/products" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-4">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to taste the difference?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join thousands who've switched to authentic homemade food. Order now and pay on delivery!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Start Shopping 🛒
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
