"use client";

import { useState, useEffect } from "react";
import { questions, Question } from "../data/questions";
import { motion, AnimatePresence } from "framer-motion";

//variables declaration

type Props = {
  slug: string;
};

const variants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

// ---------------- helpers ----------------
function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function pick<T>(arr: T[], count: number) {
  return shuffle(arr).slice(0, count);
}

export default function TestEngine({ slug }: Props) {
  // ---------------- group by level ----------------
  const byLevel = {
    A1: questions.filter((q) => q.level === "A1"),
    A2: questions.filter((q) => q.level === "A2"),
    B1: questions.filter((q) => q.level === "B1"),
    B2: questions.filter((q) => q.level === "B2"),
  };

  // ---------------- build test ----------------
  function buildTest(): Question[] {
    if (slug === "5-min") {
      return shuffle([
        ...pick(byLevel.A1, 3),
        ...pick(byLevel.A2, 3),
        ...pick(byLevel.B1, 2),
        ...pick(byLevel.B2, 2),
      ]);
    }

    if (slug === "standard") {
      return shuffle([
        ...pick(byLevel.A1, 4),
        ...pick(byLevel.A2, 4),
        ...pick(byLevel.B1, 4),
        ...pick(byLevel.B2, 3),
      ]);
    }

    // deep / longest
    return shuffle([
      ...pick(byLevel.A1, 5),
      ...pick(byLevel.A2, 5),
      ...pick(byLevel.B1, 5),
      ...pick(byLevel.B2, 5),
    ]);
  }

  // ---------------- state ----------------
  const [testQuestions, setTestQuestions] = useState<Question[] | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  // ---------------- generate test ----------------
  useEffect(() => {
    setTestQuestions(buildTest());
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
  }, [slug]);

  // ---------------- guard ----------------
  if (!testQuestions) {
    return (
      <div className="max-w-xl mx-auto py-20 text-center">
        Preparing your assessment...
      </div>
    );
  }

  // ---------------- actions ----------------
  function handleAnswer(choice: number) {
  const updated = [...answers];
  updated[current] = choice;
  setAnswers(updated);

  
  if (current + 1 < testQuestions.length) {
    setCurrent((c) => c + 1);
  } else {
    setFinished(true);
  }
}
function handleBack() {
  if (current > 0) {
    setCurrent((c) => c - 1);
  }
}
  // ---------------- score helpers ----------------
  function getScore() {
    return answers.reduce((total, ans, i) => {
      return ans === testQuestions[i].correct ? total + 1 : total;
    }, 0);
  }

  function getLevel(score: number) {
    if (score <= 5) return "A1";
    if (score <= 10) return "A2";
    if (score <= 15) return "B1";
    return "B2";
  }

  // ============================================================
  // ================= RESULT SCREEN ============================
  // ============================================================
  if (finished) {
    const score = getScore();
    const level = getLevel(score);

    return (
      <div className="max-w-xl mx-auto text-center space-y-8 py-10">
        <h1 className="text-3xl font-bold">Assessment Complete 🎉</h1>

        <p className="text-lg">
          Score: <b>{score}</b> / {testQuestions.length}
        </p>

        <h2 className="text-2xl font-semibold">
          Your level: {level}
        </h2>

        <button className="cursor-pointer w-full py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Get my learning plan
        </button>

        <button
          onClick={() => window.location.reload()}
          className="cursor-pointer text-sm text-gray-500 hover:text-gray-700"
        >
          Retake test
        </button>
      </div>
    );
  }

  // ============================================================
  // ================= TEST SCREEN ==============================
  // ============================================================

  const q = testQuestions[current];
  const progress = (current / testQuestions.length) * 100;


  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-[260px_1fr] gap-8">

        {/* ================= LEFT SIDEBAR ================= */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 h-fit">
          <div className="text-sm text-gray-500 mb-2">
            Current progress
          </div>

          <h3 className="font-semibold text-lg mb-4">
            Keep going 👍
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>{current}</span>
              <span>{testQuestions.length}</span>
            </div>

            <div className="h-2 w-full bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">

          <div className="text-blue-600 font-semibold mb-6">
            Complete the sentence
          </div>

          <div className="mb-8 text-gray-400 text-sm">
            Question {current + 1} of {testQuestions.length}
          </div>

          {/*question animation*/}
    
         <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              <h2 className="text-2xl font-semibold mb-8">
                {q.question}
              </h2>

              <div className="flex flex-col gap-3">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="
                      text-left p-4 rounded-xl border border-gray-200 cursor-pointer
                      hover:border-blue-400 hover:bg-blue-50
                      transition
                    "
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-8">
    <button
      onClick={handleBack}
      disabled={current === 0}
      className="
        px-5 py-2 rounded-lg border cursor-pointer
        disabled:opacity-40 disabled:cursor-not-allowed 
        hover:bg-gray-50
      "
    >
      ← Back
    </button>

  <div className="text-sm text-gray-400">
    Select an answer to continue
  </div>
</div>
        </div>

      </div>
    </div>
  );
}