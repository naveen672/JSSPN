import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const VisitorCounter = () => {
  // Start with a random large number for the visitor count
  const [visitorCount, setVisitorCount] = useState(45789);
  
  useEffect(() => {
    // Simulate increasing visitor count periodically
    const interval = setInterval(() => {
      setVisitorCount(prevCount => prevCount + 1);
    }, 300000); // Increase by 1 every 5 minutes
    
    // Generate a random number between 45000 and 50000 on first load
    setVisitorCount(Math.floor(Math.random() * (50000 - 45000 + 1)) + 45000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex items-center justify-center space-x-2 py-3 bg-primary/10 rounded-lg">
      <Icon name="user-line text-primary" />
      <div>
        <div className="text-sm text-gray-600">Total Visitors</div>
        <motion.div 
          key={visitorCount}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-poppins font-semibold text-primary"
        >
          {visitorCount.toLocaleString()}
        </motion.div>
      </div>
    </div>
  );
};

export default VisitorCounter;