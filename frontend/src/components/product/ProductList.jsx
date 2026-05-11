import ProductCard from "./ProductCard";

/**
 * ProductList
 * Props:
 *  - products  : product[]
 *  - wishlist  : number[]   IDs currently liked
 *  - addedId   : number | null   ID just added to cart
 */
export default function ProductList({
  products = [],
  wishlist = [],
  addedId  = null,
}) {

  /* ── Empty state ── */
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-4">🌱</div>
        <h3 className="font-serif text-xl text-stone-500 font-light mb-1">No plants found</h3>
        <p className="text-sm text-stone-400">Try adjusting your filters or search term</p>
        <button className="mt-6 px-5 py-2.5 text-sm font-medium text-green-700 border border-green-300 rounded-xl hover:bg-green-50 transition-colors">
          Reset filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(p => (
        <ProductCard 
          key={p.id} 
          product={p} 
          liked={wishlist.includes(p.id)} 
          added={addedId === p.id}
        />
      ))}
    </div>    
  )
}
