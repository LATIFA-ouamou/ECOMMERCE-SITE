export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-bold text-green-700">
          🌿 PlantShop
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-600 text-sm">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Features</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
          Login Now
        </button>
      </div>
    </header>
  );
}