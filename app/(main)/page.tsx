import Hero from "@/components/hero";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/reviews";
import FAQSection from "@/components/faqsection";



export default function Home() {
  return (
    <main>
        <Hero />
        <AboutSection />
        <ReviewsSection />
        <FAQSection/>
        
    </main>
  );
}