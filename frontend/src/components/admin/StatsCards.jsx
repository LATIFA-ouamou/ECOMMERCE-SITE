import { TrendingUp, ShoppingBag, Users, Package, ArrowUpRight } from "lucide-react";

/**
 * StatsCards
 * Props:
 *  - stats: { revenue, orders, customers, products }
 */

const CARD_CONFIG = [
  {
    key:   "revenue",
    label: "Total Revenue",
    icon:  TrendingUp,
    format: v => `€${Number(v).toLocaleString()}`,
    change: "+18.4%",
    bg:    "bg-green-100",
    text:  "text-green-600",
  },
  {
    key:   "orders",
    label: "Orders",
    icon:  ShoppingBag,
    format: v => v,
    change: "+12.1%",
    bg:    "bg-blue-100",
    text:  "text-blue-600",
  },
  {
    key:   "customers",
    label: "Customers",
    icon:  Users,
    format: v => Number(v).toLocaleString(),
    change: "+9.7%",
    bg:    "bg-purple-100",
    text:  "text-purple-600",
  },
  {
    key:   "products",
    label: "Products",
    icon:  Package,
    format: v => v,
    change: "In catalog",
    bg:    "bg-amber-100",
    text:  "text-amber-600",
  },
];

export default function StatsCards({
  stats = { revenue: 24850, orders: 342, customers: 1204, products: 12 },
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {CARD_CONFIG.map(({ key, label, icon: Icon, format, change, bg, text }) => (
        <div key={key} className="bg-white rounded-2xl p-5 border border-stone-100 hover:shadow-sm transition-shadow">

          {/* Icon + change badge */}
          <div className="flex items-center justify-between mb-4">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${bg}`}>
              <Icon size={16} className={text} />
            </div>
            <span className="text-xs font-medium text-green-600 flex items-center gap-0.5">
              <ArrowUpRight size={12} />
              {change}
            </span>
          </div>

          {/* Value */}
          <div className="text-2xl font-light text-stone-800 mb-0.5">
            {format(stats[key] ?? 0)}
          </div>

          {/* Label */}
          <div className="text-xs text-stone-400">{label}</div>

        </div>
      ))}
    </div>
  );
}
