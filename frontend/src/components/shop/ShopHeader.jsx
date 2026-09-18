/**
 * ShopHeader
 * Props:
 *  - resultCount : number
 *  - activeTags  : string[]   active filter labels shown as chips
 */
export default function ShopHeader({ resultCount = 0, activeTags = [] }) {
  return (
    <div className="bg-white border-b border-stone-100 px-6 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-stone-400 mb-4">
          <span className="hover:text-green-600 cursor-pointer transition-colors">Home</span>
          <span>/</span>
          <span className="text-stone-600 font-medium">Shop</span>
        </nav>

        {/* Title */}
        <h1 className="font-serif text-4xl font-light text-stone-900 mb-1">
          Our <em className="italic text-green-600">collection</em>
        </h1>

        {/* Subtitle */}
        <p className="text-stone-400 text-sm mb-4">
          {resultCount} plant{resultCount !== 1 ? "s" : ""} available
        </p>

        {/* Active filter chips */}
        {activeTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activeTags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 border border-green-200 rounded-full text-xs font-medium"
              >
                {tag}
                <button className="hover:text-red-500 transition-colors leading-none">×</button>
              </span>
            ))}
            <button className="text-xs text-stone-400 hover:text-red-500 transition-colors underline">
              Clear all
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
