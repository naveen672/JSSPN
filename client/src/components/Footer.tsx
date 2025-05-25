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
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 overflow-hidden shadow-lg border-2 border-amber-400">
                <img src={logoImage} alt="JSS Polytechnic Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-poppins font-bold text-white text-xl block leading-tight">
                  JSS Polytechnic
                </span>
                <span className="text-xs text-white/70">Nanjangud</span>
              </div>
            </div>
            <p className="text-white/80 mb-6 backdrop-blur-sm bg-white/5 p-4 rounded-lg shadow-inner border border-white/10">
              JSS Polytechnic Nanjangud was established in the academic year 1983-84. It offers three year diploma courses in Electronics & Communication Engineering, Mechanical Engineering, Civil Engineering, Mechatronics Engineering, Computer Science & Engineering and Electrical & Electronics Engineering.
            </p>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all duration-300 shadow-md border border-white/20"
                >
                  <Icon name={`${link.icon} text-white`} />
                </a>
              ))}
            </div>
            
            <VisitorCounter />
          </div>

          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-6 relative pl-4 border-l-4 border-amber-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center text-white/70 hover:text-amber-400 hover:pl-2 transition-all duration-300"
                  >
                    <Icon name="arrow-right-s-line mr-2 text-amber-400" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-6 relative pl-4 border-l-4 border-amber-400">Programs</h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="flex items-center text-white/70 hover:text-amber-400 hover:pl-2 transition-all duration-300"
                  >
                    <Icon name="graduation-cap-line mr-2 text-amber-400" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-bold text-lg text-white mb-6 relative pl-4 border-l-4 border-amber-400">Contact Info</h3>
            <ul className="space-y-4">
              {footerContactInfo.map((info) => (
                <li key={info.id} className="flex items-start">
                  <Icon name={`${info.icon} text-amber-400 ${info.icon === 'map-pin-line' ? 'mt-1' : ''} mr-3`} />
                  <span className="text-white/70">{info.text}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://maps.app.goo.gl/htjVxudFSL7P4yFL8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-amber-400 mt-4 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/10"
            >
              <Icon name="map-2-line mr-2" />
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0 flex items-center">
              <Icon name="copyright-line mr-1" />
              © {new Date().getFullYear()} <span className="font-semibold mx-1">JSS Polytechnic Nanjangud.</span> All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
              {footerLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-white/60 text-sm hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Icon name="user-filled mr-2 text-amber-400" />
                <span className="text-sm mr-1">Total Visitors:</span>
                <span className="text-amber-400 font-semibold text-sm">
                  <VisitorCounter displayMode="compact" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
