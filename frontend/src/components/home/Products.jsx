export function Products() {
  return (
    <section className="py-16 bg-[#F5F9F6]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-2xl font-semibold mb-10">
          Popular Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div key={item} className="bg-white rounded-xl p-4 text-center shadow-sm">
              <img src="/image.png" className="h-32 mx-auto object-contain mb-3"/>
              <p className="text-sm font-medium">Plant {item}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}