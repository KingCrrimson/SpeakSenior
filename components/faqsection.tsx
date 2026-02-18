"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/components/data/faqs";
import LeadForm from "./form";
import Image from "next/image";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
     <section id="faq">
         {/*secondary cta part*/}
        <div className="relative mx-auto px-4 text-center bg-linear-to-b  from-slate-100  to-indigo-100">
    
        {/*question mark image*/}
          <Image
              src="/questionmark.svg"
              alt="questionmark"
              width={180}
              height={50}
              draggable={false}
              className="
                    absolute 
                    top-10 left-1/7 -translate-x-1/2 translate-y-30
                    opacity-70
                    pointer-events-none"
            />
                <Image
              src="/questionmark.svg"
              alt="questionmark"
              width={180}
              height={50}
              draggable={false}
              className="
                    absolute 
                    top-10 right-1/9 translate-x-10 
                    opacity-70
                    pointer-events-none"
            />

            <h3 className="text-xl mx-auto max-w-4xl md:text-4xl font-semibold">
            Still have questions?
            <br />
            Let us know and get a free consultation and we will walk you through everything.
            </h3>

            <div className="mx-auto   relative flex justify-center ">
            <LeadForm label="Get a free consultation " buttonAlign="center" />
            </div>
        </div>
    
     {/*FAQ SECTION*/}

    <div className="bg-linear-to-b  from-indigo-100 via-indigo-50 to-slate-100 ">
     <div className="max-w-5xl mx-auto py-12 px-4  ">
      <h2 className="text-5xl font-bold text-center mb-6 mt-6">
        Things good to know
      </h2>

      <div className="flex flex-col gap-6">
        {faqs.map((item, i) => (
          <div key={i} className="border rounded-3xl shadow-md overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-6 text-left bg-white/40"
              onClick={() => toggle(i)}
            >
              <span className="font-medium text-xl">
                {item.question}
              </span>

              {/* rotating icon */}
              <motion.span
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xl"
              >
                +
              </motion.span>
            </button>

            {/* animated answer */}
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-t bg-white/40"
                >
                  <div className="p-4 text-gray-700">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
     </div>
    
    
    </div>
</section>
        
    
  );
}