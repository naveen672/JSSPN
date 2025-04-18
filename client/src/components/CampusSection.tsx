import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { campusFeatures } from "@/lib/constants";
import { useScrollAnimation, useScrollAnimationWithDelay } from "@/hooks/useScrollAnimation";

const CampusSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: mainImageRef, isVisible: mainImageVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: highlightsRef, isVisible: highlightsVisible } = useScrollAnimation<HTMLDivElement>();
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
            Experience Our Campus
          </h2>
          <p className="text-gray-600">
            Our state-of-the-art campus provides a conducive environment for learning, innovation, and holistic development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            ref={mainImageRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: mainImageVisible ? 1 : 0, 
              scale: mainImageVisible ? 1 : 0.95 
            }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg h-full min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="JSS Polytechnic Campus" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-poppins font-semibold text-2xl mb-2">Modern Infrastructure</h3>
                <p className="text-white/80">Our campus spans across 25 acres with cutting-edge facilities designed to foster learning and innovation.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={highlightsRef}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: highlightsVisible ? 1 : 0, x: highlightsVisible ? 0 : 30 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 gap-6 h-full">
              <div className="relative rounded-xl overflow-hidden shadow-lg h-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-a34320987e01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80" 
                  alt="Laboratory Facilities" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-poppins font-semibold text-lg mb-1">Advanced Laboratories</h3>
                  <p className="text-white/80 text-sm">Latest equipment for hands-on training</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg h-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="Library" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-poppins font-semibold text-lg mb-1">Digital Library</h3>
                  <p className="text-white/80 text-sm">Access to vast collection of technical resources</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {campusFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

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

const FeatureCard = ({ feature, index }: { feature: typeof campusFeatures[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimationWithDelay<HTMLDivElement>(0.1, index * 150);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-14 h-14 bg-${feature.color}/10 rounded-full flex items-center justify-center mb-4`}>
        <Icon name={`${feature.icon} text-2xl text-${feature.color}`} />
      </div>
      <h3 className="font-poppins font-semibold text-xl text-text mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export default CampusSection;
