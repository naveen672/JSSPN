import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const SCSTCommitteePage = () => {
  const scstCommittee = [
    { 
      slNo: 1, 
      name: "Sri. Shashidhar K N", 
      designation: "Superintendent", 
      department: "Office" 
    },
    { 
      slNo: 2, 
      name: "Sri. Ganesh Prasad S", 
      designation: "HOD", 
      department: "Computer Science" 
    },
    { 
      slNo: 3, 
      name: "Sri. Chidananda", 
      designation: "Helper", 
      department: "Civil" 
    },
    { 
      slNo: 4, 
      name: "Sri. Subramanya", 
      designation: "Helper", 
      department: "Library" 
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
      icon: "equalizer-line",
      title: "Equal Opportunities",
      description: "Ensuring equal opportunities in admissions, academics, and campus activities"
    },
    {
      icon: "shield-user-line",
      title: "Protection from Discrimination",
      description: "Safeguarding against any form of discrimination based on caste or social background"
    },
    {
      icon: "award-line",
      title: "Scholarship Assistance",
      description: "Guidance and support for availing government scholarships and financial aid"
    },
    {
      icon: "user-heart-line",
      title: "Mentoring Support",
      description: "Special mentoring and counseling support for academic and personal development"
    },
    {
      icon: "feedback-line",
      title: "Grievance Redressal",
      description: "Prompt and fair resolution of complaints and grievances"
    },
    {
      icon: "team-line",
      title: "Community Building",
      description: "Fostering an inclusive and supportive community environment"
    }
  ];

  const objectives = [
    "To ensure the implementation of government policies for SC/ST students",
    "To prevent discrimination and promote inclusive environment",
    "To monitor the progress of SC/ST students in academics and placements",
    "To facilitate access to scholarships and financial assistance",
    "To address grievances and provide timely solutions",
    "To organize awareness programs and cultural activities",
    "To maintain liaison with government agencies and NGOs",
    "To promote overall development and empowerment"
  ];

  const activities = [
    "Regular monitoring of SC/ST student performance",
    "Scholarship application assistance and follow-up",
    "Grievance redressal meetings and investigations",
    "Awareness programs on rights and opportunities",
    "Cultural events celebrating diversity and heritage",
    "Career guidance and placement support",
    "Coordination with government welfare schemes",
    "Documentation and reporting to authorities"
  ];

  const benefits = [
    "Reserved seats as per government norms",
    "Fee concessions and scholarship facilities",
    "Special coaching and academic support",
    "Hostel accommodation priority",
    "Career counseling and placement assistance",
    "Legal aid and support when needed",
    "Access to government welfare schemes",
    "Representation in committees and bodies"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="SC-ST Committee"
        subtitle="Promoting Equality and Inclusive Development"
        iconName="group-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "More", href: "#" },
          { name: "SC-ST Committee", href: "/more/sc-st-committee" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About SC/ST Committee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About SC-ST Committee</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    The SC-ST Committee at JSS Polytechnic, Nanjangud is constituted as per Government of Karnataka guidelines to ensure the welfare, protection, and development of students belonging to Scheduled Castes and Scheduled Tribes. The committee works as a vigilant body to create an inclusive educational environment and implement government policies for the empowerment and upliftment of SC-ST communities.
                  </p>
                  
                  <p>
                    As per the Constitution of India and various government directives, this committee serves as a crucial mechanism to monitor the implementation of reservation policies, prevent discrimination, address grievances, and ensure that SC-ST students receive all benefits and opportunities available to them under various government schemes.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="heart-line mr-3 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Our Commitment</h4>
                        <p className="text-blue-700">
                          We are committed to ensuring constitutional rights, equal opportunities, preventing any form of discrimination, and promoting the holistic development of SC-ST students in their academic, personal, and professional journey. The committee ensures a safe and supportive environment for all students.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="shield-check-line mr-3 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-green-800 mb-2">Legal Framework</h4>
                        <p className="text-green-700">
                          The committee operates under the legal framework of the Constitution of India (Articles 15, 16, 46), UGC guidelines, AICTE norms, and Government of Karnataka policies for the welfare of SC-ST communities in educational institutions.
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
                      {scstCommittee.map((member) => (
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

              {/* Objectives */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="target-line mr-2 text-amber-500" />
                  <span>Objectives</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="check-line mr-3 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Functions of the Committee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="settings-line mr-2 text-amber-500" />
                  <span>Functions of the Committee</span>
                </h2>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-3 flex items-center">
                      <Icon name="eye-line mr-2 text-blue-600" />
                      Monitoring and Oversight
                    </h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Monitor the implementation of reservation policy in admissions</li>
                      <li>• Ensure proper allocation of seats as per government norms</li>
                      <li>• Oversee the disbursement of scholarships and financial aid</li>
                      <li>• Review academic progress and performance of SC-ST students</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-medium text-green-800 mb-3 flex items-center">
                      <Icon name="shield-user-line mr-2 text-green-600" />
                      Protection and Prevention
                    </h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Prevent discrimination based on caste or social background</li>
                      <li>• Investigate complaints of harassment or unfair treatment</li>
                      <li>• Ensure safe and inclusive campus environment</li>
                      <li>• Take appropriate action against violators</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-purple-800 mb-3 flex items-center">
                      <Icon name="user-heart-line mr-2 text-purple-600" />
                      Support and Development
                    </h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• Provide academic and career counseling</li>
                      <li>• Organize skill development programs</li>
                      <li>• Facilitate access to government welfare schemes</li>
                      <li>• Coordinate with placement cell for employment opportunities</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Welfare Schemes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="government-line mr-2 text-amber-500" />
                  <span>Government Welfare Schemes</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                    <h4 className="font-medium text-orange-800 mb-4 flex items-center">
                      <Icon name="award-line mr-2 text-orange-600" />
                      Central Government Schemes
                    </h4>
                    <ul className="space-y-2 text-orange-700 text-sm">
                      <li>• Post Matric Scholarship for SC Students</li>
                      <li>• Post Matric Scholarship for ST Students</li>
                      <li>• Top Class Education Scheme</li>
                      <li>• National Fellowship for Higher Education</li>
                      <li>• Free Coaching Scheme for SC/ST Students</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                    <h4 className="font-medium text-indigo-800 mb-4 flex items-center">
                      <Icon name="map-pin-line mr-2 text-indigo-600" />
                      Karnataka State Schemes
                    </h4>
                    <ul className="space-y-2 text-indigo-700 text-sm">
                      <li>• Post Matric Scholarship (State)</li>
                      <li>• Vidyasiri Scholarship</li>
                      <li>• Fee Reimbursement Scheme</li>
                      <li>• Book Grant and Maintenance Allowance</li>
                      <li>• Hostel Facility and Stipend</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Grievance Procedure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="file-text-line mr-2 text-amber-500" />
                  <span>Grievance Redressal Procedure</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="edit-line text-white" />
                      </div>
                      <h4 className="font-medium text-blue-800 mb-2">Step 1: Submit Complaint</h4>
                      <p className="text-blue-700 text-sm">Submit written complaint to committee members or through online portal</p>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="search-line text-white" />
                      </div>
                      <h4 className="font-medium text-green-800 mb-2">Step 2: Investigation</h4>
                      <p className="text-green-700 text-sm">Committee investigates the matter within 15 working days</p>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="check-line text-white" />
                      </div>
                      <h4 className="font-medium text-purple-800 mb-2">Step 3: Resolution</h4>
                      <p className="text-purple-700 text-sm">Appropriate action taken and complainant informed about the decision</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-blue-400">
                  <Icon name="phone-line mr-2 text-blue-500" />
                  <span>Contact Information</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                      <Icon name="user-line mr-2 text-blue-500" />
                      Committee Chairperson
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Sri. Shashidhar K N</strong></p>
                      <p>Superintendent</p>
                      <p className="flex items-center"><Icon name="phone-line mr-2 text-green-500" /> +91-8212-572481</p>
                      <p className="flex items-center"><Icon name="mail-line mr-2 text-blue-500" /> office@jsspolytechnic.edu.in</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                      <Icon name="time-line mr-2 text-green-500" />
                      Office Hours
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                      <p><strong>Emergency Contact:</strong> Available 24/7</p>
                      <p className="text-red-600 font-medium">For urgent matters, contact Principal's office</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits Available */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-green-400">
                  <Icon name="gift-line mr-2 text-green-500" />
                  <span>Benefits Available</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="star-line mr-3 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
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
                  Committee Information
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="team-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Committee Members</span>
                      <p className="font-medium text-gray-800">5 Members</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="focus-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Focus Area</span>
                      <p className="font-medium text-gray-800">SC/ST Welfare</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="shield-check-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Mandate</span>
                      <p className="font-medium text-gray-800">Equal Opportunities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Meetings</span>
                      <p className="font-medium text-gray-800">Monthly</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Key Activities
                  </h4>
                  <div className="space-y-2">
                    {activities.slice(0, 6).map((activity, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="arrow-right-s-line mr-2 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    How to Approach
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Contact Committee Member</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Visit Office</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Written Application</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Online Portal</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
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

export default SCSTCommitteePage;