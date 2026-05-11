/**
 * AuthTabToggle
 * Props:
 *  - mode : "login" | "register"
 */
export default function AuthTabToggle({ mode = "login" }) {
  return (
    <div className="flex bg-stone-100 rounded-xl p-1 mb-6">
      {[
        { id: "login",    label: "Sign in"  },
        { id: "register", label: "Register" },
      ].map(tab => (
        <button
          key={tab.id}
          className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
            mode === tab.id
              ? "bg-white text-stone-800 shadow-sm"
              : "text-stone-500 hover:text-stone-700"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
