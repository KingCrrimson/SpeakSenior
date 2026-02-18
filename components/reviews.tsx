"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import Image from 'next/image';
const REVIEWS = [
  {
    id: 1,
    name: "Alex Komarov",
    role: "UI/UX Designer, Kyiv",
    quote: "The personalized feedback helped me land a job at a top-tier international agency. I was not expecting such a change in myself!",
    avatar: "/ukrainian_guy.jpg",
  },
  {
    id: 2,
    name: "Maria Popescu",
    role: "HR Manager, Berlin",
    quote: "No more awkward silences during my online conferences. My instructor knew exactly how to make me more confident talking to people in a professional manner at work.",
    avatar: "/romanian_lady.jpg",
  },
  {
    id: 3,
    name: "Mehmet Kaya",
    role: "Project Manager, Istanbul",
    quote: "Practical, real-world conversations. Their real life chat with an experienced instructor approach is something that let me practice and improve my vocabulary",
    avatar: "/turkish_guy.jpg",
  },
  {
    id: 4,
    name: "Tomasz Kowalski",
    role: "Electrician, Warsaw",
    quote: "The flexibility is amazing. I can schedule lessons around my busy work day and still see consistent progress.",
    avatar: "/polish_guy.jpg",
  }
];

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler for buttons
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-2 bg-linear-to-b  from-indigo-50  to-slate-100 overflow-hidden ">
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Header & Controls */}
        <div className=" items-end   flex justify-center">
          <div className="space-y-4 mb-6">
                <h2 className="text-5xl font-bold text-center ">
                What our students say about us
                </h2>
            <p className="text-slate-600 max-w-3xl text-lg text-center px-10 ">
              Discover how people around the world gain confidence and achieve real results. 
            </p>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide
            -mx-6 px-6 pb-4 mb-4
          "
        >
          {REVIEWS.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        {/*slider arrow buttons*/}

           <div className="mb-12 flex justify-center hidden md:flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

      </div>
    </section>
  );
}

//defining types for the ReviewCard func

type Review = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

type ReviewCardProps = {
  review: Review;
  index: number;
};
const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

function ReviewCard({ review, index }: ReviewCardProps) {
  return (
   <motion.div
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  transition={{
    delay: index * 0.1,
    type: "spring",
    stiffness: 100,
  }}

  //cardclassname

  whileHover={{ y: -3 }}
  className="
    snap-center shrink-0
    w-[85vw] md:w-[400px]
    bg-white/80 backdrop-blur-md border border-white/40
    p-6 rounded-3xl shadow-sm hover:shadow-xl
    transition-shadow duration-300
    flex flex-col gap-6
  "
>
      {/* Quote */}
      <p className="text-slate-700 text-lg leading-relaxed font-medium line-clamp-">
        “{review.quote}”
      </p>

      {/* avatar */}
      <div className="flex items-center gap-5 pt-4 border-t border-slate-200/40">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div>
          <h4 className="font-bold text-slate-900 leading-tight mb-1">
            {review.name}
          </h4>
          <p className="text-sm text-slate-500 font-medium">
            {review.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}