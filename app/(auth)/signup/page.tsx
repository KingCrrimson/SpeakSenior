"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong");
      } else {
        window.location.href = "/login";
      }

    } catch (err) {
      setError("Server error");
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-indigo-50 to-white px-6">
      <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-xl">

        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Create your account
        </h1>

        <p className="text-slate-600 mb-8">
          Start improving your English today.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:shadow-lg transition-all disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

        </form>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium">
            Log in
          </Link>
        </p>

      </div>
    </main>
  );
}