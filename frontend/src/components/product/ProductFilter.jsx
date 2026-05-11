import { Search, X } from "lucide-react";

/**
 * ProductFilter
 * Props:
 *  - categories : string[]          e.g. ["all","indoor","outdoor",...]
 *  - productCounts : { [cat]: number }
 *  - search : string
 *  - activeCategory : string
 *  - maxPrice : number
 *  - activeCare : string[]
 *  - inStockOnly : boolean
 */
export default function ProductFilter({
  categories       = ["all", "indoor", "outdoor", "medicinal", "succulents"],
  productCounts    = {},
  search           = "",
  activeCategory   = "all",
  maxPrice         = 200,
  activeCare       = ["easy", "medium", "hard"],
  inStockOnly      = false,
}) {
  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-stone-100 min-h-screen">
      <div className="p-5 space-y-7">

        {/* ── Search ── */}
        <div>
          <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-400 block mb-2">
            Search
          </label>
          <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 focus-within:border-green-400 transition-colors">
            <Search size={13} className="text-stone-400 flex-shrink-0" />
            <input
              readOnly
              value={search}
              placeholder="Plant name…"
              className="bg-transparent text-sm outline-none text-stone-700 placeholder:text-stone-400 w-full cursor-default"
            />
            {search && (
              <button>
                <X size={12} className="text-stone-400" />
              </button>
            )}
          </div>
        </div>

        <Divider />

        {/* ── Category ── */}
        <div>
          <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-400 block mb-2">
            Category
          </label>
          <div className="space-y-1">
            {categories.map(cat => (
              <button
                key={cat}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm capitalize transition-colors ${
                  activeCategory === cat
                    ? "bg-green-700 text-white font-medium"
                    : "text-stone-600 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                {cat === "all" ? "All Plants" : cat}
                <span className={`float-right text-xs ${
                  activeCategory === cat ? "text-green-200" : "text-stone-400"
                }`}>
                  {productCounts[cat] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        <Divider />

        {/* ── Price range ── */}
        <div>
          <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-400 block mb-3">
            Price — up to <span className="text-green-700 font-bold">€{maxPrice}</span>
          </label>
          <input
            type="range"
            readOnly
            min={10}
            max={200}
            value={maxPrice}
            className="w-full accent-green-600 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-stone-400 mt-1">
            <span>€10</span>
            <span>€200</span>
          </div>
        </div>

        <Divider />

        {/* ── Care level ── */}
        <div>
          <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-400 block mb-2">
            Care Level
          </label>
          <div className="space-y-2.5">
            {[
              ["easy",   "🌱 Beginner"],
              ["medium", "🌿 Intermediate"],
              ["hard",   "🌳 Expert"],
            ].map(([val, label]) => {
              const checked = activeCare.includes(val);
              return (
                <label key={val} className="flex items-center gap-2.5 cursor-pointer group">
                  {/* Custom checkbox */}
                  <div className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    checked
                      ? "bg-green-600 border-green-600"
                      : "border-stone-300 group-hover:border-green-400"
                  }`}>
                    {checked && (
                      <svg width="8" height="8" viewBox="0 0 8 8">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-sm text-stone-600">{label}</span>
                </label>
              );
            })}
          </div>
        </div>

        <Divider />

        {/* ── Availability ── */}
        <div>
          <label className="text-[10px] font-semibold tracking-widest uppercase text-stone-400 block mb-2">
            Availability
          </label>
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <div className={`w-4 h-4 rounded-[4px] border-2 flex items-center justify-center transition-colors ${
              inStockOnly
                ? "bg-green-600 border-green-600"
                : "border-stone-300 group-hover:border-green-400"
            }`}>
              {inStockOnly && (
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path d="M1.5 4L3 5.5L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </div>
            <span className="text-sm text-stone-600">In stock only</span>
          </label>
        </div>

        <Divider />

        {/* ── Reset ── */}
        <button className="w-full py-2 text-xs font-medium text-stone-500 border border-stone-200 rounded-xl hover:border-red-300 hover:text-red-500 transition-colors">
          Reset filters
        </button>

      </div>
    </aside>
  );
}

/* ── tiny helper ── */
function Divider() {
  return <div className="h-px bg-stone-100" />;
}
