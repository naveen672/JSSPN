import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",
    heading: "Building Tomorrow's\nTechnical Leaders",
    subheading: "JSS Polytechnic Nanjangud offers industry-focused technical education with state-of-the-art facilities and experienced faculty."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    heading: "Hands-on Learning\nReal-world Skills",
    subheading: "Our cutting-edge facilities and practical learning approach prepare students for successful careers in their chosen fields."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581093458791-9d11293814a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    heading: "Excellence in\nTechnical Education",
    subheading: "Join our vibrant campus community and gain the skills needed to excel in today's competitive technical environment."
  }
];

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Delay to ensure the animation starts after splash screen
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-advance the slides
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden">
      {/* Slider Background */}
      <div className="absolute inset-0 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <motion.div 
            key={index}
            initial={false}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0
            }}
            transition={{ 
              opacity: { duration: 1, ease: "easeInOut" } 
            }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              zIndex: 0 
            }}
          />
        ))}
      </div>
      
      {/* Slide navigation */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
        <button 
          onClick={prevSlide}
          className="bg-primary/30 hover:bg-primary/40 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
          aria-label="Previous slide"
        >
          <Icon name="arrow-left-line" />
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
        <button 
          onClick={nextSlide}
          className="bg-primary/30 hover:bg-primary/40 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
          aria-label="Next slide"
        >
          <Icon name="arrow-right-line" />
        </button>
      </div>
      
      {/* Slide indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-amber-400" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <div className="relative container mx-auto h-full px-4 flex items-center">
        <div className="max-w-3xl">
          {heroSlides.map((slide, slideIndex) => (
            <motion.div
              key={slideIndex}
              initial={false}
              animate={{ 
                opacity: currentSlide === slideIndex ? 1 : 0,
                filter: currentSlide === slideIndex ? "blur(0px)" : "blur(10px)"
              }}
              transition={{ opacity: { duration: 0.5 }, filter: { duration: 0.5 } }}
              style={{ display: currentSlide === slideIndex ? 'block' : 'none' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center bg-amber-400 text-gray-900 font-medium px-4 py-1 rounded-full text-sm mb-4"
              >
                <Icon name="calendar-event-line mr-1" />
                Established 1965
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              >
                {slide.heading.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-white text-lg md:text-xl mb-8 max-w-xl drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] flex items-start"
              >
                <Icon name="focus-3-line mr-2 mt-1 flex-shrink-0" />
                <span>{slide.subheading}</span>
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="#academics" 
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 px-6 py-3 rounded-md font-medium transition-all transform hover:scale-105 flex items-center shadow-md"
                >
                  <Icon name="book-open-line mr-2" />
                  <span>Explore Programs</span>
                  <Icon name="arrow-right-line ml-2" />
                </a>
                <a 
                  href="#campus" 
                  className="bg-transparent hover:bg-white/10 text-white border-2 border-white/70 hover:border-white px-6 py-3 rounded-md font-medium transition-all shadow-md flex items-center"
                >
                  <Icon name="vidicon-line mr-2" />
                  <span>Virtual Tour</span>
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
