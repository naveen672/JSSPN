import { useEffect } from "react";
import { useRoute } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

// This is a template for program pages
const ProgramPage = () => {
  // Match route and extract program slug
  const [, params] = useRoute("/programs/:slug");
  const slug = params?.slug || "";
  
  // Convert slug to title (e.g., "computer-science" -> "Computer Science")
  const programTitle = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <PageBanner 
        title={`${programTitle}`}
        subtitle="Comprehensive diploma program with hands-on technical training and industry exposure"
        iconName="book-open-line"
        breadcrumbs={[
          { name: "Programs", href: "/programs" },
          { name: programTitle, href: `/programs/${slug}` }
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
                <span>About the Program</span>
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  Program content will be added here. This is a placeholder for the description of the {programTitle} program at JSS Polytechnic Nanjangud.
                </p>
                
                <h3 className="font-semibold text-xl text-primary mt-8 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map(item => (
                    <li key={item} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                        <Icon name="check-line text-amber-600" />
                      </div>
                      <span className="text-gray-700">Program highlight {item} will be displayed here</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-semibold text-xl text-primary mt-8 mb-4">Career Opportunities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map(item => (
                    <div key={item} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-200 transition-colors">
                      <h4 className="font-medium text-primary mb-2 flex items-center">
                        <Icon name="briefcase-line mr-2 text-amber-500" />
                        <span>Career Option {item}</span>
                      </h4>
                      <p className="text-gray-600 text-sm">Description of career opportunity</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-xl text-primary mb-4 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="contacts-book-line mr-2 text-amber-500" />
                  <span>Program Details</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Duration</span>
                      <p className="font-medium text-gray-800">3 Years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="book-open-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Qualification</span>
                      <p className="font-medium text-gray-800">Diploma in {programTitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Intake</span>
                      <p className="font-medium text-gray-800">60 Students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="user-settings-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Eligibility</span>
                      <p className="font-medium text-gray-800">10th Std or Equivalent</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="#admissions"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="user-add-line mr-2" />
                    <span>Apply for this Program</span>
                  </a>
                  
                  <a
                    href="#contact"
                    className="block mt-3 bg-white border border-gray-200 hover:border-primary text-primary px-6 py-3 rounded-full font-medium transition-all text-center flex items-center justify-center"
                  >
                    <Icon name="question-line mr-2" />
                    <span>Inquire About Program</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl text-primary mb-4 flex items-center justify-center">
              <Icon name="slideshow-line mr-3 text-amber-500" />
              <span>Program Gallery</span>
            </h2>
            <p className="text-gray-600">
              Get a visual glimpse of our facilities, classrooms, laboratories, and student activities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Icon name="image-line text-4xl" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-medium text-lg text-primary">
                    Gallery Image {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Description for gallery image {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramPage;