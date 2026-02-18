"use client";

export default function ScrollToFormatsButton() {
  const handleClick = () => {
    document
      .getElementById("formats")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition"
    >
      Choose format
    </button>
  );
}