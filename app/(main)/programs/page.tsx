import Link from "next/link";
import Image from "next/image";


const programs = [
  {
    slug: "business-english",
    title: "Business English",
    image: "/programs/images/business-english.png",
    description:
      "Run meetings, negotiate, and communicate professionally in international environments.",
  },
  {
    slug: "interview-prep",
    title: "Job Interview Preparation",
    image: "/programs/images/interview-prep.png",
    description:
      "Prepare strong answers, speak confidently, and present your experience clearly.",
  },
  {
    slug: "it-english",
    title: "English for IT & Tech",
    image: "/programs/images/it-english.png",
    description:
      "Discuss projects, requirements, and technical ideas with global teams.",
  },
  {
    slug: "everyday-communication",
    title: "Everyday Communication",
    image: "/programs/images/everyday-communication.png",
    description:
      "Speak naturally in daily situations, travel, and social interactions.",
  },
  {
    slug: "exam-prep",
    title: "Exam Preparation",
    image: "/programs/images/exam-prep.png",
    description:
      "Structured preparation for IELTS, TOEFL and other certifications.",
  },
  {
    slug: "speaking-confidence",
    title: "Speaking Confidence",
    image: "/programs/images/speaking-confidence.png",
    description:
      "Break the language barrier and start speaking fluently without fear.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 text-slate-900">

      {/* Background atmosphere */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[700px] bg-blue-300/30 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-indigo-300/30 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* ================= HERO ================= */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">

        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
          English programs
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            built for real results
          </span>
        </h1>

        <p className="mt-10 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Structured learning. Personal guidance. Measurable progress.
          Each program is designed to move you forward with clarity and confidence.
        </p>

      </section>

      {/* ================= PROGRAM GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">

          {programs.map((program, i) => {
            const glow = [
              "from-blue-200/50 to-indigo-200/40",
              "from-indigo-200/50 to-blue-200/40",
              "from-blue-100/60 to-blue-300/40",
            ];

            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="
                  group relative
                  rounded-[36px]
                  overflow-hidden
                  bg-white/70
                  backdrop-blur-xl
                  border border-white/60
                  shadow-md
                  transition-all duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_40px_80px_rgba(59,130,246,0.25)]
                "
              >

                {/* Soft gradient glow */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br ${glow[i % glow.length]}
                  transition-opacity duration-500
                `} />

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-110
                    "
                  />

                  {/* Soft overlay instead of dark drama */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">

                  <h3 className="
                    text-2xl font-bold mb-4
                    transition-colors duration-300
                    group-hover:text-blue-600
                  ">
                    {program.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    {program.description}
                  </p>

                  <div className="
                    inline-flex items-center gap-2
                    font-medium text-blue-600
                    transition-all duration-300
                    group-hover:gap-4
                  ">
                    Explore program
                    <span className="transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>

                </div>

              </Link>
            );
          })}

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="relative pb-36">

        <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/40 blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="
            relative
            rounded-[48px]
            border border-white/60
            bg-white/70
            backdrop-blur-xl
            px-16 py-20
            shadow-[0_30px_80px_rgba(59,130,246,0.15)]
          ">

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not sure where to start?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Book a free consultation and we’ll design the right learning path
              based on your goals, level, and schedule.
            </p>

            <Link
              href="/signup"
              className="
                inline-flex items-center justify-center
                px-12 py-5 rounded-2xl
                bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold
                shadow-lg
                hover:scale-[1.04]
                hover:shadow-[0_30px_80px_rgba(79,70,229,0.35)]
                transition-all duration-300
              "
            >
              Book free consultation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}