"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600">Loading...</p>
      </main>
    );
  }

  if (!session) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white">

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
        <div className="flex items-center gap-6">

          {session.user?.image && (
            <img
              src={session.user.image}
              alt="User avatar"
              className="w-20 h-20 rounded-full border border-slate-200 shadow-sm"
            />
          )}

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Welcome back, {session.user?.name || "Student"}
            </h1>

            <p className="text-slate-600 mt-2">
              {session.user?.email}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm">Active Program</p>
            <h2 className="text-xl font-semibold text-slate-900 mt-2">
              Not enrolled yet
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm">Progress</p>
            <h2 className="text-xl font-semibold text-slate-900 mt-2">
              0%
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <p className="text-slate-500 text-sm">Next Session</p>
            <h2 className="text-xl font-semibold text-slate-900 mt-2">
              —
            </h2>
          </div>

        </div>
      </section>

    </main>
  );
}