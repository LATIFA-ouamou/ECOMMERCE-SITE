export function Subscribe() {
  return (
    <section className="py-16 bg-[#E8F5E9]">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-xl font-semibold mb-4">
          Subscribe for Special Offers
        </h2>

        <div className="flex gap-3 justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 rounded-md border w-64 bg-[#ffffff]"
          />
          <button className="bg-green-600 text-white px-6 rounded-md">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
}