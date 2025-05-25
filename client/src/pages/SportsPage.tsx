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
  // Sports images array
  const sportsImages = [sp1, sp2, sp3, sp4, sp5, sp6, sp7];

  return (
    <PageLayout>
      <PageBanner 
        title="Sports Facilities"
        subtitle="JSS Polytechnic, Nanjangud"
        iconName="basketball-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Facilities", href: "#" },
          { name: "Sports", href: "/facilities/sports" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
              <Icon name="basketball-line mr-2 text-amber-500" />
              <span>Sports at JSS Polytechnic</span>
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
              <p className="text-gray-700 text-lg">
                JSS Polytechnic, Nanjangud has been giving equal importance to both Curricular, Co-curricular and extracurricular activities. To encourage the students to participate in sports activities, the institute has created all the necessary sports facilities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sportsImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Sports image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SportsPage;