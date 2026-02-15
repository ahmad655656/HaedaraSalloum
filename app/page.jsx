import HeroSection from "@/components/home/HeroSection";
import ResumeSection from "@/components/home/Resume";
import WorkSection from "@/components/home/Work";
import ProcessSection from "@/components/home/ProcessSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/home/Services";

export default function Home() {
  return (
    <main className="bg-light-bg-primary p-[65px] dark:bg-dark-bg-primary">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <ResumeSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}