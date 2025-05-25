import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import MOU images
import mou1 from "@assets/mou1.jpg";
import mou2 from "@assets/mou2.jpg";
import mou3 from "@assets/mou3.jpg";
import mou4 from "@assets/mou4.jpg";
import mou5 from "@assets/mou5.jpg";
import mou6 from "@assets/mou6.jpg";

const CampusSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: industryRef, isVisible: industryVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: btnRef, isVisible: btnVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="campus" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-amber-400/10 text-amber-600 font-medium px-4 py-1 rounded-full text-sm mb-4 flex items-center justify-center mx-auto w-fit">
            <Icon name="building-2-line mr-2" />
            Campus Life
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
            Industry Partnerships
          </h2>
          <p className="text-gray-600">
            We maintain strong ties with leading industries to provide our students with real-world experience and placement opportunities.
          </p>
        </motion.div>

        {/* Industry Partnerships - MOUs Section */}
        <motion.div
          ref={industryRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: industryVisible ? 1 : 0, y: industryVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-10 bg-primary flex items-center px-4">
                <h3 className="font-poppins font-medium text-white text-sm">Industry Partnership</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={mou1} alt="MOU with Sundaram Auto Components" className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2 flex items-center">
                  <div className="w-2 h-5 bg-amber-400 rounded-full mr-2"></div>
                  Sundaram Auto Components
                </h3>
                <p className="text-gray-700 text-sm mb-3">Partnership for training and placement opportunities in automotive engineering.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-amber-400/10 text-amber-600 py-1 px-2 rounded-full">Automotive</span>
                  <Icon name="external-link-line text-primary" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-10 bg-primary flex items-center px-4">
                <h3 className="font-poppins font-medium text-white text-sm">Industry Partnership</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={mou2} alt="MOU with Triphase Technologies" className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2 flex items-center">
                  <div className="w-2 h-5 bg-amber-400 rounded-full mr-2"></div>
                  Triphase Technologies
                </h3>
                <p className="text-gray-700 text-sm mb-3">Collaboration on technical education and hands-on engineering projects.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-amber-400/10 text-amber-600 py-1 px-2 rounded-full">Technology</span>
                  <Icon name="external-link-line text-primary" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-10 bg-primary flex items-center px-4">
                <h3 className="font-poppins font-medium text-white text-sm">Industry Partnership</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={mou3} alt="MOU with RishiFIBC" className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2 flex items-center">
                  <div className="w-2 h-5 bg-amber-400 rounded-full mr-2"></div>
                  RishiFIBC
                </h3>
                <p className="text-gray-700 text-sm mb-3">Strategic partnership for advancing technical education and student development.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-amber-400/10 text-amber-600 py-1 px-2 rounded-full">Education</span>
                  <Icon name="external-link-line text-primary" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-10 bg-primary flex items-center px-4">
                <h3 className="font-poppins font-medium text-white text-sm">Industry Partnership</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={mou4} alt="MOU with BHEL Electronics Division" className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2 flex items-center">
                  <div className="w-2 h-5 bg-amber-400 rounded-full mr-2"></div>
                  BHEL Electronics Division
                </h3>
                <p className="text-gray-700 text-sm mb-3">Collaboration on cutting-edge electronics training and placement initiatives.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-amber-400/10 text-amber-600 py-1 px-2 rounded-full">Electronics</span>
                  <Icon name="external-link-line text-primary" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-10 bg-primary flex items-center px-4">
                <h3 className="font-poppins font-medium text-white text-sm">Industry Partnership</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={mou5} alt="MOU with Engineering Firm" className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2 flex items-center">
                  <div className="w-2 h-5 bg-amber-400 rounded-full mr-2"></div>
                  Engineering Excellence Program
                </h3>
                <p className="text-gray-700 text-sm mb-3">Comprehensive student development program with certification opportunities.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-amber-400/10 text-amber-600 py-1 px-2 rounded-full">Engineering</span>
                  <Icon name="external-link-line text-primary" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-10 bg-primary flex items-center px-4">
                <h3 className="font-poppins font-medium text-white text-sm">Industry Partnership</h3>
              </div>
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img src={mou6} alt="MOU with BHEL Meeting" className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-5 border-t border-gray-100">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2 flex items-center">
                  <div className="w-2 h-5 bg-amber-400 rounded-full mr-2"></div>
                  Industry Collaboration Summit
                </h3>
                <p className="text-gray-700 text-sm mb-3">Regular industry meetings to align curriculum with industry requirements.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-amber-400/10 text-amber-600 py-1 px-2 rounded-full">Curriculum</span>
                  <Icon name="external-link-line text-primary" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recruiters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: industryVisible ? 1 : 0, y: industryVisible ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="font-poppins font-bold text-2xl text-primary mb-8 text-center">
            <Icon name="building-4-line mr-2 text-amber-500" />
            Our Top Recruiters
          </h2>
          
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
            <img 
              src="/assets/top-recruiters.jpg" 
              alt="Top Recruiters including Toyota, Infosys, Wipro, ThoughtWorks, L&T, TVS, ABB, Tech Mahindra and more" 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          ref={btnRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: btnVisible ? 1 : 0, y: btnVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md gap-2 mx-auto"
          >
            <Icon name="play-circle-line text-xl" />
            <span>Take a Virtual Campus Tour</span>
            <Icon name="arrow-right-line ml-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusSection;
