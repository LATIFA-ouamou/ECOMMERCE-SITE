import { SlidersHorizontal, ChevronDown, LayoutGrid, List } from "lucide-react";

/**
 * ProductToolbar
 * Props:
 *  - sidebarOpen  : boolean
 *  - sortBy       : string
 *  - resultCount  : number
 *  - viewMode     : "grid" | "list"
 */
export default function ProductToolbar({
  sidebarOpen = true,
  sortBy      = "featured",
  resultCount = 0,
  viewMode    = "grid",
}) {
  return (
    <div className="flex items-center gap-3 mb-6 flex-wrap">

      {/* Toggle sidebar */}
      <button className="flex items-center gap-2 px-3 py-2 text-sm text-stone-600 border border-stone-200 rounded-xl hover:bg-white hover:border-green-300 transition-colors">
        <SlidersHorizontal size={14} />
        {sidebarOpen ? "Hide filters" : "Show filters"}
      </button>

      {/* Sort select */}
      <div className="relative">
        <select
          value={sortBy}
          readOnly
          className="appearance-none pl-3 pr-8 py-2 text-sm bg-white border border-stone-200 rounded-xl outline-none text-stone-700 cursor-pointer hover:border-green-300 transition-colors"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="rating">Top Rated</option>
          <option value="name">Name A–Z</option>
        </select>
        <ChevronDown size={12} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
      </div>

      {/* View mode toggle */}
      <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
        <button className={`p-2 transition-colors ${viewMode === "grid" ? "bg-green-700 text-white" : "text-stone-400 hover:bg-stone-50"}`}>
          <LayoutGrid size={14} />
        </button>
        <button className={`p-2 transition-colors ${viewMode === "list" ? "bg-green-700 text-white" : "text-stone-400 hover:bg-stone-50"}`}>
          <List size={14} />
        </button>
      </div>

      {/* Result count */}
      <span className="ml-auto text-sm text-stone-400">
        {resultCount} result{resultCount !== 1 ? "s" : ""}
      </span>
    </div>
  );
}
