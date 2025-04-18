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
    <section id="contact" className="py-20 bg-primary text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: headerVisible ? 1 : 0, y: headerVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-amber-400/20 text-amber-300 font-medium px-4 py-1 rounded-full text-sm mb-4 flex items-center justify-center mx-auto w-fit">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-400/30 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 bg-amber-400/30 rounded-full flex items-center justify-center">
              <Icon name="map-pin-line text-lg text-amber-300" />
            </div>
            <span className="text-white text-sm">JSS Polytechnic, Suttur Road, Nanjangud</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-400/30 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 bg-amber-400/30 rounded-full flex items-center justify-center">
              <Icon name="phone-line text-lg text-amber-300" />
            </div>
            <span className="text-white text-sm">+91 8212482800</span>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-400/30 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300 shadow-md">
            <div className="w-9 h-9 bg-amber-400/30 rounded-full flex items-center justify-center">
              <Icon name="mail-line text-lg text-amber-300" />
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
              <h3 className="font-poppins font-bold text-2xl text-primary mb-6 flex items-center pl-4 border-l-4 border-amber-400">
                <Icon name="mail-send-line mr-2 text-amber-500" />
                Send Us a Message
              </h3>
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
                    rows={5}
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
                  } text-white px-6 py-3 rounded-full font-medium transition-all w-full flex items-center justify-center shadow-md`}
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
                      <Icon name="arrow-right-line ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-primary to-primary/80 flex items-center">
              <div className="text-white p-8">
                <div className="w-16 h-16 bg-amber-400/30 rounded-full flex items-center justify-center mb-6 border border-amber-400/40 shadow-md">
                  <Icon name="customer-service-2-line text-2xl text-amber-300" />
                </div>
                <h3 className="font-poppins font-bold text-2xl mb-4 pl-4 border-l-4 border-amber-400">Contact Information</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start bg-white/5 p-3 rounded-lg border border-white/10 shadow-inner">
                    <Icon name="map-pin-line text-xl mr-3 mt-1 text-amber-400" />
                    <span className="text-white/90">JSS Polytechnic, Suttur Road, Nanjangud - 571301, Karnataka</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10 shadow-inner">
                    <Icon name="phone-line text-xl mr-3 text-amber-400" />
                    <span className="text-white/90">+91 8212482800</span>
                  </li>
                  <li className="flex items-center bg-white/5 p-3 rounded-lg border border-white/10 shadow-inner">
                    <Icon name="mail-line text-xl mr-3 text-amber-400" />
                    <span className="text-white/90">principal@jssnpoly.org</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold text-lg mb-3">Follow Us</h4>
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
        
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mapVisible ? 1 : 0, y: mapVisible ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="font-poppins font-bold text-2xl text-primary mb-4 flex items-center pl-4 border-l-4 border-amber-400">
              <Icon name="map-pin-line mr-2 text-amber-500" />
              <span>Visit Our Campus</span>
            </h3>
            <p className="text-gray-700 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
              JSS Polytechnic, Nanjangud is strategically located with easy access to public transportation. 
              Use the map below to find directions to our campus.
            </p>
            
            <div className="border-2 border-amber-400/20 rounded-lg overflow-hidden">
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
