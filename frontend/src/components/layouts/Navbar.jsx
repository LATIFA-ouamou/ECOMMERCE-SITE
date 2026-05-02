

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h1 className="text-xl font-bold text-green-700">
          🌿 PlantShop
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-600 text-sm">
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          
          <Link to="/features">Features</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm">
            Login Now
          </button>
        </Link>
      </div>
    </header>
  );
}
