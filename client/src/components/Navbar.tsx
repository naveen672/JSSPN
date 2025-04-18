import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 bg-white z-50 transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="mr-4 md:hidden text-primary"
                aria-label="Toggle menu"
              >
                <Icon name="menu-line text-2xl" />
              </button>
              <a href="#" className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center mr-3">
                  <span className="text-white font-poppins font-bold">JSS</span>
                </div>
                <div>
                  <span className="font-poppins font-semibold text-primary text-lg block leading-tight">
                    JSS Polytechnic
                  </span>
                  <span className="text-xs text-gray-500">Nanjangud</span>
                </div>
              </a>
            </div>
            <div className="hidden md:flex space-x-6 font-poppins font-medium">
              <a
                href="#home"
                className="py-2 text-primary border-b-2 border-primary"
              >
                Home
              </a>
              <a
                href="#about"
                className="py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-all"
              >
                About
              </a>
              <a
                href="#academics"
                className="py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-all"
              >
                Academics
              </a>
              <a
                href="#campus"
                className="py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-all"
              >
                Campus
              </a>
              <a
                href="#admissions"
                className="py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-all"
              >
                Admissions
              </a>
              <a
                href="#contact"
                className="py-2 hover:text-primary hover:border-b-2 hover:border-primary transition-all"
              >
                Contact
              </a>
            </div>
            <div>
              <a
                href="#admissions"
                className="hidden md:inline-block bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-md font-medium transition-all transform hover:scale-105"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-poppins font-bold">JSS</span>
            </div>
            <button
              onClick={closeMenu}
              className="text-gray-500"
              aria-label="Close menu"
            >
              <Icon name="close-line text-2xl" />
            </button>
          </div>
          <div className="space-y-4 font-poppins">
            <a
              href="#home"
              onClick={closeMenu}
              className="block py-2 px-4 bg-primary/10 text-primary rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              About
            </a>
            <a
              href="#academics"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              Academics
            </a>
            <a
              href="#campus"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              Campus
            </a>
            <a
              href="#admissions"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              Admissions
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              Contact
            </a>
            <a
              href="#admissions"
              onClick={closeMenu}
              className="block mt-6 bg-primary text-white px-4 py-2 rounded-md text-center font-medium"
            >
              Apply Now
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
