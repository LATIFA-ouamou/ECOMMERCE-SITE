
import AuthTabToggle       from "../components/auth/AuthTabToggle";
import LoginForm           from "../components/auth/LoginForm";
import RegisterForm        from "../components/auth/RegisterForm";
import SocialAuth          from "../components/auth/SocialAuth";
import ForgotPasswordForm  from "../components/auth/ForgotPasswordForm";
import AuthLeftPanel from './../components/auth/AuthLeftPanel';

/* ─────────────────────────────────────────────
   AuthPage — pure UI composition
   Change `mode` below to preview each screen:
     "login" | "register" | "forgot"
───────────────────────────────────────────── */
const mode = "login"; // ← change this to preview different forms

export default function AuthPage() {
  return (
    <div className="min-h-screen flex">

      {/* ── 1. Left decorative panel (desktop only) ── */}
      <AuthLeftPanel />

      {/* ── 2. Right form panel ── */}
      <div className="flex-1 flex items-center justify-center bg-stone-50 p-8">
        <div className="w-full max-w-md">

          {/* 2b. Page heading */}
          <div className="mb-6">
            <h1 className="font-serif text-3xl font-light text-stone-900 mb-1">
              {mode === "login"    ? "Welcome back"    :
               mode === "register" ? "Create account"  :
                                     "Reset password"  }
            </h1>
            <p className="text-stone-400 text-sm font-light">
              {mode === "login"    ? "Sign in to your Verdura account"   :
               mode === "register" ? "Join the Verdura community"        :
                                     "We'll email you a reset link"      }
            </p>
          </div>

          {/* 2c. Tab switcher (hidden on forgot password) */}
          {mode !== "forgot" && <AuthTabToggle mode={mode} />}

          {/* 2d. Social auth (hidden on forgot password) */}
          {mode !== "forgot" && <div className="mb-4"><SocialAuth /></div>}

          {/* 2e. Form — swaps based on mode */}
          {mode === "login"    && <LoginForm    error="" loading={false} />}
          {mode === "register" && <RegisterForm error="" loading={false} />}
          {mode === "forgot"   && <ForgotPasswordForm sent={false} error="" />}

        
        </div>
      </div>
    </div>
  );
}
