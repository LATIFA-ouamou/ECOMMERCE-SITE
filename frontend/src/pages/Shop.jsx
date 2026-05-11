
import ShopHeader from './../components/product/ShopHeader';
import ProductFilter from './../components/product/ProductFilter';
import ProductToolbar from './../components/product/ProductToolbar';
import ProductList from './../components/product/ProductList';
/* ─────────────────────────────────────────────
   Static mock data — replace with real props
   or hook up your context / API calls here
───────────────────────────────────────────── */
const MOCK_CATEGORIES = ["all", "indoor", "outdoor", "medicinal", "succulents"];

const MOCK_COUNTS = {
  all: 12, indoor: 5, outdoor: 3, medicinal: 2, succulents: 2,
};

const MOCK_PRODUCTS = [
  { id: 1,  name: "Monstera Deliciosa", category: "indoor",    emoji: "🌿", price: 45,  oldPrice: null, badge: "New",  care: "easy",   water: "Low",      light: "Medium",   inStock: true,  rating: 4.8, reviews: 124 },
  { id: 2,  name: "Fiddle Leaf Fig",    category: "indoor",    emoji: "🌳", price: 89,  oldPrice: 110,  badge: "Sale", care: "hard",   water: "Medium",   light: "Bright",   inStock: true,  rating: 4.5, reviews: 89  },
  { id: 3,  name: "Lavender",           category: "medicinal", emoji: "💜", price: 22,  oldPrice: null, badge: null,   care: "easy",   water: "Low",      light: "Full Sun", inStock: true,  rating: 4.9, reviews: 203 },
  { id: 4,  name: "Snake Plant",        category: "indoor",    emoji: "🌱", price: 35,  oldPrice: null, badge: null,   care: "easy",   water: "Very Low", light: "Low",      inStock: true,  rating: 4.7, reviews: 318 },
  { id: 5,  name: "Bird of Paradise",   category: "outdoor",   emoji: "🌺", price: 120, oldPrice: null, badge: "Rare", care: "medium", water: "Medium",   light: "Bright",   inStock: false, rating: 4.6, reviews: 47  },
  { id: 6,  name: "Echeveria",          category: "succulents",emoji: "🪴", price: 18,  oldPrice: null, badge: null,   care: "easy",   water: "Very Low", light: "Full Sun", inStock: true,  rating: 4.8, reviews: 156 },
  { id: 7,  name: "Peace Lily",         category: "indoor",    emoji: "🌸", price: 38,  oldPrice: null, badge: "New",  care: "easy",   water: "Medium",   light: "Low",      inStock: true,  rating: 4.6, reviews: 91  },
  { id: 8,  name: "Aloe Vera",          category: "medicinal", emoji: "🌵", price: 25,  oldPrice: 30,   badge: "Sale", care: "easy",   water: "Low",      light: "Bright",   inStock: true,  rating: 4.9, reviews: 445 },
  { id: 9,  name: "Bougainvillea",      category: "outdoor",   emoji: "🌷", price: 55,  oldPrice: null, badge: null,   care: "medium", water: "Low",      light: "Full Sun", inStock: true,  rating: 4.4, reviews: 62  },
  { id: 10, name: "ZZ Plant",           category: "indoor",    emoji: "🍃", price: 42,  oldPrice: null, badge: null,   care: "easy",   water: "Very Low", light: "Low",      inStock: true,  rating: 4.7, reviews: 177 },
  { id: 11, name: "Rosemary",           category: "medicinal", emoji: "🌿", price: 15,  oldPrice: null, badge: null,   care: "easy",   water: "Low",      light: "Full Sun", inStock: true,  rating: 4.8, reviews: 289 },
  { id: 12, name: "Jade Plant",         category: "succulents",emoji: "💎", price: 28,  oldPrice: null, badge: null,   care: "easy",   water: "Low",      light: "Bright",   inStock: true,  rating: 4.5, reviews: 134 },
];

/* ─────────────────────────────────────────────
   ShopPage — pure UI composition
   All state / handlers will be wired here later
───────────────────────────────────────────── */
export default function ShopPage() {
  return (
    <div className="min-h-screen bg-stone-50">

      {/* 1. Page header + active filter chips */}
      <ShopHeader
        resultCount={MOCK_PRODUCTS.length}
        activeTags={["Indoor", "Under €100"]}   
      />

      <div className="max-w-7xl mx-auto flex">

        {/* 2. Sidebar filter panel */}
        <ProductFilter
          categories={MOCK_CATEGORIES}
          productCounts={MOCK_COUNTS}
          search=""
          activeCategory="all"
          maxPrice={120}
          activeCare={["easy", "medium"]}
          inStockOnly={false}
        />

        {/* 3. Right-hand content */}
        <main className="flex-1 p-6 lg:p-8">

          {/* 3a. Sort + view-mode toolbar */}
          <ProductToolbar
            sidebarOpen={true}
            sortBy="featured"
            resultCount={MOCK_PRODUCTS.length}
            viewMode="grid"
          />

          {/* 3b. Product grid */}
          <ProductList
            products={MOCK_PRODUCTS}
            wishlist={[1, 3]}     
            addedId={null}
          />

        </main>
      </div>
    </div>
  );
}
