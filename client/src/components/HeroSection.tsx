import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure the animation starts after splash screen
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80')] bg-cover bg-center"></div>
      <div className="relative container mx-auto h-full px-4 flex items-center">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-accent/90 text-primary font-medium px-4 py-1 rounded-full text-sm mb-4"
          >
            Established 1965
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Building Tomorrow's<br />Technical Leaders
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-white/90 text-lg md:text-xl mb-8 max-w-xl"
          >
            JSS Polytechnic Nanjangud offers industry-focused technical education with state-of-the-art facilities and experienced faculty.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#academics" 
              className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 flex items-center"
            >
              <span>Explore Programs</span>
              <Icon name="arrow-right-line ml-2" />
            </a>
            <a 
              href="#campus" 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md font-medium transition-all"
            >
              Virtual Tour
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#FFFFFF">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
