import {
  LayoutDashboard, Package, Users, ShoppingBag,
  Leaf, LogOut,
} from "lucide-react";

/**
 * AdminSidebar
 * Props:
 *  - activeNav : "overview" | "products" | "orders" | "customers"
 *  - user      : { name, email } | null
 */

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Overview",  id: "overview"  },
  { icon: Package,         label: "Products",  id: "products"  },
  { icon: ShoppingBag,     label: "Orders",    id: "orders"    },
  { icon: Users,           label: "Customers", id: "customers" },
];

export default function AdminSidebar({ activeNav = "overview", user = null }) {
  return (
    <aside className="w-56 bg-green-950 flex flex-col fixed h-full z-20">

      {/* ── Logo ── */}
      <div className="p-5 border-b border-green-900">
        <button className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 bg-green-600 rounded-full rounded-bl-none flex items-center justify-center rotate-45 group-hover:rotate-12 transition-transform duration-300">
            <Leaf size={12} className="text-white -rotate-45 group-hover:-rotate-12 transition-transform duration-300" />
          </div>
          <div>
            <div className="font-serif text-white text-base font-light">Verdura</div>
            <div className="text-green-500 text-[10px]">Admin Panel</div>
          </div>
        </button>
      </div>

      {/* ── Nav links ── */}
      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map(({ icon: Icon, label, id }) => (
          <button
            key={id}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activeNav === id
                ? "bg-green-700 text-white"
                : "text-green-400 hover:bg-green-900 hover:text-white"
            }`}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </nav>

      {/* ── User footer ── */}
      <div className="p-4 border-t border-green-900">
        <div className="flex items-center gap-3 mb-3 px-2">
          {/* Avatar */}
          <div className="w-7 h-7 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
            {user?.name?.[0]?.toUpperCase() ?? "A"}
          </div>
          <div className="min-w-0">
            <div className="text-white text-xs font-medium truncate">
              {user?.name ?? "Admin"}
            </div>
            <div className="text-green-500 text-[10px] truncate">
              {user?.email ?? "admin@verdura.ma"}
            </div>
          </div>
        </div>

        <button className="w-full flex items-center gap-2 px-3 py-2 text-xs text-green-400 hover:text-white hover:bg-green-900 rounded-lg transition-colors">
          <LogOut size={13} /> Sign out
        </button>
      </div>

    </aside>
  );
}
