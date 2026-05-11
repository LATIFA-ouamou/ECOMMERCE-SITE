import { ArrowLeft, Mail } from "lucide-react";

/**
 * ForgotPasswordForm
 * Props:
 *  - sent  : boolean  — true after email is sent (shows success state)
 *  - error : string
 */
export default function ForgotPasswordForm({ sent = false, error = "" }) {

  if (sent) {
    return (
      <div className="text-center space-y-4 py-6">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Mail size={24} className="text-green-600" />
        </div>
        <h2 className="font-serif text-2xl font-light text-stone-800">Check your inbox</h2>
        <p className="text-stone-500 text-sm font-light leading-relaxed">
          We've sent a password reset link to your email. It expires in 15 minutes.
        </p>
        <button
          type="button"
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1 mx-auto"
        >
          <ArrowLeft size={12} /> Back to sign in
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">

      <div>
        <h2 className="font-serif text-2xl font-light text-stone-900 mb-1">Reset password</h2>
        <p className="text-stone-400 text-sm font-light">
          Enter your email and we'll send you a reset link.
        </p>
      </div>

      {/* Email */}
      <div>
        <label className="text-xs font-medium text-stone-500 block mb-1.5">Email address</label>
        <input
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className="w-full px-4 py-3 text-sm border border-stone-200 rounded-xl outline-none focus:ring-2 focus:ring-green-300 text-stone-700 bg-white transition-shadow placeholder:text-stone-300"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-3.5 bg-green-700 hover:bg-green-600 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-green-700/20 active:scale-[0.99]"
      >
        Send reset link
      </button>

      {/* Back link */}
      <button
        type="button"
        className="w-full text-xs text-stone-400 hover:text-green-600 transition-colors flex items-center justify-center gap-1.5 py-1"
      >
        <ArrowLeft size={12} />
        Back to sign in
      </button>

    </div>
  );
}
