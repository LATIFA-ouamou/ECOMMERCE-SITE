import { useState } from "react";
import AuthTabToggle       from "../components/auth/AuthTabToggle";
import LoginForm           from "../components/auth/LoginForm";
import RegisterForm        from "../components/auth/RegisterForm";
import ForgotPasswordForm  from "../components/auth/ForgotPasswordForm";
import AuthLeftPanel from './../components/auth/AuthLeftPanel';

export default function AuthPage() {
  const [mode, setMode] = useState("login"); 

  return (
    <div className="min-h-screen flex">

      <AuthLeftPanel />

      <div className="flex-1 flex items-center justify-center bg-stone-50 p-8">
        <div className="w-full max-w-md">

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

          {mode !== "forgot" && (
            <AuthTabToggle mode={mode} onModeChange={setMode} />
          )}

    

          {mode === "login"    && <LoginForm    error="" loading={false} />}
          {mode === "register" && <RegisterForm error="" loading={false} />}
          {mode === "forgot"   && <ForgotPasswordForm sent={false} error="" />}

        </div>
      </div>
    </div>
  );
}