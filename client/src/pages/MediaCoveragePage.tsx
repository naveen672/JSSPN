import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

// Media coverage images from public assets
const mc1 = "/assets/mc1.jpeg";
const mc2 = "/assets/mc2.jpeg";
const mc3 = "/assets/mc3.jpeg";

const MediaCoveragePage = () => {
  const mediaItems = [
    {
      id: 1,
      image: mc1,
      title: "JSS Polytechnic Featured in Regional News",
      description: "Coverage highlighting the institution's academic excellence and industry partnerships",
      date: "2024",
      type: "Newspaper"
    },
    {
      id: 2,
      image: mc2,
      title: "Student Achievement Recognition",
      description: "Media coverage of outstanding student performance and achievements",
      date: "2024",
      type: "News Article"
    },
    {
      id: 3,
      image: mc3,
      title: "Institutional Excellence Coverage",
      description: "Press coverage showcasing the polytechnic's contribution to technical education",
      date: "2024",
      type: "Print Media"
    }
  ];

  const mediaStats = [
    {
      icon: "newspaper-line",
      title: "Print Media",
      count: "15+",
      description: "Newspaper articles"
    },
    {
      icon: "tv-line",
      title: "Electronic Media",
      count: "8+",
      description: "TV & Radio coverage"
    },
    {
      icon: "global-line",
      title: "Online Media",
      count: "25+",
      description: "Digital publications"
    },
    {
      icon: "award-line",
      title: "Recognition",
      count: "12+",
      description: "Media awards"
    }
  ];

  const mediaHighlights = [
    "Featured in leading regional newspapers for academic excellence",
    "Television coverage of student achievements and placements",
    "Online articles highlighting innovative teaching methods",
    "Press releases about industry collaborations and MOUs",
    "Coverage of campus events and cultural activities",
    "Recognition in educational magazines and journals"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Media Coverage"
        subtitle="JSS Polytechnic in the Spotlight"
        iconName="camera-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "More", href: "#" },
          { name: "Media Coverage", href: "/more/media-coverage" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Media Coverage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Our Media Presence</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p className="text-lg">
                    JSS Polytechnic, Nanjangud has been consistently featured in various media outlets for its commitment to quality technical education, student achievements, and contribution to the community. Our institution's excellence and innovative approach to education have garnered significant media attention.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                    <div className="flex items-start">
                      <Icon name="star-line mr-3 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-blue-800 mb-2">Recognition & Coverage</h4>
                        <p className="text-blue-700">
                          Our institution has been featured in leading newspapers, television channels, and online platforms for academic excellence, student placements, and community engagement initiatives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Media Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="bar-chart-line mr-2 text-amber-500" />
                  <span>Media Presence Statistics</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {mediaStats.map((stat, index) => (
                    <div key={index} className="text-center bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name={`${stat.icon} text-amber-600 text-2xl`} />
                      </div>
                      <h3 className="font-bold text-2xl text-primary mb-2">{stat.count}</h3>
                      <h4 className="font-medium text-gray-800 mb-1">{stat.title}</h4>
                      <p className="text-sm text-gray-600">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Media Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="image-line mr-2 text-amber-500" />
                  <span>Media Coverage Gallery</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {item.type}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-medium text-lg text-primary mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-600 font-medium text-sm">{item.date}</span>
                          <button className="flex items-center text-primary hover:text-primary/80 transition-colors">
                            <Icon name="eye-line mr-1" />
                            <span className="text-sm">View Details</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Media Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-green-400">
                  <Icon name="flashlight-line mr-2 text-green-500" />
                  <span>Media Highlights</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mediaHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start">
                      <Icon name="check-line mr-3 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact for Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border border-blue-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-blue-400">
                  <Icon name="contacts-line mr-2 text-blue-500" />
                  <span>Media Contact</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                      <Icon name="user-line mr-2 text-blue-500" />
                      Public Relations Officer
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p className="flex items-center"><Icon name="phone-line mr-2 text-green-500" /> +91-8212-572481</p>
                      <p className="flex items-center"><Icon name="mail-line mr-2 text-blue-500" /> media@jsspolytechnic.edu.in</p>
                      <p className="flex items-center"><Icon name="map-pin-line mr-2 text-red-500" /> JSS Polytechnic, Nanjangud</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-4 flex items-center">
                      <Icon name="time-line mr-2 text-green-500" />
                      Media Inquiry Hours
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>Monday to Friday:</strong> 9:00 AM - 5:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM</p>
                      <p><strong>Email Response:</strong> Within 24 hours</p>
                      <p className="text-primary font-medium">For urgent media queries, contact Principal's office</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24"
              >
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100">
                  Media Information
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="camera-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Total Coverage</span>
                      <p className="font-medium text-gray-800">48+ Articles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Latest Coverage</span>
                      <p className="font-medium text-gray-800">December 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="trophy-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Awards Covered</span>
                      <p className="font-medium text-gray-800">12+ Recognitions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="global-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Media Reach</span>
                      <p className="font-medium text-gray-800">Regional & National</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Recent Features
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Academic Excellence</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Student Achievements</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Industry Partnerships</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Campus Events</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                      <span className="text-sm text-gray-600">Community Service</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact Media Team
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default MediaCoveragePage;