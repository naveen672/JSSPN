import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { programs } from "@/lib/constants";
import { useScrollAnimation, useScrollAnimationWithDelay } from "@/hooks/useScrollAnimation";

const AcademicsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: btnRef, isVisible: btnVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-amber-400/10 text-amber-600 font-medium px-4 py-1 rounded-full text-sm mb-4 flex items-center justify-center mx-auto w-fit">
            <Icon name="book-open-line mr-2" />
            Academic Programs
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4">
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
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-primary/90 transition-all"
          >
            <Icon name="list-ordered mr-2" />
            View All Programs
            <Icon name="arrow-right-line ml-2" />
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
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="h-12 bg-primary flex items-center justify-between px-4">
        <span className="text-white font-medium">{program.title}</span>
        <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
          <Icon name={`${program.icon} text-lg text-primary`} />
        </div>
      </div>
      <div className="h-40 bg-primary/5 flex items-center justify-center p-6 border-b border-gray-100">
        <Icon name={`${program.icon} text-6xl text-primary`} />
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl text-primary mb-3 flex items-center">
          <div className="w-2 h-6 bg-amber-400 rounded-full mr-3"></div>
          {program.title}
        </h3>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <div className="flex items-center justify-between text-gray-500 text-sm mb-5 border-t border-b border-gray-100 py-3">
          <div className="flex items-center">
            <Icon name="time-line mr-2 text-amber-500" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center">
            <Icon name="user-line mr-2 text-amber-500" />
            <span>{program.seats}</span>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center font-medium text-white hover:bg-primary/90 transition-all px-4 py-2 rounded-full bg-primary text-sm"
        >
          <span>Program Details</span>
          <Icon name="arrow-right-line ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default AcademicsSection;
