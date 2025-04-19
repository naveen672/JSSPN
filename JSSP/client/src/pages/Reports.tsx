import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const Reports = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Reports - JSS Polytechnic";
  }, []);

  // Reports data
  const reports = [
    {
      id: 1,
      title: "Extension of Approval (EOA) 2022-23",
      description: "AICTE approval document for the academic year 2022-23",
      link: "https://drive.google.com/file/d/1rX8uEIrYS8q88mqiZIfyAwY3x1xxGVLd/view?usp=drive_link",
      icon: "file-list-line",
      date: "2022"
    },
    {
      id: 2,
      title: "Extension of Approval (EOA) 2021-22",
      description: "AICTE approval document for the academic year 2021-22",
      link: "https://drive.google.com/file/d/1ny6toJfz-GkH8mwfM-NdWsxweZ1pobiZ/view?usp=drive_link",
      icon: "file-list-line",
      date: "2021"
    },
    {
      id: 3,
      title: "Extension of Approval (EOA) 2020-21",
      description: "AICTE approval document for the academic year 2020-21",
      link: "https://drive.google.com/file/d/1N0pvzc2jviXN9lLb31AvrBcyYnODXaVS/view?usp=drive_link",
      icon: "file-list-line",
      date: "2020"
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Reports"
        subtitle="Official reports and documents of JSS Polytechnic Nanjangud"
        iconName="file-paper-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Reports", href: "/about/reports" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-8 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="file-list-line mr-2 text-amber-500" />
                <span>Extension of Approval (EOA) Documents</span>
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-10 border border-gray-100">
                <p className="text-gray-700 mb-4">
                  The Extension of Approval (EOA) is granted by the All India Council for Technical Education (AICTE) 
                  to institutions for continuing their technical education programs. These documents certify that 
                  JSS Polytechnic Nanjangud meets all the required standards and criteria set by AICTE.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (report.id * 0.1) }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-primary/5 p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-400/30 flex items-center justify-center mr-4">
                          <Icon name={`${report.icon} text-amber-600`} />
                        </div>
                        <h3 className="font-poppins font-semibold text-lg text-primary">
                          {report.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <p className="text-gray-700 mb-4">
                        {report.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">
                          <Icon name="calendar-line mr-1 text-amber-500 text-xs inline-block" />
                          {report.date}
                        </span>
                        
                        <a 
                          href={report.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
                        >
                          <Icon name="external-link-line mr-1" />
                          <span>View Document</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-8"
            >
              <div className="bg-primary text-white p-5">
                <h3 className="font-poppins font-semibold text-xl flex items-center">
                  <Icon name="information-line mr-2" />
                  <span>Important Information</span>
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Icon name="verified-badge-line text-amber-600" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-1">Accreditation Status</h4>
                    <p className="text-gray-600">
                      JSS Polytechnic Nanjangud is duly approved by the All India Council for Technical Education (AICTE) and 
                      is affiliated with the Board of Technical Examinations, Karnataka.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Icon name="file-chart-line text-amber-600" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-1">Annual Reports</h4>
                    <p className="text-gray-600">
                      Annual reports contain vital information about the institution's performance, achievements, 
                      activities, and financial status for each academic year.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Icon name="search-line text-amber-600" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-1">AICTE Verification</h4>
                    <p className="text-gray-600">
                      You can verify our institution's approval status directly on the 
                      <a 
                        href="https://www.aicte-india.org/approvals" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-amber-500 transition-colors ml-1"
                      >
                        AICTE website
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-10"
            >
              <h3 className="font-poppins font-medium text-xl text-primary mb-4">Other Documents</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                For additional reports, documents, and information about JSS Polytechnic Nanjangud, 
                please contact the institution directly.
              </p>
              
              <a 
                href="#contact"
                className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-md"
              >
                <Icon name="mail-send-line mr-2" />
                <span>Contact Us</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Reports;