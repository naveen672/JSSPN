import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const Downloads = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Downloads - JSS Polytechnic";
  }, []);

  // Downloads data
  const downloads = [
    {
      id: 1,
      title: "Application Form",
      description: "Application form for admission to JSS Polytechnic Nanjangud",
      link: "https://drive.google.com/file/d/1cjGQPmVhsK2-tyt-b4DQIa_-WcZzvSu7/view?usp=drive_link",
      icon: "file-text-line",
      category: "Admission"
    },
    {
      id: 2,
      title: "Institute Brochure",
      description: "Comprehensive brochure with details about JSS Polytechnic Nanjangud, its courses, facilities, and more",
      link: "https://drive.google.com/file/d/1EgiFxu__0PaYSpJI-lUt9En4aZv6FgPU/view?usp=drive_link",
      icon: "book-open-line",
      category: "Information"
    }
  ];

  // Document categories for filtering
  const categories = [
    { id: "all", name: "All Documents", icon: "file-list-line" },
    { id: "admission", name: "Admission", icon: "file-text-line" },
    { id: "information", name: "Institution Information", icon: "book-open-line" }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Downloads"
        subtitle="Important documents and forms available for download"
        iconName="download-cloud-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Downloads", href: "/about/downloads" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="download-cloud-line mr-2 text-amber-500" />
                <span>Available Documents</span>
              </h2>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-10 border border-gray-100">
                <p className="text-gray-700 mb-4">
                  Here you can download important documents, forms, brochures, and other materials related to 
                  JSS Polytechnic Nanjangud. All documents are available in PDF format.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        className="flex items-center bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                      >
                        <Icon name={`${category.icon} mr-1.5 text-amber-500`} />
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {downloads.map((download) => (
                  <motion.div
                    key={download.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + (download.id * 0.1) }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-primary/5 p-4 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-amber-400/30 flex items-center justify-center mr-4">
                          <Icon name={`${download.icon} text-amber-600`} />
                        </div>
                        <h3 className="font-poppins font-semibold text-lg text-primary">
                          {download.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <p className="text-gray-700 mb-4 text-sm h-16">
                        {download.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                          {download.category}
                        </span>
                        
                        <a 
                          href={download.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors shadow-sm"
                        >
                          <Icon name="download-cloud-line mr-1" />
                          <span>Download</span>
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
                  <span>Document Guide</span>
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Icon name="file-text-line text-amber-600" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-1">Application Form</h4>
                    <p className="text-gray-600">
                      The application form needs to be filled out completely and submitted with all required documents 
                      for admission consideration. Make sure to review all instructions before submission.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 flex-shrink-0 flex items-center justify-center mt-1">
                    <Icon name="book-open-line text-amber-600" />
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-1">Institute Brochure</h4>
                    <p className="text-gray-600">
                      The brochure contains comprehensive information about the institution, including available courses, 
                      facilities, faculty, campus life, and admission process. It's a valuable resource for prospective students.
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
              <h3 className="font-poppins font-medium text-xl text-primary mb-4">Need More Information?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                If you need additional documents or have questions about the admission process, 
                please don't hesitate to contact us.
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

export default Downloads;