import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import jssPolytechnicImage from "@assets/jss-polytechnic-nanjangud-nanjangud-institutes-nytvhtac7j.avif";

const AboutJSSPN = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "About JSSPN - JSS Polytechnic";
  }, []);

  return (
    <PageLayout>
      <PageBanner 
        title="About JSS Polytechnic Nanjangud"
        subtitle="Excellence in Diploma education since 1983"
        iconName="building-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "JSSPN", href: "/about/jss-polytechnic-nanjangud" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="history-line mr-2 text-amber-500" />
                <span>Our History and Legacy</span>
              </h2>
              
              <div className="prose max-w-none space-y-6">
                <p className="text-gray-700 bg-gray-50 p-5 rounded-lg border border-gray-100 leading-relaxed">
                  JSS Polytechnic, Nanjangud was established in the academic year 1983-84. It offers three year diploma courses in Electronics & Communication Engineering, Mechanical Engineering, Civil Engineering, Mechatronics Engineering, Computer Science & Engineering and Electrical & Electronics Engineering. It was admitted to Grant-in-Aid in 2001-02.
                </p>
                
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={jssPolytechnicImage} 
                      alt="JSS Polytechnic Nanjangud Campus" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-primary mt-8 mb-4 flex items-center">
                  <Icon name="building-2-line mr-2 text-amber-500" />
                  <span>Diploma under Industry Institution Interaction Programme (CO-OP scheme)</span>
                </h3>
                
                <div className="bg-primary/5 p-5 rounded-lg border-l-4 border-amber-400">
                  <p className="text-gray-700 leading-relaxed">
                    A new model of Industry Institution Interaction Programme (CO-OP scheme of Diploma) has been implemented in this polytechnic from 1992. This is the only polytechnic in the entire state of Karnataka to offer this course.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  These diploma courses are conducted in collaboration with public sector companies viz., HMT, BEL and BHEL – Bangalore, BEML – KGF, and private sector companies viz., Kaynes Technologies Pvt. Ltd., ASKAR Microns Pvt. Ltd., VWF Industries Pvt. Ltd. – Mysore, Elkayem Auto Ancillary Pvt. Ltd. – Kadakola and ATS India Pvt. Ltd.– Nanjangud.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  During the three year diploma, the students undergo six months of industrial training with a stipend in the above-listed industries. Also, many companies conduct campus interviews and select candidates suitable to them while they are still in the final year.
                </p>
                
                <h3 className="font-poppins font-semibold text-xl text-primary mt-8 mb-4 flex items-center">
                  <Icon name="award-line mr-2 text-amber-500" />
                  <span>Other Activities</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-200 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Entrepreneurship Development Cell</h4>
                        <p className="text-gray-600 text-sm">
                          Set up with assistance from AICTE, New Delhi. Conducts Entrepreneurship Awareness Camps and Development programmes.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-200 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                        <Icon name="heart-line text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">Counseling Centre</h4>
                        <p className="text-gray-600 text-sm">
                          Helps weak and rural students to overcome hurdles related to studies and other personal issues.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-200 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                        <Icon name="group-line text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">NSS Unit</h4>
                        <p className="text-gray-600 text-sm">
                          Active National Service Scheme unit for social service and community development activities.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-200 transition-colors">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                        <Icon name="government-line text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-1">NCC Unit</h4>
                        <p className="text-gray-600 text-sm">
                          National Cadet Corps unit for discipline, character building and leadership development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Various committees have been formed for the overall development of the Polytechnic.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-36">
                <h3 className="font-poppins font-bold text-xl text-primary mb-4 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>Key Facts</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Established</span>
                      <p className="font-medium text-gray-800">1983-84</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="government-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Grant-in-Aid Status</span>
                      <p className="font-medium text-gray-800">Since 2001-02</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="book-open-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Diploma Courses</span>
                      <p className="font-medium text-gray-800">6 Engineering Disciplines</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="briefcase-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">CO-OP Scheme</span>
                      <p className="font-medium text-gray-800">Since 1992</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="building-4-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Industrial Partners</span>
                      <p className="font-medium text-gray-800">9+ Companies</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-medium text-primary mb-3 flex items-center">
                    <Icon name="graduation-cap-line mr-2 text-amber-500" />
                    <span>Diploma Programs</span>
                  </h4>
                  <ul className="space-y-2 pl-5 list-disc text-gray-700">
                    <li>Electronics & Communication Engineering</li>
                    <li>Mechanical Engineering</li>
                    <li>Civil Engineering</li>
                    <li>Mechatronics Engineering</li>
                    <li>Computer Science & Engineering</li>
                    <li>Electrical & Electronics Engineering</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a
                    href="#academics"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="book-open-line mr-2" />
                    <span>Explore Programs</span>
                  </a>
                  
                  <a
                    href="#contact"
                    className="block mt-3 bg-white border border-gray-200 hover:border-primary text-primary px-6 py-3 rounded-full font-medium transition-all text-center flex items-center justify-center"
                  >
                    <Icon name="question-line mr-2" />
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutJSSPN;