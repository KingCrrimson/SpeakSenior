import Link from "next/link";
import Image from "next/image";


const programs = [
  {
    slug: "business-english",
    title: "Business English",
    image: "/app/programs/images/bussiness-english.png",
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
    image: "/programs/images/everyday-communication",
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
    <main className="bg-gradient-to-b from-slate-50 to-indigo-50">
      
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
          Online English courses tailored to your goals
        </h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We create a personal training plan, build a schedule that fits your
          life, and help you achieve confident communication in real-world situations.
        </p>
      </section>

      {/* PROGRAM GRID */}
     <section className="max-w-6xl mx-auto px-6 pb-20">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {programs.map((program) => (
      <Link
        key={program.slug}
        href={`/programs/${program.slug}`}
        className="
          group rounded-3xl overflow-hidden
          bg-white border border-slate-200
          hover:shadow-xl hover:-translate-y-1
          transition-all duration-300
        "
      >
        {/* IMAGE */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={program.image}
            alt={program.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* CONTENT */}
        <div className="p-8">
          <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600">
            {program.title}
          </h3>

          <p className="text-slate-600">
            {program.description}
          </p>

          <div className="mt-5 font-semibold text-blue-600">
            Learn more →
          </div>
        </div>
      </Link>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl bg-blue-600 text-white p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure which program is right for you?
            </h2>

            <p className="text-white/90 mb-8">
              Get a free consultation and we’ll help you choose the best path
              based on your goals and current level.
            </p>

            <Link
              href="/#lead-form"
              className="
                inline-block bg-white text-blue-600 font-semibold
                px-8 py-3 rounded-xl
                hover:bg-slate-100 transition
              "
            >
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}