import { MoreHorizontal } from "lucide-react";

/**
 * OrdersTable
 * Props:
 *  - orders     : { id, customer, items, total, status, date }[]
 *  - showViewAll: boolean   — show "View all →" link in header (Overview mode)
 *  - showFilters: boolean   — show status filter tabs (Orders tab mode)
 *  - activeFilter: string  — currently active status filter
 */

const STATUS_STYLES = {
  delivered:  "bg-green-100 text-green-700",
  shipped:    "bg-blue-100 text-blue-700",
  processing: "bg-amber-100 text-amber-700",
  pending:    "bg-stone-100 text-stone-600",
};

const FILTERS = ["All", "Pending", "Processing", "Shipped", "Delivered"];

export default function OrdersTable({
  orders       = [],
  showViewAll  = false,
  showFilters  = false,
  activeFilter = "All",
}) {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 overflow-hidden">

      {/* ── Header ── */}
      <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">

        {showFilters ? (
          /* Status filter tabs */
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
                  f === activeFilter
                    ? "bg-green-700 text-white"
                    : "text-stone-500 hover:bg-stone-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        ) : (
          <h2 className="font-medium text-stone-800">Recent orders</h2>
        )}

        {showViewAll && (
          <button className="text-xs text-green-600 hover:text-green-700 font-medium transition-colors">
            View all →
          </button>
        )}
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-stone-50">
            <tr>
              {["Order ID", "Customer", "Items", "Total", "Status", "Date", ""].map(h => (
                <th
                  key={h}
                  className="text-left text-[11px] font-semibold tracking-wider uppercase text-stone-400 px-5 py-3"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {orders.map(order => (
              <tr
                key={order.id}
                className="border-t border-stone-50 hover:bg-stone-50 transition-colors"
              >
                <td className="px-5 py-3.5 font-mono text-xs text-green-700 font-medium">
                  {order.id}
                </td>
                <td className="px-5 py-3.5 font-medium text-stone-800">
                  {order.customer}
                </td>
                <td className="px-5 py-3.5 text-stone-500">
                  {order.items} items
                </td>
                <td className="px-5 py-3.5 font-semibold text-stone-800">
                  €{order.total}
                </td>
                <td className="px-5 py-3.5">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium capitalize ${STATUS_STYLES[order.status] ?? "bg-stone-100 text-stone-500"}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-stone-400 text-xs">
                  {order.date}
                </td>
                <td className="px-5 py-3.5">
                  {showFilters ? (
                    <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                      View
                    </button>
                  ) : (
                    <button className="text-stone-300 hover:text-stone-600 transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  )}
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-sm text-stone-400">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
