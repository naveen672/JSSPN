import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import logoImage from "@/assets/logo.jpg";

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
                className="mr-4 md:hidden text-[#003b7a]"
                aria-label="Toggle menu"
              >
                <Icon name="menu-line text-2xl" />
              </button>
              <a href="#" className="flex items-center">
                <div className="w-12 h-12 mr-3 overflow-hidden rounded-lg">
                  <img src={logoImage} alt="JSS Polytechnic Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-poppins font-semibold text-primary text-lg block leading-tight">
                    JSS Polytechnic
                  </span>
                  <span className="text-xs text-gray-500">Nanjangud</span>
                </div>
              </a>
            </div>
            <div className="hidden md:flex space-x-5 font-poppins font-medium items-center">
              <a
                href="#home"
                className="py-2 text-[#003b7a] border-b-2 border-[#003b7a] flex items-center"
              >
                <span>HOME</span>
              </a>
              <a
                href="#about"
                className="py-2 hover:text-[#003b7a] hover:border-b-2 hover:border-[#003b7a] transition-all flex items-center"
              >
                <span>ABOUT</span>
              </a>
              <a
                href="#academics"
                className="py-2 hover:text-[#003b7a] hover:border-b-2 hover:border-[#003b7a] transition-all flex items-center"
              >
                <span>ACADEMICS</span>
              </a>
              <a
                href="#campus"
                className="py-2 hover:text-[#003b7a] hover:border-b-2 hover:border-[#003b7a] transition-all flex items-center"
              >
                <span>CAMPUS</span>
              </a>
              <a
                href="#admissions"
                className="py-2 hover:text-[#003b7a] hover:border-b-2 hover:border-[#003b7a] transition-all flex items-center"
              >
                <span>ADMISSIONS</span>
              </a>
              <a
                href="#contact"
                className="bg-orange hover:bg-orange/90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                <span>CONTACT US</span>
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
            <div className="w-12 h-12 overflow-hidden">
              <img src={logoImage} alt="JSS Polytechnic Logo" className="w-full h-full object-contain" />
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
              className="flex items-center py-2 px-4 bg-primary/10 text-primary rounded-md"
            >
              <Icon name="home-4-line mr-2" />
              <span>Home</span>
            </a>
            <a
              href="#about"
              onClick={closeMenu}
              className="flex items-center py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              <Icon name="information-line mr-2" />
              <span>About</span>
            </a>
            <a
              href="#academics"
              onClick={closeMenu}
              className="flex items-center py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              <Icon name="book-open-line mr-2" />
              <span>Academics</span>
            </a>
            <a
              href="#campus"
              onClick={closeMenu}
              className="flex items-center py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              <Icon name="building-4-line mr-2" />
              <span>Campus</span>
            </a>
            <a
              href="#admissions"
              onClick={closeMenu}
              className="flex items-center py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              <Icon name="user-add-line mr-2" />
              <span>Admissions</span>
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
            >
              <Icon name="contacts-line mr-2" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
