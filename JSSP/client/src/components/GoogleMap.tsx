import { useEffect, useRef } from "react";

const GoogleMap = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (mapContainerRef.current) {
      const mapContainer = mapContainerRef.current;
      
      // Create an iframe with Google Maps embed
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.4411329081965!2d76.68120549999999!3d12.1110896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7c26f8139517%3A0x526bb485b11f47fa!2sJSS%20Polytechnic%20for%20Differently%20Abled!5e0!3m2!1sen!2sin!4v1681888291657!5m2!1sen!2sin";
      iframe.style.border = "0";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.allowFullscreen = true;
      
      // Clear and append the iframe
      mapContainer.innerHTML = "";
      mapContainer.appendChild(iframe);
    }
  }, []);
  
  return (
    <div 
      ref={mapContainerRef} 
      className="rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full h-96"
    />
  );
};

export default GoogleMap;