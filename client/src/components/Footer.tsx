import { Icon } from "@/lib/icons";
import { 
  quickLinks, 
  programLinks, 
  footerContactInfo, 
  socialLinks,
  footerLinks
} from "@/lib/constants";
import VisitorCounter from "@/components/VisitorCounter";
import logoImage from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-text text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center mr-3 overflow-hidden">
                <img src={logoImage} alt="JSS Polytechnic Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-poppins font-semibold text-white text-lg block leading-tight">
                  JSS Polytechnic
                </span>
                <span className="text-xs text-gray-400">Nanjangud</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality technical education since 1965, creating industry-ready professionals through practical training and innovative teaching methods.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-9 h-9 bg-white/10 rounded flex items-center justify-center hover:bg-primary transition-all"
                >
                  <Icon name={`${link.icon} text-white`} />
                </a>
              ))}
            </div>
            
            <VisitorCounter />
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300"
                  >
                    <Icon name="arrow-right-s-line mr-2 text-primary" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg text-white mb-6">Programs</h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-accent hover:pl-2 transition-all duration-300"
                  >
                    <Icon name="graduation-cap-line mr-2 text-primary" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              {footerContactInfo.map((info) => (
                <li key={info.id} className="flex items-start">
                  <Icon name={`${info.icon} text-primary ${info.icon === 'map-pin-line' ? 'mt-1' : ''} mr-3`} />
                  <span className="text-gray-400">{info.text}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://maps.app.goo.gl/htjVxudFSL7P4yFL8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-primary mt-4 hover:text-accent transition-colors"
            >
              <Icon name="map-2-line mr-2" />
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} JSS Polytechnic Nanjangud. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-gray-500 text-sm hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
