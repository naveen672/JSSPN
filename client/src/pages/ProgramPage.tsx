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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              H
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Head of Department</h4>
                              <p className="text-sm text-gray-600">Civil Engineering</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                              F
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-800">Faculty Members</h4>
                              <p className="text-sm text-gray-600">Experienced & Dedicated</p>
                            </div>
                          </div>
                        </div>
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