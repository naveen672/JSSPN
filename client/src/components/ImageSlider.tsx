import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/lib/icons";

// Slider images
const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",
    title: "Building Tomorrow's Technical Leaders",
    subtitle: "JSS Polytechnic offers industry-focused technical education with state-of-the-art facilities."
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Innovative Learning Environment",
    subtitle: "Our campus provides advanced laboratories and facilities for hands-on technical training."
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Excellence in Technical Education",
    subtitle: "Join us in creating a bright future with quality education and practical training."
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay to ensure the animation starts after splash screen
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    // Auto-rotate slides
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url('${images[currentIndex].src}')` }}
          ></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative container mx-auto h-full px-4 flex items-center z-20">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-white text-primary font-medium px-4 py-1 rounded-full text-sm mb-4 shadow-lg"
          >
            Established 1965
          </motion.span>
          
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
            >
              {images[currentIndex].title}
            </motion.h1>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={`subtitle-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white text-lg md:text-xl mb-8 max-w-xl drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)]"
            >
              {images[currentIndex].subtitle}
            </motion.p>
          </AnimatePresence>
          
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
              <Icon name="film-line mr-2" />
              <span>Virtual Tour</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all"
        aria-label="Previous slide"
      >
        <Icon name="arrow-left-s-line text-2xl" />
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center z-20 transition-all"
        aria-label="Next slide"
      >
        <Icon name="arrow-right-s-line text-2xl" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;