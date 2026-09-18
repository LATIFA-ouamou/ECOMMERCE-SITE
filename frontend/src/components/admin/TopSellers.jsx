/**
 * TopSellers
 * Props:
 *  - products : { id, name, emoji, price }[]  — top 5
 */
export default function TopSellers({ products = [] }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-stone-100">

      <h2 className="font-medium text-stone-800 mb-4">Top sellers</h2>

      <div className="space-y-3.5">
        {products.map((p, i) => (
          <div key={p.id} className="flex items-center gap-3">

            {/* Rank */}
            <span className="text-[10px] font-bold text-stone-300 w-4 flex-shrink-0">
              #{i + 1}
            </span>

            {/* Emoji */}
            <span className="text-lg flex-shrink-0">{p.emoji}</span>

            {/* Name + progress bar */}
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-stone-700 truncate mb-1">
                {p.name}
              </div>
              <div className="w-full bg-stone-100 rounded-full h-1">
                <div
                  className="bg-green-500 h-1 rounded-full transition-all duration-500"
                  style={{ width: `${100 - i * 15}%` }}
                />
              </div>
            </div>

            {/* Price */}
            <span className="text-xs font-medium text-stone-600 flex-shrink-0">
              €{p.price}
            </span>

          </div>
        ))}

        {products.length === 0 && (
          <p className="text-xs text-stone-400 text-center py-4">No data yet</p>
        )}
      </div>

    </div>
  );
}
