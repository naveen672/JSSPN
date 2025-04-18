import { motion } from "framer-motion";
import { useState } from "react";
import { Icon } from "@/lib/icons";
import { contactInfo, socialLinks } from "@/lib/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import GoogleMap from "@/components/GoogleMap";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation<HTMLDivElement>();
  const { toast } = useToast();
  
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <section id="contact" className="py-20 bg-gradient-to-r from-[#1a365d] to-[#2d3748] text-white relative">
      {/* Dark and elegant texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2256%22 height=%2256%22 viewBox=%220 0 56 56%22%3E%3Cpath fill=%22%23fff%22 d=%22M28 0L0 28l28 28 28-28L28 0zm0 51.75L4.25 28 28 4.25 51.75 28 28 51.75z%22/%3E%3C/svg%3E')] bg-repeat"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-white/20 text-white font-medium px-4 py-1 rounded-full text-sm mb-4">
            <Icon name="contacts-line mr-2" />
            Contact Us
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-white/80">
            Have questions or need more information? Reach out to us, and we'll be happy to assist you.
          </p>
        </motion.div>

        <motion.div
          ref={infoRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: infoVisible ? 1 : 0, y: infoVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactInfo.map((info) => (
            <div key={info.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Icon name={`${info.icon} text-2xl text-white`} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">{info.title}</h3>
              {info.lines.map((line, index) => (
                <p key={index} className="text-white/80 mb-2">{line}</p>
              ))}
            </div>
          ))}
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: formVisible ? 1 : 0, y: formVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg mt-12 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="font-poppins font-semibold text-2xl text-primary mb-6 flex items-center">
                <Icon name="mail-send-line mr-2 text-primary" />
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2 flex items-center">
                    <Icon name="user-line mr-2 text-gray-500" />
                    Your Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2 flex items-center">
                    <Icon name="mail-line mr-2 text-gray-500" />
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2 flex items-center">
                    <Icon name="chat-1-line mr-2 text-gray-500" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 flex items-center">
                    <Icon name="chat-3-line mr-2 text-gray-500" />
                    Message <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className={`${
                    contactMutation.isPending ? 'bg-gray-500' : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600'
                  } text-gray-900 px-6 py-3 rounded-md font-medium transition-all w-full flex items-center justify-center shadow-md`}
                >
                  {contactMutation.isPending ? (
                    <>
                      <Icon name="loader-4-line mr-2 animate-spin text-gray-900" />
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

            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] h-full flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Icon name="customer-service-2-line text-3xl text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4">We're Here to Help</h3>
                <p className="text-white/90 mb-6">
                  Our support team is available Monday to Friday, 9:00 AM to 5:00 PM to assist you with any queries.
                </p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                    >
                      <Icon name={`${link.icon} text-white`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mapVisible ? 1 : 0, y: mapVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-poppins font-semibold text-2xl text-primary mb-4 flex items-center">
              <Icon name="map-pin-line mr-2 text-primary" />
              <span>Visit Our Campus</span>
            </h3>
            <p className="text-gray-700 mb-6">
              JSS Polytechnic, Nanjangud is strategically located with easy access to public transportation. 
              Use the map below to find directions to our campus.
            </p>
            
            <GoogleMap />
            
            <div className="mt-4 flex justify-end">
              <a 
                href="https://maps.app.goo.gl/htjVxudFSL7P4yFL8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <span>View Larger Map</span>
                <Icon name="external-link-line ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
