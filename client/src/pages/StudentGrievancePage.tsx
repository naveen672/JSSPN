import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const StudentGrievancePage = () => {
  const grievanceCommittee = [
    { 
      slNo: 1, 
      name: "Dr. Sadashiva Shailendra J K", 
      designation: "HOD", 
      department: "Civil" 
    },
    { 
      slNo: 2, 
      name: "Sri. Omprakash", 
      designation: "SGL", 
      department: "Electronics & Communication" 
    },
    { 
      slNo: 3, 
      name: "Kum. Roopa Indhudharaswamy", 
      designation: "SGL", 
      department: "Mechanical" 
    },
    { 
      slNo: 4, 
      name: "Sri. Mahesh N", 
      designation: "Instructor", 
      department: "Mechanical" 
    },
    { 
      slNo: 5, 
      name: "Sri. Girish T N", 
      designation: "Instructor", 
      department: "Electronics & Communication" 
    }
  ];

  const grievanceTypes = [
    {
      icon: "book-open-line",
      title: "Academic Issues",
      description: "Concerns related to curriculum, examinations, evaluation, and academic policies"
    },
    {
      icon: "shield-user-line",
      title: "Harassment & Discrimination",
      description: "Any form of harassment, discrimination, or unfair treatment by faculty or peers"
    },
    {
      icon: "building-line",
      title: "Infrastructure & Facilities",
      description: "Issues related to classrooms, laboratories, library, hostel, and other facilities"
    },
    {
      icon: "money-dollar-circle-line",
      title: "Financial Matters",
      description: "Fee-related issues, scholarship problems, and financial assistance concerns"
    },
    {
      icon: "team-line",
      title: "Disciplinary Actions",
      description: "Appeals against disciplinary actions and concerns about fairness"
    },
    {
      icon: "service-line",
      title: "Administrative Issues",
      description: "Problems with administrative processes, documentation, and services"
    }
  ];

  const procedureSteps = [
    "Submit your grievance in writing to the Student Grievance Committee",
    "Provide all relevant details and supporting documents",
    "Committee will acknowledge receipt within 48 hours",
    "Investigation will be conducted within 15 working days",
    "Committee will provide written response with resolution",
    "Appeal process available if not satisfied with the decision"
  ];

  const guidelines = [
    "Grievances should be genuine and submitted in good faith",
    "Provide accurate information and supporting evidence",
    "Maintain confidentiality throughout the process",
    "Respect the committee's decision-making process",
    "Follow institutional code of conduct",
    "Seek resolution through dialogue and understanding"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Student Grievance"
        subtitle="Ensuring Fair and Transparent Resolution"
        iconName="customer-service-2-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Supports", href: "#" },
          { name: "Student Grievance", href: "/supports/student-grievance" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Student Grievance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Student Grievance Committee</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    The Student Grievance Committee at JSS Polytechnic, Nanjangud is established to provide a fair, transparent, and efficient mechanism for addressing student concerns and complaints. Our commitment is to ensure every student receives a respectful hearing and appropriate resolution.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="shield-check-line mr-3 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Our Commitment</h4>
                        <p className="text-blue-700">
                          We are dedicated to maintaining a safe, supportive, and conducive learning environment where every student's voice is heard and valued.
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
                      {grievanceCommittee.map((member) => (
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

              {/* Types of Grievances */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="file-list-3-line mr-2 text-amber-500" />
                  <span>Types of Grievances</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {grievanceTypes.map((type, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${type.icon} text-amber-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-primary mb-2">{type.title}</h3>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Grievance Procedure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="roadmap-line mr-2 text-amber-500" />
                  <span>Grievance Procedure</span>
                </h2>
                
                <div className="space-y-4">
                  {procedureSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-blue-600 font-medium text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{step}</p>
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
                  Important Information
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Response Time</span>
                      <p className="font-medium text-gray-800">48 Hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Resolution Time</span>
                      <p className="font-medium text-gray-800">15 Working Days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="shield-check-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Confidentiality</span>
                      <p className="font-medium text-gray-800">Assured</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="refresh-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Appeal Process</span>
                      <p className="font-medium text-gray-800">Available</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Guidelines
                  </h4>
                  <div className="space-y-2">
                    {guidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="check-line mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{guideline}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Submit Grievance
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

export default StudentGrievancePage;