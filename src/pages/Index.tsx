
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { ContactForm } from "@/components/sections/ContactForm";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in', 'opacity-100');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
      elem.classList.add('opacity-0');
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
