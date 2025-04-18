import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Additional delay to complete the exit animation
      setTimeout(onComplete, 800);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full h-full bg-primary flex justify-center items-center z-[9999]"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.5, 
                ease: "linear", 
                repeat: Infinity 
              }}
              className="flex justify-center items-center mb-6"
            >
              <svg className="w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="#FCD34D" strokeWidth="8" strokeDasharray="283" strokeDashoffset="100" />
              </svg>
            </motion.div>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                duration: 2, 
                ease: "easeInOut", 
                repeat: Infinity 
              }}
            >
              <h1 className="text-4xl font-bold font-poppins text-white mb-2">JSS Polytechnic</h1>
              <p className="text-lg text-gray-200">Nanjangud</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
