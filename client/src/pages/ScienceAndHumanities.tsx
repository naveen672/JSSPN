import { useEffect } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const ScienceAndHumanities = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <PageBanner
        title="Science and Humanities Department"
        subtitle="Foundation of technical education with fundamental science and communication skills"
        iconName="flask-line"
        breadcrumbs={[
          { name: "Departments", href: "/departments" },
          { name: "Science and Humanities", href: "/departments/science-and-humanities" },
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
              <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="information-line mr-2 text-amber-500" />
                <span>About The Department</span>
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  The department of Science and Humanities plays a vital role in grooming the students with the basic knowledge of sciences and language. The department offers Engineering Mathematics, Statistics and Analytics, Communication Skills, Project Management Skills, Environmental Sustainability and Kannada, devoted for all round development of first year students. Kannada is also offered in second year as well.
                </p>
                
                <p className="mt-4">
                  The department of Science and Humanities is strengthened by experienced lecturers. The faculty is highly qualified and well experienced in academic activities.
                </p>
                
                <p className="mt-4">
                  The department has well equipped laboratory of Statistics and Analytics and English language Laboratory for the effective Communication Skills among the students.
                </p>
                
                <p className="mt-4">
                  The average teaching experience of faculty members is more than ten years. In both Theory and Practical classes, students are given individual attention. Faculty members increase healthy interaction with students in both academic and personal matters, which leads to excellent academic performance of the student.
                </p>
                
                <p className="mt-4">
                  The department of Science and Humanities is supported by seven members of faculty in field of Science, English and Kannada. Most of the faculty in the department employs ICT based teaching via tools like Google Classroom, Google Forms, Teachmint, PowerPoint Presentation etc.
                </p>
                
                <div className="bg-primary/5 p-5 rounded-lg mt-8 border border-primary/10">
                  <h3 className="font-semibold text-xl text-primary mb-4">From HOD's Desk</h3>
                  <p className="italic text-gray-700">
                    Welcome to JSS Polytechnic, Nanjangud, Department of Science and Humanities. I am pleased to get connected to you and share my message this way.
                  </p>
                  <p className="mt-3 italic text-gray-700">
                    The Department has a rich curriculum and allied activities to provide Comprehensive Education for Diploma graduates.
                  </p>
                  <p className="mt-3 italic text-gray-700">
                    The Department correlates with six diploma Programs, namely Electronics and Communication Engineering, Mechanical Engineering, Civil Engineering, Mechatronics Engineering, Computer Science Engineering, Electrical and Electronics Engineering. The department has adequate academic and teaching staff.
                  </p>
                  <p className="mt-3 italic text-gray-700">
                    The mission of the department is to produce the top Quality Education and to conduct leading edge Programmes. My Sincere thanks to all the faculty members and the students who contribute so much to the success of the department.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-xl text-primary mb-4">Department Vision</h3>
                  <p className="text-gray-700">
                    The Science and Humanities department works as a team to make all the students By inculcating knowledge and understanding of engineering sciences with social, ethical and moral values, to make them a smart worker rather than being a hard Worker alone.
                  </p>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-xl text-primary mb-4">Department Mission</h3>
                  <div className="space-y-4">
                    <div className="flex">
                      <div className="bg-amber-500 text-white font-bold w-12 h-8 flex items-center justify-center rounded-l-lg">M1</div>
                      <div className="flex-1 border border-gray-200 rounded-r-lg p-3 bg-white">
                        To make the students familiar with Scientific and Mathematical concepts, Communications Skills and campus life style.
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-amber-500 text-white font-bold w-12 h-8 flex items-center justify-center rounded-l-lg">M2</div>
                      <div className="flex-1 border border-gray-200 rounded-r-lg p-3 bg-white">
                        To provide a unique learning environment for the students at par with the global technical work force, building confidence, character and human values.
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-amber-500 text-white font-bold w-12 h-8 flex items-center justify-center rounded-l-lg">M3</div>
                      <div className="flex-1 border border-gray-200 rounded-r-lg p-3 bg-white">
                        To encourage advanced teaching learning process at individual, department and institutional level.
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-amber-500 text-white font-bold w-12 h-8 flex items-center justify-center rounded-l-lg">M4</div>
                      <div className="flex-1 border border-gray-200 rounded-r-lg p-3 bg-white">
                        To mould the student to be a better decision maker.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-xl text-primary mb-4">Programme Outcomes</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700 w-20">Code</th>
                          <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Outcome</th>
                          <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO1</td>
                          <td className="border border-gray-200 px-4 py-2">Basic and Discipline specific knowledge</td>
                          <td className="border border-gray-200 px-4 py-2">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO2</td>
                          <td className="border border-gray-200 px-4 py-2">Problem analysis</td>
                          <td className="border border-gray-200 px-4 py-2">Identify and analyze well-defined engineering problems using codified standard methods.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO3</td>
                          <td className="border border-gray-200 px-4 py-2">Design/development of solutions</td>
                          <td className="border border-gray-200 px-4 py-2">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO4</td>
                          <td className="border border-gray-200 px-4 py-2">Engineering Tools, Experimentation and Testing</td>
                          <td className="border border-gray-200 px-4 py-2">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO5</td>
                          <td className="border border-gray-200 px-4 py-2">Engineering practices for society, sustainability and environment</td>
                          <td className="border border-gray-200 px-4 py-2">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO6</td>
                          <td className="border border-gray-200 px-4 py-2">Project Management</td>
                          <td className="border border-gray-200 px-4 py-2">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-2 font-medium text-primary">PO7</td>
                          <td className="border border-gray-200 px-4 py-2">Life-long learning</td>
                          <td className="border border-gray-200 px-4 py-2">Ability to analyze individual needs and engage in updating in the context of technological changes.</td>
                        </tr>
                      </tbody>
                    </table>
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
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100">
                  Department Highlights
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="book-open-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Department</span>
                      <p className="font-medium text-gray-800">Science and Humanities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="tools-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Key Subjects</span>
                      <p className="font-medium text-gray-800">Mathematics, Communication Skills</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="building-4-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Facilities</span>
                      <p className="font-medium text-gray-800">Statistics & Analytics Lab, Language Lab</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="user-settings-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Faculty Strength</span>
                      <p className="font-medium text-gray-800">7 Experienced Faculty Members</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="question-answer-line mr-2" />
                    <span>Contact Department</span>
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

export default ScienceAndHumanities;