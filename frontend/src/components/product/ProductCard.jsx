// src/components/product/ProductCard.jsx
import plant from "../../assets/image.png";
export default function ProductCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-lg transition">

      <img
         src="/image.png"
        alt="plant"
        className="w-full h-40 object-contain mb-4"
      />

      <h3 className="font-semibold text-lg">Monstera</h3>

      <p className="text-green-600 font-bold mt-2">120 DH</p>

      <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Add to Cart
      </button>
    </div>
  );
}
