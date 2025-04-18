import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";

// Import the principal photo
// Note: This is a placeholder as we can't decode the image file
// In production, you'd reference it correctly 
// import principalImage from "@assets/nvs.jpeg";

const Administration = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Administration - JSS Polytechnic";
  }, []);

  // Staff data
  const staffMembers = [
    { id: 1, name: "Sri.Vidyashakar N", position: "Principal", contact: "9886618231", photo: "" },
    { id: 2, name: "Sri. Shashidhar K N", position: "Superintendent", contact: "9880534739", photo: "" },
    { id: 3, name: "Sri. Mahadevaswamy M P", position: "SDA", contact: "", photo: "" },
    { id: 4, name: "Sri. Shashidhar D G", position: "SDA", contact: "9448540981", photo: "" },
    { id: 5, name: "Sri.Jayashankar G S", position: "SDA", contact: "7996688154", photo: "" },
    { id: 6, name: "Smt. Ramya R", position: "SDA", contact: "7892210152", photo: "" },
    { id: 7, name: "Kum. Nayana M", position: "SDA", contact: "9986139863", photo: "" },
    { id: 8, name: "Sri. Mallesha M", position: "SDA", contact: "8880111007", photo: "" },
    { id: 9, name: "Kum. Sindhu K S", position: "SDA", contact: "7259326520", photo: "" },
    { id: 10, name: "Sri. Basavalingadevaru", position: "attender", contact: "", photo: "" },
    { id: 11, name: "Sri. Kumara", position: "attender", contact: "", photo: "" },
    { id: 12, name: "Sri. Shivarajappa", position: "Group-D", contact: "", photo: "" },
    { id: 13, name: "Sri. Chinnaswamy", position: "Attender", contact: "", photo: "" },
    { id: 14, name: "Sri. Channabasavadevaru", position: "Group-D", contact: "", photo: "" },
    { id: 15, name: "Sri. Chidananda G N", position: "Group-D", contact: "", photo: "" },
    { id: 16, name: "Smt.Susheela", position: "sweeper", contact: "", photo: "" }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Administration"
        subtitle="Meet the leadership and staff of JSS Polytechnic Nanjangud"
        iconName="team-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Administration", href: "/about/administration" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Principal Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-16"
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-10 flex items-center pl-4 border-l-4 border-amber-400 max-w-xl mx-auto">
                <Icon name="user-settings-line mr-2 text-amber-500" />
                <span>Principal's Office</span>
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-primary/5 p-6 flex flex-col items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-gray-200 overflow-hidden border-4 border-amber-400/30 mb-4 shadow-md">
                      <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                        <Icon name="user-3-line text-5xl" />
                      </div>
                    </div>
                    <h3 className="font-poppins font-bold text-xl text-primary text-center">Sri.Vidyashakar N</h3>
                    <p className="text-gray-600 text-center mt-1">BE, M.Tech.</p>
                    <p className="text-amber-500 font-medium mt-2 mb-4">Principal</p>
                    <a
                      href="tel:9886618231"
                      className="flex items-center text-primary hover:text-amber-500 transition-colors"
                    >
                      <Icon name="phone-line mr-1 text-amber-500" />
                      <span>9886618231</span>
                    </a>
                  </div>
                  
                  <div className="md:w-2/3 p-6 md:p-8">
                    <h4 className="font-poppins font-semibold text-xl text-primary mb-4">Contact Information</h4>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <Icon name="map-pin-line text-amber-600" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-700">Postal Address:</span><br />
                            JSS Polytechnic<br />
                            Nanjangud
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <Icon name="phone-line text-amber-600" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-700">Phone:</span><br />
                            08221 – 226491
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <Icon name="mail-line text-amber-600" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-700">Email:</span><br />
                            <a 
                              href="mailto:jsspn324@gmail.com" 
                              className="text-primary hover:text-amber-500 transition-colors"
                            >
                              jsspn324@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                          <Icon name="global-line text-amber-600" />
                        </div>
                        <div>
                          <p className="text-gray-600">
                            <span className="font-medium text-gray-700">Website:</span><br />
                            <a 
                              href="http://www.jsspnco-op.in" 
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-amber-500 transition-colors"
                            >
                              www.jsspnco-op.in
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 p-4 rounded-lg mt-4">
                      <h4 className="font-medium text-primary flex items-center mb-2">
                        <Icon name="message-3-line mr-2 text-amber-500" />
                        <span>Message from the Principal</span>
                      </h4>
                      <p className="text-gray-600 italic">
                        "We are committed to providing quality technical education and developing skilled professionals ready to meet industry needs. Our focus is on holistic development of students with strong technical foundation and practical experience."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Administrative Staff */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-10 flex items-center pl-4 border-l-4 border-amber-400 max-w-xl mx-auto">
                <Icon name="team-line mr-2 text-amber-500" />
                <span>Administrative Staff</span>
              </h2>
              
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-primary text-white">
                        <th className="py-3 px-4 text-left font-semibold text-sm w-12">Sl.No.</th>
                        <th className="py-3 px-4 text-left font-semibold text-sm">Name</th>
                        <th className="py-3 px-4 text-left font-semibold text-sm">Position</th>
                        <th className="py-3 px-4 text-left font-semibold text-sm">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {staffMembers.map((member) => (
                        <tr key={member.id} className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4 text-sm border-b border-gray-100">{member.id}</td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100 font-medium text-primary">
                            {member.name}
                          </td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100 capitalize">
                            {member.position}
                          </td>
                          <td className="py-3 px-4 text-sm border-b border-gray-100">
                            {member.contact ? (
                              <a 
                                href={`tel:${member.contact}`}
                                className="flex items-center text-primary hover:text-amber-500 transition-colors"
                              >
                                <Icon name="phone-line mr-1 text-amber-500 text-xs" />
                                <span>{member.contact}</span>
                              </a>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="text-center mt-10">
                <h3 className="font-poppins font-medium text-xl text-primary mb-4">Administrative Departments</h3>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] hover:border-amber-200 transition-all">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="account-box-line text-amber-600" />
                    </div>
                    <h4 className="font-medium text-primary">Admissions</h4>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] hover:border-amber-200 transition-all">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="bank-card-line text-amber-600" />
                    </div>
                    <h4 className="font-medium text-primary">Accounts</h4>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] hover:border-amber-200 transition-all">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="graduation-cap-line text-amber-600" />
                    </div>
                    <h4 className="font-medium text-primary">Examinations</h4>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] hover:border-amber-200 transition-all">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="book-open-line text-amber-600" />
                    </div>
                    <h4 className="font-medium text-primary">Library</h4>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] hover:border-amber-200 transition-all">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="service-line text-amber-600" />
                    </div>
                    <h4 className="font-medium text-primary">Student Services</h4>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-[calc(50%-0.5rem)] md:w-[calc(33.33%-1rem)] hover:border-amber-200 transition-all">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon name="computer-line text-amber-600" />
                    </div>
                    <h4 className="font-medium text-primary">IT Support</h4>
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

export default Administration;