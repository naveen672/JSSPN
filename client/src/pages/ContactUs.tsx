import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import PageBanner from "@/components/PageBanner";
import { motion } from "framer-motion";
import { Icon } from "@/lib/icons";
import GoogleMap from "@/components/GoogleMap";
import { contactInfo, socialLinks } from "@/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title
    document.title = "Contact Us - JSS Polytechnic";
  }, []);

  const { toast } = useToast();
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Mutation for submitting the contact form
  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
        variant: "default",
      });
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (name, email, message).",
        variant: "destructive",
      });
      return;
    }
    
    // Submit the form
    contactMutation.mutate(formData);
  };

  return (
    <PageLayout>
      <PageBanner 
        title="Contact Us"
        subtitle="Get in touch with JSS Polytechnic Nanjangud"
        iconName="contacts-line"
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Contact Us", href: "/about/contact" }
        ]}
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Contact information section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-14"
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-8 flex items-center pl-4 border-l-4 border-amber-400 max-w-xl mx-auto">
                <Icon name="information-line mr-2 text-amber-500" />
                <span>Institution Contact Information</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-amber-200 transition-colors">
                  <div className="flex flex-col items-center text-center mb-3">
                    <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mb-4 border border-amber-400/30">
                      <Icon name="map-pin-line text-2xl text-amber-600" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-3">Our Address</h3>
                  </div>
                  <div className="space-y-1 text-center">
                    {contactInfo[0].lines.map((line, index) => (
                      <p key={index} className="text-gray-700">{line}</p>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-amber-200 transition-colors">
                  <div className="flex flex-col items-center text-center mb-3">
                    <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mb-4 border border-amber-400/30">
                      <Icon name="phone-line text-2xl text-amber-600" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-3">Call Us</h3>
                  </div>
                  <div className="space-y-2 text-center">
                    {contactInfo[1].lines.map((line, index) => (
                      <p key={index} className="text-gray-700">{line}</p>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:border-amber-200 transition-colors">
                  <div className="flex flex-col items-center text-center mb-3">
                    <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mb-4 border border-amber-400/30">
                      <Icon name="mail-line text-2xl text-amber-600" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl text-primary mb-3">Email & Web</h3>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-gray-700">
                      <a 
                        href={`mailto:${contactInfo[2].lines[0]}`}
                        className="text-primary hover:text-amber-500 transition-colors"
                      >
                        {contactInfo[2].lines[0]}
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a 
                        href={`https://${contactInfo[2].lines[1]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-amber-500 transition-colors"
                      >
                        {contactInfo[2].lines[1]}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-4 flex items-center">
                  <Icon name="user-settings-line mr-2 text-amber-500" />
                  <span>Principal's Office</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 p-5 rounded-lg">
                    <h4 className="font-medium text-lg text-primary mb-2">N Vidyashankar</h4>
                    <p className="text-gray-600 mb-1">Principal</p>
                    <p className="text-gray-600 mb-3">JSS Polytechnic, Nanjangud</p>
                    <div className="flex items-center space-x-4 mt-2">
                      <a
                        href="tel:9886618231"
                        className="inline-flex items-center text-primary hover:text-amber-500 transition-colors"
                      >
                        <Icon name="phone-line mr-1 text-amber-500" />
                        <span>9886618231</span>
                      </a>
                      <a
                        href="mailto:jsspn324@gmail.com"
                        className="inline-flex items-center text-primary hover:text-amber-500 transition-colors"
                      >
                        <Icon name="mail-line mr-1 text-amber-500" />
                        <span>Email</span>
                      </a>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-5 rounded-lg">
                    <h4 className="font-medium text-lg text-primary mb-2">Office Hours</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Icon name="time-line mr-2 text-amber-500" />
                        <span className="text-gray-700">Monday to Friday: 9:00 AM to 5:00 PM</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="time-line mr-2 text-amber-500" />
                        <span className="text-gray-700">Saturday: 9:00 AM to 1:00 PM</span>
                      </li>
                      <li className="flex items-center">
                        <Icon name="calendar-close-line mr-2 text-amber-500" />
                        <span className="text-gray-700">Sunday & Public Holidays: Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact form section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-14"
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-8 flex items-center pl-4 border-l-4 border-amber-400 max-w-xl mx-auto">
                <Icon name="mail-send-line mr-2 text-amber-500" />
                <span>Send Us a Message</span>
              </h2>

              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-8 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-2 font-medium flex items-center">
                            <Icon name="user-line mr-2 text-amber-500" />
                            Your Name <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 shadow-sm"
                            placeholder="Enter your name"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium flex items-center">
                            <Icon name="mail-line mr-2 text-amber-500" />
                            Email Address <span className="text-red-500 ml-1">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 shadow-sm"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium flex items-center">
                            <Icon name="phone-line mr-2 text-amber-500" />
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 shadow-sm"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium flex items-center">
                            <Icon name="chat-1-line mr-2 text-amber-500" />
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 shadow-sm"
                            placeholder="Enter subject"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2 font-medium flex items-center">
                          <Icon name="chat-3-line mr-2 text-amber-500" />
                          Message <span className="text-red-500 ml-1">*</span>
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400 shadow-sm"
                          placeholder="Enter your message"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className={`${
                          contactMutation.isPending ? 'bg-gray-500' : 'bg-primary hover:bg-primary/90'
                        } text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center shadow-md`}
                      >
                        {contactMutation.isPending ? (
                          <>
                            <Icon name="loader-4-line mr-2 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Icon name="send-plane-line mr-2" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>

                  <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary/80 p-8 text-white">
                    <div className="w-16 h-16 bg-amber-400/30 rounded-full flex items-center justify-center mb-6 border border-amber-400/40 shadow-md">
                      <Icon name="customer-service-2-line text-2xl text-amber-300" />
                    </div>
                    <h3 className="font-poppins font-bold text-2xl mb-4 pl-4 border-l-4 border-amber-400">Get In Touch</h3>
                    <p className="text-white/80 mb-6">
                      We welcome your inquiries and feedback. Feel free to contact us through the form or using the contact details provided.
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-3 mt-8">Follow Us</h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.id}
                          href={link.href}
                          className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center hover:bg-amber-400/30 transition-all border border-amber-400/30"
                        >
                          <Icon name={`${link.icon} text-amber-300`} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="font-poppins font-bold text-2xl text-primary mb-8 flex items-center pl-4 border-l-4 border-amber-400 max-w-xl mx-auto">
                <Icon name="map-pin-line mr-2 text-amber-500" />
                <span>Our Location</span>
              </h2>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <p className="text-gray-700 mb-6 bg-primary/5 p-4 rounded-lg">
                    JSS Polytechnic, Nanjangud is strategically located with easy access to public transportation. 
                    Use the map below to find directions to our campus.
                  </p>
                  
                  <div className="h-[400px] border-2 border-amber-400/20 rounded-lg overflow-hidden">
                    <GoogleMap />
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <a 
                      href="https://maps.app.goo.gl/htjVxudFSL7P4yFL8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-white bg-primary hover:bg-primary/90 transition-all px-4 py-2 rounded-full shadow-md"
                    >
                      <Icon name="map-2-line mr-2" />
                      <span>View Larger Map</span>
                      <Icon name="external-link-line ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactUs;