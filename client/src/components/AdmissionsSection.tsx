import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import { admissionSteps, importantDates } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdmissionsSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="admissions" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-medium px-4 py-1 rounded-full text-sm mb-4">
            Admissions
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-text mb-4">
            Join Our Institution
          </h2>
          <p className="text-gray-600">
            Take the first step towards a rewarding technical career by enrolling in our diploma programs.
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
              <h3 className="font-poppins font-semibold text-2xl text-primary mb-6">
                Admission Process
              </h3>
              <div className="space-y-6">
                {admissionSteps.map((step) => (
                  <div key={step.id} className="flex items-start">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="font-poppins font-semibold text-primary">{step.id}</span>
                    </div>
                    <div>
                      <h4 className="font-poppins font-medium text-lg mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-2xl text-primary mb-6">
                Important Dates
              </h3>
              <div className="space-y-4">
                {importantDates.map((date) => (
                  <div key={date.id} className="border-l-4 border-accent pl-4 py-2">
                    <h4 className="font-poppins font-medium text-lg mb-1">{date.title}</h4>
                    <p className="text-gray-600">{date.date}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-all text-center"
                >
                  Apply Now
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
          <h3 className="font-poppins font-semibold text-2xl text-primary mb-4">
            Have Questions About Admissions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our admissions team is ready to assist you with any queries regarding eligibility, application process, or program details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91-8765432100"
              className="flex items-center bg-white border border-gray-200 hover:border-primary px-5 py-3 rounded-md text-gray-700 hover:text-primary transition-all"
            >
              <Icon name="phone-line mr-2 text-primary" />
              <span>+91-8765432100</span>
            </a>
            <a
              href="mailto:admissions@jsspolytechnic.edu"
              className="flex items-center bg-white border border-gray-200 hover:border-primary px-5 py-3 rounded-md text-gray-700 hover:text-primary transition-all"
            >
              <Icon name="mail-line mr-2 text-primary" />
              <span>admissions@jsspolytechnic.edu</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
