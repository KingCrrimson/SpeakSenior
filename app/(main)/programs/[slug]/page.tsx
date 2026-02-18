import Link from "next/link";
import { programs } from "@/lib/programs";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = programs[slug as keyof typeof programs];

  if (!program) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Program not found</h1>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="overflow-hidden relative h-[85vh] min-h-[620px] flex items-center justify-center text-white">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={`/programs/hero-images/${slug}.png`}
            alt={program.title}
            fill
            className="object-cover scale-[1.02]"
            priority
          />

          {/* refined overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

          {/* subtle blue tint */}
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl px-6 text-center">

          <p className="uppercase tracking-[0.25em] text-xs text-blue-300 mb-6 font-medium">
            {program.tagline}
          </p>

          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
            {program.title}
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed">
            {program.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">

            <Link
              href="/signup"
              className="px-10 py-4 rounded-2xl bg-blue-500/90 hover:bg-blue-600 backdrop-blur font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Start program
            </Link>

            <Link
              href="/#lead-form"
              className="px-10 py-4 rounded-2xl bg-white/15 backdrop-blur-md hover:bg-white/25 transition-all duration-300 border border-white/20"
            >
              Free consultation
            </Link>

          </div>
        </div>
      </section>


      {/* ================= STRUCTURE ================= */}
      <section className="relative py-28">

        {/* soft gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-50 -z-20" />

        <div className="max-w-5xl mx-auto px-6">

          {/* Section Title */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
              Program structure
            </h2>

            <p className="text-slate-900/60 text-lg max-w-2xl mx-auto leading-relaxed">
              A progressive path designed for steady growth, clarity, and lasting confidence.
            </p>
          </div>


          {/* PHASES */}
          <div className="space-y-24">

            {program.phases.map((phase, i) => {

              const backgrounds = [
                "from-blue-100/50 via-transparent to-transparent",
                "from-indigo-100/50 via-transparent to-transparent",
                "from-sky-100/50 via-transparent to-transparent",
                "from-blue-200/40 via-transparent to-transparent",
              ];

              return (
                <div key={i} className="relative">

                  {/* controlled soft wash */}
                  <div
                    className={`
                      absolute -left-40 -right-40 top-0 bottom-0
                      bg-gradient-to-r ${backgrounds[i % backgrounds.length]}
                      opacity-60 -z-10
                    `}
                  />

                  <div className="max-w-3xl">

                    <p className="text-xs uppercase tracking-[0.3em] text-slate-600 mb-5">
                      Phase {i + 1}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
                      {phase.title}
                    </h3>

                    <p className="text-slate-900/70 mb-10 leading-relaxed text-lg">
                      {phase.description}
                    </p>

                    <ul className="space-y-4">
                      {phase.focus.map((item, idx) => (
                        <li key={idx} className="flex gap-4 items-start">

                          <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />

                          <span className="text-slate-900/80">
                            {item}
                          </span>

                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

    </main>
  );
}