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
    <section id="campus" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-1 rounded-full text-sm mb-4">
            Campus Life
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">
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
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={mou1} alt="MOU with Sundaram Auto Components" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2">Sundaram Auto Components</h3>
                <p className="text-gray-700 text-sm">Partnership for training and placement opportunities in automotive engineering.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={mou2} alt="MOU with Triphase Technologies" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2">Triphase Technologies</h3>
                <p className="text-gray-700 text-sm">Collaboration on technical education and hands-on engineering projects.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={mou3} alt="MOU with RishiFIBC" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2">RishiFIBC</h3>
                <p className="text-gray-700 text-sm">Strategic partnership for advancing technical education and student development.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={mou4} alt="MOU with BHEL Electronics Division" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2">BHEL Electronics Division</h3>
                <p className="text-gray-700 text-sm">Collaboration on cutting-edge electronics training and placement initiatives.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={mou5} alt="MOU with Engineering Firm" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2">Engineering Excellence Program</h3>
                <p className="text-gray-700 text-sm">Comprehensive student development program with certification opportunities.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={mou6} alt="MOU with BHEL Meeting" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-poppins font-semibold text-lg text-primary mb-2">Industry Collaboration Summit</h3>
                <p className="text-gray-700 text-sm">Regular industry meetings to align curriculum with industry requirements.</p>
              </div>
            </div>
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
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center space-x-2 mx-auto w-auto"
          >
            <Icon name="play-circle-line text-xl" />
            <span>Take a Virtual Campus Tour</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusSection;
