import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const VisionMission = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Vision & Mission - JSS Polytechnic";
  }, []);

  return (
    <PageLayout>
      <PageBanner 
        title="Vision & Mission"
        subtitle="Our guiding principles and aspirations"
        iconName="eye-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Vision & Mission", href: "/about/vision-mission" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-primary py-6 px-8">
                  <h2 className="font-poppins font-bold text-3xl text-white flex items-center">
                    <Icon name="eye-line mr-3 text-amber-300" />
                    <span>Our Vision</span>
                  </h2>
                </div>
                
                <div className="p-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed italic font-medium">
                      "To be a leader in the field of technical education through creativeness innovative practices and the best utilization of science and technology and shaping youth with holistic management in building better nation"
                    </p>
                  </div>
                  
                  <p className="text-gray-600">
                    Our vision encapsulates our commitment to excellence, innovation, and holistic development. We aspire to be at the forefront of technical education, nurturing creative minds and fostering innovative practices that leverage the latest advancements in science and technology.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-primary py-6 px-8">
                  <h2 className="font-poppins font-bold text-3xl text-white flex items-center">
                    <Icon name="flag-line mr-3 text-amber-300" />
                    <span>Our Mission</span>
                  </h2>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">Upgrading Facilities</h3>
                        <p className="text-gray-700">
                          To constantly upgrade the facilities required for effective training.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                        <Icon name="user-settings-line text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">Faculty Development</h3>
                        <p className="text-gray-700">
                          To make the faculty updated always and adopt innovative practice by utilizing the information and communication technology.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">Student-Teacher Relationship</h3>
                        <p className="text-gray-700">
                          To adopt the changes in working relationship between the students and the teacher to make it more inclusive, dynamic and egalitarian.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                        <Icon name="mental-health-line text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">Holistic Development</h3>
                        <p className="text-gray-700">
                          To make the students think and expand their horizon by addressing the very broadest development of the student at the cognitive & effective levels.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-100 hover:border-amber-200 transition-colors">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 border border-amber-400/30">
                        <Icon name="graduation-cap-line text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">Excellence in Technical Education</h3>
                        <p className="text-gray-700">
                          To give the nation the best Technician / Engineers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <a 
                href="/about/jss-polytechnic-nanjangud"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md"
              >
                <Icon name="information-line mr-2" />
                <span>Learn More About JSS Polytechnic</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default VisionMission;