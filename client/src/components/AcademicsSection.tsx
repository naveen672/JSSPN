import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { programs } from "@/lib/constants";
import { useScrollAnimation, useScrollAnimationWithDelay } from "@/hooks/useScrollAnimation";

const AcademicsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: btnRef, isVisible: btnVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="academics" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-secondary/10 text-secondary font-medium px-4 py-1 rounded-full text-sm mb-4">
            Academic Programs
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">
            Technical Programs
          </h2>
          <p className="text-gray-600">
            Explore our diverse range of diploma programs designed to prepare you for the technical careers of tomorrow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>

        <motion.div
          ref={btnRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: btnVisible ? 1 : 0, y: btnVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-block bg-white border-2 border-primary hover:bg-primary hover:text-white text-primary px-6 py-3 rounded-md font-medium transition-all"
          >
            View All Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const ProgramCard = ({ program, index }: { program: typeof programs[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimationWithDelay<HTMLDivElement>(0.1, index * 150);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className={`h-48 bg-${program.color}/5 flex items-center justify-center`}>
        <Icon name={`${program.icon} text-5xl text-${program.color}`} />
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl text-text mb-3">
          {program.title}
        </h3>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="flex items-center text-gray-500 text-sm mb-5">
          <Icon name="time-line mr-2" />
          <span>{program.duration}</span>
          <span className="mx-3">|</span>
          <Icon name="user-line mr-2" />
          <span>{program.seats}</span>
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <span>Program Details</span>
          <Icon name="arrow-right-line ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default AcademicsSection;
