
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StorySection from "@/components/StorySection";
import EducationSection from "@/components/EducationSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Initialize animation observers
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.aosDelay ? parseInt(el.dataset.aosDelay) : 0;
          
          setTimeout(() => {
            if (el.dataset.aos === 'fade-up') {
              el.classList.add('animate-fade-in');
            } else if (el.dataset.aos === 'fade-right') {
              el.classList.add('animate-fade-in-left');
            } else if (el.dataset.aos === 'fade-left') {
              el.classList.add('animate-fade-in-right');
            } else {
              el.classList.add('animate-fade-in');
            }
            
            el.style.opacity = '1';
            observer.unobserve(el);
          }, delay);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(el => {
      (el as HTMLElement).style.opacity = '0';
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <StorySection />
        <EducationSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
