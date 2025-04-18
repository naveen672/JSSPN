import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import logoImage from "@/assets/logo.jpg";

// Define navigation item types
interface DropdownItem {
  name: string;
  href: string;
}

interface NavigationItem {
  id: string;
  name: string;
  href: string;
  icon: string;
  dropdown: DropdownItem[] | null;
}

// Navigation menu data
const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    name: 'Home',
    href: '/',
    icon: 'home-4-line',
    dropdown: null
  },
  {
    id: 'about',
    name: 'About',
    href: '#about',
    icon: 'information-line',
    dropdown: [
      { name: 'About JSSMVP', href: '/about/jssmvp' },
      { name: 'About JSSPN', href: '/about/jss-polytechnic-nanjangud' },
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'Governance', href: '/about/governance' },
      { name: 'Administration', href: '/about/administration' },
      { name: 'Reports', href: '/about/reports' },
      { name: 'Downloads', href: '/about/downloads' },
      { name: 'Contact Us', href: '/about/contact' }
    ]
  },
  {
    id: 'programmes',
    name: 'Programmes',
    href: '#academics',
    icon: 'book-open-line',
    dropdown: [
      { name: 'Computer Science Engineering', href: '/programs/computer-science-engineering' },
      { name: 'Mechanical Engineering', href: '/programs/mechanical-engineering' },
      { name: 'Electrical Engineering', href: '/programs/electrical-engineering' },
      { name: 'Civil Engineering', href: '/programs/civil-engineering' },
      { name: 'Electronics & Communication', href: '/programs/electronics-communication' },
      { name: 'Science & Humanities', href: '/programs/science-humanities' },
      { name: 'Mechatronics', href: '/programs/mechatronics' }
    ]
  },
  {
    id: 'academic',
    name: 'Academic',
    href: '#academics',
    icon: 'graduation-cap-line',
    dropdown: [
      { name: 'Computer Science Engineering', href: '/programs/computer-science-engineering' },
      { name: 'Mechanical Engineering', href: '/programs/mechanical-engineering' },
      { name: 'Electrical Engineering', href: '/programs/electrical-engineering' },
      { name: 'Civil Engineering', href: '/programs/civil-engineering' },
      { name: 'Electronics & Communication', href: '/programs/electronics-communication' },
      { name: 'Science & Humanities', href: '/programs/science-humanities' },
      { name: 'Mechatronics', href: '/programs/mechatronics' },
      { name: 'Calender Of Events', href: '/academic/calendar-of-events' },
      { name: 'Admission', href: '/academic/admission' },
      { name: 'Examination', href: '/academic/examination' },
      { name: 'Circulars', href: '/academic/circulars' }
    ]
  },
  {
    id: 'facilities',
    name: 'Facilities',
    href: '#campus',
    icon: 'building-4-line',
    dropdown: [
      { name: 'Library', href: '/facilities/library' },
      { name: 'Sports', href: '/facilities/sports' }
    ]
  },
  {
    id: 'supports',
    name: 'Supports',
    href: '#campus',
    icon: 'hand-heart-line',
    dropdown: [
      { name: 'Scholarship', href: '/supports/scholarship' },
      { name: 'Mentoring Scheme', href: '/supports/mentoring-scheme' },
      { name: 'Social Out Reach Program', href: '/supports/social-outreach-program' },
      { name: 'Student Grievance', href: '/supports/student-grievance' },
      { name: 'Gallery', href: '/supports/gallery' }
    ]
  },
  {
    id: 'placement',
    name: 'Placement',
    href: '#',
    icon: 'briefcase-line',
    dropdown: [
      { name: 'Training', href: '/placement/training' },
      { name: 'Placement', href: '/placement/placement' }
    ]
  },
  {
    id: 'more',
    name: 'More',
    href: '#',
    icon: 'more-line',
    dropdown: [
      { name: 'Mandatory Disclosure', href: '/more/mandatory-disclosure' },
      { name: 'IQAC', href: '/more/iqac' },
      { name: 'Media Coverage', href: '/more/media-coverage' },
      { name: 'Anti Ragging', href: '/more/anti-ragging' },
      { name: 'Women Grievances', href: '/more/women-grievances' },
      { name: 'SC/CT Committee', href: '/more/sc-ct-committee' }
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
        className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 h-[72px] ${
          scrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="mr-4 md:hidden text-primary"
                aria-label="Toggle menu"
              >
                <Icon name="menu-line text-2xl" />
              </button>
              <a href="/" className="flex items-center group">
                <div className="w-12 h-12 mr-3 overflow-hidden rounded-full shadow-md border-2 border-gray-100 group-hover:border-primary transition-colors duration-200">
                  <img src={logoImage} alt="JSS Polytechnic Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-poppins font-semibold text-primary text-lg block leading-tight group-hover:text-amber-500 transition-colors duration-200">
                    JSS Polytechnic
                  </span>
                  <span className="text-xs text-gray-500">Nanjangud</span>
                </div>
              </a>
            </div>
            <div className="hidden md:flex space-x-1 font-poppins font-medium">
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="relative px-2"
                  ref={(el) => (dropdownRefs.current[item.id] = el)}
                >
                  {item.dropdown ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDesktopDropdown(item.id);
                      }}
                      className={`py-2 flex items-center rounded-md px-3 ${
                        activeDropdown === item.id
                          ? "text-primary bg-primary/5 font-semibold"
                          : "hover:text-primary hover:bg-primary/5 transition-all"
                      }`}
                    >
                      <Icon name={`${item.icon} mr-1.5`} />
                      <span>{item.name}</span>
                      <Icon 
                        name={`arrow-down-s-line ml-1 text-xs ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
                        className="transition-transform duration-200"
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`py-2 flex items-center rounded-md px-3 hover:text-primary hover:bg-primary/5 transition-all`}
                    >
                      <Icon name={`${item.icon} mr-1.5`} />
                      <span>{item.name}</span>
                    </a>
                  )}
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute left-0 mt-1 bg-white shadow-xl rounded-lg border border-gray-100 min-w-[240px] max-w-[300px] z-50 transform transition-all duration-200 origin-top overflow-hidden ${
                        activeDropdown === item.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    >
                      <div className="py-1 bg-gradient-to-r from-primary to-primary/90 text-white px-4 py-2 font-medium">
                        {item.name}
                      </div>
                      <div className="py-1">
                        {item.dropdown.map((subItem, index) => (
                          <a
                            key={index}
                            href={subItem.href}
                            className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-primary/5 hover:text-primary border-b border-gray-100 last:border-b-0 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
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
        className="fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 md:hidden"
      >
        <div className="bg-gradient-to-r from-primary to-primary/90 p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-12 h-12 overflow-hidden rounded-full bg-white p-1">
                <img src={logoImage} alt="JSS Polytechnic Logo" className="w-full h-full object-contain" />
              </div>
              <div className="ml-3 text-white">
                <div className="font-bold text-lg">JSS Polytechnic</div>
                <div className="text-xs opacity-80">Nanjangud</div>
              </div>
            </div>
            <button
              onClick={closeMenu}
              className="text-white/90 hover:text-white"
              aria-label="Close menu"
            >
              <Icon name="close-line text-2xl" />
            </button>
          </div>
        </div>
        
        <div className="p-4 space-y-1 font-poppins overflow-y-auto max-h-[calc(100vh-100px)]">
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
                    className={`flex items-center justify-between w-full py-3 px-4 rounded-md ${
                      mobileOpenItems.includes(item.id) 
                        ? "bg-primary text-white" 
                        : "hover:bg-primary/10 hover:text-primary text-gray-700"
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
                    className={`pl-4 mt-1 overflow-hidden transition-all duration-300 ${
                      mobileOpenItems.includes(item.id) 
                        ? "max-h-[1000px] opacity-100" 
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-lg p-2 ml-2 border-l-2 border-amber-400">
                      {item.dropdown.map((subItem, index) => (
                        <a
                          key={index}
                          href={subItem.href}
                          onClick={closeMenu}
                          className="flex items-center py-2.5 px-3 text-gray-700 hover:text-primary rounded-md text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></span>
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
                  className="flex items-center py-3 px-4 hover:bg-primary/10 hover:text-primary rounded-md text-gray-700 transition-all"
                >
                  <Icon name={`${item.icon} mr-2`} />
                  <span>{item.name}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;