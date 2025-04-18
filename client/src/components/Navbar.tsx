import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import logoImage from "@/assets/logo.jpg";

// Navigation menu data
const navigationItems = [
  {
    id: 'home',
    name: 'Home',
    href: '#home',
    icon: 'home-4-line',
    dropdown: null
  },
  {
    id: 'about',
    name: 'About',
    href: '#about',
    icon: 'information-line',
    dropdown: [
      { name: 'About JSSMVP', href: '#' },
      { name: 'About JSSPN', href: '#' },
      { name: 'Vision & Mission', href: '#' },
      { name: 'Governance', href: '#' },
      { name: 'Administration', href: '#' },
      { name: 'Reports', href: '#' },
      { name: 'Downloads', href: '#' },
      { name: 'Contact Us', href: '#contact' }
    ]
  },
  {
    id: 'programmes',
    name: 'Programmes',
    href: '#academics',
    icon: 'book-open-line',
    dropdown: [
      { name: 'Science & Humanities', href: '#' },
      { name: 'Civil', href: '#' },
      { name: 'Computer Science', href: '#' },
      { name: 'Electrical & Electronics', href: '#' },
      { name: 'Electronics & Communication', href: '#' },
      { name: 'Mechatronics', href: '#' },
      { name: 'Mechanical', href: '#' }
    ]
  },
  {
    id: 'academic',
    name: 'Academic',
    href: '#academics',
    icon: 'graduation-cap-line',
    dropdown: [
      { name: 'Calender Of Events', href: '#' },
      { name: 'Admission', href: '#' },
      { name: 'Examination', href: '#' },
      { name: 'Circulars', href: '#' }
    ]
  },
  {
    id: 'facilities',
    name: 'Facilities',
    href: '#campus',
    icon: 'building-4-line',
    dropdown: [
      { name: 'Library', href: '#' },
      { name: 'Sports', href: '#' }
    ]
  },
  {
    id: 'supports',
    name: 'Supports',
    href: '#campus',
    icon: 'hand-heart-line',
    dropdown: [
      { name: 'Scholarship', href: '#' },
      { name: 'Mentoring Scheme', href: '#' },
      { name: 'Social Out Reach Program', href: '#' },
      { name: 'Student Grievance', href: '#' },
      { name: 'Gallery', href: '#' }
    ]
  },
  {
    id: 'placement',
    name: 'Placement',
    href: '#',
    icon: 'briefcase-line',
    dropdown: [
      { name: 'Training', href: '#' },
      { name: 'Placement', href: '#' }
    ]
  },
  {
    id: 'more',
    name: 'More',
    href: '#',
    icon: 'more-line',
    dropdown: [
      { name: 'Mandatory Disclosure', href: '#' },
      { name: 'IQAC', href: '#' },
      { name: 'Media Coverage', href: '#' },
      { name: 'Anti Ragging', href: '#' },
      { name: 'Women Grievances', href: '#' },
      { name: 'SC/CT Committee', href: '#' }
    ]
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpenItems, setMobileOpenItems] = useState<string[]>([]);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Reset mobile open items when closing the menu
    if (isMenuOpen) {
      setMobileOpenItems([]);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setMobileOpenItems([]);
  };
  
  const toggleDesktopDropdown = useCallback((id: string) => {
    setActiveDropdown(prevState => prevState === id ? null : id);
  }, []);
  
  const toggleMobileDropdown = useCallback((id: string) => {
    setMobileOpenItems(prev => {
      // If item is already in the array, remove it (close dropdown)
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      // If not, add it (open dropdown)
      return [...prev, id];
    });
  }, []);

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
                <div className="w-12 h-12 mr-3 overflow-hidden">
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
            <div className="hidden md:flex space-x-6 font-poppins font-medium">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  ref={(el) => (dropdownRefs.current[item.id] = el)}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleDesktopDropdown(item.id);
                    }}
                    className={`py-2 flex items-center ${
                      activeDropdown === item.id
                        ? "text-primary border-b-2 border-primary"
                        : "hover:text-primary hover:border-b-2 hover:border-primary transition-all"
                    }`}
                  >
                    <Icon name={`${item.icon} mr-1`} />
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <Icon 
                        name={`arrow-down-s-line ml-1 text-xs ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
                        className="transition-transform duration-200"
                      />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute left-0 mt-1 bg-white shadow-lg border-t-2 border-primary min-w-[220px] max-w-[300px] z-50 transform transition-all duration-200 origin-top ${
                        activeDropdown === item.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="py-1">
                        {item.dropdown.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.href}
                            className="block px-4 py-3 text-gray-800 hover:bg-primary/10 hover:text-primary border-b border-gray-100 last:border-b-0"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
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
          <div className="space-y-2 font-poppins overflow-y-auto max-h-[calc(100vh-100px)]">
            {navigationItems.map((item) => (
              <div key={item.id} className="mb-1">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleMobileDropdown(item.id);
                      }}
                      className={`flex items-center justify-between w-full py-2 px-4 rounded-md ${
                        mobileOpenItems.includes(item.id) 
                          ? "bg-primary/10 text-primary" 
                          : "hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center">
                        <Icon name={`${item.icon} mr-2`} />
                        <span>{item.name}</span>
                      </div>
                      <Icon 
                        name={`arrow-down-s-line ${mobileOpenItems.includes(item.id) ? 'rotate-180' : ''}`}
                        className="transition-transform duration-200" 
                      />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div 
                      className={`pl-6 mt-1 overflow-hidden transition-all duration-200 ${
                        mobileOpenItems.includes(item.id) 
                          ? "max-h-[1000px] opacity-100" 
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-l-2 border-primary/30 pl-2 py-1">
                        {item.dropdown.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.href}
                            onClick={closeMenu}
                            className="block py-2 px-3 text-gray-700 hover:text-primary rounded-md text-sm"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="flex items-center py-2 px-4 hover:bg-primary/10 hover:text-primary rounded-md transition-all"
                  >
                    <Icon name={`${item.icon} mr-2`} />
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
