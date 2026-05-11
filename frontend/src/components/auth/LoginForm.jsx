import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

/**
 * LoginForm
 * Props:
 *  - email    : string
 *  - password : string
 *  - error    : string
 *  - loading  : boolean
 */
export default function LoginForm({
  email    = "",
  password = "",
  error    = "",
  loading  = false,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="space-y-4">

      {/* ── Email ── */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">
          Email address
        </label>
        <input
          type="email"
          defaultValue={email}
          placeholder="you@example.com"
          autoComplete="email"
          className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 text-stone-700 bg-white transition-shadow placeholder:text-stone-300"
        />
      </div>

      {/* ── Password ── */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">
          Password
        </label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            defaultValue={password}
            placeholder="••••••••"
            autoComplete="current-password"
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
      </div>

      {/* ── Forgot password ── */}
      <div className="flex justify-end">
        <button
          type="button"
          className="text-xs text-green-600 hover:text-green-700 transition-colors hover:underline"
        >
          Forgot password?
        </button>
      </div>

      {/* ── Error message ── */}
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
            Signing in…
          </span>
        ) : "Sign in"}
      </button>

    </div>
  );
}
