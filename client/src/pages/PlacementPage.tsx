import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const PlacementPage = () => {
  // Placement statistics data
  const placementStats = [
    { dept: "Electronics & Communication", 2024: 4, 2023: 1, 2022: 4 },
    { dept: "Mechanical", 2024: 13, 2023: 6, 2022: 3 },
    { dept: "Mechatronics", 2024: 1, 2023: 1, 2022: 1 },
    { dept: "Electrical & Electronics", 2024: 6, 2023: 3, 2022: 5 },
    { dept: "Civil", 2024: 0, 2023: 1, 2022: 0 },
    { dept: "Computer Science", 2024: 0, 2023: 0, 2022: 22 }
  ];

  // III Cell Members data
  const cellMembers = [
    { name: "Sri. N.Vidyashankar", designation: "Principal", dept: "Electronics & Communication", contact: "9886618231" },
    { name: "Sri. M R Vishwanatha", designation: "ILO", dept: "Electronics & Communication", contact: "9448832674" },
    { name: "Sri. Manjunatha H N", designation: "Deputy ILO", dept: "Mechanical", contact: "9108685803" },
    { name: "Sri. M P Kiran", designation: "Selection Grade Lecturer", dept: "Electronics & Communication", contact: "9036277529" },
    { name: "Sri. Naveena N", designation: "Lecturer", dept: "Mechatronics", contact: "6360031097" },
    { name: "Sri. Pramod N", designation: "Lecturer", dept: "Electrical & Electronics", contact: "9591788633" },
    { name: "Sri. Veerabhadraswamy M P", designation: "Lecturer", dept: "Civil", contact: "9739675727" },
    { name: "Sri. Shivashankara M", designation: "Lecturer", dept: "Computer Science", contact: "9844910134" }
  ];

  // Activities data
  const activities = [
    "Deputing of CO-OP Scheme students of Mechanical Engineering, Electronics & Communication Engineering and Mechatronics Engineering branch to undergo Industrial training at various Industries as per the curriculum.",
    "Arranging In-plant training for non CO-OP Scheme students of our polytechnic as a part of the curriculum.",
    "Getting necessary approval for the required quota of the students from the Board of Apprenticeship Training Chennai and also from concerned Industries.",
    "In-plant training for general scheme diploma programmes",
    "Monitoring of the training at various Industries by coordinating with the respective training managers.",
    "Arranging campus Interview from reputed Industries.",
    "Placement Consultancy services.",
    "Facilitating Technical talk sessions by various Industry expertise's and Faculties from engineering colleges.",
    "Exploring new industry partners for training of our Polytechnic students.",
    "Facilitating career guidance and placement training programmes."
  ];

  // Activity images
  const activityImages = [
    "/assets/image_1752518516714.png",
    "/assets/image_1752518521514.png", 
    "/assets/image_1752518526164.png",
    "/assets/image_1752518530752.png",
    "/assets/image_1752518535013.png",
    "/assets/image_1752518539333.png",
    "/assets/image_1752518544253.png",
    "/assets/image_1752518548938.png",
    "/assets/image_1752518553434.png"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Training & Placement"
        subtitle="Bridging Academia and Industry"
        iconName="briefcase-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Placement", href: "/placement" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          
          {/* Vision and Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="font-poppins font-bold text-2xl text-primary mb-4 flex items-center">
                <Icon name="eye-line mr-3 text-blue-600" />
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To understand the student's interest and enhance their skills and orient them to achieve their career goals ethically.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200"
            >
              <h3 className="font-poppins font-bold text-2xl text-primary mb-4 flex items-center">
                <Icon name="target-line mr-3 text-green-600" />
                Mission
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>• To provide effective training for the students and make them industry ready.</p>
                <p>• To guide the students who are willing to pursue their higher studies.</p>
                <p>• To encourage and orient the students to become successful entrepreneurs.</p>
              </div>
            </motion.div>
          </div>

          {/* About Placement Cell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-16"
          >
            <h3 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center">
              <Icon name="building-line mr-3 text-purple-600" />
              About Placement Cell
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The Placement Cell at JSS Polytechnic, Nanjangud serves as a bridge between our students and the industry. 
              Our dedicated team works tirelessly to ensure that our graduates are well-prepared for the professional world 
              and have access to quality employment opportunities. We focus on holistic development, industry readiness, 
              and career guidance to help our students achieve their professional aspirations.
            </p>
          </motion.div>

          {/* Placement Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h3 className="font-poppins font-bold text-2xl text-primary mb-8 text-center">
              Placement Statistics - Number of Offers
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gradient-to-r from-primary to-primary/80 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Sl.No.</th>
                    <th className="px-6 py-4 text-left font-medium">Department</th>
                    <th className="px-6 py-4 text-center font-medium">2024</th>
                    <th className="px-6 py-4 text-center font-medium">2023</th>
                    <th className="px-6 py-4 text-center font-medium">2022</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {placementStats.map((stat, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{stat.dept}</td>
                      <td className="px-6 py-4 text-sm text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {stat[2024]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {stat[2023]}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                          {stat[2022]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* III Cell Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h3 className="font-poppins font-bold text-2xl text-primary mb-8 text-center">
              Members of III Cell
            </h3>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
                <thead className="bg-gradient-to-r from-primary to-primary/80 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium">Sl.No.</th>
                    <th className="px-6 py-4 text-left font-medium">Name</th>
                    <th className="px-6 py-4 text-left font-medium">Designation</th>
                    <th className="px-6 py-4 text-left font-medium">Department</th>
                    <th className="px-6 py-4 text-left font-medium">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cellMembers.map((member, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{member.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{member.designation}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{member.dept}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <a href={`tel:${member.contact}`} className="text-blue-600 hover:text-blue-800">
                          {member.contact}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Activities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <h3 className="font-poppins font-bold text-2xl text-primary mb-8 text-center">
              Activities
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <Icon name="check-circle-line mr-4 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{activity}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activity Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-16"
          >
            <h3 className="font-poppins font-bold text-2xl text-primary mb-8 text-center">
              Activity Gallery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activityImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <img 
                    src={image} 
                    alt={`Placement activity ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Icon name="eye-line text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-xl text-white text-center"
          >
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Ready to Launch Your Career?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join JSS Polytechnic, Nanjangud and benefit from our strong industry connections and comprehensive placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/academic/admission"
                className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Apply Now
              </a>
              <a
                href="/about/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-all"
              >
                Contact Placement Cell
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PlacementPage;