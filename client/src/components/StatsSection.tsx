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
      className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-center">
        <div className={`w-16 h-16 bg-${stat.color}/10 rounded-full flex items-center justify-center mb-4`}>
          <Icon name={`${stat.icon} text-2xl text-${stat.color}`} />
        </div>
      </div>
      <h3 className={`text-4xl font-bold font-poppins text-${stat.color} mb-2`}>
        {count.toLocaleString()}
      </h3>
      <p className="text-gray-600">{stat.text}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
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
