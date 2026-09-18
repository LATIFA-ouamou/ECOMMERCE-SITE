import { useState, useMemo } from "react";

export default function useShop(products) {
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState("grid");

    const filteredProducts = useMemo(() => {
        let data = [...products];

        if (search) {
            data = data.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (activeCategory !== "all") {
            data = data.filter(
                product => product.category === activeCategory
            );
        }

        switch (sortBy) {
            case "price-asc":
                data.sort((a, b) => a.price - b.price);
                break;

            case "price-desc":
                data.sort((a, b) => b.price - a.price);
                break;

            case "rating":
                data.sort((a, b) => b.rating - a.rating);
                break;

            case "name":
                data.sort((a, b) => a.name.localeCompare(b.name));
                break;

            default:
                break;
        }

        return data;
    }, [products, search, activeCategory, sortBy]);

    return {
        search,
        setSearch,
        activeCategory,
        setActiveCategory,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        filteredProducts,
    };
}