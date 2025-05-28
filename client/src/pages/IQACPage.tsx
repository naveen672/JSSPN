import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const IQACPage = () => {
  const iqacCommittee = [
    { 
      slNo: 1, 
      name: "Dr. Sadashiva Shailendra J K", 
      designation: "HOD", 
      department: "Civil" 
    },
    { 
      slNo: 2, 
      name: "Sri. Prabhuprasad G", 
      designation: "HOD", 
      department: "Science & Humanities" 
    },
    { 
      slNo: 3, 
      name: "Smt. Bhramaramba M", 
      designation: "HOD", 
      department: "Electronics & Communication" 
    },
    { 
      slNo: 4, 
      name: "Sri. Yathish M S", 
      designation: "HOD", 
      department: "Mechanical" 
    },
    { 
      slNo: 5, 
      name: "Sri. Ganesh Prasad S", 
      designation: "HOD", 
      department: "Computer Science" 
    },
    { 
      slNo: 6, 
      name: "Sri. Ashok Kumar M", 
      designation: "HOD", 
      department: "Mechatronics" 
    },
    { 
      slNo: 7, 
      name: "Sri. Manu M", 
      designation: "HOD", 
      department: "Electrical & Electronics" 
    }
  ];

  const iqacFunctions = [
    {
      icon: "search-eye-line",
      title: "Quality Monitoring",
      description: "Continuous monitoring and evaluation of academic and administrative processes"
    },
    {
      icon: "file-chart-line",
      title: "Quality Assessment",
      description: "Regular assessment of teaching, learning, and evaluation processes"
    },
    {
      icon: "roadmap-line",
      title: "Quality Enhancement",
      description: "Development and implementation of quality enhancement strategies"
    },
    {
      icon: "award-line",
      title: "Accreditation Support",
      description: "Preparation and support for accreditation processes and external evaluations"
    },
    {
      icon: "feedback-line",
      title: "Feedback System",
      description: "Establishing feedback mechanisms from stakeholders for continuous improvement"
    },
    {
      icon: "presentation-line",
      title: "Best Practices",
      description: "Identification, documentation, and dissemination of best practices"
    }
  ];

  const objectives = [
    "To develop a system for conscious, consistent and catalytic improvement in institutional performance",
    "To promote measures for institutional functioning towards quality enhancement",
    "To channelize all efforts and measures of the institution towards promoting its holistic academic excellence",
    "To ensure heightened level of clarity and focus in institutional functioning",
    "To facilitate internalization of the quality culture",
    "To act as a change agent in the institution"
  ];

  const activities = [
    "Development and application of quality benchmarks/parameters for various academic activities",
    "Facilitating the creation of a learner-centric environment",
    "Arrangement for feedback from students, parents and other stakeholders",
    "Dissemination of information on various quality parameters",
    "Organization of inter and intra institutional workshops, seminars on quality related themes",
    "Documentation of various programmes/activities leading to quality improvement"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="IQAC"
        subtitle="Internal Quality Assurance Cell"
        iconName="award-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "More", href: "#" },
          { name: "IQAC", href: "/more/iqac" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About IQAC */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About IQAC</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    The Internal Quality Assurance Cell (IQAC) at JSS Polytechnic, Nanjangud is a significant and strategic step towards internalization of quality culture and institutionalization of best practices. It plays a crucial role in developing a system for conscious, consistent and catalytic improvement in the overall performance of the institution.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="target-line mr-3 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Our Mission</h4>
                        <p className="text-blue-700">
                          To facilitate the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* IQAC Committee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="team-line mr-2 text-amber-500" />
                  <span>IQAC Committee</span>
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
                      {iqacCommittee.map((member) => (
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

              {/* Functions of IQAC */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="settings-line mr-2 text-amber-500" />
                  <span>Functions of IQAC</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {iqacFunctions.map((func, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${func.icon} text-amber-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-primary mb-2">{func.title}</h3>
                          <p className="text-gray-600">{func.description}</p>
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
                
                <div className="space-y-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="check-line mr-3 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{objective}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-green-400">
                  <Icon name="calendar-todo-line mr-2 text-green-500" />
                  <span>Key Activities</span>
                </h2>
                
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="star-line mr-3 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{activity}</span>
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
                  IQAC Highlights
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="team-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Committee Members</span>
                      <p className="font-medium text-gray-800">7 HODs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="focus-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Focus Area</span>
                      <p className="font-medium text-gray-800">Quality Enhancement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="refresh-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Process</span>
                      <p className="font-medium text-gray-800">Continuous Improvement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="shield-check-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Outcome</span>
                      <p className="font-medium text-gray-800">Quality Assurance</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Core Values
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Excellence</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Transparency</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Accountability</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Innovation</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact IQAC
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

export default IQACPage;