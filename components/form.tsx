"use client";

import { useState } from "react";

type Props = {
  label: string;
  buttonAlign?: "left" | "center" | "right";
};

export default function LeadForm({ label, buttonAlign = "center", }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});


  const alignClass = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
}[buttonAlign];


  function validate() {
    const newErrors: { email?: string; phone?: string } = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!/^(\+1\s?)?(\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/.test(phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    if (!validate()) return;

    setIsLoading(true);
    setIsSuccess(false);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      setIsSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={submitForm}
      className="
        mt-10 rounded-4xl 
        bg-gradient-to-br from-indigo-200 to-blue-300
        backdrop-blur p-6 shadow-sm space-y-4
      "
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            className="w-full rounded-lg bg-white px-4 py-2
              text-gray-900 border border-gray-300
              focus:outline-none focus:border-[#417ef8]
              focus:ring-2 focus:ring-slate-200/40 transition"
          />
        </div>

        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className={`w-full rounded-lg bg-white px-4 py-2
              text-gray-900 border
              ${errors.email ? "border-red-400" : "border-gray-300"}
              focus:outline-none focus:border-[#417ef8]
              focus:ring-2 focus:ring-slate-200/40 transition`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
            className={`w-full rounded-lg bg-white px-4 py-2
              text-gray-900 border
              ${errors.phone ? "border-red-400" : "border-gray-300"}
              focus:outline-none focus:border-[#417ef8]
              focus:ring-2 focus:ring-slate-200/40 transition`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

      <div className={`sm:col-span-3 flex ${alignClass}`}>
        <button
          type="submit"
          disabled={isLoading}
          className={`
            relative w-full sm:w-auto px-8 py-3 rounded-xl
            bg-blue-500 text-white font-semibold cursor-pointer
            transition-all duration-200 ease-out
            ${
              isLoading
                ? "opacity-60 cursor-not-allowed"
                : "hover:shadow-lg hover:bg-blue-400"
            }
          `}
        >
          {isLoading ? (
            <div className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : isSuccess ? (
            <div>
              <p className="font-bold">Saved!</p>
              <p>We’ll be in touch by email shortly.</p>
            </div>
          ) : (
            label
          )}
        </button>
       </div>
      </div>
    </form>
  );
}