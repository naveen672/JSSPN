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
    <section id="contact" className="py-20 bg-[#183b6c] text-white relative">
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
          className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="map-pin-line text-lg text-white" />
            </div>
            <span className="text-white text-sm">JSS Polytechnic, Suttur Road, Nanjangud</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="phone-line text-lg text-white" />
            </div>
            <span className="text-white text-sm">+91 8212482800</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="mail-line text-lg text-white" />
            </div>
            <span className="text-white text-sm">principal@jssnpoly.org</span>
          </div>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: formVisible ? 1 : 0, y: formVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg mt-12 max-w-4xl mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            <div className="md:col-span-7 p-8">
              <h3 className="font-poppins font-semibold text-2xl text-primary mb-6 flex items-center">
                <Icon name="mail-send-line mr-2 text-primary" />
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium flex items-center">
                      <Icon name="user-line mr-2 text-primary" />
                      Your Name <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium flex items-center">
                      <Icon name="mail-line mr-2 text-primary" />
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium flex items-center">
                    <Icon name="chat-1-line mr-2 text-primary" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium flex items-center">
                    <Icon name="chat-3-line mr-2 text-primary" />
                    Message <span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary shadow-sm"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className={`${
                    contactMutation.isPending ? 'bg-gray-500' : 'bg-primary hover:bg-primary/90'
                  } text-white px-6 py-3 rounded-lg font-medium transition-all w-full flex items-center justify-center shadow-md`}
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

            <div className="md:col-span-5 bg-gradient-to-br from-[#183b6c] to-[#0c2444] flex items-center">
              <div className="text-white p-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Icon name="customer-service-2-line text-2xl text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-2xl mb-4">Contact Information</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Icon name="map-pin-line text-xl mr-3 mt-1 text-white/80" />
                    <span className="text-white/90">JSS Polytechnic, Suttur Road, Nanjangud - 571301, Karnataka</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="phone-line text-xl mr-3 text-white/80" />
                    <span className="text-white/90">+91 8212482800</span>
                  </li>
                  <li className="flex items-center">
                    <Icon name="mail-line text-xl mr-3 text-white/80" />
                    <span className="text-white/90">principal@jssnpoly.org</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
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
