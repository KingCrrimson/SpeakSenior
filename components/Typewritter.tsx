"use client";

import { useEffect, useState } from "react";

export default function Typewriter() {
  const fullText = "Learn English fast\nwith real-world lessons";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
  if (index >= fullText.length) return;

  const char = fullText.charAt(index);

  let delay = 60;
  delay += Math.random() * 40;

  if (char === " ") delay = 200;
  if (char === ",") delay = 400;
  if (char === ".") delay = 550;
  if (char === "\n") delay = 600;

  const timeout = setTimeout(() => {
    setText((prev) => prev + char);
    setIndex((prev) => prev + 1);
  }, delay);

  return () => clearTimeout(timeout);
}, [index, fullText]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line">
      {text}
      <span className="inline-block w-[10px]">
        {showCursor && "|"}
      </span>
    </h1>
  );
}