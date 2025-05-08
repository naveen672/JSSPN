import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import jssImage from "@assets/jss.jpg";

const AboutSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-amber-400/10 text-amber-600 font-medium px-4 py-1 rounded-full text-sm mb-4 flex items-center justify-center mx-auto w-fit">
            <Icon name="information-line mr-2" />
            About Us
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
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
            <h3 className="font-poppins font-bold text-2xl text-primary mb-4 flex items-center pl-4 border-l-4 border-amber-400">
              <Icon name="history-line mr-2 text-amber-500" />
              Our Rich Heritage
            </h3>
            <p className="text-gray-700 mb-4 flex items-start bg-white/80 p-3 rounded-lg shadow-sm border border-gray-100">
              <Icon name="calendar-line mt-1 mr-2 text-amber-500 flex-shrink-0" />
              <span>JSS Polytechnic Nanjangud was established in the academic year 1983-84. It offers three year diploma courses in Electronics & Communication Engineering, Mechanical Engineering, Civil Engineering, Mechatronics Engineering, Computer Science & Engineering and Electrical & Electronics Engineering.</span>
            </p>
            <p className="text-gray-700 mb-6 flex items-start bg-white/80 p-3 rounded-lg shadow-sm border border-gray-100">
              <Icon name="award-line mt-1 mr-2 text-amber-500 flex-shrink-0" />
              <span>The institution was admitted to Grant-in-Aid in 2001-02 and is known for its unique Industry Institution Interaction Programme (CO-OP scheme of Diploma) implemented since 1992.</span>
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-amber-200 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                  <Icon name="briefcase-4-line text-xl text-amber-600" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-primary">Industry-Aligned Curriculum</h4>
                  <p className="text-gray-600">Our programs are designed in consultation with industry leaders to ensure relevance.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-amber-200 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                  <Icon name="tools-line text-xl text-amber-600" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-primary">Hands-On Learning</h4>
                  <p className="text-gray-600">Emphasis on practical training with modern equipment and laboratories.</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:border-amber-200 transition-all duration-300">
                <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                  <Icon name="user-star-line text-xl text-amber-600" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-lg text-primary">Experienced Faculty</h4>
                  <p className="text-gray-600">Our educators bring a wealth of academic knowledge and industry experience.</p>
                </div>
              </div>
            </div>

            <a href="#academics" className="inline-flex items-center font-medium text-white hover:text-white/90 transition-colors bg-primary hover:bg-primary/90 px-5 py-2.5 rounded-full shadow-md">
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
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-lg z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-lg z-0"></div>
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl group border-2 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-poppins font-semibold text-xl flex items-center">
                    <Icon name="microscope-line mr-2 text-amber-400" />
                    <span>State-of-art Laboratories</span>
                  </h4>
                  <p className="text-white/90 text-sm">Our modern facilities provide students with hands-on experience using industry-standard equipment</p>
                </div>
              </div>
              <img 
                src={jssImage} 
                alt="JSS Polytechnic Building" 
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
