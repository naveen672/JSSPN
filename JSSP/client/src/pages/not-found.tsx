import { useEffect } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

export default function NotFound() {
  useEffect(() => {
    // Set the document title
    document.title = "Not Found - JSS Polytechnic";
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-[70vh] flex flex-col justify-center items-center py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-xl text-center border border-gray-100"
        >
          <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="error-warning-line text-amber-500 text-5xl" />
          </div>
          
          <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8 bg-gray-50 p-4 rounded-lg border border-gray-100 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved to another location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md">
                <Icon name="home-4-line mr-2" />
                <span>Return Home</span>
              </a>
            </Link>
            
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-primary text-primary font-medium py-3 px-6 rounded-full transition-colors"
            >
              <Icon name="customer-service-2-line mr-2" />
              <span>Contact Support</span>
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
