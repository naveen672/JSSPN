import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

const ExaminationPage = () => {
  return (
    <PageLayout>
      <PageBanner 
        title="Examination System"
        subtitle="Information about evaluation methods, grading system, and examination policies"
        iconName="file-list-3-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Academic", href: "#" },
          { name: "Examination", href: "/academic/examination" }
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
              <div className="mb-10">
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="file-list-3-line mr-2 text-amber-500" />
                  <span>Examination System Overview</span>
                </h2>
                
                <div className="prose max-w-none">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Continuous Internal Evaluation (CIE)
                    </h3>
                    <p className="text-gray-700">
                      The Continuous Internal Evaluation for theory/theory-practice/project work etc. shall be conducted as per assessment methodology prescribed in the curriculum. However, additional remedial tests may be conducted for absentee students in the subsequent week of respective assessment for which he/she is absent.
                    </p>
                    <p className="text-gray-700 mt-4">
                      The Blue Books shall be signed by the student and the concerned faculty & Head of Section/Principal and kept in the custody of Principal. Blue books should be preserved in the institute for a period of at least 3 years from the date of completion of the course.
                    </p>
                    
                    <div className="mt-6 flex items-start bg-primary/5 p-4 rounded-lg border border-primary/10">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Icon name="information-line text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-primary">CIE Components</h4>
                        <p className="text-gray-700 text-sm">
                          The Continuous Internal Evaluation (CIE) is based on the student's performance in:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 space-y-1">
                          <li>Internal Assessment tests</li>
                          <li>Skill tests</li>
                          <li>Multiple choice questions</li>
                          <li>Open book tests</li>
                          <li>Student activity</li>
                          <li>Mini projects</li>
                          <li>Quizzes</li>
                          <li>Assignments</li>
                          <li>Seminars</li>
                          <li>Viva-voce in practical</li>
                          <li>Lab record</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Evaluation and Assessment Scheme
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0 mt-1">1</div>
                        <div className="flex-1">
                          <p className="text-gray-700">
                            <span className="font-medium text-primary">Theory Courses:</span> The weightage of Continuous Internal Evaluation (CIE) is 50% and for Semester End Exam (SEE) is 50%. The student has to obtain a minimum of 40% marks individually both in CIE and SEE to pass. However, Semester End Exam (SEE) is conducted for 100 marks (3 Hours duration).
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0 mt-1">2</div>
                        <div className="flex-1">
                          <p className="text-gray-700">
                            <span className="font-medium text-primary">Practical Courses:</span> The weightage of Continuous Internal Evaluation (CIE) is 60% and for Semester End Exam (SEE) is 40%. The student has to obtain a minimum of 40% marks individually both in CIE and SEE to pass. However, Semester End Exam (SEE) is conducted for 100 marks (3 Hours duration). Grading will be awarded based on both CIE and SEE assessments.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0 mt-1">3</div>
                        <div className="flex-1">
                          <p className="text-gray-700">
                            <span className="font-medium text-primary">CIE Assessment:</span> The Continuous Internal Evaluation (CIE) is based on the student's performance in Internal Assessment tests, Skill tests, Multiple choice questions, Open book tests, Student activity, Mini project, Quizzes, Assignments, Seminars, Viva-voce in practical, lab record etc. as specified in respective course curriculum.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0 mt-1">4</div>
                        <div className="flex-1">
                          <p className="text-gray-700">
                            <span className="font-medium text-primary">Internship/Projects/Seminar:</span> Evaluation is based on work done, quality of report, performance in viva-voce, presentation etc.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Semester End Examination (SEE)
                    </h3>
                    <p className="text-gray-700">
                      End Semester Examination means the examination to be held at the end of each semester separately for theory and practical part on such dates as the College may determine. End Semester Examination means an examination conducted on a date fixed by the DTE at the end of each semester.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Credit Based System
                    </h3>
                    <p className="text-gray-700">
                      A credit system is a systematic way of describing an educational program by attaching credits to its components. The definition of credits in higher education systems may be based on different parameters, such as student workload, learning outcomes and contact hours.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Grading System
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Grading in education is the process of applying standardized measurements for varying levels of achievements in a course. Grades can be assigned as letters (usually A to F), as a range (for example, 1 to 6), as a percentage, or as a number out of a possible total.
                    </p>
                    
                    <h4 className="font-medium text-primary mt-6 mb-3">Mapping of Marks to Grades</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">Range of Marks</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">Grade Point</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">90% and above</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">S</td>
                            <td className="px-4 py-3 text-center border border-gray-300">10</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-green-600">Outstanding</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">80% to 89%</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">A</td>
                            <td className="px-4 py-3 text-center border border-gray-300">9</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-green-600">Excellent</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">70% to 79%</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">B</td>
                            <td className="px-4 py-3 text-center border border-gray-300">8</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-green-600">Very Good</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">60% to 69%</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">C</td>
                            <td className="px-4 py-3 text-center border border-gray-300">7</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-green-600">Good</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">50% to 59%</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">D</td>
                            <td className="px-4 py-3 text-center border border-gray-300">6</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-green-600">Average</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">40% to 49%</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">E</td>
                            <td className="px-4 py-3 text-center border border-gray-300">5</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-yellow-600">Pass</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 text-center border border-gray-300">Below 40%</td>
                            <td className="px-4 py-3 text-center border border-gray-300 font-semibold">F</td>
                            <td className="px-4 py-3 text-center border border-gray-300">0</td>
                            <td className="px-4 py-3 text-center border border-gray-300 text-red-600">Fail</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <h4 className="font-medium text-primary mt-6 mb-3">SGPA and CGPA Calculation</h4>
                    <p className="text-gray-700 mb-4">
                      Semester Grade Point Average (SGPA) and Cumulative Grade Point Average (CGPA) are calculated based on the credits assigned to each course and the grade points earned.
                    </p>
                    
                    <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                      <p className="text-gray-700 flex items-start">
                        <Icon name="file-download-line text-amber-600 mr-2 flex-shrink-0 mt-1" />
                        <span>For detailed information about SGPA and CGPA calculations, please refer to the Diploma C-20 Syllabus Regulations available on the <a href="https://dtek.karnataka.gov.in/storage/pdf-files/C20%20syllabus/C20%20Diploma%20Regulations%20GO.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">official website</a>.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100 flex items-center">
                  <Icon name="file-list-3-line mr-2 text-amber-500" />
                  <span>Examination Resources</span>
                </h3>
                
                <div className="space-y-1">
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="calendar-line mr-2 text-amber-500" />
                    <span>Examination Schedule</span>
                  </a>
                  
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="file-list-line mr-2 text-amber-500" />
                    <span>Syllabus</span>
                  </a>
                  
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="file-paper-line mr-2 text-amber-500" />
                    <span>Previous Question Papers</span>
                  </a>
                  
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="question-line mr-2 text-amber-500" />
                    <span>Examination FAQs</span>
                  </a>
                  
                  <a href="https://dtek.karnataka.gov.in/storage/pdf-files/C20%20syllabus/C20%20Diploma%20Regulations%20GO.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="file-pdf-line mr-2 text-amber-500" />
                    <span>C-20 Regulations</span>
                  </a>
                </div>
                
                <div className="mt-8 bg-primary/5 p-5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-primary mb-3 flex items-center">
                    <Icon name="information-line mr-2 text-amber-500" />
                    <span>Important Notes</span>
                  </h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <Icon name="checkbox-circle-line text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Attendance of minimum 75% in each subject is mandatory to appear for examinations.</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="checkbox-circle-line text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Students must carry their hall tickets and ID cards to the examination hall.</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="checkbox-circle-line text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Mobile phones and electronic gadgets are strictly prohibited in the examination hall.</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="checkbox-circle-line text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Students should reach the examination center at least 30 minutes before the commencement of the examination.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a
                    href="#"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="download-line mr-2" />
                    <span>Download Exam Forms</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ExaminationPage;