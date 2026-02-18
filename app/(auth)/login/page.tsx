"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleLogin() {
    setLoading(true);
    await signIn("google", { callbackUrl: "/" });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-indigo-50 to-white px-6">
      
      <div className="
        w-full max-w-md
        bg-white/70 backdrop-blur-xl
        border border-white/60
        rounded-3xl
        p-10
        shadow-xl
      ">

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Welcome back
        </h1>

        <p className="text-slate-600 mb-8">
          Sign in to continue your learning journey.
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="
            w-full
            flex items-center justify-center gap-3
            py-3
            rounded-xl
            bg-white
            border border-slate-200
            text-slate-700
            font-medium
            hover:bg-slate-50
            hover:shadow-md
            transition-all
            disabled:opacity-60
          "
        >
          {/* Google Icon */}
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path fill="#4285F4" d="M24 9.5c3.54 0 6.73 1.22 9.24 3.6l6.9-6.9C35.64 2.64 30.2 0 24 0 14.64 0 6.44 5.4 2.4 13.2l8.04 6.24C12.48 13.08 17.76 9.5 24 9.5z"/>
            <path fill="#34A853" d="M46.08 24.6c0-1.64-.15-3.2-.42-4.72H24v9h12.42c-.54 2.92-2.16 5.4-4.6 7.08l7.08 5.52C43.92 37.2 46.08 31.44 46.08 24.6z"/>
            <path fill="#FBBC05" d="M10.44 28.92a14.44 14.44 0 0 1 0-9.84l-8.04-6.24A24 24 0 0 0 0 24c0 3.84.9 7.48 2.4 10.8l8.04-5.88z"/>
            <path fill="#EA4335" d="M24 48c6.2 0 11.4-2.04 15.2-5.52l-7.08-5.52c-1.96 1.32-4.48 2.04-8.12 2.04-6.24 0-11.52-3.6-13.56-8.76l-8.04 5.88C6.44 42.6 14.64 48 24 48z"/>
          </svg>

          {loading ? "Signing in..." : "Continue with Google"}
        </button>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="px-4 text-sm text-slate-500">
            or
          </span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* Email login placeholder (optional for future) */}
        <div className="text-center text-sm text-slate-500">
          Email/password login coming soon.
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 font-medium hover:underline">
            Create one
          </Link>
        </p>

      </div>
    </main>
  );
}