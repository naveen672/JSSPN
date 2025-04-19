import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const AboutJSSMVP = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "About JSSMVP - JSS Polytechnic";
  }, []);

  return (
    <PageLayout>
      <PageBanner 
        title="About JSSMVP"
        subtitle="Jagadguru Sri Shivarathrishwara Mahavidyapeetha - A Legacy of Excellence"
        iconName="building-2-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "JSSMVP", href: "/about/jssmvp" }
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
                <Icon name="information-line mr-2 text-amber-500" />
                <span>Welcome to JSS Mahavidyapeeta</span>
              </h2>
              
              <div className="prose max-w-none space-y-6">
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100 leading-relaxed">
                  Jagadguru Sri Veerasimhasana Math, a religious monastery situated at Suttur in Mysore District of Karnataka State, has a history of about one thousand years. Jagadguru Sri Shivarathrishwara Mahavidyapeetha, popularly known as JSS Mahavidyapeetha (JSSMVP), sponsored by the above Math, was established during 1954 by the President of JSSMVP, His Holiness Jagadguru Dr Sri Shivarathri Rajendra Mahaswamiji.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The vision of His Holiness has triggered an education revolution, particularly in the backward rural areas of Mysore District during the last four decades.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  His vision was responsible for bringing about an excellent blend of the traditional culture with modern science, leading to total personality development of individuals through a network of over two hundred and seventy five education institutions, propagating both cultural education and modern multi-disciplinary professional education.
                </p>
                
                <div className="bg-primary/5 p-5 rounded-lg border-l-4 border-amber-400">
                  <p className="text-gray-700 leading-relaxed">
                    The present Pontiff, His Holiness Jagadguru Sri Sri Shivarathri Deshikendra Mahaswamiji, is heading the JSS Mahavidyapeetha as its President.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  Today, JSSMVP under the spiritual guidance of His Holiness, is on the threshold of launching many more programmes covering all aspects of life in the service of the nation. His Holiness's vision, enthusiasm, spirit of dedication is incomparable. The long tradition of the JSS Mahavidyapeetha is being continued now with renewed force and fervor.
                </p>
              </div>
              
              <h3 className="font-poppins font-semibold text-xl text-primary mt-10 mb-6 flex items-center pl-3 border-l-3 border-amber-300">
                <Icon name="tools-line mr-2 text-amber-500" />
                <span>TECHNICAL EDUCATION SYSTEM OF JSS MAHAVIDYAPEETHA</span>
              </h3>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-700 mb-4">
                  This system consists of:
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">Sri Jayachamarajendra Engineering College, Mysuru</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Academy of Technical Education(JSSATE), Bengaluru</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Academy of Technical Education (JSSATE), NOIDA</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Academy of Technical Education, Mauritius</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Women's Polytechnic, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Polytechnic SJCE, Campus, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700 font-medium">JSS Polytechnic, Nanjangud</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Polytechnic for the Differently Abled, Mysuru</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">Three Industrial Training Institutes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">Consultancy Trust</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">Three Science and Technology Entrepreneurship Parks (STEP)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">Nodal Centre for Entrepreneurship and Management Development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Institute for Water and Health</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Rural Development and Self Employment Training Institution (JSS RUDSETI), Mariyala</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Urban Haath, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Centre for Management Studies, Mysore</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Education Foundation, Dubai</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">Two JSS Skill Training Center, Thandya, Nanjangud Taluk and Mariyala, Chamarajanagar Taluk</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Export Production Center, Dharawar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                      <Icon name="arrow-right-s-line text-amber-600 text-sm" />
                    </div>
                    <span className="text-gray-700">JSS Export Production cum Training Centers at Talavadi, Tamilnadu, Harave and Mariyala, Chamarajanagar Taluk</span>
                  </li>
                </ul>
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
                  <Icon name="building-line mr-2 text-amber-500" />
                  <span>JSSMVP Facts</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Established</span>
                      <p className="font-medium text-gray-800">1954</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="user-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Founded By</span>
                      <p className="font-medium text-gray-800">His Holiness Jagadguru Dr Sri Shivarathri Rajendra Mahaswamiji</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="building-4-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Institutions</span>
                      <p className="font-medium text-gray-800">275+ Education Institutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="map-pin-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Headquarters</span>
                      <p className="font-medium text-gray-800">Mysore, Karnataka</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="links-line mr-2 text-amber-500" />
                    <span>Quick Links</span>
                  </h4>
                  <div className="space-y-2">
                    <a href="https://jssonline.org/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                      <Icon name="external-link-line mr-2 text-amber-500" />
                      <span>Official JSSMVP Website</span>
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                      <Icon name="history-line mr-2 text-amber-500" />
                      <span>History of JSSMVP</span>
                    </a>
                    <a href="#" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                      <Icon name="hotel-line mr-2 text-amber-500" />
                      <span>Suttur Math</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AboutJSSMVP;