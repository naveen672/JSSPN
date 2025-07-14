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

  // MOU data for table
  const mouData = [
    {
      slNo: 1,
      company: "GTTC, Mysore",
      date: "05-04-2021",
      purpose: "Training",
    },
    {
      slNo: 2,
      company: "M/s Elkayem Auto Ancillaries (P) Ltd. Kadakola, Mysore",
      date: "30-08-2021",
      purpose: "Training & Placement",
    },
    {
      slNo: 3,
      company: "M/s Youth Tech, Mysore",
      date: "25-08-2021",
      purpose: "Training & Placement",
    },
    {
      slNo: 4,
      company: "M/s Sujaya Industries, Mysore",
      date: "31-08-2021",
      purpose: "Training & Placement",
    },
    {
      slNo: 5,
      company: "GTTC, Gundlupet",
      date: "16-09-2022",
      purpose: "Training",
    },
    {
      slNo: 6,
      company: "M/s Sundaram auto components Ltd. Kadakola, Mysore",
      date: "01-08-2023",
      purpose: "Training & Placement",
    },
    {
      slNo: 7,
      company: "M/s Triphase Technologies (P) Ltd. Mysore",
      date: "14-12-2023",
      purpose: "Training & Placement",
    },
    {
      slNo: 8,
      company: "M/s Rishi FIBC solutions Pvt. Ltd. Thandia, Mysuru",
      date: "29-07-2024",
      purpose: "Training & Placement",
    },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for list items
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
  };

  return (
    <PageLayout>
      <PageBanner
        title="Training & Placement"
        subtitle="Preparing students for successful careers"
        iconName="briefcase-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Placement", href: "#" },
          { name: "Training", href: "/placement/training" },
        ]}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Industry Collaborations Section */}
          <motion.div
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <Icon
                name="building-line"
                className="w-8 h-8 text-primary mr-3"
              />
              <h2 className="font-poppins font-bold text-4xl text-primary">
                Industry Collaborations
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {mouImages.map((image, index) => (
              <motion.div
                key={`mou-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-xl transition-shadow duration-300"
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

          {/* Objectives Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <Icon name="target-line" className="w-8 h-8 text-primary mr-3" />
              <h2 className="font-poppins font-bold text-4xl text-primary text-center">
                Objectives of III Cell
              </h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              The Industry-Institute-Interaction (III) Cell facilitates
              industrial training for a duration of 6 months for CO-OP scheme
              branches, in-plant training for approximately 16 weeks for non
              CO-OP scheme branches, and campus placements.
            </p>
            <ul className="space-y-4 text-gray-600 max-w-3xl mx-auto">
              {[
                "Enhance creativity and skills among our students.",
                "Analyze industry best practices and train students to meet company expectations.",
                "Create a learning environment with ethical and professional values.",
                "Build long-term relationships with companies.",
                "Ensure maximum number of opportunities for students.",
              ].map((objective, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  className="flex items-start"
                >
                  <Icon
                    name="checkbox-circle-line"
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                  />
                  <span>{objective}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CO-OP Scheme Industries Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <Icon name="factory-line" className="w-8 h-8 text-primary mr-3" />
              <h2 className="font-poppins font-bold text-4xl text-primary text-center">
                CO-OP Scheme Industries
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 max-w-3xl mx-auto">
              {[
                "M/S BEL, Bangalore",
                "M/S BHEL, Bangalore",
                "M/S AO Smith, Kanakapura, Bangalore",
                "M/S Micron EMS, Bangalore",
                "M/S Kaynes Technology, Mysore",
                "M/S Elkayem Auto Ancillary Pvt Ltd, Kadakola",
                "M/S SACL, Kadakola",
                "M/S Rishi FIBC Solutions Pvt. Ltd. Thandia, Mysuru",
              ].map((industry, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  className="flex items-start"
                >
                  <Icon
                    name="building-2-line"
                    className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0"
                  />
                  <span>{industry}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Training Statistics Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <Icon
                name="bar-chart-line"
                className="w-8 h-8 text-primary mr-3"
              />
              <h2 className="font-poppins font-bold text-4xl text-primary text-center">
                Training Statistics
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 max-w-3xl mx-auto">
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItemVariants}
                custom={0}
              >
                <strong className="flex items-center">
                  <Icon
                    name="calendar-check-line"
                    className="w-6 h-6 text-primary mr-2"
                  />
                  CO-OP Scheme:
                </strong>{" "}
                As of June 2024, students undergo 6 months of industrial
                training at various esteemed organizations approved by the Board
                of Apprenticeship Training, Chennai.{" "}
                <a
                  href="/assets/coop-training.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline transition-colors duration-200"
                >
                  <Icon name="file-download-line" className="w-5 h-5 mr-1" />
                  View/Download PDF
                </a>
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listItemVariants}
                custom={1}
              >
                <strong className="flex items-center">
                  <Icon
                    name="calendar-check-line"
                    className="w-6 h-6 text-primary mr-2"
                  />
                  Non CO-OP Scheme:
                </strong>{" "}
                Over the last three years (2021-22, 2022-23, and 2023-24),
                students completed 4-month internships at various esteemed
                organizations.{" "}
                <a
                  href="/assets/non-coop-training.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline transition-colors duration-200"
                >
                  <Icon name="file-download-line" className="w-5 h-5 mr-1" />
                  View/Download PDF
                </a>
              </motion.p>
            </div>
          </motion.div>

          {/* MoU Table Section */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex items-center justify-center mb-6">
              <Icon
                name="file-text-line"
                className="w-8 h-8 text-primary mr-3"
              />
              <h2 className="font-poppins font-bold text-4xl text-primary text-center">
                Memorandum of Understanding (MoU)
              </h2>
            </div>
            <div className="overflow-x-auto shadow-md rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-4 border-b font-semibold text-gray-700">
                      Sl.No
                    </th>
                    <th className="p-4 border-b font-semibold text-gray-700">
                      Name of the Company
                    </th>
                    <th className="p-4 border-b font-semibold text-gray-700">
                      Date of MoU Signed
                    </th>
                    <th className="p-4 border-b font-semibold text-gray-700">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mouData.map((item, index) => (
                    <motion.tr
                      key={item.slNo}
                      className="hover:bg-gray-50 transition-colors duration-200"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={listItemVariants}
                      custom={index}
                    >
                      <td className="p-4 border-b">{item.slNo}</td>
                      <td className="p-4 border-b">{item.company}</td>
                      <td className="p-4 border-b">{item.date}</td>
                      <td className="p-4 border-b">{item.purpose}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TrainingPage;
