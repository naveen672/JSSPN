import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { stats } from "@/lib/constants";
import { useScrollAnimation, useNumberCounter } from "@/hooks/useScrollAnimation";

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  const count = useNumberCounter(stat.count, 0, 2000, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 20 
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.15 
      }}
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute -right-4 -bottom-4 opacity-5">
        <Icon name={`${stat.icon} text-8xl text-${stat.color}`} />
      </div>
      
      <div className="flex justify-center">
        <div className={`w-16 h-16 bg-${stat.color}/10 rounded-full flex items-center justify-center mb-4 relative z-10`}>
          <Icon name={`${stat.icon} text-2xl text-${stat.color}`} />
        </div>
      </div>
      <h3 className={`text-4xl font-bold font-poppins text-${stat.color} mb-2 flex items-center justify-center`}>
        <span>{count.toLocaleString()}</span>
        <Icon name="add-line text-xl ml-1" />
      </h3>
      <p className="text-gray-600 flex items-center justify-center">
        <Icon name="check-double-line mr-1 text-green-500" />
        <span>{stat.text}</span>
      </p>
    </motion.div>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary font-medium px-4 py-1 rounded-full text-sm mb-4">
            <Icon name="bar-chart-box-line mr-1" />
            <span>JSS Polytechnic By Numbers</span>
          </div>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-text">
            Making an Impact in Technical Education
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
