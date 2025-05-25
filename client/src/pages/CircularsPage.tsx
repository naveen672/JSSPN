import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

const CircularsPage = () => {
  return (
    <PageLayout>
      <PageBanner 
        title="Circulars"
        subtitle="Important notices, announcements, and official communications"
        iconName="file-list-2-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Academic", href: "#" },
          { name: "Circulars", href: "/academic/circulars" }
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
              <div className="mb-10">
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="file-list-2-line mr-2 text-amber-500" />
                  <span>Official Circulars</span>
                </h2>
                
                <div className="prose max-w-none">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Admission & Examination Circulars
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Click the link below to access all the official circulars related to admissions, examinations, and other important academic announcements from the Department of Technical Education, Karnataka.
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center p-5 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                        <Icon name="links-line text-primary text-2xl" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary text-lg mb-2">Department of Technical Education</h4>
                        <p className="text-gray-600 mb-4">Official portal for all departmental circulars and notifications</p>
                        <a 
                          href="https://dtek.karnataka.gov.in/info-4/Departmental+Circulars/kn" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center bg-primary text-white py-3 px-5 rounded-lg hover:bg-primary/90 transition-colors inline-block shadow-md"
                        >
                          <Icon name="external-link-line mr-2" />
                          <span>View Official Circulars</span>
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-8 bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <p className="text-gray-700 flex items-start">
                        <Icon name="information-line text-amber-600 mr-2 flex-shrink-0 mt-1" />
                        <span>The circulars on the official website are regularly updated. Please check back frequently for the latest announcements and updates.</span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Important Circulars
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-primary/30 transition-colors">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon name="file-pdf-line text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">Academic Calendar 2024-25</h4>
                          <p className="text-gray-500 text-sm">Latest circular regarding the academic schedule for 2024-25</p>
                        </div>
                        <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                          <Icon name="download-line text-xl" />
                        </a>
                      </div>
                      
                      <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-primary/30 transition-colors">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon name="file-pdf-line text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">Examination Schedule - May 2024</h4>
                          <p className="text-gray-500 text-sm">Detailed timetable for upcoming semester exams</p>
                        </div>
                        <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                          <Icon name="download-line text-xl" />
                        </a>
                      </div>
                      
                      <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-primary/30 transition-colors">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                          <Icon name="file-pdf-line text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">Fee Structure 2024-25</h4>
                          <p className="text-gray-500 text-sm">Updated fee structure for the academic year 2024-25</p>
                        </div>
                        <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                          <Icon name="download-line text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100 flex items-center">
                  <Icon name="search-line mr-2 text-amber-500" />
                  <span>Quick Access</span>
                </h3>
                
                <div className="space-y-1">
                  <a href="/academic/admission" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="user-add-line mr-2 text-amber-500" />
                    <span>Admission Information</span>
                  </a>
                  
                  <a href="/academic/examination" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="file-list-3-line mr-2 text-amber-500" />
                    <span>Examination Details</span>
                  </a>
                  
                  <a href="/academic/calendar-of-events" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="calendar-line mr-2 text-amber-500" />
                    <span>Academic Calendar</span>
                  </a>
                  
                  <a href="https://dtek.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="global-line mr-2 text-amber-500" />
                    <span>DTE Karnataka Website</span>
                  </a>
                </div>
                
                <div className="mt-8 bg-primary/5 p-5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-primary mb-3 flex items-center">
                    <Icon name="team-line mr-2 text-amber-500" />
                    <span>Contact for Circulars</span>
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="bg-white rounded-full p-1 mr-3 shadow-sm">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="user-3-line text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Administrative Office</p>
                        <p className="text-gray-600 text-sm">JSS Polytechnic, Nanjangud</p>
                        <a href="tel:08221226142" className="text-primary flex items-center mt-1 text-sm">
                          <Icon name="phone-line mr-1" />
                          08221-226142
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="https://dtek.karnataka.gov.in/info-4/Departmental+Circulars/kn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="file-download-line mr-2" />
                    <span>Access All Circulars</span>
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

export default CircularsPage;