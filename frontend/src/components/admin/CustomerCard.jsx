/**
 * CustomerCard
 * Props:
 *  - customer : { name, ordersCount, totalSpent, status }
 */

const STATUS_STYLES = {
  delivered:  "bg-green-100 text-green-700",
  shipped:    "bg-blue-100 text-blue-700",
  processing: "bg-amber-100 text-amber-700",
  pending:    "bg-stone-100 text-stone-600",
};

export default function CustomerCard({ customer }) {
  const initials = customer.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="bg-white border border-stone-100 rounded-2xl p-5 flex items-center gap-4 hover:shadow-sm transition-shadow">

      {/* Avatar */}
      <div className="w-11 h-11 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-medium text-sm flex-shrink-0">
        {initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-stone-800 truncate">{customer.name}</div>
        <div className="text-xs text-stone-400 mt-0.5">
          {customer.ordersCount} order{customer.ordersCount !== 1 ? "s" : ""} · €{customer.totalSpent} total
        </div>
      </div>

      {/* Status badge */}
      <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0 ${STATUS_STYLES[customer.status] ?? "bg-stone-100 text-stone-500"}`}>
        {customer.status}
      </span>

    </div>
  );
}
