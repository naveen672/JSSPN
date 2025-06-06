import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  qualification: string;
  joined: string;
  contact: string;
}

interface SectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

// Information Accordion component for expandable sections
const InfoAccordion = ({ title, icon, children, defaultOpen = false }: SectionProps & { defaultOpen?: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            <Icon name={`${icon} text-primary text-xl`} />
          </div>
          <div>
            <h3 className="font-medium text-lg text-primary">{title}</h3>
          </div>
        </div>
        <div className="flex items-center">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            <Icon name="add-line" />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-5 bg-gray-50 border-t border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
};

// Faculty Accordion component for expandable faculty information
const FacultyAccordion = ({ faculty }: { faculty: FacultyMember }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
            <Icon name="user-line text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-primary">{faculty.name}</h3>
            <p className="text-sm text-gray-600">{faculty.designation}</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>
            <Icon name="add-line" />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                <Icon name="graduation-cap-line text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Qualification</p>
                <p className="font-medium text-gray-800">{faculty.qualification}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                <Icon name="calendar-line text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Joined On</p>
                <p className="font-medium text-gray-800">{faculty.joined}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2">
                <Icon name="phone-line text-amber-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Contact</p>
                <a href={`tel:${faculty.contact}`} className="font-medium text-blue-600 hover:text-blue-800">
                  {faculty.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// This is a template for program pages
const ProgramPage = () => {
  // Match route and extract program slug
  const [, params] = useRoute("/programs/:slug");
  const slug = params?.slug || "";
  
  // Convert slug to title (e.g., "computer-science" -> "Computer Science")
  const programTitle = slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  // Special case for Mechanical Engineering department
  if (slug === "mechanical") {
    return (
      <PageLayout>
        <PageBanner
          title="Mechanical Engineering Department"
          subtitle="Engineering excellence through innovation and precision"
          iconName="settings-3-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Mechanical Engineering", href: `/programs/${slug}` }
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
                  <InfoAccordion title="Department Vision" icon="eye-line" defaultOpen={true}>
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-medium">
                        To provide an academic environment to inculcate Training based Technical Education, Entrepreneurship skill and ethics.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Mission" icon="target-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M1</span>
                        <p className="text-gray-700">To Facilitate academic environment with outcome based education system for transfer of knowledge and skill.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M2</span>
                        <p className="text-gray-700">To encourage students to participate in industry institution interaction program to update with recent technology and to develop leadership qualities in their chosen domain and to maintain a good association with all stake holders.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Program Educational Objectives" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO1</span>
                        <p className="text-gray-700">Analyze, design and solve problem related to mechanical Engineering and adapt to change in technology by self learning.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO2</span>
                        <p className="text-gray-700">Work effectively as individual and in a team, exhibiting leadership qualities to meet the goal of project or organization.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO3</span>
                        <p className="text-gray-700">Work with professionalism and concern for environment to meet the social needs.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO4</span>
                        <p className="text-gray-700">Engage in higher learning leading to degrees or certification.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Outcomes" icon="award-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO1</span>
                        <div>
                          <p className="font-medium text-gray-800">Basic and Discipline specific knowledge</p>
                          <p className="text-gray-700 text-sm mt-1">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO2</span>
                        <div>
                          <p className="font-medium text-gray-800">Problem analysis</p>
                          <p className="text-gray-700 text-sm mt-1">Identify and analyze well-defined engineering problems using codified standard methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO3</span>
                        <div>
                          <p className="font-medium text-gray-800">Design/development of solutions</p>
                          <p className="text-gray-700 text-sm mt-1">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO4</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering Tools, Experimentation and Testing</p>
                          <p className="text-gray-700 text-sm mt-1">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO5</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering practices for society, sustainability and environment</p>
                          <p className="text-gray-700 text-sm mt-1">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO6</span>
                        <div>
                          <p className="font-medium text-gray-800">Project Management</p>
                          <p className="text-gray-700 text-sm mt-1">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO7</span>
                        <div>
                          <p className="font-medium text-gray-800">Life-long learning</p>
                          <p className="text-gray-700 text-sm mt-1">Ability to analyze individual needs and engage in updating in the context of technological changes.</p>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Faculty Members" icon="team-line">
                    <div className="space-y-6">
                      <p className="text-gray-600 mb-6">Our Mechanical Engineering department has experienced faculty and support staff dedicated to excellence in mechanical engineering education.</p>
                      
                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="user-line mr-2 text-blue-600" />
                          Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-blue-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Yatish M S</td><td className="px-4 py-3 text-sm text-gray-900">HOD</td><td className="px-4 py-3 text-sm text-gray-900">BE</td><td className="px-4 py-3 text-sm text-gray-900">23.09.1996</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Kum. Roopa Indudharaswamy</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">BE, MEM</td><td className="px-4 py-3 text-sm text-gray-900">07.09.1995</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Rudramuniswamy</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">BE</td><td className="px-4 py-3 text-sm text-gray-900">30.12.1996</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Mahesha</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">BE</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="tools-line mr-2 text-green-600" />
                          Non-Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-green-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Mahesh N</td><td className="px-4 py-3 text-sm text-gray-900">Instructor</td><td className="px-4 py-3 text-sm text-gray-900">BE, M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">05.08.1991</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Shivashankara S</td><td className="px-4 py-3 text-sm text-gray-900">Asst. Instructor</td><td className="px-4 py-3 text-sm text-gray-900">Diploma, BE</td><td className="px-4 py-3 text-sm text-gray-900">03.07.1989</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Chandrashekar B M</td><td className="px-4 py-3 text-sm text-gray-900">Mechanic</td><td className="px-4 py-3 text-sm text-gray-900">Diploma, BE</td><td className="px-4 py-3 text-sm text-gray-900">19.12.1988</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Nagarajappa M G</td><td className="px-4 py-3 text-sm text-gray-900">Mechanic</td><td className="px-4 py-3 text-sm text-gray-900">Diploma, BE</td><td className="px-4 py-3 text-sm text-gray-900">03.08.1992</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Mahadevaswamy M</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">SSLC</td><td className="px-4 py-3 text-sm text-gray-900">19.12.1988</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Kavibasappa</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">SSLC</td><td className="px-4 py-3 text-sm text-gray-900">19.12.1988</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Prabhuswamy K G</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">SSLC</td><td className="px-4 py-3 text-sm text-gray-900">29.01.1992</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Placement Details" icon="briefcase-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our graduates have secured excellent positions in leading companies including Indian Railways, Infosys, and various manufacturing industries.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-blue-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sacheet Raj</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">Indian Railway</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Chethan Raj</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Gajendra H G</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Akash</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Ravikumar</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Vaibhav N</td><td className="px-4 py-3 text-sm text-gray-900">Management Trainee</td><td className="px-4 py-3 text-sm text-gray-900">Brakes India Ltd, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Shiva Kumar</td><td className="px-4 py-3 text-sm text-gray-900">Management Trainee</td><td className="px-4 py-3 text-sm text-gray-900">Indo MIM, Chikabalapur</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Niranjan K M</td><td className="px-4 py-3 text-sm text-gray-900">JE Photo Department</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Kiran D C</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">Mitsubishi VST</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Vishwas</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">Asian Paints, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">11</td><td className="px-4 py-3 text-sm text-gray-900">Siddesh</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Alumni Achievements" icon="star-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our alumni continue to excel in their careers and make significant contributions across various mechanical engineering industries.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-yellow-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sacheet Raj</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">Indian Railway</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Chethan Raj</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Gajendra H G</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Akash</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Ravikumar</td><td className="px-4 py-3 text-sm text-gray-900">Senior Engg Process Executive</td><td className="px-4 py-3 text-sm text-gray-900">Infosys, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Vaibhav N</td><td className="px-4 py-3 text-sm text-gray-900">Management Trainee</td><td className="px-4 py-3 text-sm text-gray-900">Brakes India Ltd, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Shiva Kumar</td><td className="px-4 py-3 text-sm text-gray-900">Management Trainee</td><td className="px-4 py-3 text-sm text-gray-900">Indo MIM, Chikabalapur</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Niranjan K M</td><td className="px-4 py-3 text-sm text-gray-900">JE Photo Department</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Kiran D C</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">Mitsubishi VST</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Vishwas</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">Asian Paints, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">11</td><td className="px-4 py-3 text-sm text-gray-900">Siddesh</td><td className="px-4 py-3 text-sm text-gray-900">JE</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>
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
                        <Icon name="settings-3-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Department</span>
                        <p className="font-medium text-gray-800">Mechanical Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Key Areas</span>
                        <p className="font-medium text-gray-800">Manufacturing, Design</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Faculty Strength</span>
                        <p className="font-medium text-gray-800">11 Experienced Members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="briefcase-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Industry Focus</span>
                        <p className="font-medium text-gray-800">Manufacturing & Railways</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/science-humanities" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Science & Humanities</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/civil-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Civil Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/computer-science-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Computer Science Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electrical-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electrical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electronics-communication" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electronics & Communication</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechatronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechatronics Engineering</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/about/contact"
                      className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                    >
                      Contact Department
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Special case for Mechatronics Engineering department
  if (slug === "mechatronics") {
    return (
      <PageLayout>
        <PageBanner
          title="Mechatronics Engineering Department"
          subtitle="Integrating mechanics, electronics, and computing for advanced automation"
          iconName="robot-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Mechatronics Engineering", href: `/programs/${slug}` }
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
                  <InfoAccordion title="About the Course" icon="information-line" defaultOpen={true}>
                    <div>
                      <p className="text-gray-700 mb-4">
                        Mechatronics engineering is the design of computer-controlled electromechanical systems. The essence of it is that the design of the mechanical system must be performed together with the design of the electrical/electronic and computer control aspects that together, comprise a complete system. Mechatronics is a multidisciplinary field that refers to the skill sets needed in the contemporary, advanced automated manufacturing industry.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="From HOD's Desk" icon="user-settings-line">
                    <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
                      <p className="text-gray-700">
                        Mechatronics Engineering also called as Mechatronics, is an interdisciplinary branch of engineering that focuses on the integration or combination of mechanical, electrical and electronics engineering systems, and also includes a combination of robotics, electronics, computer science, telecommunications, control systems and automation systems. In recent, the mechatronic systems are available in our daily life such as washing machines with electronic controls, smart refrigeration, and modern automotive systems that enhance our living standards.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Vision" icon="eye-line">
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-medium">
                        To produce creative, innovative, and ethical technologists who can lead in the dynamic field of Mechatronics.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Mission" icon="target-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M1</span>
                        <p className="text-gray-700">The mission of the Mechatronics Program is to benefit the society at large by offering a thorough theoretical knowledge, practical exposure, skills for overall personality development towards self-directed lifelong learning amidst societal sustainability.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M2</span>
                        <p className="text-gray-700">To encourage ethical values and leadership abilities in the minds of students so as to work towards the betterment of the society.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Program Educational Objectives" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO1</span>
                        <p className="text-gray-700">Develop comprehensive understanding of mechatronics principles and apply them effectively in professional practice.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO2</span>
                        <p className="text-gray-700">Work effectively as individuals and as team members in multidisciplinary projects.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO3</span>
                        <p className="text-gray-700">Engage in lifelong learning, career enhancement and adapt to changing professional and societal needs.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Outcomes" icon="award-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO1</span>
                        <div>
                          <p className="font-medium text-gray-800">Basic and Discipline specific knowledge</p>
                          <p className="text-gray-700 text-sm mt-1">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO2</span>
                        <div>
                          <p className="font-medium text-gray-800">Problem analysis</p>
                          <p className="text-gray-700 text-sm mt-1">Identify and analyze well-defined engineering problems using codified standard methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO3</span>
                        <div>
                          <p className="font-medium text-gray-800">Design/development of solutions</p>
                          <p className="text-gray-700 text-sm mt-1">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO4</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering Tools, Experimentation and Testing</p>
                          <p className="text-gray-700 text-sm mt-1">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO5</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering practices for society, sustainability and environment</p>
                          <p className="text-gray-700 text-sm mt-1">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO6</span>
                        <div>
                          <p className="font-medium text-gray-800">Project Management</p>
                          <p className="text-gray-700 text-sm mt-1">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO7</span>
                        <div>
                          <p className="font-medium text-gray-800">Life-long learning</p>
                          <p className="text-gray-700 text-sm mt-1">Ability to analyze individual needs and engage in updating in the context of technological changes.</p>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Specific Outcomes" icon="lightbulb-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO1</span>
                        <p className="text-gray-700">Apply concepts in core areas of Mechanical engineering – Hydraulics and fluid power, Management Systems, Mechanics of machines and thermal Engineering to solve technical issues.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO2</span>
                        <p className="text-gray-700">Develop and optimize solutions in Computer aided manufacturing platforms.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Faculty Members" icon="team-line">
                    <div className="space-y-6">
                      <p className="text-gray-600 mb-6">Our Mechatronics Engineering department has experienced faculty and support staff dedicated to excellence in interdisciplinary technical education.</p>
                      
                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="user-line mr-2 text-blue-600" />
                          Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-blue-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Ashok Kumar M</td><td className="px-4 py-3 text-sm text-gray-900">HOD</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">20.04.2001</td><td className="px-4 py-3 text-sm text-green-600">9731029642</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Naveena N</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">27.07.2015</td><td className="px-4 py-3 text-sm text-green-600">6360031097</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Manjunatha H N</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">26.09.2016</td><td className="px-4 py-3 text-sm text-green-600">9108685803</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Mahadevaswamy V P</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">13.08.2022</td><td className="px-4 py-3 text-sm text-green-600">9343879861</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Kum. Amrutha M</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">01.10.2022</td><td className="px-4 py-3 text-sm text-green-600">7019955318</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="tools-line mr-2 text-green-600" />
                          Non-Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-green-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Chandrashekar C</td><td className="px-4 py-3 text-sm text-gray-900">Instructor</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">13.10.2014</td><td className="px-4 py-3 text-sm text-green-600">9036335145</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Shivaprasad D</td><td className="px-4 py-3 text-sm text-gray-900">Mechanic</td><td className="px-4 py-3 text-sm text-gray-900">ITI</td><td className="px-4 py-3 text-sm text-gray-900">26.07.2006</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Adarsha D G</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">ITI</td><td className="px-4 py-3 text-sm text-gray-900">14.03.2012</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Higher Education Achievements" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our students continue their academic journey at prestigious engineering institutions with excellent DCET ranks.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">DCET Rank</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">College</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Course</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Thushar Chandra Teaswi K S</td><td className="px-4 py-3 text-sm text-blue-600 font-medium">204</td><td className="px-4 py-3 text-sm text-gray-900">The National Institute of Engineering, Mysore</td><td className="px-4 py-3 text-sm text-gray-900">Electronics and Communication Engg.</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Darshan R</td><td className="px-4 py-3 text-sm text-blue-600 font-medium">899</td><td className="px-4 py-3 text-sm text-gray-900">Sri Jayachamarajendra College of Engineering, Mysore</td><td className="px-4 py-3 text-sm text-gray-900">Computer Science Engg.</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Yashwanth R</td><td className="px-4 py-3 text-sm text-blue-600 font-medium">4249</td><td className="px-4 py-3 text-sm text-gray-900">Sri Jayachamarajendra College of Engineering, Mysore</td><td className="px-4 py-3 text-sm text-gray-900">Electronics and Instrumentation Engg.</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Placement Details" icon="briefcase-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our graduates have secured excellent positions in leading companies and some have become successful entrepreneurs.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-blue-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Manjunath</td><td className="px-4 py-3 text-sm text-gray-900">Manager</td><td className="px-4 py-3 text-sm text-gray-900">ABB Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Kiran Sadashiv Bhat</td><td className="px-4 py-3 text-sm text-gray-900">Team Manager</td><td className="px-4 py-3 text-sm text-gray-900">HCL Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Lakshmeesha</td><td className="px-4 py-3 text-sm text-gray-900">Managing Partner</td><td className="px-4 py-3 text-sm text-gray-900">Entrepreneur</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Manikandan</td><td className="px-4 py-3 text-sm text-gray-900">Branch Manager</td><td className="px-4 py-3 text-sm text-gray-900">Johnson Lifts Pvt Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Hareesha N C</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Abhishek</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Manjunath N</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Nestle, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Veenukumar</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Nestle, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Suifen Khan</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Rishi Fabrics, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Mahadevaswamy</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Rishi Fabrics, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">11</td><td className="px-4 py-3 text-sm text-gray-900">Darshan</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Sri Gluco Bio Tech, Nanjangud</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Alumni Achievements" icon="star-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our alumni continue to excel in their careers and make significant contributions across various industries.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-yellow-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Manjunath</td><td className="px-4 py-3 text-sm text-gray-900">Manager</td><td className="px-4 py-3 text-sm text-gray-900">ABB Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Kiran Sadashiv Bhat</td><td className="px-4 py-3 text-sm text-gray-900">Team Manager</td><td className="px-4 py-3 text-sm text-gray-900">HCL Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Lakshmeesha</td><td className="px-4 py-3 text-sm text-gray-900">Managing Partner</td><td className="px-4 py-3 text-sm text-gray-900">Entrepreneur</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Manikandan</td><td className="px-4 py-3 text-sm text-gray-900">Branch Manager</td><td className="px-4 py-3 text-sm text-gray-900">Johnson Lifts Pvt Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Hareesha N C</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Abhishek</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Manjunath N</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Nestle, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Veenukumar</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Nestle, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Suifen Khan</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Rishi Fabrics, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Mahadevaswamy</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Rishi Fabrics, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">11</td><td className="px-4 py-3 text-sm text-gray-900">Darshan</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">Sri Gluco Bio Tech, Nanjangud</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>
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
                        <Icon name="robot-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Department</span>
                        <p className="font-medium text-gray-800">Mechatronics Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Key Areas</span>
                        <p className="font-medium text-gray-800">Robotics, Automation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Faculty Strength</span>
                        <p className="font-medium text-gray-800">8 Experienced Members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="briefcase-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Industry Focus</span>
                        <p className="font-medium text-gray-800">Manufacturing & Automation</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/science-humanities" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Science & Humanities</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/civil-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Civil Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/computer-science-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Computer Science Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electrical-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electrical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electronics-communication" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electronics & Communication</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechanical" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechanical Engineering</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/about/contact"
                      className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                    >
                      Contact Department
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Special case for Electronics & Communication Engineering department
  if (slug === "electronics-communication") {
    return (
      <PageLayout>
        <PageBanner
          title="Electronics & Communication Engineering Department"
          subtitle="Connecting the world through advanced communication technologies"
          iconName="radio-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Electronics & Communication Engineering", href: `/programs/${slug}` }
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
                  <InfoAccordion title="Department Vision" icon="eye-line" defaultOpen={true}>
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-medium">
                        To continuously thrive in achieving excellence for providing competent Electronics and communication professional with knowledge, skills and ethical values to the industry and society.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Mission" icon="target-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M1</span>
                        <p className="text-gray-700">To impart high quality technical education in electronics and Communication Engineering through state of art infrastructure, highly qualified and competent faculty with best educational methods.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M2</span>
                        <p className="text-gray-700">Enable students to develop skills to face the challenges of modern technology with confidence and ease and also provide a framework for promoting collaborative and multidisciplinary activities.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M3</span>
                        <p className="text-gray-700">Enable students to develop skills to face the challenges of modern technology with confidence and ease and also provide a framework for promoting collaborative and multidisciplinary activities.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M4</span>
                        <p className="text-gray-700">To provide updated facilities and environment to the students, faculty members for continuous improvement and lifelong learning.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Program Educational Objectives" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO1</span>
                        <p className="text-gray-700">To prepare students for competent career in industry to meet the needs of Indian and Global companies or to become entrepreneur in the field of Electronics and Communication engineering.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO2</span>
                        <p className="text-gray-700">To provide opportunity for students to work in individual capacity and in teams under Multidisciplinary domains.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO3</span>
                        <p className="text-gray-700">To provide opportunity for students to work in individual capacity and in teams under Multidisciplinary domains.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO4</span>
                        <p className="text-gray-700">Identify and encourage applications of mind, creation, innovation and in querying.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Outcomes" icon="award-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO1</span>
                        <div>
                          <p className="font-medium text-gray-800">Basic and Discipline specific knowledge</p>
                          <p className="text-gray-700 text-sm mt-1">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO2</span>
                        <div>
                          <p className="font-medium text-gray-800">Problem analysis</p>
                          <p className="text-gray-700 text-sm mt-1">Identify and analyze well-defined engineering problems using codified standard methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO3</span>
                        <div>
                          <p className="font-medium text-gray-800">Design/development of solutions</p>
                          <p className="text-gray-700 text-sm mt-1">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO4</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering Tools, Experimentation and Testing</p>
                          <p className="text-gray-700 text-sm mt-1">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO5</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering practices for society, sustainability and environment</p>
                          <p className="text-gray-700 text-sm mt-1">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO6</span>
                        <div>
                          <p className="font-medium text-gray-800">Project Management</p>
                          <p className="text-gray-700 text-sm mt-1">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO7</span>
                        <div>
                          <p className="font-medium text-gray-800">Life-long learning</p>
                          <p className="text-gray-700 text-sm mt-1">Ability to analyze individual needs and engage in updating in the context of technological changes.</p>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Faculty Members" icon="team-line">
                    <div className="space-y-6">
                      <p className="text-gray-600 mb-6">Our Electronics & Communication Engineering department has experienced faculty and support staff dedicated to excellence in technical education.</p>
                      
                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="user-line mr-2 text-blue-600" />
                          Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-blue-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. N Vidyashankar</td><td className="px-4 py-3 text-sm text-gray-900">Principal</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">29.11.1989</td><td className="px-4 py-3 text-sm text-green-600">9886618231</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Bhramaramba M</td><td className="px-4 py-3 text-sm text-gray-900">HOD</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">14.10.1991</td><td className="px-4 py-3 text-sm text-green-600">8277553804</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Kiran M P</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">26.12.1991</td><td className="px-4 py-3 text-sm text-green-600">9036277529</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Vishwanatha M R</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">13.10.1993</td><td className="px-4 py-3 text-sm text-green-600">9448832674</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Shobha J</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">17.09.1996</td><td className="px-4 py-3 text-sm text-green-600">8884408242</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Omprakash</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">23.09.1996</td><td className="px-4 py-3 text-sm text-green-600">9449763832</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Suma D</td><td className="px-4 py-3 text-sm text-gray-900">Selection Grade Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">14.12.1996</td><td className="px-4 py-3 text-sm text-green-600">9880641016</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="tools-line mr-2 text-green-600" />
                          Non-Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-green-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Girish T N</td><td className="px-4 py-3 text-sm text-gray-900">Instructor</td><td className="px-4 py-3 text-sm text-gray-900">Diploma</td><td className="px-4 py-3 text-sm text-gray-900">17.09.1992</td><td className="px-4 py-3 text-sm text-green-600">9980614118</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Guruswamy M D</td><td className="px-4 py-3 text-sm text-gray-900">Asst. Instructor</td><td className="px-4 py-3 text-sm text-gray-900">Diploma</td><td className="px-4 py-3 text-sm text-gray-900">01.08.1998</td><td className="px-4 py-3 text-sm text-green-600">9535637005</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Gangadhar M</td><td className="px-4 py-3 text-sm text-gray-900">Mechanic</td><td className="px-4 py-3 text-sm text-gray-900">Diploma</td><td className="px-4 py-3 text-sm text-gray-900">18.10.1995</td><td className="px-4 py-3 text-sm text-green-600">9740399036</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Parashivamurthy</td><td className="px-4 py-3 text-sm text-gray-900">Mechanic</td><td className="px-4 py-3 text-sm text-gray-900">BA</td><td className="px-4 py-3 text-sm text-gray-900">19.01.1991</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Visweswara Swamy</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">PUC</td><td className="px-4 py-3 text-sm text-gray-900">20.10.1989</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Jagadamba</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">PUC</td><td className="px-4 py-3 text-sm text-gray-900">10.09.1990</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Mahadevaswamy H S</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">BA</td><td className="px-4 py-3 text-sm text-gray-900">31.05.1992</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Higher Education Achievements" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our students continue their academic journey at prestigious engineering institutions.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of Students</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of College</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Thejas</td><td className="px-4 py-3 text-sm text-gray-900">2019-20</td><td className="px-4 py-3 text-sm text-gray-900">SJCE, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Rajeev</td><td className="px-4 py-3 text-sm text-gray-900">2019-20</td><td className="px-4 py-3 text-sm text-gray-900">SJCE, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Basava Prabhu</td><td className="px-4 py-3 text-sm text-gray-900">2020-21</td><td className="px-4 py-3 text-sm text-gray-900">SJCE, Mysore</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Placement Details" icon="briefcase-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our graduates have secured excellent positions in leading companies in the electronics and communication industry.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-blue-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of Students</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of Company</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Shivaprasad M</td><td className="px-4 py-3 text-sm text-gray-900">Globallogic</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Gunavardhan</td><td className="px-4 py-3 text-sm text-gray-900">Microchip</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Santhosh B.P</td><td className="px-4 py-3 text-sm text-gray-900">AT&S</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Vikas Shetty</td><td className="px-4 py-3 text-sm text-gray-900">Deloitte</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Supreetha K.C</td><td className="px-4 py-3 text-sm text-gray-900">Nestle</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Sahana G M</td><td className="px-4 py-3 text-sm text-gray-900">Cognizant</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Alumni Achievements" icon="star-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our alumni continue to excel in their careers and make significant contributions to the electronics and communication industry.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-yellow-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sathish</td><td className="px-4 py-3 text-sm text-gray-900">Engineer</td><td className="px-4 py-3 text-sm text-gray-900">BEL, Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Prasad</td><td className="px-4 py-3 text-sm text-gray-900">J T O</td><td className="px-4 py-3 text-sm text-gray-900">Govt. ITI</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Harish</td><td className="px-4 py-3 text-sm text-gray-900">Technician</td><td className="px-4 py-3 text-sm text-gray-900">AT&S, Nanjagud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Archana</td><td className="px-4 py-3 text-sm text-gray-900">Postman</td><td className="px-4 py-3 text-sm text-gray-900">Postman</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Vyshak Gowda</td><td className="px-4 py-3 text-sm text-gray-900">Engineer</td><td className="px-4 py-3 text-sm text-gray-900">TCS, Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Shivaprasad</td><td className="px-4 py-3 text-sm text-gray-900">Engineer</td><td className="px-4 py-3 text-sm text-gray-900">Accenture, Bangalore</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>
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
                        <Icon name="radio-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Department</span>
                        <p className="font-medium text-gray-800">Electronics & Communication</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Key Areas</span>
                        <p className="font-medium text-gray-800">Communications, Electronics</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Faculty Strength</span>
                        <p className="font-medium text-gray-800">14 Experienced Members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="briefcase-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Industry Focus</span>
                        <p className="font-medium text-gray-800">Telecom & Electronics</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/science-humanities" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Science & Humanities</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/civil-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Civil Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/computer-science-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Computer Science Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electrical-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electrical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechanical" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechanical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechatronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechatronics Engineering</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/about/contact"
                      className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                    >
                      Contact Department
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Special case for Electrical Engineering department
  if (slug === "electrical-engineering") {
    return (
      <PageLayout>
        <PageBanner
          title="Electrical & Electronics Engineering Department"
          subtitle="Powering the future with innovation and technology"
          iconName="flashlight-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Electrical & Electronics Engineering", href: `/programs/${slug}` }
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
                  <InfoAccordion title="From HOD's Desk" icon="user-settings-line" defaultOpen={true}>
                    <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
                      <p className="text-gray-700 mb-4">
                        Welcome to the Department of Electrical and Electronics Engineering, JSS Polytechnic, Nanjangud, Karnataka. As a well-known fact, we cannot imagine the world without electricity, and nowadays, the Electrical and Electronic devices have become an essential and inevitable part of our daily lives. The Department focus is to train our students to get strong academic knowledge in the frontier areas of both Electrical and Electronics Engineering and also to make the students ready to face the industry challenges with confidence.
                      </p>
                      <p className="text-gray-700 mb-4">
                        The Department faculties have sound knowledge in emerging research areas like Adaptive & Robust control schemes for power electronic applications, High voltage pulse power system, Electrical Machines and Drives, Control of Electric vehicle and energy management, Power system optimization and Active distribution networks, Home energy management and Smart grid technologies.
                      </p>
                      <p className="text-gray-700 mb-4">
                        At present, the department offers a 3-year programme in Electrical and Electronics Engineering. The focus of this curriculum is keeping in view with the current and upcoming industry requirements in future (Industry 4.0).
                      </p>
                      <p className="text-gray-700">
                        The Electrical and Electronics Engineering graduate has a wide range of career opportunities in Power industries, Government PSUs, R&D Units, IT industries, Electricity Boards/Utility companies, Telecommunications industries, Manufacturing industries, Private industrial firms and Startup companies.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Vision" icon="eye-line">
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-medium">
                        To Develop highly competitive Electrical Engineers to serve industry and society through knowledge, creativeness and by innovative approach.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Mission" icon="target-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M1</span>
                        <p className="text-gray-700">To impact high quality technical education in Electrical and Electronics Engineering through state of art infrastructure, highly qualified and competent faculty with best educational methods.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M2</span>
                        <p className="text-gray-700">Enable students to develop skills to face the challenges of modern technology with confidence and care and also provide a framework for promoting collaboration and multidisciplinary activities.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M3</span>
                        <p className="text-gray-700">To encourage students for higher education, entrepreneurial and ethical future.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M4</span>
                        <p className="text-gray-700">To provide updated facilities and environment to the students, faculty members for continuous improvement and lifelong learning.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Program Educational Objectives" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO1</span>
                        <p className="text-gray-700">Demonstrate, update and adapt domain knowledge in the area of Electrical and Electronics and the allied fields to propose the solution for the core industry in the ever changing global enterprise with ethical practices.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO2</span>
                        <p className="text-gray-700">Assume leadership roles and succeed in their chosen career path, in industry or public service through engineering ability, life skills and multidisciplinary skill set acquired.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO3</span>
                        <p className="text-gray-700">Pursue higher education institutes of national level.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Outcomes" icon="award-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO1</span>
                        <div>
                          <p className="font-medium text-gray-800">Basic and Discipline specific knowledge</p>
                          <p className="text-gray-700 text-sm mt-1">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO2</span>
                        <div>
                          <p className="font-medium text-gray-800">Problem analysis</p>
                          <p className="text-gray-700 text-sm mt-1">Identify and analyze well-defined engineering problems using codified standard methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO3</span>
                        <div>
                          <p className="font-medium text-gray-800">Design/development of solutions</p>
                          <p className="text-gray-700 text-sm mt-1">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO4</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering Tools, Experimentation and Testing</p>
                          <p className="text-gray-700 text-sm mt-1">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO5</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering practices for society, sustainability and environment</p>
                          <p className="text-gray-700 text-sm mt-1">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO6</span>
                        <div>
                          <p className="font-medium text-gray-800">Project Management</p>
                          <p className="text-gray-700 text-sm mt-1">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO7</span>
                        <div>
                          <p className="font-medium text-gray-800">Life-long learning</p>
                          <p className="text-gray-700 text-sm mt-1">Ability to analyze individual needs and engage in updating in the context of technological changes.</p>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Faculty Members" icon="team-line">
                    <div className="space-y-6">
                      <p className="text-gray-600 mb-6">Our Electrical & Electronics Engineering department has experienced faculty and support staff dedicated to excellence in technical education.</p>
                      
                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="user-line mr-2 text-blue-600" />
                          Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto mb-6">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-blue-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Manu M</td><td className="px-4 py-3 text-sm text-gray-900">HOD</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">02.08.2010</td><td className="px-4 py-3 text-sm text-green-600">9986253555</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Jagadhamba M</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech</td><td className="px-4 py-3 text-sm text-gray-900">04.08.2010</td><td className="px-4 py-3 text-sm text-green-600">8497093058</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Ashwini B</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">22.07.2011</td><td className="px-4 py-3 text-sm text-green-600">9449912625</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Sowmya Kumari K</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">BE</td><td className="px-4 py-3 text-sm text-gray-900">05.09.2012</td><td className="px-4 py-3 text-sm text-green-600">9945923160</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Smt. Gayathri H R</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">BE</td><td className="px-4 py-3 text-sm text-gray-900">27.07.2015</td><td className="px-4 py-3 text-sm text-green-600">8496902042</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Pramodh N</td><td className="px-4 py-3 text-sm text-gray-900">Lecturer</td><td className="px-4 py-3 text-sm text-gray-900">B.E</td><td className="px-4 py-3 text-sm text-gray-900">23.09.2006</td><td className="px-4 py-3 text-sm text-green-600">9591788633</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="tools-line mr-2 text-green-600" />
                          Non-Teaching Faculty
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-green-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Faculty Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Contact</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Mahesh N</td><td className="px-4 py-3 text-sm text-gray-900">Instructor</td><td className="px-4 py-3 text-sm text-gray-900">Diploma</td><td className="px-4 py-3 text-sm text-green-600">9590977922</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Rajendra D P</td><td className="px-4 py-3 text-sm text-gray-900">Mechanic</td><td className="px-4 py-3 text-sm text-gray-900">ITI</td><td className="px-4 py-3 text-sm text-green-600">9901104534</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Sri. Shankarappa</td><td className="px-4 py-3 text-sm text-gray-900">Helper</td><td className="px-4 py-3 text-sm text-gray-900">-</td><td className="px-4 py-3 text-sm text-green-600">9663992748</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Higher Education Achievements" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our students continue their academic journey at prestigious engineering institutions across Karnataka.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Register Number</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of Students</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year of Joining</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of College</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">324EE21005</td><td className="px-4 py-3 text-sm text-gray-900">Deekshith S</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">NIE, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">324EE21007</td><td className="px-4 py-3 text-sm text-gray-900">K Pooja</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">NIE, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">324EE21019</td><td className="px-4 py-3 text-sm text-gray-900">Yashwanth S</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">NIE, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">324EE22301</td><td className="px-4 py-3 text-sm text-gray-900">Abhishek Gowda R</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">PES, Mandya</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">324EE22327</td><td className="px-4 py-3 text-sm text-gray-900">Prasanth K P</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">MIT, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">324EE22701</td><td className="px-4 py-3 text-sm text-gray-900">Minchu M</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">Vidyavardhaka, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">324EE20012</td><td className="px-4 py-3 text-sm text-gray-900">Prakhyath P B</td><td className="px-4 py-3 text-sm text-gray-900">2022-23</td><td className="px-4 py-3 text-sm text-gray-900">Vidyavardhaka, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">324EE17029</td><td className="px-4 py-3 text-sm text-gray-900">Naveen K</td><td className="px-4 py-3 text-sm text-gray-900">2019-20</td><td className="px-4 py-3 text-sm text-gray-900">PES, Mandya</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">324EE17035</td><td className="px-4 py-3 text-sm text-gray-900">Priya K M</td><td className="px-4 py-3 text-sm text-gray-900">2019-20</td><td className="px-4 py-3 text-sm text-gray-900">NIE, Mysore</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Placement Details" icon="briefcase-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our graduates have secured excellent positions in leading companies in the electrical and electronics industry.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-blue-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Register Number</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of Students</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Company</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">324EE20002</td><td className="px-4 py-3 text-sm text-gray-900">Akshatha G V</td><td className="px-4 py-3 text-sm text-gray-900">Asian Paints</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">324EE20010</td><td className="px-4 py-3 text-sm text-gray-900">Nandan Kumar S</td><td className="px-4 py-3 text-sm text-gray-900">Hitachi India Pvt Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">324EE21005</td><td className="px-4 py-3 text-sm text-gray-900">Deekshith S</td><td className="px-4 py-3 text-sm text-gray-900">Asian Paints</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Alumni Achievements" icon="star-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our alumni continue to excel in their careers and make significant contributions to the electrical and electronics industry.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-yellow-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Register Number</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name of Students</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Company</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">324EE20002</td><td className="px-4 py-3 text-sm text-gray-900">Akshatha G V</td><td className="px-4 py-3 text-sm text-gray-900">Asian Paints</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">324EE20010</td><td className="px-4 py-3 text-sm text-gray-900">Nandan Kumar S</td><td className="px-4 py-3 text-sm text-gray-900">Hitachi India Pvt Ltd</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">324EE21005</td><td className="px-4 py-3 text-sm text-gray-900">Deekshith S</td><td className="px-4 py-3 text-sm text-gray-900">Asian Paints</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>
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
                        <Icon name="flashlight-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Department</span>
                        <p className="font-medium text-gray-800">Electrical & Electronics Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Key Areas</span>
                        <p className="font-medium text-gray-800">Power Systems, Control Systems</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Faculty Strength</span>
                        <p className="font-medium text-gray-800">9 Experienced Members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="briefcase-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Industry Focus</span>
                        <p className="font-medium text-gray-800">Power & Manufacturing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/science-humanities" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Science & Humanities</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/civil-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Civil Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/computer-science-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Computer Science Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electronics-communication" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electronics & Communication</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechanical" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechanical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechatronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechatronics Engineering</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/about/contact"
                      className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                    >
                      Contact Department
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Special case for Computer Science Engineering department
  if (slug === "computer-science-engineering") {
    return (
      <PageLayout>
        <PageBanner
          title="Computer Science Engineering Department"
          subtitle="Innovating the future through technology and software development"
          iconName="code-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Computer Science Engineering", href: `/programs/${slug}` }
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
                  <InfoAccordion title="About the Course" icon="information-line" defaultOpen={true}>
                    <div>
                      <p className="text-gray-700">
                        Computer science focuses on the development and testing of software and software systems. It involves working with mathematical models, data analysis and security, algorithms, and computational theory. Computer scientists define the computational principles that are the basis of all software.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Vision" icon="eye-line">
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-medium">
                        To build a strong learning environment in the field of Computer Science and Engineering in technical education that responds to the challenges of the century.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Mission" icon="target-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M1</span>
                        <p className="text-gray-700">To produce computer science diploma graduates who are trained in design, implementation, testing and maintenance of computational systems through competitive curriculum in collaboration with industry and other organizations.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M2</span>
                        <p className="text-gray-700">Providing state of art facilities for enhancing skills in the field of computer science and engineering.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M3</span>
                        <p className="text-gray-700">To encourage ethical values and leadership abilities in the minds of students so as to work towards the growth of the society.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Program Educational Objectives" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO1</span>
                        <p className="text-gray-700">Attainment of key principles and practices of computation and basic principles of engineering to ensure that technicians are able to apply their software development skills to implement practical systems consisting of software and/or hardware components.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO2</span>
                        <p className="text-gray-700">Get hands on domain knowledge to pursue higher education.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO3</span>
                        <p className="text-gray-700">Become socially responsible technicians with good leadership qualities, ethical values and effective interpersonal skills.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Outcomes" icon="award-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO1</span>
                        <div>
                          <p className="font-medium text-gray-800">Basic and Discipline specific knowledge</p>
                          <p className="text-gray-700 text-sm mt-1">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO2</span>
                        <div>
                          <p className="font-medium text-gray-800">Problem analysis</p>
                          <p className="text-gray-700 text-sm mt-1">Identify and analyze well-defined engineering problems using codified standard methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO3</span>
                        <div>
                          <p className="font-medium text-gray-800">Design/development of solutions</p>
                          <p className="text-gray-700 text-sm mt-1">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO4</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering Tools, Experimentation and Testing</p>
                          <p className="text-gray-700 text-sm mt-1">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO5</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering practices for society, sustainability and environment</p>
                          <p className="text-gray-700 text-sm mt-1">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO6</span>
                        <div>
                          <p className="font-medium text-gray-800">Project Management</p>
                          <p className="text-gray-700 text-sm mt-1">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO7</span>
                        <div>
                          <p className="font-medium text-gray-800">Life-long learning</p>
                          <p className="text-gray-700 text-sm mt-1">Ability to analyze individual needs and engage in updating in the context of technological changes.</p>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Specific Outcomes" icon="lightbulb-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO1</span>
                        <p className="text-gray-700">Demonstrate skills in the core knowledge areas of Data Structures, Programming Languages, Databases, Software Engineering, Development & testing, Computer Hardware and Networking.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO2</span>
                        <p className="text-gray-700">Apply problem-solving skills and the knowledge of computer science to solve real world problems.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO3</span>
                        <p className="text-gray-700">Develop technical project and present the reports effectively.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Faculty Members" icon="team-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our Computer Science Engineering department has experienced faculty and support staff dedicated to excellence in technical education.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              GP
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Ganesh Prasad S</h4>
                              <p className="text-sm text-gray-600">HOD</p>
                              <p className="text-sm text-green-600">9535737505</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              NM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Niranjana Murthy H N</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9538734252</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              KG
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Smt. Kavyashree G</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9739920591</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              SM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Shivashankara M</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9844910134</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              AS
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Abdul Shukur</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9611327022</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              NM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Kum. Nisarga M</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">8296747898</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              VG
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Virupaksha Gouda U</h4>
                              <p className="text-sm text-gray-600">System Analyst</p>
                              <p className="text-sm text-green-600">9886801029</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              MK
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Mahadevaswamy K P</h4>
                              <p className="text-sm text-gray-600">Instructor</p>
                              <p className="text-sm text-green-600">9886368541</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              RT
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Smt. Ranjini T J</h4>
                              <p className="text-sm text-gray-600">Instructor</p>
                              <p className="text-sm text-green-600">9060937260</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              RTM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Smt. Rashmi T M</h4>
                              <p className="text-sm text-gray-600">Instructor</p>
                              <p className="text-sm text-green-600">8050804640</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              SC
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Sri. Siddaraju C M</h4>
                              <p className="text-sm text-gray-600">Technician</p>
                              <p className="text-sm text-green-600">9742521417</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Higher Education Achievements" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our students continue their academic journey at prestigious engineering institutions.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Year</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Higher Education</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">Aishwarya</td><td className="px-4 py-3 text-sm text-gray-900">SJCE Engineering College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">Mahadevaprasad</td><td className="px-4 py-3 text-sm text-gray-900">SJCE Engineering College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">Amrutha</td><td className="px-4 py-3 text-sm text-gray-900">NIE College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">Maheshwari</td><td className="px-4 py-3 text-sm text-gray-900">NIE College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">2023-24</td><td className="px-4 py-3 text-sm text-gray-900">Ullash</td><td className="px-4 py-3 text-sm text-gray-900">PES College, Mandya</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">2022-23</td><td className="px-4 py-3 text-sm text-gray-900">Kiran</td><td className="px-4 py-3 text-sm text-gray-900">RV College, Bangalore</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Placement Details" icon="briefcase-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our graduates have secured excellent positions in leading technology companies.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-blue-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Saravanan M</td><td className="px-4 py-3 text-sm text-gray-900">Developer</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Rajeshwari K</td><td className="px-4 py-3 text-sm text-gray-900">Division Technician</td><td className="px-4 py-3 text-sm text-gray-900">Jubilient, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Ashwini Singh S</td><td className="px-4 py-3 text-sm text-gray-900">Team Leader</td><td className="px-4 py-3 text-sm text-gray-900">Star Mark Solution Pvt. Ltd., Mysuru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Raghav S</td><td className="px-4 py-3 text-sm text-gray-900">Production Software Engineer</td><td className="px-4 py-3 text-sm text-gray-900">Cerner Healthcare Solutions India Pvt. Ltd., Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Sharathkumar S B</td><td className="px-4 py-3 text-sm text-gray-900">Business Head</td><td className="px-4 py-3 text-sm text-gray-900">Qspiders Campus Connect, Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Prasad K G</td><td className="px-4 py-3 text-sm text-gray-900">Tech Lead</td><td className="px-4 py-3 text-sm text-gray-900">Tech Mahindra, Mysuru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Sathish C T</td><td className="px-4 py-3 text-sm text-gray-900">DevOps Engineer</td><td className="px-4 py-3 text-sm text-gray-900">Opstree Solution Noida</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Kiran M S</td><td className="px-4 py-3 text-sm text-gray-900">Sr. Technical Consultant</td><td className="px-4 py-3 text-sm text-gray-900">Stoics Software Pvt. Ltd., Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Chandrashekar</td><td className="px-4 py-3 text-sm text-gray-900">Software Developer</td><td className="px-4 py-3 text-sm text-gray-900">Krtefactsys India Pvt. Ltd., Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Divya M</td><td className="px-4 py-3 text-sm text-gray-900">Jr. Software Developer</td><td className="px-4 py-3 text-sm text-gray-900">Sethy Mech Pvt.Ltd Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">11</td><td className="px-4 py-3 text-sm text-gray-900">Veena K P</td><td className="px-4 py-3 text-sm text-gray-900">Software Developer</td><td className="px-4 py-3 text-sm text-gray-900">Pune</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Alumni Achievements" icon="star-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our alumni continue to excel in their careers and make significant contributions to the technology industry.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-yellow-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Organization Details</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Saravanan M</td><td className="px-4 py-3 text-sm text-gray-900">Developer</td><td className="px-4 py-3 text-sm text-gray-900">-</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Rajeshwari K</td><td className="px-4 py-3 text-sm text-gray-900">Division Technician</td><td className="px-4 py-3 text-sm text-gray-900">Jubilient, Nanjangud</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Ashwini Singh S</td><td className="px-4 py-3 text-sm text-gray-900">Team Leader</td><td className="px-4 py-3 text-sm text-gray-900">Star Mark Solution Pvt. Ltd., Mysuru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Raghav S</td><td className="px-4 py-3 text-sm text-gray-900">Production Software Engineer</td><td className="px-4 py-3 text-sm text-gray-900">Cerner Healthcare Solutions India Pvt. Ltd., Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Sharathkumar S B</td><td className="px-4 py-3 text-sm text-gray-900">Business Head</td><td className="px-4 py-3 text-sm text-gray-900">Qspiders Campus Connect, Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Prasad K G</td><td className="px-4 py-3 text-sm text-gray-900">Tech Lead</td><td className="px-4 py-3 text-sm text-gray-900">Tech Mahindra, Mysuru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Sathish C T</td><td className="px-4 py-3 text-sm text-gray-900">DevOps Engineer</td><td className="px-4 py-3 text-sm text-gray-900">Opstree Solution Noida</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Kiran M S</td><td className="px-4 py-3 text-sm text-gray-900">Sr. Technical Consultant</td><td className="px-4 py-3 text-sm text-gray-900">Stoics Software Pvt. Ltd., Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Chandrashekar</td><td className="px-4 py-3 text-sm text-gray-900">Software Developer</td><td className="px-4 py-3 text-sm text-gray-900">Krtefactsys India Pvt. Ltd., Bengaluru</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Divya M</td><td className="px-4 py-3 text-sm text-gray-900">Jr. Software Developer</td><td className="px-4 py-3 text-sm text-gray-900">Sethy Mech Pvt.Ltd Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">11</td><td className="px-4 py-3 text-sm text-gray-900">Veena K P</td><td className="px-4 py-3 text-sm text-gray-900">Software Developer</td><td className="px-4 py-3 text-sm text-gray-900">Pune</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">12</td><td className="px-4 py-3 text-sm text-gray-900">Dayanand Sagar</td><td className="px-4 py-3 text-sm text-gray-900">Developer</td><td className="px-4 py-3 text-sm text-gray-900">BMAP, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">13</td><td className="px-4 py-3 text-sm text-gray-900">Deepak M</td><td className="px-4 py-3 text-sm text-gray-900">Manager</td><td className="px-4 py-3 text-sm text-gray-900">Sudharshan Silks, Mysuru</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>
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
                        <Icon name="code-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Department</span>
                        <p className="font-medium text-gray-800">Computer Science Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Key Areas</span>
                        <p className="font-medium text-gray-800">Software Development, Programming</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="team-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Faculty Strength</span>
                        <p className="font-medium text-gray-800">11 Experienced Members</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="briefcase-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Industry Focus</span>
                        <p className="font-medium text-gray-800">Tech Companies & Startups</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/science-humanities" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Science & Humanities</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/civil-engineering" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Civil Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electronics-communication" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electronics & Communication</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechanical" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechanical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechatronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechatronics Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electrical-electronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electrical & Electronics</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/about/contact"
                      className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                    >
                      Contact Department
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Special case for Civil Engineering department
  if (slug === "civil-engineering") {
    return (
      <PageLayout>
        <PageBanner
          title="Civil Engineering Department"
          subtitle="Building the foundation of infrastructure development"
          iconName="building-4-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Civil Engineering", href: `/programs/${slug}` }
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
                  <InfoAccordion title="About the Course" icon="information-line" defaultOpen={true}>
                    <div>
                      <p className="text-gray-700">
                        Civil engineers plan, design, and supervise the construction and maintenance of building and infrastructure projects. These projects may include facilities, bridges, roads, tunnels, and water and sewage systems. Civil Engineering department laboratories are well equipped with latest computerized instruments like Total Station, GPS, modernized Hydraulics and Material testing lab. This will helps to give hands on training to students. Due to these skill trainings, it will help the students to get into Government and Private sector.
                      </p>
                    </div>
                  </InfoAccordion>
                  
                  <InfoAccordion title="From HOD's Desk" icon="user-settings-line">
                    <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
                      <p className="text-gray-700">
                        The department offers diploma program leading to diploma degrees. The department has well experienced and dedicated faculty, skilled technical staff and well equipped laboratories. These laboratories are recognized by PWD and land army as nodal center for conducting construction material testing. The department has been always in the forefront in taking industrial consultancy assignments. The faculty members take personal care, council the students and motivate them at regular intervals to reach greater heights.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Vision" icon="eye-line">
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-700 font-medium">
                        Develop globally competent Civil Engineering professionals in an environment conducive to learn technical knowledge, skills, moral values and ethics, to serve the society and make the world a better place to live in.
                      </p>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Department Mission" icon="target-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M1</span>
                        <p className="text-gray-700">To provide an academic environment, through competitive curriculum in collaboration with industry, conducive for high quality education focusing on transfer of knowledge and skill development for the benefit of the profession and the society.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M2</span>
                        <p className="text-gray-700">To nurture talent in students to enable them to be leaders in their chosen Professions while maintaining the highest level of ethics.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M3</span>
                        <p className="text-gray-700">To promote the spirit of enquiry, innovation, life skills and to encourage entrepreneurship.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">M4</span>
                        <p className="text-gray-700">To foster effective interactions and networking with all the stakeholders so as to work towards the growth and sustainability of the society and environment.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Program Educational Objectives" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO1</span>
                        <p className="text-gray-700">To apply technical knowledge and management principles in analyzing and planning problems in the field of Civil Engineering, while ensuring maximization of economic benefits to society and minimization of damage to ecology and environment.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO2</span>
                        <p className="text-gray-700">To be life-long learners with spirit of enquiry and zeal to acquire new knowledge and skills so as to remain contemporary and possess required professional skills.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO3</span>
                        <p className="text-gray-700">To enhance entrepreneurial, communication and other soft skills, which will enable them to work globally as leaders, team members and contribute to nation building for the betterment of the society.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PEO4</span>
                        <p className="text-gray-700">To make them strongly committed to the highest levels of professional ethics and focus on ensuring quality, adherence to public policy and law, safety, reliability and environmental sustainability in all their professional activities.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Outcomes" icon="award-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO1</span>
                        <div>
                          <p className="font-medium text-gray-800">Basic and Discipline specific knowledge</p>
                          <p className="text-gray-700 text-sm mt-1">Apply knowledge of basic mathematics, science and engineering fundamentals and engineering specialization to solve the engineering problems.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO2</span>
                        <div>
                          <p className="font-medium text-gray-800">Problem analysis</p>
                          <p className="text-gray-700 text-sm mt-1">Identify and analyze well-defined engineering problems using codified standard methods.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO3</span>
                        <div>
                          <p className="font-medium text-gray-800">Design/development of solutions</p>
                          <p className="text-gray-700 text-sm mt-1">Design solutions for well-defined technical problems and assist with the design of systems components or processes to meet specified needs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO4</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering Tools, Experimentation and Testing</p>
                          <p className="text-gray-700 text-sm mt-1">Apply modern engineering tools and appropriate technique to conduct standard tests and measurements.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO5</span>
                        <div>
                          <p className="font-medium text-gray-800">Engineering practices for society, sustainability and environment</p>
                          <p className="text-gray-700 text-sm mt-1">Apply appropriate technology in context of society, sustainability, environment and ethical practices.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO6</span>
                        <div>
                          <p className="font-medium text-gray-800">Project Management</p>
                          <p className="text-gray-700 text-sm mt-1">Use engineering management principles individually, as a team member or a leader to manage projects and effectively communicate about well-defined engineering activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PO7</span>
                        <div>
                          <p className="font-medium text-gray-800">Life-long learning</p>
                          <p className="text-gray-700 text-sm mt-1">Ability to analyze individual needs and engage in updating in the context of technological changes.</p>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Programme Specific Outcomes" icon="lightbulb-line">
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO1</span>
                        <p className="text-gray-700">The graduates will have the ability to plan, analyses, design, execute and maintain cost effective civil engineering structures without overexploitation of natural resources.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO2</span>
                        <p className="text-gray-700">The graduates of civil engineering program will have the ability to take up employment, entrepreneurship, research and development for sustainable civil society.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO3</span>
                        <p className="text-gray-700">The graduates will be able to peruse opportunities for personal and professional growth, higher studies, demonstrate leadership skills and engage in lifelong learning by active participation in the civil engineering profession.</p>
                      </div>
                      <div className="flex items-start">
                        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm font-medium mr-3 mt-0.5 flex-shrink-0">PSO4</span>
                        <p className="text-gray-700">The graduates will be able to demonstrate professional integrity and an appreciation of ethical, environmental, regulatory and issues related to civil engineering projects.</p>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Faculty Members" icon="team-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our Civil Engineering department is strengthened by experienced and qualified faculty members dedicated to providing quality education.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              DS
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Dr. Sadashiva Shailendra J K</h4>
                              <p className="text-sm text-gray-600">HOD</p>
                              <p className="text-sm text-green-600">9449130613</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              SH
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Shobha H R</h4>
                              <p className="text-sm text-gray-600">Instructor</p>
                              <p className="text-sm text-green-600">9611209883</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              RM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Ranjini M P</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">7760619395</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              BM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Bindu Malini M T</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9481170570</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              VM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Veerabhadraswamy M P</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9739675727</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              MM
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Manjunatha M</h4>
                              <p className="text-sm text-gray-600">Lecturer</p>
                              <p className="text-sm text-green-600">9880800918</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Higher Education Achievements" icon="graduation-cap-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our students continue their academic journey at prestigious institutions.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Higher Education</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Usha K M</td><td className="px-4 py-3 text-sm text-gray-900">SJCE Engineering College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Anitha</td><td className="px-4 py-3 text-sm text-gray-900">SJCE Engineering College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Yashwanth</td><td className="px-4 py-3 text-sm text-gray-900">SJCE Engineering College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Abhishek</td><td className="px-4 py-3 text-sm text-gray-900">NIE College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Nithyashree</td><td className="px-4 py-3 text-sm text-gray-900">NIE College, Mysore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Chandru</td><td className="px-4 py-3 text-sm text-gray-900">PES College, Mandya</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Chandan</td><td className="px-4 py-3 text-sm text-gray-900">PES College, Mandya</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Vidhyamba</td><td className="px-4 py-3 text-sm text-gray-900">PES College, Mandya</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Placement & Employment Details" icon="briefcase-line">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="building-line mr-2 text-green-600" />
                          Government Employment
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-green-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Government Employment Details</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Chandrashekar Patel</td><td className="px-4 py-3 text-sm text-gray-900">Assistant Engineering in Town Planning Department, Ramanagara</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Ashwin R</td><td className="px-4 py-3 text-sm text-gray-900">Engineer in Housing Board, Mysore</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Subhas</td><td className="px-4 py-3 text-sm text-gray-900">Junior Engineering Panchayath Raj Engineering Department Periyapatna</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Meghana</td><td className="px-4 py-3 text-sm text-gray-900">Assistant Engineering Corporation, Mysore</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Mohammed Ayan</td><td className="px-4 py-3 text-sm text-gray-900">Site Assistant Engineering National Project Construction Corporation at South Zone, Bangalore</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-lg text-gray-800 mb-4 flex items-center">
                          <Icon name="briefcase-line mr-2 text-blue-600" />
                          Private Placement Details
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-blue-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Placement Details</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Parimala N K</td><td className="px-4 py-3 text-sm text-gray-900">Golden Key Construction, Mysore</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Udaykumar S</td><td className="px-4 py-3 text-sm text-gray-900">Gravity Structure, Mysore</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Yashwanth</td><td className="px-4 py-3 text-sm text-gray-900">Lakshmi Construction, Mysore</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Harshitha</td><td className="px-4 py-3 text-sm text-gray-900">CAD Center</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Gururaj B P</td><td className="px-4 py-3 text-sm text-gray-900">Golden Key Construction, Mysore</td></tr>
                              <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Anitha</td><td className="px-4 py-3 text-sm text-gray-900">Gravity Structure, Mysore</td></tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </InfoAccordion>

                  <InfoAccordion title="Alumni Achievements" icon="star-line">
                    <div className="space-y-4">
                      <p className="text-gray-600 mb-6">Our alumni have achieved remarkable success in their careers and continue to make us proud.</p>
                      
                      <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                          <thead className="bg-yellow-50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Batch</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Position</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            <tr><td className="px-4 py-3 text-sm text-gray-900">1</td><td className="px-4 py-3 text-sm text-gray-900">Ms. Bhavana D R</td><td className="px-4 py-3 text-sm text-gray-900">2014-2018</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech – RICS School of built environment, Mumbai</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">2</td><td className="px-4 py-3 text-sm text-gray-900">Mr. Vishal R Bharadwaj</td><td className="px-4 py-3 text-sm text-gray-900">2014-2018</td><td className="px-4 py-3 text-sm text-gray-900">2nd generation entrepreneur @ SLN constructions, Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">3</td><td className="px-4 py-3 text-sm text-gray-900">Mr. Gowrish M U</td><td className="px-4 py-3 text-sm text-gray-900">2014-2018</td><td className="px-4 py-3 text-sm text-gray-900">MS in Construction management @DEAKIN university, Australia</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">4</td><td className="px-4 py-3 text-sm text-gray-900">Mr. Madhushree P V</td><td className="px-4 py-3 text-sm text-gray-900">2013-2017</td><td className="px-4 py-3 text-sm text-gray-900">M.Tech at UVCE Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">5</td><td className="px-4 py-3 text-sm text-gray-900">Mr Roopesh M</td><td className="px-4 py-3 text-sm text-gray-900">2013-2017</td><td className="px-4 py-3 text-sm text-gray-900">BMRCL, Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">6</td><td className="px-4 py-3 text-sm text-gray-900">Mr. Dhruva P</td><td className="px-4 py-3 text-sm text-gray-900">2013-2017</td><td className="px-4 py-3 text-sm text-gray-900">MBA (Construction Project Management) @ AMITY UNIVERSITY, Mumbai</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">7</td><td className="px-4 py-3 text-sm text-gray-900">Mr. Karthik S</td><td className="px-4 py-3 text-sm text-gray-900">2011-2015</td><td className="px-4 py-3 text-sm text-gray-900">Proprietor C.N.S Group of Company & AADYA Constructions Kengeri, Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">8</td><td className="px-4 py-3 text-sm text-gray-900">Mr. B R Gautham Raj</td><td className="px-4 py-3 text-sm text-gray-900">2011-2015</td><td className="px-4 py-3 text-sm text-gray-900">Managing Director@ M/S Sadruda Constructions (B) Pvt Ltd, Bangalore</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">9</td><td className="px-4 py-3 text-sm text-gray-900">Ms. Swathi Shantharaju</td><td className="px-4 py-3 text-sm text-gray-900">2011-2015</td><td className="px-4 py-3 text-sm text-gray-900">Masters at Universitlibre de Bruxelles</td></tr>
                            <tr><td className="px-4 py-3 text-sm text-gray-900">10</td><td className="px-4 py-3 text-sm text-gray-900">Mr. Naveen Kumar V</td><td className="px-4 py-3 text-sm text-gray-900">2009-2014</td><td className="px-4 py-3 text-sm text-gray-900">Entrepreneur - Klarheit Valuers & engineering services Pvt ltd, Bangalore</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </InfoAccordion>
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
                        <Icon name="building-4-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Department</span>
                        <p className="font-medium text-gray-800">Civil Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="tools-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Key Areas</span>
                        <p className="font-medium text-gray-800">Infrastructure, Construction</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="microscope-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Facilities</span>
                        <p className="font-medium text-gray-800">Total Station, GPS, Hydraulics Lab</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center border-b border-gray-100 pb-3">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <Icon name="award-line text-amber-600" />
                      </div>
                      <div>
                        <span className="text-gray-500 text-sm">Recognition</span>
                        <p className="font-medium text-gray-800">PWD & Land Army Approved</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/science-humanities" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Science & Humanities</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/computer-science" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Computer Science</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electronics-communication" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electronics & Communication</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechanical" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechanical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechatronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechatronics Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electrical-electronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electrical & Electronics</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a
                      href="/about/contact"
                      className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                    >
                      Contact Department
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  // Special case for Science and Humanities department
  if (slug === "science-humanities") {
    return (
      <PageLayout>
        <PageBanner
          title="Science and Humanities Department"
          subtitle="Foundation of technical education with fundamental science and communication skills"
          iconName="flask-line"
          breadcrumbs={[
            { name: "Programs", href: "/programs" },
            { name: "Science and Humanities", href: `/programs/${slug}` }
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
                  <InfoAccordion title="About the Department" icon="information-line" defaultOpen={true}>
                    <div>
                      <p className="text-gray-700">
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
                    </div>
                  </InfoAccordion>
                  
                  <InfoAccordion title="From HOD's Desk" icon="user-settings-line">
                    <div className="bg-primary/5 p-5 rounded-lg border border-primary/10">
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
                  </InfoAccordion>
                  
                  <InfoAccordion title="Department Vision" icon="eye-line">
                    <p className="text-gray-700">
                      The Science and Humanities department works as a team to make all the students By inculcating knowledge and understanding of engineering sciences with social, ethical and moral values, to make them a smart worker rather than being a hard Worker alone.
                    </p>
                  </InfoAccordion>
                  
                  <InfoAccordion title="Department Mission" icon="flag-line">
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
                  </InfoAccordion>
                  
                  <InfoAccordion title="Programme Outcomes" icon="trophy-line">
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
                  </InfoAccordion>
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
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                      Other Departments
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a href="/programs/computer-science" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Computer Science</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electronics-communication" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electronics & Communication</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechanical" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechanical Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/civil" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Civil Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/mechatronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Mechatronics Engineering</span>
                        </a>
                      </li>
                      <li>
                        <a href="/programs/electrical-electronics" className="flex items-center text-gray-600 hover:text-primary transition-colors py-1.5">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span>Electrical & Electronics</span>
                        </a>
                      </li>
                    </ul>
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
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-12"
            >
              <h2 className="font-poppins font-bold text-3xl text-primary mb-4 flex items-center justify-center">
                <Icon name="team-line mr-3 text-amber-500" />
                <span>Faculty Members</span>
              </h2>
              <p className="text-gray-600">
                Meet our dedicated and experienced faculty members who provide excellent guidance and mentorship
              </p>
            </motion.div>
            
            <InfoAccordion title="Faculty Members" icon="team-line">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold text-sm">Sl. No</th>
                      <th className="px-4 py-3 text-left font-semibold text-sm">Faculty Name</th>
                      <th className="px-4 py-3 text-left font-semibold text-sm">Designation</th>
                      <th className="px-4 py-3 text-left font-semibold text-sm">Qualification</th>
                      <th className="px-4 py-3 text-left font-semibold text-sm">Year of Joining</th>
                      <th className="px-4 py-3 text-left font-semibold text-sm">Contact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        id: 1,
                        name: "Sri. Prabhu prasad G",
                        designation: "HOD",
                        qualification: "M.Sc",
                        joined: "21-08-1991",
                        contact: "9480191974"
                      },
                      {
                        id: 2,
                        name: "Sri. Girish T S",
                        designation: "Selection Grade Lecturer",
                        qualification: "M.Sc",
                        joined: "14-07-1997",
                        contact: "9845431005"
                      },
                      {
                        id: 3,
                        name: "Smt. Sowmya N",
                        designation: "Lecturer",
                        qualification: "M.Sc",
                        joined: "19-07-2005",
                        contact: "9916472363"
                      },
                      {
                        id: 4,
                        name: "Sri. Rajesha H P",
                        designation: "Lecturer",
                        qualification: "M.Sc",
                        joined: "02-08-2011",
                        contact: "9538131000"
                      },
                      {
                        id: 5,
                        name: "Smt. Pavithra G",
                        designation: "Lecturer",
                        qualification: "MA,B.Ed",
                        joined: "01-07-2013",
                        contact: "9740244245"
                      },
                      {
                        id: 6,
                        name: "Sri. Mahadeva Prasad",
                        designation: "Lecturer",
                        qualification: "MA,M.Ed",
                        joined: "08-07-2019",
                        contact: "9845330779"
                      },
                      {
                        id: 7,
                        name: "Sri. Basavanna M",
                        designation: "Instructor",
                        qualification: "B.Sc",
                        joined: "12-03-2001",
                        contact: "9448558672"
                      },
                      {
                        id: 8,
                        name: "Sri. Mahadeva B P",
                        designation: "Helper",
                        qualification: "-",
                        joined: "17-07-1997",
                        contact: "9980377269"
                      }
                    ].map((faculty) => (
                      <tr key={faculty.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{faculty.id}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{faculty.name}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{faculty.designation}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{faculty.qualification}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{faculty.joined}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800">
                          <a href={`tel:${faculty.contact}`} className="flex items-center">
                            <Icon name="phone-line mr-1" />
                            {faculty.contact}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </InfoAccordion>
            
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-sm w-full">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="flask-line text-amber-600 text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-primary">Statistics & Analytics Lab</h3>
                    <p className="text-gray-500 text-sm">Well-equipped modern lab</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our Statistics and Analytics laboratory provides students with hands-on experience with statistical software and analytical tools essential for technical education.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-sm w-full">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mr-4">
                    <Icon name="translate-2 text-amber-600 text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg text-primary">Language Lab</h3>
                    <p className="text-gray-500 text-sm">Communication skills development</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Our English Language Laboratory is designed to enhance communication skills of students with modern audio-visual equipment and interactive learning materials.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageBanner 
        title={`${programTitle}`}
        subtitle="Comprehensive diploma program with hands-on technical training and industry exposure"
        iconName="book-open-line"
        breadcrumbs={[
          { name: "Programs", href: "/programs" },
          { name: programTitle, href: `/programs/${slug}` }
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
                <span>About the Program</span>
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-100">
                  Program content will be added here. This is a placeholder for the description of the {programTitle} program at JSS Polytechnic Nanjangud.
                </p>
                
                <h3 className="font-semibold text-xl text-primary mt-8 mb-4">Program Highlights</h3>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map(item => (
                    <li key={item} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                      <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 border border-amber-400/30">
                        <Icon name="check-line text-amber-600" />
                      </div>
                      <span className="text-gray-700">Program highlight {item} will be displayed here</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-semibold text-xl text-primary mt-8 mb-4">Career Opportunities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[1, 2, 3, 4].map(item => (
                    <div key={item} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-amber-200 transition-colors">
                      <h4 className="font-medium text-primary mb-2 flex items-center">
                        <Icon name="briefcase-line mr-2 text-amber-500" />
                        <span>Career Option {item}</span>
                      </h4>
                      <p className="text-gray-600 text-sm">Description of career opportunity</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-xl text-primary mb-4 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="contacts-book-line mr-2 text-amber-500" />
                  <span>Program Details</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Duration</span>
                      <p className="font-medium text-gray-800">3 Years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="book-open-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Qualification</span>
                      <p className="font-medium text-gray-800">Diploma in {programTitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Intake</span>
                      <p className="font-medium text-gray-800">60 Students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="user-settings-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Eligibility</span>
                      <p className="font-medium text-gray-800">10th Std or Equivalent</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="#admissions"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="user-add-line mr-2" />
                    <span>Apply for this Program</span>
                  </a>
                  
                  <a
                    href="#contact"
                    className="block mt-3 bg-white border border-gray-200 hover:border-primary text-primary px-6 py-3 rounded-full font-medium transition-all text-center flex items-center justify-center"
                  >
                    <Icon name="question-line mr-2" />
                    <span>Inquire About Program</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl text-primary mb-4 flex items-center justify-center">
              <Icon name="slideshow-line mr-3 text-amber-500" />
              <span>Program Gallery</span>
            </h2>
            <p className="text-gray-600">
              Get a visual glimpse of our facilities, classrooms, laboratories, and student activities
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <Icon name="image-line text-4xl" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-poppins font-medium text-lg text-primary">
                    Gallery Image {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Description for gallery image {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramPage;