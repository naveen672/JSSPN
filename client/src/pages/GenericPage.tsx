import { useEffect } from "react";
import { useRoute } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

interface PageCategory {
  [key: string]: {
    title: string;
    subtitle: string;
    icon: string;
    breadcrumbBase: string;
  }
}

// Configuration for different page categories
const pageCategories: PageCategory = {
  academic: {
    title: "Academic",
    subtitle: "Explore our academic resources, programs, and policies",
    icon: "graduation-cap-line",
    breadcrumbBase: "Academic"
  },
  facilities: {
    title: "Facilities",
    subtitle: "State-of-the-art facilities to support student learning and development",
    icon: "building-4-line",
    breadcrumbBase: "Facilities"
  },
  supports: {
    title: "Student Support",
    subtitle: "Comprehensive support services for student success and well-being",
    icon: "hand-heart-line",
    breadcrumbBase: "Supports" 
  },
  placement: {
    title: "Placement",
    subtitle: "Career preparation, industry connections, and placement opportunities",
    icon: "briefcase-line",
    breadcrumbBase: "Placement"
  },
  more: {
    title: "More Information",
    subtitle: "Additional resources and important information about JSS Polytechnic",
    icon: "information-line",
    breadcrumbBase: "Information"
  }
};

// This is a template for generic pages
const GenericPage = () => {
  // Extract category and page slug from URL
  const [, params] = useRoute("/:category/:slug");
  const category = params?.category || "";
  const slug = params?.slug || "";
  
  // Convert slug to title (e.g., "student-grievance" -> "Student Grievance")
  const pageTitle = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  // Get category configuration or use default
  const categoryConfig = pageCategories[category] || {
    title: "JSS Polytechnic",
    subtitle: "Information page",
    icon: "file-list-line",
    breadcrumbBase: "Pages"
  };
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <PageBanner 
        title={pageTitle}
        subtitle={`${categoryConfig.subtitle}`}
        iconName={categoryConfig.icon}
        breadcrumbs={[
          { name: categoryConfig.breadcrumbBase, href: `/${category}` },
          { name: pageTitle, href: `/${category}/${slug}` }
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
                <Icon name={`${categoryConfig.icon} mr-2 text-amber-500`} />
                <span>About {pageTitle}</span>
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  Content for {pageTitle} will be added here. This is a placeholder for the description and details of this page.
                </p>
                
                <div className="mt-8 space-y-6">
                  {[1, 2, 3].map(section => (
                    <div key={section} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                      <h3 className="font-semibold text-xl text-primary mb-4 flex items-center">
                        <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                          <Icon name="file-list-line text-amber-600" />
                        </div>
                        <span>Section {section}</span>
                      </h3>
                      <p className="text-gray-700">
                        Section content will be added here. This is placeholder content for the {pageTitle} page.
                      </p>
                      <ul className="mt-4 space-y-2">
                        {[1, 2, 3].map(item => (
                          <li key={item} className="flex items-start">
                            <Icon name="check-line mr-2 text-amber-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">List item {item} for section {section}</span>
                          </li>
                        ))}
                      </ul>
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
                  <Icon name="links-line mr-2 text-amber-500" />
                  <span>Quick Links</span>
                </h3>
                
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map(link => (
                    <a 
                      key={link}
                      href="#"
                      className="flex items-center p-3 border border-gray-100 rounded-lg hover:border-amber-200 transition-all hover:bg-gray-50 group"
                    >
                      <div className="w-8 h-8 bg-amber-400/10 group-hover:bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 transition-colors">
                        <Icon name="external-link-line text-amber-600" />
                      </div>
                      <span className="text-gray-700 group-hover:text-primary transition-colors">Related Link {link}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-medium text-primary mb-2 flex items-center">
                    <Icon name="question-answer-line mr-2 text-amber-500" />
                    <span>Need Assistance?</span>
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    If you have any questions regarding {pageTitle}, please contact us.
                  </p>
                  <a
                    href="#contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full font-medium transition-all text-center text-sm shadow-md flex items-center justify-center"
                  >
                    <Icon name="customer-service-2-line mr-2" />
                    <span>Contact Us</span>
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
              <Icon name="file-paper-2-line mr-3 text-amber-500" />
              <span>Related Resources</span>
            </h2>
            <p className="text-gray-600">
              Additional information and resources related to {pageTitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(item => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="font-poppins font-medium text-lg text-primary mb-2 flex items-center">
                    <Icon name="file-pdf-line mr-2 text-amber-500" />
                    <span>Resource Document {item}</span>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Description for resource document {item}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary hover:text-amber-600 transition-colors text-sm font-medium"
                  >
                    <span>Download PDF</span>
                    <Icon name="download-2-line ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GenericPage;