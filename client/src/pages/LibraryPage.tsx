import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { Icon } from "@/lib/icons";

const LibraryPage = () => {
  const libraryStaff = [
    { 
      slNo: 1, 
      name: "Smt. Indira B", 
      designation: "Librarian", 
      qualification: "M.LISc, MA Literature", 
      email: "indirabenny@gmail.com" 
    },
    { 
      slNo: 2, 
      name: "Smt. Rekha D C", 
      designation: "Librarian", 
      qualification: "M.LISc", 
      email: "rekhadc3@gmail.com" 
    },
    { 
      slNo: 3, 
      name: "Smt. Thanuja K N", 
      designation: "Library Assistant", 
      qualification: "M.LISc, MA Economics", 
      email: "thanupriya2009@gmail.com" 
    },
    { 
      slNo: 4, 
      name: "Sri. Subramanya", 
      designation: "Attender", 
      qualification: "PUC", 
      email: "subbupreetham12345@gmail.com" 
    }
  ];

  const bookDetails = [
    { slNo: 1, programme: "Electronics & Communication Engineering", books: 2556 },
    { slNo: 2, programme: "Mechanical Engineering", books: 1921 },
    { slNo: 3, programme: "Civil Engineering", books: 1738 },
    { slNo: 4, programme: "Mechatronics Engineering", books: 467 },
    { slNo: 5, programme: "Electrical & Electronics Engineering", books: 758 },
    { slNo: 6, programme: "Computer Science & Engineering", books: 1382 },
    { slNo: 7, programme: "Science", books: 890 },
    { slNo: 8, programme: "General", books: 412 }
  ];

  const journals = ["CSR", "Frontline", "The Week", "Digit", "Electronic For You", "India Today"];
  const newspapers = ["Deccan Herald", "Indian Express", "Vijaya Karnataka", "Prajavani", "Andolana", "Daily news"];

  const totalBooks = bookDetails.reduce((sum, item) => sum + item.books, 0);

  const libraryFeatures = [
    {
      icon: "book-open-line",
      title: "10,124+ Books",
      description: "Comprehensive collection covering all engineering streams"
    },
    {
      icon: "time-line",
      title: "Extended Hours",
      description: "Open from 8:30 AM to 5:30 PM during exams"
    },
    {
      icon: "computer-line",
      title: "Digital Resources",
      description: "NDLI membership and Wi-Fi access throughout campus"
    },
    {
      icon: "bank-line",
      title: "Book Bank",
      description: "Special facility for SC/ST students"
    },
    {
      icon: "printer-line",
      title: "Reprographic",
      description: "Photostat and printing facility available"
    },
    {
      icon: "settings-line",
      title: "GURUKULA Software",
      description: "Automated library management system"
    }
  ];

  const rules = [
    "Students should register their name in the Login Register",
    "Personal belongings should be kept in track while entering the library",
    "Only blank sheets of paper are allowed inside for taking notes",
    "Maintain silence and discipline in and around the library",
    "Switch off mobile or keep it in silent mode",
    "All students are eligible to borrow books",
    "Borrowed books should be returned before the due date",
    "Check book condition before borrowing and report any damage",
    "Lost books must be replaced with same title, author, edition and publication",
    "No library item shall be taken out without due procedure"
  ];

  return (
    <PageLayout>
      <PageBanner 
        title="Library"
        subtitle="Resource Centre for Teaching and Learning"
        iconName="book-open-line"
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Facilities", href: "#" },
          { name: "Library", href: "/facilities/library" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* About Library */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="information-line mr-2 text-amber-500" />
                  <span>About Library</span>
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    The library is a resource centre for both teaching and learning. It is housed nearly 10,124 volumes covering all streams of Science and Engineering, and allied subjects. It has updated collection to the information need of the user community from time to time.
                  </p>
                  
                  <p>
                    The library and reference section consist of textbooks, reference books, Dictionaries, Projects report, Previous Question papers, Newspapers, Journals and Magazines related to curriculum also provides internet facility. JSSP Library is a member of The National Digital Library of India (NDLI).
                  </p>
                  
                  <p>
                    It is housed presently in C-Block of the polytechnic building with 85 sq.mts. carpet area. It has a comprehensive collection of literature predominantly related to engineering and self development to meet the present and future information needs of the users.
                  </p>
                  
                  <p>
                    The Library subscribes to important technical journals. The Library also has access to good number of E-Resources from renowned publishers, E-Resources can be access anywhere in the campus through Wi-Fi and LAN.
                  </p>
                </div>
              </motion.div>

              {/* Library Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="star-line mr-2 text-amber-500" />
                  <span>Library Features</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {libraryFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Icon name={`${feature.icon} text-amber-600`} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-primary mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Message from Librarian */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-r from-blue-50 to-primary/5 p-8 rounded-lg border border-blue-200"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-blue-400">
                  <Icon name="message-2-line mr-2 text-blue-500" />
                  <span>Message From Librarian</span>
                </h2>
                
                <div className="text-gray-700 space-y-4">
                  <p className="text-lg font-medium text-primary">
                    "It is a great pleasure to welcome you to the department of the Library which is the vital resource of our institution."
                  </p>
                  
                  <p>
                    The library act as a reservoir of resources for students and staff for their scholarly research and academic development.
                  </p>
                  
                  <p>
                    We at JSS Polytechnic Nanjangud are determined to provide best library services to produce and build dynamic knowledge power-house, capable of contributing to the development and welfare of society.
                  </p>
                  
                  <p className="font-medium text-primary">
                    Good luck in your studies and looking forward to your library visit.
                  </p>
                </div>
              </motion.div>

              {/* Library Staff */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="team-line mr-2 text-amber-500" />
                  <span>Library Staff</span>
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Name</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Designation</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qualification</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Email</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {libraryStaff.map((staff) => (
                        <tr key={staff.slNo}>
                          <td className="px-4 py-3 text-sm text-gray-900">{staff.slNo}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 font-medium">{staff.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{staff.designation}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{staff.qualification}</td>
                          <td className="px-4 py-3 text-sm text-blue-600">{staff.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Book Collection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="book-line mr-2 text-amber-500" />
                  <span>Book Collection</span>
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-blue-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Sl.No.</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Programme</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">No. of Books</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {bookDetails.map((item) => (
                        <tr key={item.slNo}>
                          <td className="px-4 py-3 text-sm text-gray-900">{item.slNo}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{item.programme}</td>
                          <td className="px-4 py-3 text-sm text-blue-600 font-semibold">{item.books.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="bg-amber-50 border-t-2 border-amber-200">
                        <td className="px-4 py-3 text-sm font-bold text-primary" colSpan={2}>Total</td>
                        <td className="px-4 py-3 text-sm font-bold text-primary">{totalBooks.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Journals & Newspapers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
              >
                <h2 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                  <Icon name="newspaper-line mr-2 text-amber-500" />
                  <span>Journals & Newspapers</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-medium text-lg text-primary mb-4 flex items-center">
                      <Icon name="file-text-line mr-2 text-blue-600" />
                      Journals
                    </h3>
                    <ul className="space-y-2">
                      {journals.map((journal, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span className="text-gray-700">{journal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg text-primary mb-4 flex items-center">
                      <Icon name="newspaper-line mr-2 text-green-600" />
                      Newspapers
                    </h3>
                    <ul className="space-y-2">
                      {newspapers.map((newspaper, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="arrow-right-s-line mr-2 text-amber-500" />
                          <span className="text-gray-700">{newspaper}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24"
              >
                <h3 className="font-poppins font-bold text-lg text-primary mb-6 pb-3 border-b border-gray-100">
                  Library Information
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="map-pin-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Location</span>
                      <p className="font-medium text-gray-800">C-Block, 85 Sq.mts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="time-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Lending Hours</span>
                      <p className="font-medium text-gray-800">10:00 AM - 5:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="book-open-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Reference Hours</span>
                      <p className="font-medium text-gray-800">8:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center border-b border-gray-100 pb-3">
                    <div className="w-8 h-8 bg-amber-400/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <Icon name="calendar-line text-amber-600" />
                    </div>
                    <div>
                      <span className="text-gray-500 text-sm">Borrowing Period</span>
                      <p className="font-medium text-gray-800">15 Days (2 Books Max)</p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-medium text-primary mb-4 pb-2 border-b border-gray-100">
                    Rules & Responsibilities
                  </h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {rules.map((rule, index) => (
                      <div key={index} className="flex items-start">
                        <Icon name="check-line mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <a
                    href="/about/contact"
                    className="block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-medium transition-all text-center shadow-md"
                  >
                    Contact Library
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LibraryPage;