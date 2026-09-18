import { useMemo, useState } from "react";

import ShopHeader from "../components/product/ShopHeader";
import ProductFilter from "../components/product/ProductFilter";
import ProductToolbar from "../components/product/ProductToolbar";
import ProductList from "../components/product/ProductList";

const MOCK_CATEGORIES = [
    "all",
    "indoor",
    "outdoor",
    "medicinal",
    "succulents",
];

const MOCK_PRODUCTS = [
    { id: 1, name: "Monstera Deliciosa", category: "indoor", price: 45, rating: 4.8, inStock: true, care: "easy" },
    { id: 2, name: "Fiddle Leaf Fig", category: "indoor", price: 89, rating: 4.5, inStock: true, care: "hard" },
    { id: 3, name: "Lavender", category: "medicinal", price: 22, rating: 4.9, inStock: true, care: "easy" },
    { id: 4, name: "Snake Plant", category: "indoor", price: 35, rating: 4.7, inStock: true, care: "easy" },
    { id: 5, name: "Bird of Paradise", category: "outdoor", price: 120, rating: 4.6, inStock: false, care: "medium" },
    { id: 6, name: "Echeveria", category: "succulents", price: 18, rating: 4.8, inStock: true, care: "easy" },
];

export default function ShopPage() {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [maxPrice, setMaxPrice] = useState(200);
    const [activeCare, setActiveCare] = useState([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState("grid");

    const productCounts = useMemo(() => {
        const counts = {
            all: MOCK_PRODUCTS.length,
        };

        MOCK_CATEGORIES.forEach((category) => {
            if (category !== "all") {
                counts[category] = MOCK_PRODUCTS.filter(
                    (product) => product.category === category
                ).length;
            }
        });

        return counts;
    }, []);

    const filteredProducts = useMemo(() => {
        let products = [...MOCK_PRODUCTS];

        // Search
        if (search) {
            products = products.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        // Category
        if (activeCategory !== "all") {
            products = products.filter(
                (product) => product.category === activeCategory
            );
        }

        // Price
        products = products.filter(
            (product) => product.price <= maxPrice
        );

        // Care Level
        if (activeCare.length > 0) {
            products = products.filter((product) =>
                activeCare.includes(product.care)
            );
        }

        // Stock
        if (inStockOnly) {
            products = products.filter(
                (product) => product.inStock
            );
        }

        // Sorting
        switch (sortBy) {
            case "price-low":
                products.sort((a, b) => a.price - b.price);
                break;

            case "price-high":
                products.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                products.sort((a, b) => b.rating - a.rating);
                break;

            case "name":
                products.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;

            default:
                break;
        }

        return products;
    }, [
        search,
        activeCategory,
        maxPrice,
        activeCare,
        inStockOnly,
        sortBy,
    ]);

    const activeTags = [
        activeCategory !== "all" ? activeCategory : null,
        inStockOnly ? "In Stock" : null,
        ...activeCare,
    ].filter(Boolean);

    return (
        <div className="min-h-screen bg-stone-50">
            <ShopHeader
                resultCount={filteredProducts.length}
                activeTags={activeTags}
            />

            <div className="max-w-7xl mx-auto flex">
                <ProductFilter
                    categories={MOCK_CATEGORIES}
                    productCounts={productCounts}
                    search={search}
                    setSearch={setSearch}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                    activeCare={activeCare}
                    setActiveCare={setActiveCare}
                    inStockOnly={inStockOnly}
                    setInStockOnly={setInStockOnly}
                />

                <main className="flex-1 p-6 lg:p-8">
                    <ProductToolbar
                        sidebarOpen={true}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        resultCount={filteredProducts.length}
                        viewMode={viewMode}
                        setViewMode={setViewMode}
                    />

                    <ProductList
                        products={filteredProducts}
                        wishlist={[1, 3]}
                        addedId={null}
                        viewMode={viewMode}
                    />
                </main>
            </div>
        </div>
    );
}