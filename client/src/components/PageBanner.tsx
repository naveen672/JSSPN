import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  iconName?: string;
  breadcrumbs?: { name: string; href: string }[];
}

const PageBanner = ({ title, subtitle, iconName = "file-list-line", breadcrumbs = [] }: PageBannerProps) => {
  return (
    <div className="bg-primary/5 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-5 right-10 text-amber-400/20 hidden lg:block">
        <Icon name="file-list-3-line text-8xl" />
      </div>
      <div className="absolute bottom-5 left-10 text-primary/10 hidden lg:block">
        <Icon name="book-open-line text-8xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {breadcrumbs.length > 0 && (
            <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
              <a 
                href="/" 
                className="text-primary hover:text-primary/80 transition-colors flex items-center"
              >
                <Icon name="home-4-line mr-1" />
                <span>Home</span>
              </a>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center">
                  <Icon name="arrow-right-s-line mx-1 text-gray-400" />
                  <a 
                    href={crumb.href} 
                    className={`${
                      index === breadcrumbs.length - 1 
                        ? "text-amber-600 pointer-events-none" 
                        : "text-primary hover:text-primary/80"
                    } transition-colors`}
                  >
                    {crumb.name}
                  </a>
                </div>
              ))}
            </div>
          )}
          
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4 flex items-center justify-center">
            {iconName && <Icon name={`${iconName} mr-3 text-amber-500`} />}
            <span>{title}</span>
          </h1>
          
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageBanner;