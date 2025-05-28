import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const MandatoryDisclosurePage = () => {
  const disclosureItems = [
    {
      icon: "building-line",
      title: "Institution Details",
      description: "Name, address, and contact information of JSS Polytechnic, Nanjangud"
    },
    {
      icon: "user-settings-line",
      title: "Governance Structure",
      description: "Details of trust, governing body, and management structure"
    },
    {
      icon: "graduation-cap-line",
      title: "Academic Programs",
      description: "AICTE approved programs, intake, duration, and fee structure"
    },
    {
      icon: "team-line",
      title: "Faculty Information",
      description: "Department-wise faculty details, qualifications, and experience"
    },
    {
      icon: "building-4-line",
      title: "Infrastructure",
      description: "Campus facilities, laboratories, library, and hostel details"
    },
    {
      icon: "file-shield-line",
      title: "Statutory Information",
      description: "Committee details, policies, and regulatory compliance"
    }
  ];

  const highlights = [
    "AICTE Approved Institution",
    "Affiliated to Department of Collegiate and Technical Education, Govt. of Karnataka",
    "6 Engineering Programs",
    "Experienced Faculty",
    "Modern Infrastructure",
    "Industry Partnerships"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Mandatory Disclosure"
        subtitle="Transparency in Educational Information"
        iconName="file-shield-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "More", href: "#" },
          { name: "Mandatory Disclosure", href: "/more/mandatory-disclosure" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Mandatory Disclosure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Mandatory Disclosure</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    As per AICTE regulations, JSS Polytechnic, Nanjangud maintains transparency by providing mandatory disclosure of all essential information about the institution. This comprehensive document contains detailed information about our academic programs, faculty, infrastructure, governance, and statutory compliance.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="shield-check-line mr-3 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Transparency Commitment</h4>
                        <p className="text-blue-700">
                          We believe in complete transparency and provide all necessary information to help students, parents, and stakeholders make informed decisions about our institution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Disclosure Contents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="file-list-3-line mr-2 text-amber-500" />
                  <span>Disclosure Contents</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {disclosureItems.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${item.icon} text-amber-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-primary mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Download Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-50 to-primary/5 p-8 rounded-lg border border-blue-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-blue-400">
                  <Icon name="download-line mr-2 text-blue-500" />
                  <span>Download Mandatory Disclosure</span>
                </h2>
                
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="mb-6 md:mb-0">
                    <p className="text-gray-700 mb-4">
                      Download the complete mandatory disclosure document containing all institutional information as required by AICTE regulations.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <Icon name="file-pdf-line mr-2 text-red-500" />
                      <span>PDF Format • Updated: January 2024</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/assets/MD.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md"
                    >
                      <Icon name="eye-line mr-2" />
                      View Online
                    </a>
                    <a
                      href="/assets/MD.pdf"
                      download="JSS_Polytechnic_Mandatory_Disclosure.pdf"
                      className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md"
                    >
                      <Icon name="download-line mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Institution Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="star-line mr-2 text-amber-500" />
                  <span>Institution Highlights</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <Icon name="check-line mr-3 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24"
              >
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100">
                  Quick Information
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="file-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Document Type</span>
                      <p className="font-medium text-gray-800">PDF Format</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Last Updated</span>
                      <p className="font-medium text-gray-800">January 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="shield-check-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Compliance</span>
                      <p className="font-medium text-gray-800">AICTE Approved</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="global-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Accessibility</span>
                      <p className="font-medium text-gray-800">Public Document</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Key Sections
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Institution Details</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Governance</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Programs</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Faculty</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Infrastructure</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact for Info
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MandatoryDisclosurePage;