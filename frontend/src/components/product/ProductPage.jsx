import { useState } from "react";
import { Star, Droplets, Sun, Leaf, ChevronRight, Minus, Plus, Heart, ShoppingCart, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/AppContext";

export default function ProductPage({ product: p, onNavigate }) {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("about");
  const [added, setAdded] = useState(false);
  const liked = wishlist.includes(p.id);
  const related = products.filter(r => r.category === p.category && r.id !== p.id).slice(0, 3);

  const handleAdd = () => {
    addToCart(p, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const careInfo = {
    "🌊 Watering": p.water,
    "☀️ Light": p.light,
    "🌡 Temperature": "18–26 °C",
    "🪴 Pot size": "Medium (15–20cm)",
    "✂️ Pruning": "Minimal",
    "🐾 Pet Safe": p.tags?.includes("pet-friendly") ? "Yes" : "Check first",
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-stone-100 px-6 lg:px-10 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-stone-400">
          <button onClick={() => onNavigate("home")} className="hover:text-green-600 transition-colors">Home</button>
          <ChevronRight size={12} />
          <button onClick={() => onNavigate("shop")} className="hover:text-green-600 transition-colors">Shop</button>
          <ChevronRight size={12} />
          <span className="text-stone-600">{p.name}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Image */}
          <div className="space-y-4">
            <div className="relative bg-green-50 rounded-3xl flex items-center justify-center h-96 overflow-hidden group">
              <span className="text-[150px] select-none group-hover:scale-110 transition-transform duration-500">{p.emoji}</span>
              {p.badge && (
                <span className={`absolute top-5 left-5 px-3 py-1 rounded-full text-sm font-medium ${
                  p.badge === "Sale" ? "bg-amber-500 text-white" :
                  p.badge === "New" ? "bg-green-600 text-white" : "bg-purple-600 text-white"
                }`}>{p.badge}</span>
              )}
              {!p.inStock && (
                <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                  <span className="bg-stone-800 text-white px-5 py-2 rounded-full font-medium">Available for Pre-order</span>
                </div>
              )}
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {[p.emoji, "🪴", "🌿", "🏠"].map((e, i) => (
                <div key={i} className={`bg-green-50 rounded-xl h-20 flex items-center justify-center text-2xl cursor-pointer hover:ring-2 hover:ring-green-400 transition-all ${i === 0 ? "ring-2 ring-green-600" : ""}`}>
                  {e}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Info */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-green-600 mb-2">{p.category}</div>
              <h1 className="font-serif text-4xl font-light text-stone-900 mb-3">{p.name}</h1>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(p.rating) ? "text-yellow-400 fill-yellow-400" : "text-stone-200 fill-stone-200"} />
                  ))}
                </div>
                <span className="text-sm text-stone-500">{p.rating} · {p.reviews} reviews</span>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              {p.oldPrice && <span className="text-xl text-stone-400 line-through">€{p.oldPrice}</span>}
              <span className="text-4xl font-light text-green-800">€{p.price}</span>
              {p.oldPrice && (
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                  Save €{p.oldPrice - p.price}
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {p.tags?.map(tag => (
                <span key={tag} className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-100 capitalize">{tag}</span>
              ))}
            </div>

            {/* Quick care */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Droplets, label: "Water", value: p.water },
                { icon: Sun, label: "Light", value: p.light },
                { icon: Leaf, label: "Care", value: p.care },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-white border border-stone-100 rounded-xl p-3 text-center">
                  <Icon size={16} className="text-green-600 mx-auto mb-1" />
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-400">{label}</div>
                  <div className="text-xs font-medium text-stone-700 capitalize mt-0.5">{value}</div>
                </div>
              ))}
            </div>

            {/* Quantity & CTA */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0 border border-stone-200 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2.5 text-stone-600 hover:bg-stone-50 transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="px-5 py-2.5 font-medium text-stone-800 border-x border-stone-200">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-3 py-2.5 text-stone-600 hover:bg-stone-50 transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
                <span className="text-sm text-stone-400">Total: <strong className="text-stone-700">€{p.price * qty}</strong></span>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  disabled={!p.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium transition-all ${
                    added
                      ? "bg-green-100 text-green-700 border-2 border-green-300"
                      : p.inStock
                      ? "bg-green-700 hover:bg-green-600 text-white shadow-lg shadow-green-700/20"
                      : "bg-stone-100 text-stone-400 cursor-not-allowed"
                  }`}
                >
                  {added ? <><Check size={16} /> Added to cart</> : <><ShoppingCart size={16} /> {p.inStock ? "Add to cart" : "Pre-order"}</>}
                </button>
                <button
                  onClick={() => toggleWishlist(p.id)}
                  className={`p-3.5 rounded-xl border-2 transition-colors ${liked ? "border-red-300 text-red-500 bg-red-50" : "border-stone-200 text-stone-400 hover:border-red-300 hover:text-red-400"}`}
                >
                  <Heart size={18} fill={liked ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex border-b border-stone-200 mb-4">
                {["about", "care", "delivery"].map(t => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`px-4 py-2 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                      tab === t ? "border-green-600 text-green-700" : "border-transparent text-stone-500 hover:text-stone-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {tab === "about" && (
                <p className="text-stone-600 font-light leading-relaxed text-sm">{p.description}</p>
              )}

              {tab === "care" && (
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(careInfo).map(([key, val]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-stone-100 text-sm">
                      <span className="text-stone-500">{key}</span>
                      <span className="font-medium text-stone-700 capitalize">{val}</span>
                    </div>
                  ))}
                </div>
              )}

              {tab === "delivery" && (
                <div className="space-y-3 text-sm text-stone-600">
                  {[
                    ["🚚", "Standard delivery", "3–5 business days · Free over €60"],
                    ["⚡", "Express delivery", "1–2 business days · €8.90"],
                    ["📦", "Plant packaging", "Eco-friendly, specially designed for plants"],
                    ["✅", "30-day guarantee", "Replace if your plant doesn't thrive"],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="flex gap-3">
                      <span className="text-lg">{icon}</span>
                      <div>
                        <div className="font-medium text-stone-800">{title}</div>
                        <div className="text-stone-500 font-light">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <section className="mt-16 pt-10 border-t border-stone-200">
            <h2 className="font-serif text-2xl font-light text-stone-900 mb-6">You might also <em className="italic text-green-600">love</em></h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map(r => (
                <button
                  key={r.id}
                  onClick={() => onNavigate("product", r)}
                  className="group text-left bg-white border border-stone-100 rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="bg-green-50 h-40 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {r.emoji}
                  </div>
                  <div className="p-4">
                    <div className="font-serif text-stone-800 font-light">{r.name}</div>
                    <div className="text-green-700 font-semibold mt-1">€{r.price}</div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

