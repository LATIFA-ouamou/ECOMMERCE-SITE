import { useState } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";

/**
 * RegisterForm
 * Props:
 *  - error   : string
 *  - loading : boolean
 */

/* Password strength rules */
const RULES = [
  { label: "At least 8 characters", test: v => v.length >= 8 },
  { label: "One uppercase letter",  test: v => /[A-Z]/.test(v) },
  { label: "One number",            test: v => /\d/.test(v)    },
];

export default function RegisterForm({ error = "", loading = false }) {
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState("");

  const strength = RULES.filter(r => r.test(password)).length;
  const strengthLabel = ["Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["bg-red-400", "bg-amber-400", "bg-yellow-400", "bg-green-500"][strength];

  return (
    <div className="space-y-4">

      {/* ── Full name ── */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">Full name</label>
        <input
          type="text"
          placeholder="Amina Benali"
          autoComplete="name"
          className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 text-stone-700 bg-white transition-shadow placeholder:text-stone-300"
        />
      </div>

      {/* ── Email ── */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">Email address</label>
        <input
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 text-stone-700 bg-white transition-shadow placeholder:text-stone-300"
        />
      </div>

      {/* ── Password ── */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">Password</label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="new-password"
            className="w-full px-4 py-3 pr-11 text-sm border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 text-stone-700 bg-white transition-shadow"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors p-1"
          >
            {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        {/* Strength bar */}
        {password.length > 0 && (
          <div className="mt-2 space-y-1.5">
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i < strength ? strengthColor : "bg-stone-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-[11px] text-stone-400">
              Password strength: <span className="font-medium text-stone-600">{strengthLabel}</span>
            </p>
            <div className="space-y-1">
              {RULES.map(rule => {
                const ok = rule.test(password);
                return (
                  <div key={rule.label} className={`flex items-center gap-1.5 text-[11px] ${ok ? "text-green-600" : "text-stone-400"}`}>
                    {ok
                      ? <Check size={10} className="flex-shrink-0" />
                      : <X size={10} className="flex-shrink-0" />
                    }
                    {rule.label}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Confirm password ── */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">Confirm password</label>
        <input
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 text-stone-700 bg-white transition-shadow"
        />
      </div>

      {/* ── Terms ── */}
      <label className="flex items-start gap-2.5 cursor-pointer group">
        <div className="w-4 h-4 mt-0.5 rounded-[4px] border-2 border-stone-300 group-hover:border-green-400 flex items-center justify-center flex-shrink-0 transition-colors">
        </div>
        <span className="text-xs text-stone-500 leading-relaxed">
          I agree to the{" "}
          <button type="button" className="text-green-600 hover:underline">Terms of Service</button>
          {" "}and{" "}
          <button type="button" className="text-green-600 hover:underline">Privacy Policy</button>
        </span>
      </label>

      {/* ── Error ── */}
      {error && (
        <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
          <span className="mt-0.5 flex-shrink-0">⚠️</span>
          {error}
        </div>
      )}

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-green-700 hover:bg-green-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-green-700/20 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="32" strokeDashoffset="12"/>
            </svg>
            Creating account…
          </span>
        ) : "Create account"}
      </button>

    </div>
  );
}
