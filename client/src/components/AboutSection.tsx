import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-1 rounded-full text-sm mb-4 flex items-center justify-center mx-auto w-fit">
            <Icon name="information-line mr-2" />
            About Us
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">
            Excellence in Technical Education
          </h2>
          <p className="text-gray-600">
            Founded on principles of innovation, practical learning, and industry relevance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: contentVisible ? 1 : 0, x: contentVisible ? 0 : -30 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-poppins font-semibold text-2xl text-primary mb-4 flex items-center">
              <Icon name="history-line mr-2 text-primary" />
              Our Rich Heritage
            </h3>
            <p className="text-gray-700 mb-4 flex items-start">
              <Icon name="calendar-line mt-1 mr-2 text-gray-500 flex-shrink-0" />
              <span>JSS Polytechnic Nanjangud was established in 1965 with a vision to provide quality technical education that meets the evolving needs of industry and society.</span>
            </p>
            <p className="text-gray-700 mb-6 flex items-start">
              <Icon name="award-line mt-1 mr-2 text-gray-500 flex-shrink-0" />
              <span>Over the decades, we've grown to become one of the region's most respected technical institutions, known for our practical approach to education and strong industry connections.</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Icon name="briefcase-4-line text-xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg">Industry-Aligned Curriculum</h4>
                  <p className="text-gray-600">Our programs are designed in consultation with industry leaders to ensure relevance.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Icon name="tools-line text-xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg">Hands-On Learning</h4>
                  <p className="text-gray-600">Emphasis on practical training with modern equipment and laboratories.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Icon name="user-star-line text-xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-poppins font-medium text-lg">Experienced Faculty</h4>
                  <p className="text-gray-600">Our educators bring a wealth of academic knowledge and industry experience.</p>
                </div>
              </div>
            </div>

            <a href="#academics" className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors bg-primary/5 px-4 py-2 rounded-md">
              <Icon name="book-open-line mr-2" />
              <span>Learn more about our programs</span>
              <Icon name="arrow-right-line ml-2" />
            </a>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: imageVisible ? 1 : 0, x: imageVisible ? 0 : 30 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-poppins font-semibold text-xl flex items-center">
                    <Icon name="microscope-line mr-2" />
                    <span>State-of-art Laboratories</span>
                  </h4>
                  <p className="text-white/80 text-sm">Our modern facilities provide students with hands-on experience using industry-standard equipment</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Students in laboratory" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
