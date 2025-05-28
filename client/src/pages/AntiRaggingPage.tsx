import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const AntiRaggingPage = () => {
  const antiRaggingCommittee = [
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
      name: "Sri. Yathish M S", 
      designation: "HOD", 
      department: "Mechanical" 
    },
    { 
      slNo: 4, 
      name: "Sri. Ganesh Prasad S", 
      designation: "HOD", 
      department: "Computer Science" 
    },
    { 
      slNo: 5, 
      name: "Sri. Ashok Kumar M", 
      designation: "HOD", 
      department: "Mechatronics" 
    },
    { 
      slNo: 6, 
      name: "Sri. Manu M", 
      designation: "HOD", 
      department: "Electrical & Electronics" 
    },
    { 
      slNo: 7, 
      name: "Sri. Vishwanatha M R", 
      designation: "SGL/ILO", 
      department: "Electronics & Communication" 
    },
    { 
      slNo: 8, 
      name: "Sub inspector", 
      designation: "Sub inspector of Police Nanjangud", 
      department: "Karnataka Police Dept." 
    }
  ];

  const preventiveMeasures = [
    {
      icon: "shield-check-line",
      title: "Zero Tolerance Policy",
      description: "Strict enforcement of zero tolerance towards any form of ragging in the institution"
    },
    {
      icon: "user-voice-line",
      title: "Awareness Programs",
      description: "Regular orientation sessions and awareness programs for students and faculty"
    },
    {
      icon: "eye-line",
      title: "Vigilance System",
      description: "Continuous monitoring and surveillance in hostels, classrooms, and common areas"
    },
    {
      icon: "phone-line",
      title: "Helpline Services",
      description: "24/7 helpline numbers for reporting incidents and seeking immediate assistance"
    },
    {
      icon: "feedback-line",
      title: "Anonymous Reporting",
      description: "Safe and confidential channels for reporting ragging incidents"
    },
    {
      icon: "team-line",
      title: "Peer Support Groups",
      description: "Formation of senior student volunteers to guide and support newcomers"
    }
  ];

  const penalties = [
    "Cancellation of admission",
    "Suspension from attending classes",
    "Withholding/withdrawing scholarship/fellowship",
    "Debarring from appearing in examinations",
    "Withholding results",
    "Debarring from representing institution in events",
    "Suspension/expulsion from hostel",
    "Rustication from the institution"
  ];

  const reportingChannels = [
    {
      title: "Principal's Office",
      contact: "08221-226491",
      availability: "9:00 AM - 5:00 PM"
    },
    {
      title: "Anti-Ragging Helpline",
      contact: "1800-180-5522",
      availability: "24/7"
    },
    {
      title: "Police Emergency",
      contact: "100",
      availability: "24/7"
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Anti Ragging Committee"
        subtitle="Creating a Safe and Secure Environment"
        iconName="shield-user-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "More", href: "#" },
          { name: "Anti Ragging", href: "/more/anti-ragging" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Anti-Ragging */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Anti-Ragging Committee</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    The Anti-Ragging Committee at JSS Polytechnic, Nanjangud is constituted to ensure a ragging-free environment in the institution. The committee is committed to creating a safe, secure, and conducive atmosphere for learning where every student can pursue their education without fear or intimidation.
                  </p>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="alert-line mr-3 text-red-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-red-800 mb-2">Zero Tolerance Policy</h4>
                        <p className="text-red-700">
                          JSS Polytechnic maintains a strict zero tolerance policy against ragging. Any form of ragging is considered a serious offense and will result in severe disciplinary action.
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
                      {antiRaggingCommittee.map((member) => (
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

              {/* Preventive Measures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="shield-line mr-2 text-amber-500" />
                  <span>Preventive Measures</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {preventiveMeasures.map((measure, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${measure.icon} text-amber-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-primary mb-2">{measure.title}</h3>
                          <p className="text-gray-600">{measure.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Penalties */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-red-400">
                  <Icon name="scales-line mr-2 text-red-500" />
                  <span>Penalties for Ragging</span>
                </h2>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <p className="text-red-700 font-medium mb-4">
                    Students found guilty of ragging may face one or more of the following penalties:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {penalties.map((penalty, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="close-line mr-3 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-red-700">{penalty}</span>
                      </div>
                    ))}
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
                  Emergency Contacts
                </h3>
                
                <div className="space-y-4 mb-8">
                  {reportingChannels.map((channel, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-primary mb-2">{channel.title}</h4>
                      <div className="flex items-center mb-2">
                        <Icon name="phone-line mr-2 text-green-600" />
                        <span className="font-medium text-green-600">{channel.contact}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="time-line mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">{channel.availability}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    What is Ragging?
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Any act of physical or mental abuse targeted at junior students by senior students</p>
                    <p>Any conduct that has the effect of teasing, treating or handling with rudeness</p>
                    <p>Any act that prevents or disrupts the regular academic activity</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    How to Report?
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Call Emergency Numbers</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Visit Principal's Office</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Submit Written Complaint</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Anonymous Reporting</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="tel:1800-180-5522"
                    className="block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    <Icon name="phone-line mr-2" />
                    Emergency Helpline
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

export default AntiRaggingPage;