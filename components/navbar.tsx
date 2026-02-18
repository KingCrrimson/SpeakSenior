"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  const isLoggedIn = !!session?.user;
  const isLoading = status === "loading";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/programs" className="hover:text-blue-600 transition">
            Programs
          </Link>
          <Link href="/level-test" className="hover:text-blue-600 transition">
            Level Test
          </Link>
          <Link href="/pricing" className="hover:text-blue-600 transition">
            Pricing
          </Link>

          {isLoggedIn && (
            <Link
              href="/dashboard"
              className="hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">

          {isLoading && (
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          )}

          {!isLoading && isLoggedIn && (
            <>
              {/* Avatar */}
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full border border-slate-200"
                />
              )}

              <Button
                variant="ghost"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Log out
              </Button>
            </>
          )}

          {!isLoading && !isLoggedIn && (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>

              <Link href="/login">
                <Button variant="primary">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6 pt-4 space-y-5 bg-white/90 backdrop-blur-xl border-t">

          <Link
            href="/programs"
            onClick={() => setOpen(false)}
            className="block text-base font-medium hover:text-blue-600 transition"
          >
            Programs
          </Link>

          <Link
            href="/level-test"
            onClick={() => setOpen(false)}
            className="block text-base font-medium hover:text-blue-600 transition"
          >
            Level Test
          </Link>

          <Link
            href="/pricing"
            onClick={() => setOpen(false)}
            className="block text-base font-medium hover:text-blue-600 transition"
          >
            Pricing
          </Link>

          {isLoggedIn && (
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="block text-base font-medium hover:text-blue-600 transition"
            >
              Dashboard
            </Link>
          )}

          <div className="pt-6 border-t border-slate-200 flex flex-col gap-4">

            {isLoggedIn ? (
              <>
                <div className="flex items-center justify-center gap-3">
                  {session.user?.image && (
                    <img
                      src={session.user.image}
                      alt="User avatar"
                      className="w-10 h-10 rounded-full border border-slate-200"
                    />
                  )}
                  <div className="text-sm text-slate-600">
                    {session.user?.email}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  className="
                    w-full py-3 rounded-xl
                    bg-slate-100
                    font-semibold
                    transition
                    active:scale-[0.98]
                  "
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="
                    w-full text-center
                    py-3 rounded-xl
                    bg-gradient-to-br from-blue-500 to-indigo-500
                    text-white font-semibold
                    shadow-lg
                    transition
                    active:scale-[0.98]
                  "
                >
                  Get Started
                </Link>

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="
                    text-center text-sm text-slate-500
                    hover:text-slate-700 transition
                  "
                >
                  Already have an account? Log in
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}