import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const ScholarshipPage = () => {
  const scholarshipStaff = [
    { 
      slNo: 1, 
      name: "Sri. Mallesha M", 
      designation: "SDA", 
      contact: "8880111007" 
    }
  ];

  const scholarshipLinks = [
    {
      title: "State Post Matric Scholarship Portal",
      url: "https://ssp.postmatric.karnataka.gov.in/",
      description: "Karnataka State Post Matric Scholarship for various categories",
      icon: "government-line"
    },
    {
      title: "National Scholarship Portal",
      url: "https://scholarships.gov.in/",
      description: "Central Government scholarships and various schemes",
      icon: "global-line"
    }
  ];

  const scholarshipTypes = [
    {
      icon: "medal-line",
      title: "Merit-Based Scholarships",
      description: "For students with outstanding academic performance"
    },
    {
      icon: "group-line",
      title: "Category-Based Scholarships",
      description: "For students from reserved categories (SC/ST/OBC)"
    },
    {
      icon: "money-dollar-circle-line",
      title: "Need-Based Financial Aid",
      description: "For economically disadvantaged students"
    },
    {
      icon: "star-line",
      title: "Special Schemes",
      description: "Government and institutional special scholarship programs"
    }
  ];

  const importantPoints = [
    "Scholarship facilities are available under various schemes depending upon merit and category",
    "Students who are eligible can contact college scholarship staff in the accounts section",
    "Do not apply through private agencies - only use official portals",
    "All scholarship information is available on respective category websites",
    "Submit applications within the stipulated time frame",
    "Keep all required documents ready before applying"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Scholarship"
        subtitle="Financial Support for Student Success"
        iconName="award-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Supports", href: "#" },
          { name: "Scholarship", href: "/supports/scholarship" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Scholarships */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Scholarships</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    Scholarship facilities are available for students under various schemes depending upon merit as well as category. Students who are eligible to apply can contact college scholarship staff member in the accounts section.
                  </p>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
                    <div className="flex items-start">
                      <Icon name="alert-line mr-3 text-yellow-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-yellow-800 mb-2">Important Notice</h4>
                        <p className="text-yellow-700">
                          <strong>Do not apply through private agencies.</strong> All scholarship information is available in the website of respective categories. Use only official government portals for applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Scholarship Types */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="star-line mr-2 text-amber-500" />
                  <span>Types of Scholarships</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {scholarshipTypes.map((type, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-5 rounded-lg border border-gray-100">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Icon name={`${type.icon} text-amber-600`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Official Scholarship Portals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="links-line mr-2 text-amber-500" />
                  <span>Official Scholarship Portals</span>
                </h2>
                
                <div className="space-y-4">
                  {scholarshipLinks.map((link, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${link.icon} text-blue-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-lg text-primary mb-2">{link.title}</h3>
                          <p className="text-gray-600 mb-3">{link.description}</p>
                          <a 
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Icon name="external-link-line mr-2" />
                            Visit Portal
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Scholarship Staff */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="team-line mr-2 text-amber-500" />
                  <span>Scholarship Staff Contact</span>
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {scholarshipStaff.map((staff) => (
                        <tr key={staff.slNo}>
                          <td className="px-4 py-3 text-sm text-gray-900">{staff.slNo}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 font-medium">{staff.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{staff.designation}</td>
                          <td className="px-4 py-3 text-sm text-green-600 font-medium">{staff.contact}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Icon name="phone-line mr-3 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-medium text-blue-800 mb-2">Contact for Assistance</h4>
                      <p className="text-blue-700">
                        For any scholarship-related queries or assistance with applications, please contact the scholarship staff member in the accounts section.
                      </p>
                    </div>
                  </div>
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
                  Important Guidelines
                </h3>
                
                <div className="space-y-4 mb-8">
                  {importantPoints.map((point, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="check-line mr-3 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Quick Actions
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="https://ssp.postmatric.karnataka.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all text-center shadow-md"
                    >
                      <Icon name="external-link-line mr-2" />
                      State Portal
                    </a>
                    <a
                      href="https://scholarships.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all text-center shadow-md"
                    >
                      <Icon name="external-link-line mr-2" />
                      National Portal
                    </a>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact College
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

export default ScholarshipPage;