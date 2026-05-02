import { SlidersHorizontal } from "lucide-react";

export default function ProductFilter() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-100">

      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="text-green-600" size={20} />
        <h2 className="font-semibold text-lg text-gray-800">Filters</h2>
      </div>

    
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search plants..."
          className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
        />
      </div>

     
      <div className="mb-8">
        <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>

        <input
          type="range"
          className="w-full accent-green-600 cursor-pointer"
        />

        <div className="flex justify-between text-sm text-gray-500 mt-2">
          <span>0 DH</span>
          <span>500 DH</span>
        </div>
      </div>

    
      <div className="mb-8">
        <h3 className="font-medium text-gray-700 mb-3">Categories</h3>

        <div className="space-y-3">
          {[
            "Indoor Plants",
            "Outdoor Plants",
            "Medicinal Plants",
            "Plant Pots",
          ].map((cat, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-green-600 cursor-pointer"
              />
              <span className="text-gray-600 group-hover:text-green-600 transition">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

     
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Availability</h3>

        <div className="space-y-3">
          {["In Stock", "Out of Stock"].map((item, i) => (
            <label
              key={i}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 accent-green-600 cursor-pointer"
              />
              <span className="text-gray-600 group-hover:text-green-600 transition">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      
      <button className="mt-8 w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
        Apply Filters
      </button>
    </div>
  );
}
