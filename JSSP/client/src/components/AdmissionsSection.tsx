import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { admissionSteps, importantDates } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Icons for each admission step
const stepIcons = [
  "file-list-3-line",
  "file-upload-line",
  "draft-line",
  "secure-payment-line"
];

const AdmissionsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="admissions" className="py-20 relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-primary/5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-amber-400/20 hidden lg:block">
        <Icon name="graduation-cap-line text-8xl" />
      </div>
      <div className="absolute bottom-10 left-10 text-primary/10 hidden lg:block">
        <Icon name="book-open-line text-8xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center bg-amber-400/10 text-amber-600 font-medium px-4 py-1 rounded-full text-sm mb-4 justify-center mx-auto w-fit">
            <Icon name="user-add-line mr-1" />
            <span>Admissions Open</span>
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-primary mb-4 flex items-center justify-center">
            <Icon name="building-2-line mr-3 text-amber-500" />
            <span>Join Our Institution</span>
          </h2>
          <p className="text-gray-600 flex items-center justify-center">
            <Icon name="road-map-line mr-2 text-amber-500" />
            <span>Take the first step towards a rewarding technical career by enrolling in our diploma programs.</span>
          </p>
        </motion.div>

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: cardVisible ? 1 : 0, y: cardVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="flow-chart mr-2 text-amber-500" />
                <span>Admission Process</span>
              </h3>
              <div className="space-y-6">
                {admissionSteps.map((step, index) => (
                  <div key={step.id} className="flex items-start group bg-white p-4 rounded-lg border border-gray-100 shadow-md hover:border-amber-200 transition-all duration-300">
                    <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-amber-400/30 transition-colors border border-amber-400/30">
                      <Icon name={`${stepIcons[index]} text-amber-600`} />
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg mb-1 flex items-center">
                        <span className="mr-2 text-primary">{step.title}</span>
                        <span className="bg-amber-400/10 text-amber-600 text-xs px-2 py-1 rounded-full">Step {step.id}</span>
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="calendar-todo-line mr-2 text-amber-500" />
                <span>Important Dates</span>
              </h3>
              <div className="space-y-4">
                {importantDates.map((date) => (
                  <div key={date.id} className="bg-white p-3 rounded-lg border border-gray-100 shadow-md hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-poppins font-semibold text-lg flex items-center text-primary">
                        {date.title === "Application Opens" && <Icon name="calendar-check-line mr-2 text-green-500" />}
                        {date.title === "Application Deadline" && <Icon name="timer-line mr-2 text-red-500" />}
                        {date.title === "Entrance Examination" && <Icon name="draft-line mr-2 text-blue-500" />}
                        {date.title === "Results Declaration" && <Icon name="medal-line mr-2 text-yellow-500" />}
                        {date.title === "Classes Begin" && <Icon name="presentation-line mr-2 text-purple-500" />}
                        <span>{date.title}</span>
                      </h4>
                      <span className="bg-amber-400/10 text-amber-600 text-xs px-2 py-1 rounded-full">Phase {date.id}</span>
                    </div>
                    <p className="text-gray-600 flex items-center bg-gray-50 p-2 rounded border border-gray-100">
                      <Icon name="calendar-event-line mr-2 text-amber-500" />
                      <span>{date.date}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all shadow-md"
                >
                  <Icon name="user-add-line mr-2 group-hover:animate-pulse" />
                  <span>Apply Now</span>
                  <Icon name="arrow-right-line ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: contactVisible ? 1 : 0, y: contactVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <h3 className="font-poppins font-bold text-2xl text-primary mb-4 flex items-center justify-center">
            <Icon name="question-line mr-2 text-amber-500" />
            <span>Have Questions About Admissions?</span>
          </h3>
          <p className="text-gray-600 mb-6 flex items-center justify-center bg-white p-4 rounded-lg shadow-md max-w-2xl mx-auto border border-gray-100">
            <Icon name="customer-service-2-line mr-2 text-amber-500" />
            <span>Our admissions team is ready to assist you with any queries regarding eligibility, application process, or program details.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91-8765432100"
              className="flex items-center bg-white border border-gray-100 hover:border-amber-300 px-5 py-3 rounded-full text-gray-700 hover:text-primary transition-all hover:shadow-md shadow-sm"
            >
              <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 border border-amber-400/30">
                <Icon name="phone-line text-amber-600" />
              </div>
              <span>+91-8765432100</span>
            </a>
            <a
              href="mailto:admissions@jsspolytechnic.edu"
              className="flex items-center bg-white border border-gray-100 hover:border-amber-300 px-5 py-3 rounded-full text-gray-700 hover:text-primary transition-all hover:shadow-md shadow-sm"
            >
              <div className="w-9 h-9 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 border border-amber-400/30">
                <Icon name="mail-line text-amber-600" />
              </div>
              <span>admissions@jsspolytechnic.edu</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
