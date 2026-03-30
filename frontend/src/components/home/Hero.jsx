export default function Hero() {
  return (
    <section className="w-full py-10 px-6 md:px-16 bg-[#E8F5E9]">
      
      <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden">
        
       
        <img
          src="/hero.webp"
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
        />

    
        <div className="absolute inset-0 bg-[#2f5d3a]/80"></div>

       
        <div className="relative z-10 py-16 px-8 md:px-16 max-w-xl text-white">
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Bring Nature <br /> Into Your Home
          </h1>

          <p className="text-green-100 mb-6 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button className="bg-[#7ed957] hover:bg-[#6bc34a] px-6 py-3 rounded-md font-semibold shadow-md transition">
            Shop Now
          </button>

        </div>
      </div>
    </section>
  );
}