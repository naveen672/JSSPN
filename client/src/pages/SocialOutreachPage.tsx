import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

// Import images from public assets
const nccLogo = "/assets/ncc.png";
const nssLogo = "/assets/nss.png";
const rcLogo = "/assets/rc.png";
const niruPhoto = "/assets/niru.jpg";
const ncc1 = "/assets/ncc1.jpg";
const ncc2 = "/assets/ncc2.jpg";
const ncc3 = "/assets/ncc3.jpg";
const ncc4 = "/assets/ncc4.jpg";
const rms1 = "/assets/rms1.jpeg";
const rajeshPhoto = "/assets/rajesh.jpeg";
const rc1 = "/assets/rc1.jpeg";
const rc2 = "/assets/rc2.jpeg";
const rc3 = "/assets/rc3.jpeg";
const rc4 = "/assets/rc4.jpeg";

const SocialOutreachPage = () => {
  const programs = [
    {
      id: "ncc",
      title: "National Cadet Corps (NCC)",
      logo: nccLogo,
      officer: {
        name: "Capt. Rudramuniswamy",
        designation: "NCC Officer",
        phone: "8088009595",
        email: "jsspn324@gmail.com",
        address: "JSS Polytechnic, Nanjangud"
      },
      vision: "Empower volunteer youth to become potential leaders and responsible citizens of the country.",
      mission: "To develop leadership and character qualities, mould discipline and nurture social integration and cohesion through multi-faceted programs conducted in a military environment",
      aim: [
        "To develop qualities of character, courage, comradeship, discipline, leadership, secular outlook, spirit of adventure and sportsmanship and the ideals of selfless service among the youth to make them useful citizen.",
        "To create a human resource of organized trained and motivated youth to provide leadership in all walks of life including the Armed Forces and be always available for the service of the nation."
      ],
      about: [
        "National Cadet Corps is a Tri-Services Organization, comprising the Army, Navy and Air Force, engaged in grooming the youth of the country into disciplined and patriotic citizens.",
        "The National Cadet Corps (NCC) is a youth development movement. It has enormous potential for nation building.",
        "The NCC Provides opportunities to the youth of the country for their all-round development with a sense of Duty, Commitment, Dedication, Discipline and Moral Values so that they become able leaders and useful citizens.",
        "The NCC provides exposure to the cadets in a wide range of activities, with a distinct emphasis on Social Services, Discipline and Adventure Training.",
        "The NCC is open to all regular students of schools and colleges on a voluntary basis all over India.",
        "The cadets have no liability for active military service once they complete their course but are given preference over normal candidates during selections based on the achievements in the corps."
      ],
      gallery: [ncc1, ncc2, ncc3, ncc4],
      color: "blue"
    },
    {
      id: "nss",
      title: "National Service Scheme (NSS)",
      logo: nssLogo,
      officer: {
        name: "Sri. Rajesh",
        designation: "NSS Officer",
        phone: "9538131000",
        email: "rajesha80@gmail.com",
        address: "JSS Polytechnic, Nanjangud",
        photo: rajeshPhoto
      },
      vision: "To help young people develop the mind and spirit to serve society and work for the social uplift of the downtrodden",
      mission: "To inspire young people to serve the people through the motto \"NOT ME BUT YOU\"",
      aim: [
        "To understand the community in which they work",
        "To understand themselves in relation to their community", 
        "To identify the needs and problems of the community and involve them in problem-solving",
        "To develop among themselves a sense of social and civic responsibility",
        "To utilize their knowledge in finding practical solutions to individual and community problems",
        "To develop competence required for group-living and sharing of responsibilities",
        "To gain skills in mobilizing community participation",
        "To acquire leadership qualities and democratic attitudes",
        "To develop capacity to meet emergencies and natural disasters",
        "To practice national integration and social harmony"
      ],
      about: [
        "The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. It provides opportunity to the student youth of 11th & 12th Class of schools at +2 Board level and student youth of Technical Institution, Graduate & Post Graduate at colleges and University level of India to take part in various Government led community service activities & programmes.",
        "The primary objective of developing the personality and character of the student youth through voluntary community service. 'Education through Service' is the purpose of the NSS.",
        "NSS was launched in 1969 in 37 Universities involving about 40,000 volunteers which has now spread over 657 Universities and 51 +2 Councils/Directorates, covering 20,669 Colleges/ Technical Institutions and 11,988 Senior Secondary School.",
        "Since inception, over 7.4 crore students have benefitted from NSS."
      ],
      gallery: [rms1],
      color: "purple"
    },
    {
      id: "redcross",
      title: "Youth Red Cross",
      logo: rcLogo,
      officer: {
        name: "Sri. Niranjana Murthy H N",
        designation: "Red Cross Officer",
        phone: "9538734252",
        email: "niranjanhulimavu@gmail.com",
        address: "JSS Polytechnic, Nanjangud",
        photo: niruPhoto
      },
      mission: "The Mission of the Indian Red Cross is to inspire, encourage and initiate at all times all forms of humanitarian activities so that human suffering can be minimized and even prevented and thus contribute to creating more congenial climate for peace.",
      about: [
        "The Indian Red Cross is a voluntary humanitarian organization having a network of over 1200 branches throughout the country, providing relief in times of disasters/emergencies and promotes health & care of the vulnerable people and communities.",
        "It is a leading member of the largest independent humanitarian organization in the world, the International Red Cross & Red Crescent Movement.",
        "The movement has three main components, the International Committee of Red Cross (ICRC), National Societies and International Federation of Red Cross and Red Crescent Societies."
      ],
      gallery: [rc1, rc2, rc3, rc4],
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-700",
        accent: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200", 
        text: "text-purple-700",
        accent: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      red: {
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700", 
        accent: "text-red-600",
        button: "bg-red-600 hover:bg-red-700"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <PageLayout>
      <PageBanner 
        title="Social Outreach Programs"
        subtitle="Building Character, Discipline, and Service to Nation"
        iconName="hand-heart-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Supports", href: "#" },
          { name: "Social Outreach Programs", href: "/supports/social-outreach-program" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12"
          >
            <h2 className="font-poppins font-bold text-3xl text-primary mb-6 text-center">
              Cultivating Responsible Citizens
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
              JSS Polytechnic, Nanjangud is committed to developing well-rounded individuals through our comprehensive social outreach programs. We offer NCC, NSS, and Youth Red Cross programs that instill values of discipline, service, and patriotism among our students.
            </p>
          </motion.div>

          {/* Programs */}
          <div className="space-y-16">
            {programs.map((program, index) => {
              const colors = getColorClasses(program.color);
              
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${colors.bg} ${colors.border} p-8 rounded-xl border-2`}
                >
                  {/* Program Header */}
                  <div className="flex flex-col md:flex-row items-center mb-8">
                    <div className="md:w-32 md:h-32 w-24 h-24 mb-4 md:mb-0 md:mr-6">
                      <img 
                        src={program.logo} 
                        alt={`${program.title} Logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-poppins font-bold text-3xl text-primary mb-2">
                        {program.title}
                      </h3>
                      <p className={`text-lg ${colors.text} font-medium`}>
                        Character Building • Leadership Development • Service to Nation
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Officer Information */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-xl text-primary mb-4 flex items-center">
                        <Icon name="user-line mr-2" />
                        Program Officer
                      </h4>
                      
                      {program.officer.photo && (
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto">
                          <img 
                            src={program.officer.photo} 
                            alt={program.officer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-800">{program.officer.name}</p>
                          <p className={`text-sm ${colors.accent}`}>{program.officer.designation}</p>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600">
                          <p className="flex items-center">
                            <Icon name="phone-line mr-2 text-green-500" />
                            {program.officer.phone}
                          </p>
                          <p className="flex items-center">
                            <Icon name="mail-line mr-2 text-blue-500" />
                            {program.officer.email}
                          </p>
                          <p className="flex items-start">
                            <Icon name="map-pin-line mr-2 text-red-500 mt-0.5" />
                            <span>{program.officer.address}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Program Details */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* About */}
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-lg text-primary mb-4 flex items-center">
                          <Icon name="information-line mr-2" />
                          About {program.title}
                        </h4>
                        <div className="space-y-3">
                          {program.about.map((point, idx) => (
                            <p key={idx} className="text-gray-700 text-sm leading-relaxed">
                              • {point}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* Vision & Mission */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {program.vision && (
                          <div className="bg-white p-6 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-lg text-primary mb-3 flex items-center">
                              <Icon name="eye-line mr-2" />
                              Vision
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {program.vision}
                            </p>
                          </div>
                        )}
                        
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-lg text-primary mb-3 flex items-center">
                            <Icon name="target-line mr-2" />
                            Mission
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {program.mission}
                          </p>
                        </div>
                      </div>

                      {/* Aims & Objectives */}
                      {program.aim && (
                        <div className="bg-white p-6 rounded-lg border border-gray-200">
                          <h4 className="font-semibold text-lg text-primary mb-4 flex items-center">
                            <Icon name="flag-line mr-2" />
                            Aims & Objectives
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {program.aim.map((point, idx) => (
                              <div key={idx} className="flex items-start">
                                <Icon name="check-line mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Gallery */}
                  {program.gallery.length > 0 && (
                    <div className="mt-8">
                      <h4 className="font-semibold text-lg text-primary mb-4 flex items-center">
                        <Icon name="image-line mr-2" />
                        Program Gallery
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {program.gallery.map((image, idx) => (
                          <div key={idx} className="relative group">
                            <img 
                              src={image} 
                              alt={`${program.title} Activity ${idx + 1}`}
                              className="w-full h-48 object-cover rounded-lg border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-gradient-to-r from-primary to-primary/80 p-8 rounded-xl text-white mt-16 text-center"
          >
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Join Our Social Outreach Programs
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of a movement that builds character, instills discipline, and serves the nation. 
              Develop leadership skills while contributing to society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about/contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Get More Information
              </a>
              <a
                href="/academic/admission"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-primary transition-all"
              >
                Apply for Admission
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SocialOutreachPage;