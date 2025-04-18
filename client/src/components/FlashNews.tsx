import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/lib/icons";
import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { NewsItem } from "@shared/schema";

const FlashNews = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  
  // Fetch active news items from the API
  const { data: newsItems, isLoading } = useQuery<NewsItem[]>({
    queryKey: ['/api/news?active=true'],
    refetchInterval: 60000, // Refetch every minute
  });
  
  // Default news items to use when API data is not available yet
  const defaultNewsItems = [
    "Admissions for 2025-26 academic year now open - Apply before July 31st",
    "New Computer Science Lab inaugurated with latest equipment",
    "JSS Polytechnic ranks among top 10 technical institutions in Karnataka",
    "Campus placement drive scheduled for final year students on May 15th",
  ];
  
  // Use news items from API if available, otherwise use defaults
  const displayItems = newsItems && newsItems.length > 0
    ? newsItems.map((item: NewsItem) => item.title)
    : defaultNewsItems;
  
  useEffect(() => {
    // Auto-rotate news items
    const interval = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % displayItems.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [displayItems.length]);

  if (!displayItems.length) return null;

  return (
    <div className="bg-primary/10 py-2 sticky top-[72px] z-30 border-y border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center text-primary mr-3">
            <Icon name="notification-4-line text-xl animate-pulse" />
            <span className="ml-2 font-medium hidden sm:inline">Flash News:</span>
          </div>
          <div className="overflow-hidden flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNewsIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="truncate text-gray-800"
              >
                {isLoading ? (
                  <div className="h-5 bg-gray-200 animate-pulse rounded w-3/4"></div>
                ) : (
                  displayItems[currentNewsIndex]
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex-shrink-0 ml-4">
            <button 
              onClick={() => setCurrentNewsIndex(
                (prevIndex) => (prevIndex - 1 + displayItems.length) % displayItems.length
              )}
              className="text-gray-500 hover:text-primary mr-1 p-1"
              aria-label="Previous news"
            >
              <Icon name="arrow-left-s-line" />
            </button>
            <button 
              onClick={() => setCurrentNewsIndex(
                (prevIndex) => (prevIndex + 1) % displayItems.length
              )}
              className="text-gray-500 hover:text-primary p-1"
              aria-label="Next news"
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