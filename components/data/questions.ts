export type Level = "A1" | "A2" | "B1" | "B2";

export type Question = {
  id: number;
  level: Level;
  question: string;
  options: string[];
  correct: number; // index in options
};

export const questions: Question[] = [
  // ---------------- A1 ----------------
  {
    id: 1,
    level: "A1",
    question: "I ___ from Spain.",
    options: ["is", "are", "am", "be"],
    correct: 2,
  },
  {
    id: 2,
    level: "A1",
    question: "She has ___ apple in her bag.",
    options: ["a", "an", "the", "—"],
    correct: 1,
  },
  {
    id: 3,
    level: "A1",
    question: "They ___ football every weekend.",
    options: ["plays", "play", "playing", "played"],
    correct: 1,
  },
  {
    id: 4,
    level: "A1",
    question: "A person who drives a car is a ___.",
    options: ["driver", "cooker", "teacher", "builder"],
    correct: 0,
  },
  {
    id: 5,
    level: "A1",
    question: "We ___ in a small apartment.",
    options: ["lives", "living", "live", "lived"],
    correct: 2,
  },

  // ---------------- A2 ----------------
  {
    id: 6,
    level: "A2",
    question: "I was tired, ___ I went to bed early.",
    options: ["because", "but", "so", "although"],
    correct: 2,
  },
  {
    id: 7,
    level: "A2",
    question: "She is ___ than her sister.",
    options: ["tall", "taller", "tallest", "more tall"],
    correct: 1,
  },
  {
    id: 8,
    level: "A2",
    question: "There isn’t ___ milk left in the fridge.",
    options: ["many", "much", "few", "a few"],
    correct: 1,
  },
  {
    id: 9,
    level: "A2",
    question: "If it ___ tomorrow, we will stay home.",
    options: ["rains", "rained", "will rain", "raining"],
    correct: 0,
  },
  {
    id: 10,
    level: "A2",
    question: "Someone who works in a hospital and helps doctors is a ___.",
    options: ["engineer", "nurse", "pilot", "lawyer"],
    correct: 1,
  },

  // ---------------- B1 ----------------
  {
    id: 11,
    level: "B1",
    question: "I’ve lived here ___ 2018.",
    options: ["since", "for", "from", "in"],
    correct: 0,
  },
  {
    id: 12,
    level: "B1",
    question: "She asked me where I ___ from.",
    options: ["am", "was", "were", "be"],
    correct: 1,
  },
  {
    id: 13,
    level: "B1",
    question: "He speaks so quietly that I can ___ hear him.",
    options: ["hard", "hardly", "almost", "clearly"],
    correct: 1,
  },
  {
    id: 14,
    level: "B1",
    question: "Choose the correct meaning of 'borrow'.",
    options: [
      "to give something",
      "to take something and return it later",
      "to buy something",
      "to lose something",
    ],
    correct: 1,
  },
  {
    id: 15,
    level: "B1",
    question: "By the time we arrived, the film ___.",
    options: ["starts", "started", "had started", "has started"],
    correct: 2,
  },

  // ---------------- B2 ----------------
  {
    id: 16,
    level: "B2",
    question: "I wish I ___ more time to finish the project.",
    options: ["have", "had", "will have", "would have"],
    correct: 1,
  },
  {
    id: 17,
    level: "B2",
    question: "The meeting was canceled ___ the bad weather.",
    options: ["because", "because of", "despite", "although"],
    correct: 1,
  },
  {
    id: 18,
    level: "B2",
    question: "Not only ___ late, but he also forgot the documents.",
    options: ["he arrived", "did he arrive", "he did arrive", "arrived he"],
    correct: 1,
  },
  {
    id: 19,
    level: "B2",
    question: "Choose the closest meaning of 'improve'.",
    options: ["make better", "make worse", "delay", "remove"],
    correct: 0,
  },
  {
    id: 20,
    level: "B2",
    question: "Had I known about the traffic, I ___ earlier.",
    options: ["would leave", "will leave", "would have left", "left"],
    correct: 2,
  },
];