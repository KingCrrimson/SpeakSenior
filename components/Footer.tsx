import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* ================= TOP ================= */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* ===== Brand ===== */}
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              SpeakSenior
            </h3>

            <p className="text-sm text-slate-600 mt-3 max-w-xs leading-relaxed">
              Professional English coaching designed for clarity,
              confidence, and real-world communication.
            </p>
          </div>

          {/* ===== Services ===== */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-semibold text-slate-900 mb-2">
              Services
            </span>

            <Link href="/programs" className="text-slate-600 hover:text-blue-600 transition">
              Programs
            </Link>

            <Link href="/level-test" className="text-slate-600 hover:text-blue-600 transition">
              Level Test
            </Link>

            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 transition">
              Pricing
            </Link>

            <Link href="/#faq"   scroll={true}
            className="text-slate-600 hover:text-blue-600 transition">
              FAQ
            </Link>
          </div>

          {/* ===== Company ===== */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="font-semibold text-slate-900 mb-2">
              Company
            </span>

            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">
              About
            </Link>

            <Link href="/signup" className="text-slate-600 hover:text-blue-600 transition">
              Get Started
            </Link>

            <Link href="/login" className="text-slate-600 hover:text-blue-600 transition">
              Log in
            </Link>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row md:justify-between gap-4 text-xs text-slate-500">

          <div>
            © {new Date().getFullYear()} SpeakSenior. All rights reserved.
          </div>

          {/*<div className="flex gap-6">
            <Link href="/privacy" className="hover:text-blue-600 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 transition">
              Terms of Service
            </Link>
          </div>*/}

        </div>

      </div>
    </footer>
  );
}