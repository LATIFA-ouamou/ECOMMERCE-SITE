import { Bell, Plus } from "lucide-react";

/**
 * AdminTopbar
 * Props:
 *  - title            : string   — page/section title
 *  - notificationCount: number   — badge on bell (0 = no badge)
 */
export default function AdminTopbar({ title = "Overview", notificationCount = 1 }) {
  return (
    <div className="bg-white border-b border-stone-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">

      {/* Section title */}
      <h1 className="font-serif text-xl font-light text-stone-800 capitalize">
        {title}
      </h1>

      <div className="flex items-center gap-3">

        {/* Bell */}
        <button className="relative p-2 text-stone-400 hover:text-stone-600 transition-colors rounded-lg hover:bg-stone-50">
          <Bell size={18} />
          {notificationCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full" />
          )}
        </button>

        {/* Add product CTA */}
        <button className="flex items-center gap-2 px-4 py-2 bg-green-700 hover:bg-green-600 text-white text-sm font-medium rounded-xl transition-colors">
          <Plus size={14} />
          Add product
        </button>

      </div>
    </div>
  );
}
