"use client"

import Image from "next/image";
import Link from "next/link";
import ScrollToFormatButton from "@/components/ScrollToFormatButton";
import { motion } from "framer-motion";


const tests = [
  {
    slug: "5-min",
    title: "Quick check",
    time: "~5 minutes",
    description: "Fast evaluation of core skills.",
  },
  {
    slug: "standard",
    title: "Standard",
    time: "~10 minutes",
    description: "Balanced option for time and accuracy.",
    featured: true,
  },
  {
    slug: "12-min",
    title: "Deep test",
    time: "~12 minutes",
    description: "More tasks, deeper language analysis.",
  },
];

export default function LevelTestPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
                Discover your English level
              </h1>

              <div className="flex gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  5 minutes
                </span>
                <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  up to 95% accuracy
                </span>
              </div>

              <p className="text-slate-600 text-lg mb-8 max-w-xl">
                Take a short test and understand how well you read, write,
                speak and understand English in real situations.
              </p>

              <ScrollToFormatButton />

              {/* SOCIAL */}
              <div className="grid grid-cols-2 gap-2 mt-10 max-w-md">
                <div className="p-4 rounded-2xl border bg-white">
                  <div className="text-2xl font-bold">98,763</div>
                  <div className="text-sm text-slate-500">
                    people already tested
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
           
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ 
    opacity: 1, 
    y: [0, -16, 0] 
  }}
  transition={{
    opacity: { duration: 0.6 },
    y: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
  className="relative"
>
  <Image
    src="/level-test-hero.png"
    alt="English level test"
    width={600}
    height={600}
    className="w-full h-auto"
    priority
    draggable={false}
  />
</motion.div>

          </div>
        </div>
      </section>

      {/* ================= FORMAT SELECTION ================= */}
      <section
        id="formats"
        className="relative bg-gradient-to-b from-blue-100 to-blue-50 pb-8"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Choose your test format
          </h2>

          {/* TOP CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {tests.map((test) => (
              <Link
                key={test.slug}
                href={`/level-test/${test.slug}`}
                className={`
                  group rounded-3xl p-8
                  bg-white border border-slate-200
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                  ${test.featured ? "ring-2 ring-blue-500" : ""}
                `}
              >
                <h3 className="text-2xl font-bold mb-2">{test.title}</h3>

                <div className="text-blue-600 font-semibold mb-4">
                  {test.time}
                </div>

                <p className="text-slate-600 mb-6">
                  {test.description}
                </p>

                <div className="font-semibold text-blue-600">
                  Start →
                </div>
              </Link>
            ))}
          </div>

          {/* BIG AI TEST */}
          <div className="
            relative overflow-hidden rounded-3xl
            bg-white border border-slate-200
            p-10 md:p-12
            flex items-center justify-between
          ">
            <div className="max-w-xl">
              <h3 className="text-3xl font-bold mb-3">
                Full AI assessment
              </h3>

              <div className="text-blue-600 font-semibold mb-4">
                from 30 minutes
              </div>

              <p className="text-slate-600 mb-6">
                Comprehensive evaluation of speaking, listening,
                grammar and vocabulary with smart analysis.
              </p>

              <Link
                href="/level-test/ai"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
              >
                Start →
              </Link>
            </div>

            {/* decorative preview */}
            <div className="hidden md:flex items-center justify-center w-60 h-60  rounded-2xl" >
            <Image
                src="/robot.png"
                alt="robot"
                width={240}
                height={240}
                className="h-auto"
                priority
                draggable={false}
              />
             </div>
          </div>
        </div>
      </section>
    </>
  );
}