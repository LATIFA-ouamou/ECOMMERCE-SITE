// src/pages/Shop.jsx

import ProductList from "../components/product/ProductList";
import ProductFilter from "../components/product/ProductFilter";

export default function Shop() {
  return (
    <div className="bg-[#E8F5E9] min-h-screen px-6 py-10">

    
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Shop Plants 🌿</h1>
        <p className="text-gray-500 mt-2">
          Discover our collection of beautiful plants
        </p>
      </div>

      <div className="flex gap-6">

        <div className="w-1/4 hidden md:block">
          <ProductFilter />
        </div>

       
        <div className="flex-1">
          <ProductList />
        </div>

      </div>

    </div>
  );
}
