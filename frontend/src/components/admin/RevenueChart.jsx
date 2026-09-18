/**
 * RevenueChart
 * Props:
 *  - data   : number[]   — 12 monthly values
 *  - months : string[]   — 12 month labels
 *  - year   : string
 */

const DEFAULT_DATA   = [18, 24, 31, 27, 38, 42, 35, 48, 52, 47, 61, 58];
const DEFAULT_MONTHS = ["J","F","M","A","M","J","J","A","S","O","N","D"];

export default function RevenueChart({
  data   = DEFAULT_DATA,
  months = DEFAULT_MONTHS,
  year   = "2024",
}) {
  const maxVal = Math.max(...data);

  return (
    <div className="bg-white rounded-2xl p-6 border border-stone-100">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-medium text-stone-800">Monthly revenue</h2>
          <p className="text-xs text-stone-400">{year} — All months</p>
        </div>
        <select className="text-xs border border-stone-200 rounded-lg px-2 py-1 outline-none text-stone-600 cursor-pointer">
          <option>{year}</option>
        </select>
      </div>

      {/* Bars */}
      <div className="flex items-end gap-2 h-36">
        {data.map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group">

            {/* Bar */}
            <div
              className="w-full bg-green-100 group-hover:bg-green-500 rounded-t-md transition-colors relative"
              style={{ height: `${(val / maxVal) * 100}%` }}
            >
              {/* Tooltip on hover */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-green-700 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                €{(val * 400).toLocaleString()}
              </div>
            </div>

            {/* Month label */}
            <span className="text-[10px] text-stone-400">{months[i]}</span>
          </div>
        ))}
      </div>

    </div>
  );
}
