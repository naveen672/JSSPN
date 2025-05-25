import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";

// Import MOU images
import mou1 from "@assets/mou1.jpg";
import mou2 from "@assets/mou2.jpg";
import mou3 from "@assets/mou3.jpg";
import mou4 from "@assets/mou4.jpg";
import mou5 from "@assets/mou5.jpg";
import mou6 from "@assets/mou6.jpg";

const TrainingPage = () => {
  // MOU images array
  const mouImages = [mou1, mou2, mou3, mou4, mou5, mou6];

  return (
    <PageLayout>
      <PageBanner 
        title="Training & Placement"
        subtitle="Preparing students for successful careers"
        iconName="briefcase-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Placement", href: "#" },
          { name: "Training", href: "/placement/training" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-poppins font-bold text-3xl text-primary mb-6">
              Industry Collaborations
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mouImages.map((image, index) => (
              <motion.div
                key={`mou-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Industry collaboration ${index + 1}`} 
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

export default TrainingPage;