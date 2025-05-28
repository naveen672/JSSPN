import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FlashNews from "./FlashNews";
import BackToTop from "./BackToTop";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <FlashNews />
      <Navbar />
      
      <motion.main 
        className="flex-grow pt-[120px]" /* Added padding-top to account for navbar + flash news */
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default PageLayout;