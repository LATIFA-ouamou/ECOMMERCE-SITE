import React from "react";

function FeaturedProducts() {
  const products = [
    { id: 1, name: "Monstera Plant", price: "$25" },
    { id: 2, name: "Aloe Vera", price: "$18" },
    { id: 3, name: "Snake Plant", price: "$22" },
    { id: 4, name: "Peace Lily", price: "$20" },
  ];

  return (
    <section className="py-16 bg-[#F5F9F6]">
      <div className="max-w-7xl mx-auto px-6">

        
        <h2 className="text-center text-2xl font-semibold mb-10">
          Featured Products
        </h2>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#E8F5E9] rounded-xl p-4 text-center shadow-sm hover:shadow-md transition"
            >
              
             
              <img
                src="/image.png"
                alt={product.name}
                className="h-32 mx-auto object-contain mb-3"
              />

            
              <h3 className="text-sm font-medium text-gray-700">
                {product.name}
              </h3>

              
              <p className="text-green-600 font-semibold mt-1">
                {product.price}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;