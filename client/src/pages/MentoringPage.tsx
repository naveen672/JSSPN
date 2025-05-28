import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const MentoringPage = () => {
  const mentoringProcess = [
    {
      icon: "user-settings-line",
      title: "Mentor Allocation",
      description: "The Head of the Department allocates Mentors, approximately 20 Mentees are allotted for each Mentor."
    },
    {
      icon: "calendar-line",
      title: "Monthly Meetings",
      description: "Mentors' meetings are conducted once in a month to ensure regular guidance and support."
    },
    {
      icon: "file-text-line",
      title: "Documentation",
      description: "Details of Discussed matters with Mentees are recorded in the Mentors book for tracking progress."
    },
    {
      icon: "roadmap-line",
      title: "Action Plans",
      description: "Action plans are initiated to bring the best out of the Mentoring system for student development."
    }
  ];

  const benefits = [
    "Personalized academic guidance and support",
    "Career counseling and professional development",
    "Personal development and life skills enhancement",
    "Regular monitoring of academic progress",
    "Emotional support and stress management",
    "Bridge between students and faculty/administration"
  ];

  const objectives = [
    "To provide academic and personal guidance to students",
    "To help students adapt to college environment",
    "To monitor and improve student performance",
    "To identify and address student problems early",
    "To develop communication and interpersonal skills",
    "To prepare students for future career opportunities"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Mentoring Scheme"
        subtitle="Guiding Students Towards Excellence"
        iconName="user-heart-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Supports", href: "#" },
          { name: "Mentoring Scheme", href: "/supports/mentoring-scheme" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Mentoring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Mentoring</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    JSS Polytechnic, Nanjangud follows an effective Mentoring system designed to provide comprehensive support and guidance to students throughout their academic journey. This structured approach ensures every student receives personalized attention and support.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="lightbulb-line mr-3 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Our Approach</h4>
                        <p className="text-blue-700">
                          The mentoring system is designed to bridge the gap between students and faculty, ensuring academic excellence while promoting personal development and career readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mentoring Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="flow-chart mr-2 text-amber-500" />
                  <span>Mentoring Process</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mentoringProcess.map((process, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:border-amber-200 transition-all">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                          <Icon name={`${process.icon} text-amber-600`} />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-primary mb-2">{process.title}</h3>
                          <p className="text-gray-600">{process.description}</p>
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
                transition={{ duration: 0.5, delay: 0.2 }}
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

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-green-400">
                  <Icon name="gift-line mr-2 text-green-500" />
                  <span>Benefits for Students</span>
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
                  Mentoring Highlights
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="group-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Mentor-Mentee Ratio</span>
                      <p className="font-medium text-gray-800">1:20 (Approx)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Meeting Frequency</span>
                      <p className="font-medium text-gray-800">Monthly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="file-text-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Documentation</span>
                      <p className="font-medium text-gray-800">Mentor's Book</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="user-settings-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Allocation</span>
                      <p className="font-medium text-gray-800">By HOD</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Structured Process</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Regular Monitoring</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Action-Oriented</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="check-double-line mr-2 text-green-500" />
                      <span className="text-sm text-gray-600">Student-Centric</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact for Guidance
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

export default MentoringPage;