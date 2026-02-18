import Image from "next/image";
import {Button} from "@/components/ui/button";
import Typewriter from "./Typewritter";
import LeadForm from "@/components/form";
console.log({ database: process.env.DATABASE_URL, });
{/*main hero function*/}

export default function Hero() {
  return (
    <section className="w-full e inset-0 bg-linear-to-b  from-indigo-50  to-slate-200 ">
      <div className="mx-auto max-w-7xl px-4 py-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

          {/* Left side */}
          <div>
                <Typewriter/>

                <p className="mt-5 text-xl text-gray-700">
                Get confidence speaking, improve your grammar, and master real-life conversations.
                </p>

            {/*form+arrow wrapper*/}
 
                <div  className="flex items-center gap-7">
                    
                  <p className="mt-6 text-lg text-gray-700">
                  Fill in the form <br />  and our team will contact you <br />as soon as possible.
                  </p>
                    <Image
                      src="/arrow.png"
                      alt="arrow"
                      width={100}
                      height={100}
                      priority
                      style={{ transform: "rotate(-70deg) translateX(-20px) translateY(-24px)" }}
                      />
                    
                </div>
               
              <LeadForm label="Start free trial" buttonAlign="left" />    
           
         </div>
           
{/* Right side */}

<div className="relative flex justify-center md:justify-end">

  {/* Mobile message bubble (stacked, no overlap) */}
  <div className="  md:hidden  mx-auto  max-w-sm  rounded-3xl  bg-blue-500 px-5 py-4  text-white text-xl leading-relaxed shadow-md">
    Over <strong>2,000 students</strong> improved their English with
    <strong> SpeakSenior</strong> in the past 3 years.
    <br />
    <span className="font-semibold">What are YOU waiting for?</span>
  </div>

  {/* Image wrapper (desktop positioning reference) */}
  <div className="relative">

    {/* Desktop SVG bubble */}
    <div className="hidden md:block absolute -top-1 -left-70 w-[360px] md:w-[420px]">
      {/* Bubble SVG */}
      <svg
        viewBox="0 0 420 120"
        className="w-full h-full scale-x-[-1] "
        preserveAspectRatio="none"
      >
        <path
          d="
            M24 0
            H380
            C402 0 420 18 420 40
            V80
            C420 102 402 120 380 120
            H60
            C44 120 34 112 28 110
            C22 116 12 120 0 120
            C6 108 10 96 10 84
            V40
            C10 18 28 0 50 0
            Z
          "
          fill="#0A84FF"
        />
      </svg>

      {/* Bubble text */}
      <div
        className="
          absolute inset-0
          flex items-center
          px-4 sm:px-5 md:px-6
          text-white
          text-[13px] sm:text-sm md:text-base
          leading-snug
        "
      >
        <p>
          Over <strong>2,000 students</strong> improved their English with
          <strong> SpeakSenior</strong> in the past 3 years.
          <br />
          <span className="font-semibold">What are YOU waiting for?</span>
        </p>
      </div>
    </div>

    {/* Hero image */}
    <div className="relative w-full max-w-md mx-auto">
        <Image
          src="/hero.png"
          alt="Hero image"
          width={500}
          height={400}
          priority
          className="w-full h-auto"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, transparent 15%, black 40%)",
            maskImage:
              "linear-gradient(to top, transparent 15%, black 30%)",
          }}
        />
      </div>
  </div>
</div>
      </div>
     </div>
     
    </section>
  );
}