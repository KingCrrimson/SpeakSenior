export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-indigo-50 to-white">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          About SpeakSenior
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          SpeakSenior was created to help ambitious professionals
          communicate clearly, confidently, and effectively in English —
          without unnecessary theory and without wasted time.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 shadow-sm">

          <h2 className="text-2xl font-semibold text-slate-900 mb-6">
            Our philosophy
          </h2>

          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              English is not about memorizing grammar rules.
              It is about expressing ideas clearly, structuring thoughts
              logically, and speaking with confidence in real situations.
            </p>

            <p>
              Traditional learning often focuses on exercises and textbooks.
              We focus on meetings, interviews, negotiations, presentations,
              and real-world conversations — the situations that actually matter.
            </p>

            <p>
              Our goal is simple: remove hesitation and replace it with clarity.
            </p>
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              How we work
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Every student receives a structured roadmap based on their
                current level, goals, and professional environment.
              </p>

              <p>
                Sessions are practical and scenario-based. We simulate real
                conversations, refine structure, correct subtle mistakes,
                and build speaking fluency step by step.
              </p>

              <p>
                Progress is measurable. Confidence becomes visible.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-3xl p-10 shadow-inner">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">
              What makes us different
            </h3>

            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                Structured, real-world communication focus
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                Personal feedback and correction
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                Executive-level clarity training
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-blue-600" />
                Focus on confidence, not perfection
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-indigo-100/40 to-blue-100/40 rounded-3xl p-12">

          <h2 className="text-2xl font-semibold text-slate-900 mb-8 text-center">
            Who SpeakSenior is for
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-slate-700">

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">
                Professionals
              </h3>
              <p className="leading-relaxed">
                Those who work in international environments and want to
                communicate with authority and clarity.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">
                Job seekers
              </h3>
              <p className="leading-relaxed">
                Candidates preparing for interviews who want structured,
                confident answers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">
                Tech specialists
              </h3>
              <p className="leading-relaxed">
                Developers and engineers who need to explain complex ideas
                in simple, precise language.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-slate-900">
                Ambitious learners
              </h3>
              <p className="leading-relaxed">
                Individuals who understand English but want to speak
                naturally and without fear.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="max-w-4xl mx-auto px-6 pb-32 text-center">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          Our vision
        </h2>

        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
          To build a generation of professionals who speak English
          not just correctly — but confidently, strategically,
          and with impact.
        </p>
      </section>

    </main>
  );
}