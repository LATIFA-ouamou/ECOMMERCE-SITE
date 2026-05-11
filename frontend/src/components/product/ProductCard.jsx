import { Star, Heart } from "lucide-react";

/**
 * ProductCard
 * Props:
 *  - product: { id, name, category, emoji, price, oldPrice, badge, rating, reviews, water, light, inStock }
 *  - liked: boolean
 *  - added: boolean
 */
export default function ProductCard({ product: p, liked = false, added = false }) {
  return (
    <div className="group bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-green-900/6 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">

      <div className="relative h-48 bg-green-50 flex items-center justify-center">

        <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
          {p.emoji}
        </span>

        {p.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-medium ${
            p.badge === "Sale"  ? "bg-amber-500 text-white"  :
            p.badge === "New"   ? "bg-green-600 text-white"  :
                                  "bg-purple-600 text-white"
          }`}>
            {p.badge}
          </span>
        )}

        {!p.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-stone-800 text-white text-xs px-3 py-1 rounded-full">
              Pre-order
            </span>
          </div>
        )}

        <button className={`absolute top-3 right-3 w-7 h-7 bg-white shadow-sm rounded-full flex items-center justify-center transition-colors ${
          liked ? "text-red-500" : "text-stone-300 hover:text-red-400"
        }`}>
          <Heart size={13} fill={liked ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="p-4">

        <div className="text-[10px] font-semibold tracking-widest uppercase text-green-600 mb-1">
          {p.category}
        </div>

        {/* Name */}
        <h3 className="font-serif text-stone-900 font-light mb-1 hover:text-green-700 transition-colors">
          {p.name}
        </h3>

        {/* Stars */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < Math.floor(p.rating)
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-stone-200 fill-stone-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-stone-400">({p.reviews})</span>
        </div>

        {/* Care tags */}
        <div className="flex gap-1.5 mb-3 flex-wrap">
          <span className="px-2 py-0.5 bg-stone-50 text-stone-500 text-[10px] rounded-full border border-stone-100">
            💧 {p.water}
          </span>
          <span className="px-2 py-0.5 bg-stone-50 text-stone-500 text-[10px] rounded-full border border-stone-100">
            ☀️ {p.light}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            {p.oldPrice && (
              <span className="text-xs text-stone-400 line-through mr-1">€{p.oldPrice}</span>
            )}
            <span className="text-lg font-semibold text-green-800">€{p.price}</span>
          </div>

          <button
            disabled={!p.inStock}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              added
                ? "bg-green-100 text-green-700 border border-green-200"
                : p.inStock
                ? "bg-green-700 hover:bg-green-600 text-white"
                : "bg-stone-100 text-stone-400 cursor-not-allowed"
            }`}
          >
            {added ? "✓ Added" : p.inStock ? "+ Add" : "Sold out"}
          </button>
        </div>

      </div>
    </div>
  );
}
