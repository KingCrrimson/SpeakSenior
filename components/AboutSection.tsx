"use client";

import { motion, Variants } from "framer-motion";

const colorVariants = {
  "blue-dark":
    "bg-gradient-to-br from-blue-300/70 via-blue-300/60 to-blue-400/40 border border-white/50",
  "blue-light":
    "bg-gradient-to-br from-blue-200/70 via-blue-200/60 to-blue-300/40 border border-white/50",
  indigo:
    "bg-gradient-to-br from-indigo-200/70 via-indigo-200/60 to-indigo-300/40 border border-white/50",
};

type ColorKey = keyof typeof colorVariants;

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    },
  },
};

const slideInVariant = (direction: "left" | "right"): Variants => ({
  hidden: { opacity: 0, x: direction === "left" ? -40 : 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 20,
    },
  },
});


export default function AboutSection() {
  return (
    <section className="relative w-full bg-linear-to-b  from-slate-200  to-indigo-50   overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
       
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="mb-16 text-center"
        >
          <div className="inline-block bg-white/90 backdrop-blur shadow-xl px-10 py-5 rounded-full border border-white/60">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              What to expect?
            </h2>
          </div>
        </motion.div>

        <div className="space-y-20 mb-10">
          <InfoTile
            index="01📈"
            variant="blue-dark"
            title="Real experience. Real progress."
            description="For three years, we’ve helped professionals move beyond textbook English and speak with real confidence in interviews, meetings, and everyday workplace conversations.
                         Our students learn how to express ideas clearly, respond naturally, and communicate with impact in situations that actually matter — from career growth to daily collaboration"
          />
          <InfoTile
            index="02👨‍💻"
            variant="blue-light"
            align="right"
            title="Learning built around you"
            description="At SpeakSenior every lesson is led by a real instructor who listens, adapts, and teaches based on how you think and speak.
                         There are no scripts, no automated flows, and no one-size-fits-all methods. Instead, lessons evolve around your goals, challenges, and communication style — the same way real conversations do"
          />
          <InfoTile
            index="03💬"
            variant="indigo"
            title="Conversations over theory"
            description="We prioritize real communication from day one. Speaking and listening come first, because that’s how language is actually used.
                          Grammar is introduced only when it supports clarity and understanding — never as an abstract rule to memorize, and never as a replacement for real interaction"
          />
        </div>   
      </div>
    </section>
  );
}

function InfoTile({
  title,
  description,
  variant,
  align = "left",
  index,
}: {
  title: string;
  description: string;
  variant: ColorKey;
  align?: "left" | "right";
  index: string;
}) {
  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideInVariant(align)}
      whileHover={{
        y: -3,
        boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
      }}
      className={`
        relative max-w-4xl p-12 md:p-14 rounded-[3rem]
        transition-all duration-300 ease-out
        ${colorVariants[variant]}
        ${align === "right" ? "ml-auto mr-6" : "ml-6"}
      `}
    >
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/40 to-transparent opacity-40" />

      <div className="absolute -top-8 -left-6 text-slate-900/10 text-7xl font-black select-none">
        {index}
      </div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
          {title}
        </h3>
        <p className="text-slate-700 text-xl leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
