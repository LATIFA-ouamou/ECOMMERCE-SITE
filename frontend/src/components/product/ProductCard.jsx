import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Check,
  Plus,
  Minus,
  Truck,
  BadgeCheck,
  Leaf,
  ArrowRight,
  Star,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 3, -3, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function PlantProductCard() {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlist, setWishlist] = useState(false);

  const handleAddToCart = () => {
    if (added) return;
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #f7fee7 100%)",
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Ambient floating leaves background */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-green-300 opacity-30 select-none"
          style={{
            fontSize: `${28 + i * 12}px`,
            top: `${10 + i * 17}%`,
            left: i % 2 === 0 ? `${5 + i * 4}%` : "auto",
            right: i % 2 !== 0 ? `${5 + i * 4}%` : "auto",
          }}
          animate={{
            y: [0, -14, 0],
            rotate: [0, 8, -5, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7,
          }}
        >
          🌿
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        className="relative w-full max-w-xl bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden"
        style={{ boxShadow: "0 32px 80px -12px rgba(22,101,52,0.18)" }}
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top green strip */}
        <div className="h-2 w-full bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400" />

        <div className="p-7">
          {/* Image + Info row */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">

            {/* Plant image */}
            <motion.div
              className="relative flex-shrink-0 w-full sm:w-52 h-52 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(145deg, #d1fae5, #bbf7d0)" }}
              {...fadeUp(0.1)}
            >
              {/* Decorative blobs */}
              <div className="absolute w-32 h-32 rounded-full bg-green-200 opacity-50 -bottom-8 -left-8" />
              <div className="absolute w-20 h-20 rounded-full bg-emerald-300 opacity-30 top-2 right-2" />

              <motion.div variants={floatVariants} animate="animate" className="relative z-10 text-8xl">
                🌿
              </motion.div>

              {/* Rating badge */}
              <motion.div
                className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 rounded-full px-2.5 py-1 text-xs font-semibold text-amber-500 shadow"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                4.9
              </motion.div>
            </motion.div>

            {/* Info */}
            <div className="flex-1 flex flex-col gap-3">
              <motion.div {...fadeUp(0.2)}>
                <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-1">
                  Tropical Collection
                </p>
                <h1 className="text-2xl font-bold text-stone-800 leading-tight">
                  Monstera Deliciosa
                </h1>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold text-green-600">120 DH</span>
                  <span className="text-sm text-stone-400 line-through">150 DH</span>
                </div>
              </motion.div>

              <motion.p
                className="text-sm text-stone-500 leading-relaxed"
                {...fadeUp(0.3)}
              >
                A stunning tropical plant with iconic split leaves. Perfect for brightening any indoor space with lush, architectural foliage.
              </motion.p>

              {/* Badges */}
              <motion.div className="flex flex-col gap-1.5" {...fadeUp(0.35)}>
                {[
                  { icon: BadgeCheck, label: "In Stock & Ready to Ship" },
                  { icon: Truck, label: "Free Delivery over 200 DH" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-md bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-xs text-stone-600 font-medium">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            className="my-5 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          />

          {/* Quantity + Actions */}
          <motion.div
            className="flex items-center gap-3 flex-wrap"
            {...fadeUp(0.5)}
          >
            {/* Quantity */}
            <div className="flex items-center rounded-xl border border-green-200 bg-green-50 overflow-hidden">
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-green-700 hover:bg-green-100 transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </motion.button>

              <AnimatePresence mode="wait">
                <motion.span
                  key={quantity}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="w-9 text-center text-sm font-bold text-stone-800 select-none"
                >
                  {quantity}
                </motion.span>
              </AnimatePresence>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-green-700 hover:bg-green-100 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </motion.button>
            </div>

            {/* Add to cart */}
            <motion.button
              onClick={handleAddToCart}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 relative flex items-center justify-center gap-2 h-10 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-lg shadow-green-200"
              style={{
                background: added
                  ? "linear-gradient(135deg, #15803d, #166534)"
                  : "linear-gradient(135deg, #22c55e, #16a34a)",
                transition: "background 0.4s ease",
              }}
            >
              <AnimatePresence mode="wait">
                {added ? (
                  <motion.span
                    key="added"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <Check className="w-4 h-4" />
                    Added to Cart!
                  </motion.span>
                ) : (
                  <motion.span
                    key="cart"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Wishlist */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setWishlist((w) => !w)}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                wishlist
                  ? "bg-green-600 border-green-600 text-white"
                  : "border-green-200 text-green-500 hover:bg-green-50"
              }`}
            >
              <Leaf className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          className="relative flex items-center justify-between px-7 py-4 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #166534 0%, #15803d 60%, #16a34a 100%)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Decorative leaves */}
          <div className="absolute right-24 top-0 text-green-400 opacity-20 text-6xl pointer-events-none select-none rotate-12">
            🌱
          </div>
          <div className="absolute right-8 bottom-0 text-green-300 opacity-15 text-5xl pointer-events-none select-none -rotate-6">
            🍃
          </div>

          <div className="relative z-10">
            <p className="text-white/90 text-xs font-semibold uppercase tracking-wider mb-0.5">
              Plant Lovers Club
            </p>
            <p className="text-white/70 text-xs max-w-xs">
              Discover our full curated collection of indoor & rare plants
            </p>
          </div>

          <motion.button
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 flex items-center gap-1.5 bg-white text-green-700 text-xs font-bold px-4 py-2 rounded-xl shadow-lg hover:bg-green-50 transition-colors flex-shrink-0 ml-4"
          >
            Shop Now
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}