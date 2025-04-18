import { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import FlashNews from "@/components/FlashNews";
import ImageSlider from "@/components/ImageSlider";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import CampusSection from "@/components/CampusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Ensure smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        const link = e.currentTarget as HTMLAnchorElement;
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const top = targetElement.getBoundingClientRect().top + window.pageYOffset - 80; // Offset for fixed header
          window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="font-inter text-text bg-background overflow-x-hidden">
      <Navbar />
      <FlashNews />
      <div id="home">
        <ImageSlider />
      </div>
      <StatsSection />
      <AboutSection />
      <AcademicsSection />
      <CampusSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
