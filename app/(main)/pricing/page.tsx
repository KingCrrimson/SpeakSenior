"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
//const declarations

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 20,
    },
  },
};

const FEATURES = [
  {
    icon: "structured_roadmap.png",
    title: "Structured roadmap",
    description:
      "Move forward with a clearly defined learning path tailored to your goals, current level, and professional context. Every lesson builds logically on the previous one — no random exercises, no wasted time, only focused progression toward confident communication.",
    gradient:
      "from-blue-100/80 via-indigo-100/70 to-blue-200/60",
    glow: "bg-blue-300/30",
    shape: "rounded-[38px]",
    tilt: "md:-rotate-[1deg]",
  },
  {
    icon: "real_human_feedback.png",
    title: "Real human feedback",
    description:
      "Work directly with experienced instructors who listen carefully, correct naturally, and adapt sessions to the way you actually think and speak. You receive precise guidance on clarity, pronunciation, tone, and real-life language use — not automated corrections.",
      gradient:
      "from-indigo-100/80 via-blue-100/60 to-indigo-200/60",
    glow: "bg-indigo-300/30",
    shape: "rounded-[50px]",
    tilt: "md:rotate-[1deg]",
  },
  {
    title: "Visible progress",
    description:
      "See measurable improvement in fluency, vocabulary range, and confidence month by month. Clear benchmarks, practical performance tracking, and real conversational outcomes make your growth visible and motivating.",
     glow: "bg-blue-400/20",
    shape: "rounded-[42px]",
    tilt: "md:-rotate-[0.5deg]",
    gradient:
      "from-blue-50 via-blue-200/60 to-indigo-100/60",
    icon: "visible_progress.png",
  },
];


//main part 

export default function PricingPage() {

  return (
    <main className="bg-linear-to-b from-slate-100 via-blue-50 to-indigo-50 ">

      {/* ================= HERO ================= */}
<section className="relative pt-16 pb-12">
    
  {/* decorative lights */}
  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/30 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/30 blur-[120px] rounded-full pointer-events-none" />

  <motion.div
    initial="hidden"
    animate="visible"
    variants={fade}
    className="relative max-w-4xl mx-auto px-6 text-center"
  >

    {/* pill headline container */}
<div className="
  inline-block
  px-8 py-5
  rounded-[2.5rem]
  bg-white/20 backdrop-blur-xl
  border border-white/30
  shadow-lg
  max-w-[90%]
">      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
        Simple, transparent pricing
      </h1>
    </div>

    {/* subtext */}
    <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto">
      Invest in confident communication.
      <span className="font-semibold text-slate-900"> Invest in yourself.</span>
    </p>

    {/* trust line */}
    <p className="mt-4 text-sm text-slate-500">
      No contracts. Cancel anytime.
    </p>
  </motion.div>
</section>

      {/* ================= PLANS ================= */}
      <section className="pb-10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* STARTER */}
          <Plan
            title="Starter"
            price="$29"
            description="Build foundations and practice regularly."
            features={[
              "Weekly live lesson",
              "Essential grammar",
              "Homework tasks",
            ]}
          />

          {/* PRO */}
          <Plan
            featured
            title="Professional"
            price="$79"
            description="Fast progress with personal guidance."
            features={[
              "Individual learning roadmap",
              "Interview & meeting simulations",
              "Monthly progress analytics",
              "Career-focused practice",
              "Priority support",
            ]}
          />

          {/* EXECUTIVE */}
          <Plan
            title="Executive"
            price="$149"
            description="Maximum growth & personal mentoring."
            features={[
              "1-on-1 personal mentor",
              "Tailored development strategy",
              "Executive communication coaching",
              "High-stakes meeting simulations",
              "Priority booking & fast rescheduling",
            ]}
          />
        </div>
      </section>

{/* ===== Section Intro ===== */}
<div className="max-w-3xl mx-auto text-center pt-22 ">
  
  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-2">
    Everything you need to speak
    <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 
                     bg-clip-text text-transparent">
      with confidence.
    </span>
  </h2>

  <p className="text-slate-700 text-lg leading-relaxed">
    Structured growth, personal guidance, and measurable progress —
    all designed to help you communicate clearly in real-world situations.
  </p>
</div>

      {/* ===== Features ===== */}
<section className="relative py-12 overflow-visible">
  <div className="max-w-5xl mx-auto space-y-12">

    {FEATURES.map((f, i) => (
      <motion.div
        key={i}
       variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{
        boxShadow: "0 25px 60px rgba(37, 99, 235, 0.15)",}}
        className={`
          group relative
          p-2 md:p-6
          bg-gradient-to-br ${f.gradient}
          backdrop-blur-xl
          border border-white/50
          shadow-xl
          ${f.shape}
          ${f.tilt}
        `}
      >

        {/* ==== Floating Glow Blob ==== */}
        <div className={`
          absolute -top-16 -right-10
          w-72 h-72
          ${f.glow}
          blur-[120px]
          rounded-full
          opacity-60
          pointer-events-none
        `} />

        {/* ==== Secondary Blob ==== */}
        <div className="
          absolute -bottom-12 -left-10
          w-56 h-56
          bg-white/40
          blur-[100px]
          rounded-full
          opacity-40
          pointer-events-none
        " />

        {/* ==== Content Layout ==== */}
        <div className="relative z-10 flex items-center ">

          {/* Icon Glass Tile */}
          <div className="
            relative w-[220px] h-[220px] shrink-0
            rounded-[28px]
            
            bg-transparent
            flex items-center justify-center
            transition-all duration-500
            group-hover:scale-110
            group-hover:rotate-3
          ">
            <Image
              src={`/pricing/${f.icon}`}
              alt=""
             fill
              draggable={false}
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
              {f.title}
            </h3>

            <p className="text-slate-700 leading-relaxed text-[16px]">
              {f.description}
            </p>
          </div>
        </div>

        {/* ==== Subtle Border Glow On Hover ==== */}
        <div className="
          absolute inset-0 rounded-[inherit]
          ring-0 group-hover:ring-2
          ring-blue-400/40
          transition-all duration-500
          pointer-events-none
        " />

      </motion.div>
    ))}

  </div>
</section>

      {/* ================= FINAL CTA ================= */}
    <section className="relative pt-16 pb-28 overflow-hidden">

  {/* soft background glow */}
  <div className="absolute left-1/2 -translate-x-1/2 top-10 
                  w-[600px] h-[300px] 
                  bg-blue-200/30 blur-[140px] 
                  rounded-full -z-10 pointer-events-none" />

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fade}
    className="max-w-3xl mx-auto px-6 text-center"
  >
    <div className="
      relative
      bg-blue-300/30 backdrop-blur-xl
      ring-2 ring-indigo-500/60
      rounded-[2.5rem]
      px-10 py-12
      shadow-[0_20px_60px_rgba(15,23,42,0.08)]
    ">

      {/* subtle top highlight */}
      <div className="absolute inset-0 rounded-[inherit] 
                      bg-gradient-to-b from-indigo-500/50 via-white/80 to-transparent 
                      opacity-40 pointer-events-none" />

      <div className="relative z-10">

        <h2 className="text-4xl md:text-5xl font-semibold 
                       text-slate-900 tracking-tight mb-4">
          Begin your next chapter
        </h2>

        <p className="text-slate-600 text-lg leading-relaxed mb-10">
          A structured, personal approach to confident communication —
          designed for professionals who value clarity and progress.
        </p>

        <Link
          href="/signup"
          className="
            inline-flex items-center justify-center
            px-10 py-4 rounded-xl
            bg-gradient-to-r from-blue-600 to-indigo-500
            text-white font-medium
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          Start your journey
        </Link>

      </div>
    </div>
  </motion.div>
</section>

    </main>
  );
}

function Plan({
  title,
  price,
  description,
  features,
  featured,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}) {
  return (
  <motion.div
  whileHover={
  featured
    ? {
        y: -2,
        scale: 1.01 
      }
    : {
        y: -1,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      }
}
  transition={{ duration: 0.05 }}
  className={`
  relative
  p-6 sm:p-10
  rounded-[2rem]
  backdrop-blur-md
  transition-all

  ${
    featured
      ? `
        border border-blue-500/60
        ring-2 ring-blue-500/70
        hover:ring-blue-500
        bg-gradient-to-br from-blue-400/70 via-blue-200/60 to-indigo-300/40
      `
      : `
        border border-slate-200
        bg-slate-50/60
      `
  }
`}
>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-4 py-1 rounded-full shadow">
          Most popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-slate-600 mb-6">{description}</p>

      <div className="text-4xl font-black text-slate-900 mb-8">
        {price}
        <span className="text-base font-medium text-slate-500">
          {" "}
          / month
        </span>
      </div>

      <ul className="space-y-3 text-slate-700 mb-10">
        {features.map((f) => (
          <li key={f}>✔ {f}</li>
        ))}
      </ul>

      <Link
        href="/signup"
        className={`
          block text-center py-3 rounded-xl font-semibold transition
          ${
            featured
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-indigo-500 text-white hover:bg-indigo-600"
          }
        `}
      >
        Start now
      </Link>
    </motion.div>
  );
}