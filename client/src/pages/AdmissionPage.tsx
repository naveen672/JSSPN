import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

const AdmissionPage = () => {
  return (
    <PageLayout>
      <PageBanner 
        title="Admission Process"
        subtitle="Information about eligibility, application procedures, and requirements"
        iconName="user-add-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Academic", href: "#" },
          { name: "Admission", href: "/academic/admission" }
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
                  <Icon name="graduation-cap-line mr-2 text-amber-500" />
                  <span>Admission Requirements</span>
                </h2>
                
                <div className="prose max-w-none">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      For Regular Diploma Programme
                    </h3>
                    <p className="text-gray-700">
                      The candidate must be a citizen of India and should have passed Karnataka S.S.L.C or Equivalent Examination by securing not less than 35% marks in aggregate as per A.I.C.T.E norms or as prescribed by A.I.C.T.E from time to time by Notification.
                    </p>
                    <p className="text-gray-700 mt-4">
                      Also the candidate should have completed at least five full academic years of study in Karnataka between 1st Standard and qualifying examination (Study of one class for one year will be treated as one academic year).
                    </p>
                    <div className="mt-6 flex items-start">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Icon name="information-line text-amber-600" />
                      </div>
                      <p className="text-sm text-gray-600 italic">
                        Note: Candidates who have studied in Karnataka for 7 years from 1st standard to 7th standard are eligible for admission to Diploma courses under government quota as per the Government Order No. ED 59 TEC 80 dated 08-02-1980.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Lateral Entry Admissions
                    </h3>
                    <p className="text-gray-700 mb-4">
                      For Lateral Entry into Second year / III Semester of the three year diploma programme, the candidates shall have:
                    </p>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0">1</div>
                        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
                          Passed 10+2 Examination with Physics and Chemistry as compulsory subjects along with Mathematics/Biology subject.
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0">2</div>
                        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
                          Passed 10+2 Science (with Mathematics as one of the subjects) Or 10+2 Science with Technical Vocational subject.
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-amber-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full mr-3 flex-shrink-0">3</div>
                        <div className="flex-1 bg-gray-50 p-4 rounded-lg border border-gray-100">
                          10th + (2 years ITI) with appropriate Trade in that order shall be eligible for admission to second year diploma courses of appropriate programme.
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Duration of Periods in the Class Time Table
                    </h3>
                    <p className="text-gray-700">
                      The duration of each period in a day is 1 hour and the total periods of instruction/seminars/tutorial hours in a day excluding lunch break & intervals if any should be uniformly maintained as 7 hours from Monday to Friday and 5 hours on Saturday (Theory and Practical). Total workload per week shall be 40 hours.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                      Attendance Requirement
                    </h3>
                    <p className="text-gray-700">
                      In each semester, the candidate to be Eligible for examination shall obtain a minimum attendance of 75% in each course (subject) with a provision of condonation of 15% of the attendance by the Secretary, Board of Technical Examination on the specific recommendation of the Principal on the reasons such as medical grounds, International/ National/ State level sports, NCC, NSS and such other social programs of national interest.
                    </p>
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
                  <span>Quick Links</span>
                </h3>
                
                <div className="space-y-1">
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="download-line mr-2 text-amber-500" />
                    <span>Download Application Form</span>
                  </a>
                  
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="file-text-line mr-2 text-amber-500" />
                    <span>Fee Structure</span>
                  </a>
                  
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="calendar-line mr-2 text-amber-500" />
                    <span>Admission Schedule</span>
                  </a>
                  
                  <a href="#" className="flex items-center text-gray-700 hover:text-primary p-3 rounded-md hover:bg-primary/5 transition-colors">
                    <Icon name="question-line mr-2 text-amber-500" />
                    <span>Frequently Asked Questions</span>
                  </a>
                </div>
                
                <div className="mt-8 bg-primary/5 p-5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-primary mb-3 flex items-center">
                    <Icon name="customer-service-2-line mr-2 text-amber-500" />
                    <span>Need Help?</span>
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Our admission team is available to answer your questions and guide you through the application process.
                  </p>
                  <div className="flex items-center text-gray-700 mb-2">
                    <Icon name="phone-line mr-2 text-primary" />
                    <span>+91 88888-88888</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Icon name="mail-line mr-2 text-primary" />
                    <span>admissions@jsspnj.org</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="user-add-line mr-2" />
                    <span>Apply Now</span>
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

export default AdmissionPage;