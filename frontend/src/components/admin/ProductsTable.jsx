import { Search, Edit2, Eye, Trash2 } from "lucide-react";

/**
 * ProductsTable
 * Props:
 *  - products     : product[]
 *  - searchValue  : string
 *  - categoryFilter: string
 */
export default function ProductsTable({
  products      = [],
  searchValue   = "",
  categoryFilter = "All categories",
}) {
  return (
    <div className="space-y-5">

      {/* ── Toolbar ── */}
      <div className="flex items-center gap-3 flex-wrap">

        {/* Search */}
        <div className="relative flex-1 max-w-xs">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            readOnly
            value={searchValue}
            placeholder="Search products…"
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 cursor-default"
          />
        </div>

        {/* Category select */}
        <select
          value={categoryFilter}
          className="px-3 py-2.5 text-sm bg-white border border-stone-200 rounded-xl outline-none text-stone-600 cursor-pointer hover:border-green-300 transition-colors"
        >
          {["All categories", "Indoor", "Outdoor", "Medicinal", "Succulents"].map(c => (
            <option key={c}>{c}</option>
          ))}
        </select>

      </div>

      {/* ── Table ── */}
      <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-stone-50">
            <tr>
              {["Product", "Category", "Price", "Stock", "Rating", ""].map(h => (
                <th
                  key={h}
                  className="text-left text-[11px] font-semibold tracking-wider uppercase text-stone-400 px-5 py-3"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {products.map(p => (
              <tr
                key={p.id}
                className="border-t border-stone-50 hover:bg-stone-50 transition-colors group"
              >
                {/* Product info */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {p.emoji}
                    </div>
                    <div>
                      <div className="font-medium text-stone-800">{p.name}</div>
                      <div className="text-xs text-stone-400 font-light">
                        {p.description?.slice(0, 42) ?? ""}…
                      </div>
                    </div>
                  </div>
                </td>

                {/* Category badge */}
                <td className="px-5 py-3.5">
                  <span className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-full capitalize">
                    {p.category}
                  </span>
                </td>

                {/* Price */}
                <td className="px-5 py-3.5">
                  <div className="font-semibold text-stone-800">€{p.price}</div>
                  {p.oldPrice && (
                    <div className="text-xs text-stone-400 line-through">€{p.oldPrice}</div>
                  )}
                </td>

                {/* Stock */}
                <td className="px-5 py-3.5">
                  <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${
                    p.inStock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}>
                    {p.inStock ? "In stock" : "Pre-order"}
                  </span>
                </td>

                {/* Rating */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="font-medium text-stone-700 text-sm">{p.rating}</span>
                    <span className="text-stone-400 text-xs">({p.reviews})</span>
                  </div>
                </td>

                {/* Row actions — visible on hover */}
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-stone-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Edit">
                      <Edit2 size={13} />
                    </button>
                    <button className="p-1.5 text-stone-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Preview">
                      <Eye size={13} />
                    </button>
                    <button className="p-1.5 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                      <Trash2 size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-sm text-stone-400">
                  No products match your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
