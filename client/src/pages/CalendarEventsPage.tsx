import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

const CalendarEventsPage = () => {
  return (
    <PageLayout>
      <PageBanner 
        title="Calendar of Events"
        subtitle="Academic schedules, examination dates and important events"
        iconName="calendar-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Academic", href: "#" },
          { name: "Calendar of Events", href: "/academic/calendar-of-events" }
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
                  <Icon name="calendar-2-line mr-2 text-amber-500" />
                  <span>Academic Calendar 2024-25</span>
                </h2>

                <div className="prose max-w-none">
                  {/* Odd Semester Table */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Odd Semester (Engineering Diploma Programs)
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="px-4 py-3 text-left font-semibold text-sm border border-gray-300">Sl. No</th>
                            <th className="px-4 py-3 text-left font-semibold text-sm border border-gray-300">Academic Activity</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">Start Date</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">01</td>
                            <td className="px-4 py-3 border border-gray-300">1st, 3rd & 5th Semester Classes</td>
                            <td className="px-4 py-3 text-center border border-gray-300">20/06/2024</td>
                            <td className="px-4 py-3 text-center border border-gray-300">09/11/2024</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">02</td>
                            <td className="px-4 py-3 border border-gray-300">Internal Marks Verification and Admission Ticket Distribution</td>
                            <td className="px-4 py-3 text-center border border-gray-300">11/11/2024</td>
                            <td className="px-4 py-3 text-center border border-gray-300">13/11/2024</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">03</td>
                            <td className="px-4 py-3 border border-gray-300">1st, 3rd & 5th Semester Practical Exams and 1st Year Subject (P-13) Theory Exams</td>
                            <td className="px-4 py-3 text-center border border-gray-300">14/11/2024</td>
                            <td className="px-4 py-3 text-center border border-gray-300">26/11/2024</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">04</td>
                            <td className="px-4 py-3 border border-gray-300">1st, 3rd & 5th Semester Theory Exams (P-20) and All Theory Supplementary Exams</td>
                            <td className="px-4 py-3 text-center border border-gray-300">27/11/2024</td>
                            <td className="px-4 py-3 text-center border border-gray-300">11/12/2024</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Even Semester Table */}
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Even Semester (Engineering Diploma Programs)
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-primary text-white">
                            <th className="px-4 py-3 text-left font-semibold text-sm border border-gray-300">Sl. No</th>
                            <th className="px-4 py-3 text-left font-semibold text-sm border border-gray-300">Academic Activity</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">Start Date</th>
                            <th className="px-4 py-3 text-center font-semibold text-sm border border-gray-300">End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">01</td>
                            <td className="px-4 py-3 border border-gray-300">2nd, 4th & 6th Semester Classes</td>
                            <td className="px-4 py-3 text-center border border-gray-300">13/12/2024</td>
                            <td className="px-4 py-3 text-center border border-gray-300">04/04/2025</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">02</td>
                            <td className="px-4 py-3 border border-gray-300">Internal Marks Verification and Admission Ticket Distribution</td>
                            <td className="px-4 py-3 text-center border border-gray-300">05/04/2025</td>
                            <td className="px-4 py-3 text-center border border-gray-300">09/04/2025</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">03</td>
                            <td className="px-4 py-3 border border-gray-300">2nd, 4th & 6th Semester Practical Exams and 1st Year Subject (P-13) Theory Exams</td>
                            <td className="px-4 py-3 text-center border border-gray-300">11/04/2025</td>
                            <td className="px-4 py-3 text-center border border-gray-300">22/04/2025</td>
                          </tr>
                          <tr className="hover:bg-gray-50 bg-gray-50">
                            <td className="px-4 py-3 border border-gray-300">04</td>
                            <td className="px-4 py-3 border border-gray-300">2nd, 4th & 6th Semester Theory Exams (P-20) and All Theory Supplementary Exams</td>
                            <td className="px-4 py-3 text-center border border-gray-300">23/04/2025</td>
                            <td className="px-4 py-3 text-center border border-gray-300">07/05/2025</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Sidebar */}
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100 flex items-center">
                  <Icon name="file-list-3-line mr-2 text-amber-500" />
                  <span>Important Information</span>
                </h3>

                <div className="space-y-4">
                  {/* Academic Year */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Icon name="calendar-event-line text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Academic Year</h4>
                      <p className="text-gray-600 text-sm">2024-25</p>
                    </div>
                  </div>

                  {/* Class Duration */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Class Duration</h4>
                      <p className="text-gray-600 text-sm">Each period: 1 hour</p>
                      <p className="text-gray-600 text-sm">Weekly workload: 40 hours</p>
                    </div>
                  </div>

                  {/* Working Days */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Icon name="calendar-check-line text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Working Days</h4>
                      <p className="text-gray-600 text-sm">Monday to Friday: 7 hours</p>
                      <p className="text-gray-600 text-sm">Saturday: 5 hours</p>
                    </div>
                  </div>

                  {/* Exam Authority */}
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                      <Icon name="file-paper-2-line text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Examination Authority</h4>
                      <p className="text-gray-600 text-sm">Board of Technical Examination, Karnataka</p>
                    </div>
                  </div>
                </div>

                {/* Downloads */}
                <div className="mt-8 bg-primary/5 p-5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-primary mb-3 flex items-center">
                    <Icon name="download-line mr-2 text-amber-500" />
                    <span>Download Resources</span>
                  </h4>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-primary transition-colors group">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors">
                        <Icon name="file-pdf-line text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-primary transition-colors">Academic Calendar 2024-25</p>
                        <p className="text-gray-500 text-xs">PDF, 245 KB</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center p-3 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-primary transition-colors group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                        <Icon name="file-word-line text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-primary transition-colors">Holiday List 2024-25</p>
                        <p className="text-gray-500 text-xs">DOCX, 132 KB</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CalendarEventsPage;
