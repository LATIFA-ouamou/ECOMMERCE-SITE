export default function Categories() {
  return (
    <section className="py-16 bg-[#E8F5E9]">
      <div className="max-w-7xl mx-auto px-6">
        
        
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-10">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {[
            "Indoor Plants",
            "Outdoor Plants",
            "Medicinal Plants",
            "Plant Pots",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 text-center"
            >
              
             
              <img
                src="/image.png"
                alt={title}
                className="w-full h-32 object-contain mb-3"
              />

              <p className="text-sm font-medium text-gray-700">
                {title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}