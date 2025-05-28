import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

const Governance = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Governance - JSS Polytechnic";
  }, []);

  return (
    <PageLayout>
      <PageBanner 
        title="Governance"
        subtitle="Governing Council of JSS Polytechnic Nanjangud"
        iconName="government-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Governance", href: "/about/governance" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8">
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="government-line mr-2 text-amber-500" />
                  <span>Governing Council</span>
                </h2>
                
                <p className="text-gray-700 bg-gray-50 p-5 rounded-xl border border-gray-100 mb-6">
                  The Polytechnic has the Governing Council which has a set of members constituted by the Management as per the norms of AICTE for giving guidance regarding administration of the Institution.
                </p>
                
                <h3 className="font-poppins font-semibold text-xl text-primary mt-8 mb-4 flex items-center">
                  <Icon name="team-line mr-2 text-amber-500" />
                  <span>The composition of Governing Council</span>
                </h3>
                
                <p className="text-gray-700 mb-4">
                  The Governing Council shall have at least 11 members including the Chairman and the Member Secretary. The Management/Registered Society shall nominate members including the Chairman and the Member-Secretary as indicated below:
                </p>
                
                <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mb-8">
                  <ul className="space-y-3 pl-6 list-disc text-gray-700">
                    <li>The Chairman</li>
                    <li>Two to Five members (Industrialist/Technologist/Educationalist)</li>
                    <li>One nominee from the Affiliating Board</li>
                    <li>One nominee from All India Council for Technical Education (Ex-Officio)</li>
                    <li>One nominee from the State Government (Ex-Officio)</li>
                    <li>One Senior Faculty member of the Institute</li>
                    <li>Principal of the concerned technical institution is the Member Secretary</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-primary py-5 px-8">
                  <h2 className="font-poppins font-bold text-2xl text-white flex items-center">
                    <Icon name="user-settings-line mr-3 text-amber-300" />
                    <span>Members of the Governing Council</span>
                  </h2>
                </div>
                
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-primary/10 text-primary">
                          <th className="py-3 px-4 text-left font-semibold text-sm border-b border-gray-200 w-12">Sl.No.</th>
                          <th className="py-3 px-4 text-left font-semibold text-sm border-b border-gray-200">Name of the Member</th>
                          <th className="py-3 px-4 text-left font-semibold text-sm border-b border-gray-200">Position</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">1</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100 font-medium">His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamigalavaru<br/>President, JSS Mahavidyapeetha, Mysuru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">President</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">2</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Dr. C G Betsurmath<br/>Executive Secretary JSS Mahavidyapeetha, Mysuru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">3</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Dr. B. Suresh<br/>Director (TED), JSSMVP, Mysuru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">4</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Dr. H.R. Mahadevaswamy<br/>Joint Director (TED), JSS MVP, Mysuru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">5</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Sri Dr. A N Santhosh Kumar<br/>Vice Chancellor, JSS STU</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">6</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Secretary<br/>Board of Technical Examinations, Bengaluru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member (Nominee of Board)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">7</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Regional Officer<br/>SWRO-AICTE, Bengaluru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member (Nominee of AICTE)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">8</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Director<br/>Directorate of Technical Education Bengaluru</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member (Nominee of State Govt.)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">9</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Sri. N Naveen<br/>Senior Executive, HR & Admin Kaynes Electronics Manufacturing Pvt. Ltd. Chamaraja Nagar</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member (Industrialist)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">10</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Smt, Bramaramba M<br/>Sl. Gr. Lecturer, E&C Dept.</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member (Faculty Representative)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">11</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Sri, Dr. Sadashiva Shiva Shylendra<br/>Sl. Gr. Lecturer, Civil Dept.</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member (Faculty Representative)</td>
                        </tr>
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">12</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Sri. N Vidyashankar<br/>Principal, JSS Polytechnic, Nanjangud</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">Member Secretary</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-primary py-5 px-8">
                  <h2 className="font-poppins font-bold text-2xl text-white flex items-center">
                    <Icon name="task-line mr-3 text-amber-300" />
                    <span>Functions and Responsibilities</span>
                  </h2>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 mb-6">
                    The Governing Council is responsible for the following functions:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Review the action taken in connection with their solution made during last meeting.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Analyze and understand the present administrative processes and provide guidance for improvement of overall development of the Institute.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Critical comments on the proposed list of activities of the Institute.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Analyze and guide the financial status of the Institute.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Suggestions to improve the admissions, placement and other academic requirements of the institute.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Approval for various activities conducted by the Institute in the areas of curricular, co-curricular and extracurricular.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Approval of new initiatives, projects and suggestions for improvement.</span>
                    </li>
                    
                    <li className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                      <div className="w-6 h-6 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-amber-400/30">
                        <Icon name="checkbox-circle-line text-amber-600 text-sm" />
                      </div>
                      <span className="text-gray-700">Suggestions/recommendations for further development.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Governance;