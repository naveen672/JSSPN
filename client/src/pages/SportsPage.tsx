import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

// Import the sports images
import sp1 from "@assets/sp1.jpeg";
import sp2 from "@assets/sp2.jpeg";
import sp3 from "@assets/sp3.jpeg";
import sp4 from "@assets/sp4.jpeg";
import sp5 from "@assets/sp5.jpeg";
import sp6 from "@assets/sp6.jpeg";
import sp7 from "@assets/sp7.jpeg";

const SportsPage = () => {
  // Define the sports facilities data
  const sportsFacilities = [
    {
      id: 1,
      name: "Cricket Field",
      description: "Full-size cricket field with well-maintained pitch and practice nets",
      image: sp1
    },
    {
      id: 2,
      name: "Volleyball Court",
      description: "Standard volleyball court with proper marking and net setup",
      image: sp2
    },
    {
      id: 3,
      name: "Basketball Court",
      description: "Regulation-size basketball court with quality hoops and backboards",
      image: sp3
    },
    {
      id: 4,
      name: "Football Field",
      description: "Spacious football field with goal posts and proper markings",
      image: sp4
    },
    {
      id: 5,
      name: "Indoor Games",
      description: "Facilities for table tennis, chess, carom, and other indoor games",
      image: sp5
    },
    {
      id: 6,
      name: "Athletics Track",
      description: "Track for running and other athletic events",
      image: sp6
    },
    {
      id: 7,
      name: "Sports Equipment",
      description: "Well-stocked sports equipment room with quality gear for all sports",
      image: sp7
    }
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Sports Facilities"
        subtitle="Promoting physical fitness, teamwork, and sportsmanship"
        iconName="basketball-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Facilities", href: "#" },
          { name: "Sports", href: "/facilities/sports" }
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
                <Icon name="basketball-line mr-2 text-amber-500" />
                <span>Sports at JSS Polytechnic</span>
              </h2>
              
              <div className="prose max-w-none">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
                  <p className="text-gray-700 text-lg">
                    JSS Polytechnic, Nanjangud has been giving equal importance to both Curricular, Co-curricular and extracurricular activities. To encourage the students to participate in sports activities, the institute has created all the necessary sports facilities.
                  </p>
                  
                  <div className="mt-6 bg-primary/5 p-5 rounded-lg border border-primary/10">
                    <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                      <Icon name="medal-line mr-2 text-amber-500" />
                      <span>Benefits of Sports</span>
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <Icon name="check-line text-green-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Develops physical fitness and endurance</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="check-line text-green-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Enhances teamwork and leadership skills</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="check-line text-green-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Improves concentration and academic performance</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="check-line text-green-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Builds discipline and time management skills</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="check-line text-green-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Provides stress relief and mental well-being</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-primary mb-6 mt-12 flex items-center">
                  <Icon name="gallery-line mr-2 text-amber-500" />
                  <span>Sports Facilities Gallery</span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {sportsFacilities.map((facility, index) => (
                    <motion.div
                      key={facility.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
                    >
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img 
                          src={facility.image} 
                          alt={facility.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-poppins font-medium text-lg text-primary">
                          {facility.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {facility.description}
                        </p>
                      </div>
                    </motion.div>
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-24">
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100 flex items-center">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>Sports Information</span>
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="user-settings-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Sports In-charge</span>
                      <p className="font-medium text-gray-800">Physical Education Director</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Sports Hours</span>
                      <p className="font-medium text-gray-800">4:00 PM - 6:00 PM (Weekdays)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="trophy-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Annual Sports Meet</span>
                      <p className="font-medium text-gray-800">January (Every Year)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="team-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">College Teams</span>
                      <p className="font-medium text-gray-800">Cricket, Volleyball, Basketball, Football</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-primary/5 p-5 rounded-lg border border-primary/10">
                  <h4 className="font-medium text-primary mb-3 flex items-center">
                    <Icon name="information-line mr-2 text-amber-500" />
                    <span>Sports Achievements</span>
                  </h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <Icon name="medal-line text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>First place in Inter-Polytechnic Cricket Tournament 2023</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="medal-line text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Runners-up in State Level Volleyball Championship 2022</span>
                    </li>
                    <li className="flex items-start">
                      <Icon name="medal-line text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>District Level Athletics - 3 Gold, 5 Silver medals (2023)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <a
                    href="#"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md flex items-center justify-center"
                  >
                    <Icon name="calendar-2-line mr-2" />
                    <span>View Sports Calendar</span>
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

export default SportsPage;