// src/components/product/ProductList.jsx

import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div>

      
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-lg w-1/3"
        />

        <select className="border p-2 rounded-lg">
          <option>Sort by</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
        </select>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>

    </div>
  );
}
