import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

// Flash news data
const newsItems = [
  "Admissions for 2025-26 academic year now open - Apply before July 31st",
  "New Computer Science Lab inaugurated with latest equipment",
  "JSS Polytechnic ranks among top 10 technical institutions in Karnataka",
  "Campus placement drive scheduled for final year students on May 15th",
];

const FlashNews = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
  useEffect(() => {
    // Auto-rotate news items
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary/10 py-2 sticky top-[72px] z-30 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center text-primary mr-3">
            <Icon name="notification-4-line text-xl animate-pulse" />
            <span className="ml-2 font-medium hidden sm:inline">Flash News:</span>
          </div>
          <div className="overflow-hidden flex-grow">
            <motion.div
              key={currentNewsIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="truncate text-gray-800"
            >
              {newsItems[currentNewsIndex]}
            </motion.div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <button 
              onClick={() => setCurrentNewsIndex((prevIndex) => (prevIndex - 1 + newsItems.length) % newsItems.length)}
              className="text-gray-500 hover:text-primary mr-1 p-1"
            >
              <Icon name="arrow-left-s-line" />
            </button>
            <button 
              onClick={() => setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsItems.length)}
              className="text-gray-500 hover:text-primary p-1"
            >
              <Icon name="arrow-right-s-line" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashNews;