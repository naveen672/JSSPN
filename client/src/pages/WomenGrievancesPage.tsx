import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const WomenGrievancesPage = () => {
  const womenGrievanceCommittee = [
    { 
      slNo: 1, 
      name: "Sri. Shashidhar K N", 
      designation: "Superintendent", 
      department: "Office" 
    },
    { 
      slNo: 2, 
      name: "Smt. Bhramaramba M", 
      designation: "HOD", 
      department: "Electronics & Comm." 
    },
    { 
      slNo: 3, 
      name: "Kum. Roopa Indudharaswamy", 
      designation: "SGL", 
      department: "Mechanical" 
    },
    { 
      slNo: 4, 
      name: "Smt. Ramya R", 
      designation: "SDA", 
      department: "Office" 
    },
    { 
      slNo: 5, 
      name: "Smt. Susheelamma", 
      designation: "Sweeper", 
      department: "Office" 
    }
  ];

  const supportServices = [
    {
      icon: "shield-user-line",
      title: "Safe Environment",
      description: "Ensuring a safe and secure environment for all women students and staff"
    },
    {
      icon: "customer-service-2-line",
      title: "24/7 Helpline",
      description: "Round-the-clock helpline service for immediate assistance and support"
    },
    {
      icon: "user-heart-line",
      title: "Counseling Support",
      description: "Professional counseling services for emotional and psychological support"
    },
    {
      icon: "feedback-line",
      title: "Confidential Reporting",
      description: "Safe and confidential channels for reporting grievances and concerns"
    },
    {
      icon: "scales-line",
      title: "Fair Investigation",
      description: "Impartial and thorough investigation of all complaints and grievances"
    },
    {
      icon: "team-line",
      title: "Peer Support",
      description: "Women support groups and peer mentoring programs"
    }
  ];

  const grievanceTypes = [
    "Sexual harassment or misconduct",
    "Gender-based discrimination",
    "Workplace harassment",
    "Academic discrimination",
    "Denial of opportunities",
    "Inappropriate behavior",
    "Safety and security concerns",
    "Hostel-related issues"
  ];

  const procedures = [
    "Submit complaint in writing or verbally to any committee member",
    "Committee acknowledges receipt within 24 hours",
    "Preliminary inquiry conducted within 7 days",
    "Detailed investigation if required",
    "Committee provides resolution within 30 days",
    "Appeal process available for unsatisfactory resolutions"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Women Grievances Committee"
        subtitle="Empowering and Protecting Women's Rights"
        iconName="user-heart-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "More", href: "#" },
          { name: "Women Grievances", href: "/more/women-grievances" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Women Grievances Committee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Women Grievances Committee</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    The Women Grievances Committee at JSS Polytechnic, Nanjangud is dedicated to ensuring a safe, respectful, and supportive environment for all women students, faculty, and staff. The committee works proactively to prevent discrimination and harassment while providing effective redressal mechanisms.
                  </p>
                  
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="heart-line mr-3 text-pink-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-pink-800 mb-2">Our Commitment</h4>
                        <p className="text-pink-700">
                          We are committed to creating an inclusive environment where women can pursue their education and career aspirations without fear, discrimination, or harassment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Committee Members */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="team-line mr-2 text-amber-500" />
                  <span>Committee Members</span>
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of the Staff</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Department</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {womenGrievanceCommittee.map((member) => (
                        <tr key={member.slNo}>
                          <td className="px-4 py-3 text-sm text-gray-900">{member.slNo}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 font-medium">{member.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{member.designation}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{member.department}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Support Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="service-line mr-2 text-amber-500" />
                  <span>Support Services</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {supportServices.map((service, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${service.icon} text-amber-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-primary mb-2">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Types of Grievances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="file-list-3-line mr-2 text-amber-500" />
                  <span>Types of Grievances Addressed</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {grievanceTypes.map((type, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="arrow-right-s-line mr-3 text-amber-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{type}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Procedure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg border border-purple-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-purple-400">
                  <Icon name="roadmap-line mr-2 text-purple-500" />
                  <span>Grievance Procedure</span>
                </h2>
                
                <div className="space-y-4">
                  {procedures.map((procedure, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-purple-600 font-medium text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{procedure}</p>
                      </div>
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
                  24/7 Women Helpline
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <Icon name="phone-line mr-3 text-pink-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-pink-800 mb-2">Coordinator Contact</h4>
                        <p className="text-pink-700 font-medium">Smt. M. Bhramaramba</p>
                        <p className="text-pink-700">8277553804</p>
                        <p className="text-sm text-pink-600 mt-1">Available 24/7</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Response Time</span>
                      <p className="font-medium text-gray-800">24 Hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="shield-check-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Confidentiality</span>
                      <p className="font-medium text-gray-800">100% Assured</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Resolution Time</span>
                      <p className="font-medium text-gray-800">30 Days Max</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    How to Report
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Call Helpline Number</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Visit Committee Member</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Written Complaint</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Anonymous Reporting</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <a
                    href="tel:8277553804"
                    className="block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    <Icon name="phone-line mr-2" />
                    Call Helpline
                  </a>
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact Committee
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

export default WomenGrievancesPage;