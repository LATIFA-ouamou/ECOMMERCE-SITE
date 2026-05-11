import { Leaf, Check } from "lucide-react";

/**
 * AuthLeftPanel
 * Props:
 *  - perks : string[]  — bullet points shown below the headline
 */

const DEFAULT_PERKS = [
  "2,400+ happy customers",
  "Plants delivered to your door",
  "Expert care guides included",
];

/* Fixed botanical positions so the pattern is consistent (no Math.random) */
const BOTANICALS = [
  { top: "8%",  left: "12%", size: 80,  rotate: 20  },
  { top: "22%", left: "72%", size: 110, rotate: 145 },
  { top: "45%", left: "5%",  size: 70,  rotate: 300 },
  { top: "60%", left: "60%", size: 130, rotate: 60  },
  { top: "78%", left: "20%", size: 90,  rotate: 200 },
  { top: "15%", left: "40%", size: 60,  rotate: 80  },
  { top: "85%", left: "75%", size: 100, rotate: 330 },
  { top: "50%", left: "85%", size: 75,  rotate: 170 },
];

export default function AuthLeftPanel({ perks = DEFAULT_PERKS }) {
  return (
    <div className="hidden lg:flex flex-col justify-between w-1/2 p-14 relative overflow-hidden bg-green-950">

      {/* ── Botanical background pattern ── */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        {BOTANICALS.map((b, i) => (
          <div
            key={i}
            className="absolute text-white"
            style={{
              top:       b.top,
              left:      b.left,
              fontSize:  `${b.size}px`,
              transform: `rotate(${b.rotate}deg)`,
            }}
          >
            🌿
          </div>
        ))}
      </div>

      {/* ── Logo ── */}
      <div className="relative flex items-center gap-3">
        <div className="w-9 h-9 bg-green-600 rounded-full rounded-bl-none flex items-center justify-center rotate-45">
          <Leaf size={16} className="text-white -rotate-45" />
        </div>
        <span className="font-serif text-2xl font-light text-white tracking-tight">PlantShop</span>
      </div>

      {/* ── Hero copy ── */}
      <div className="relative">
        <div className="text-8xl mb-6 select-none">🌿</div>

        <h2 className="font-serif text-5xl font-light text-white leading-tight mb-4 tracking-tight">
          Grow your<br />
          <em className="italic text-green-400">green world</em>
        </h2>

        <p className="text-green-300 font-light text-lg leading-relaxed max-w-sm mb-10">
          Join thousands of plant lovers in Morocco discovering the joy of bringing nature indoors.
        </p>

        {/* Perks list */}
        <div className="space-y-3">
          {perks.map(perk => (
            <div key={perk} className="flex items-center gap-3 text-green-300">
              <div className="w-5 h-5 bg-green-700/60 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={11} className="text-green-300" />
              </div>
              <span className="text-sm font-light">{perk}</span>
            </div>
          ))}
        </div>
      </div>

 

    </div>
  );
}
