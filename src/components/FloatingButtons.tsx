import { motion } from "framer-motion";

export const FloatingButtons = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I would like to book a free hearing test at REHEARing clinic."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onClick={openWhatsApp}
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pure WhatsApp SVG Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 175.216 175.552"
        className="w-8 h-8"
      >
        <defs>
          <linearGradient id="whatsapp-gradient" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#57d163"/>
            <stop offset="1" stopColor="#23b33a"/>
          </linearGradient>
        </defs>
        <path fill="#fff" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324a60.995 60.995 0 0 0 31.085 8.513h.027c33.725 0 61.154-27.429 61.17-61.153a60.791 60.791 0 0 0-17.895-43.251 60.788 60.788 0 0 0-43.215-17.9z"/>
        <path fill="#fff" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324a60.995 60.995 0 0 0 31.085 8.513h.027c33.725 0 61.154-27.429 61.17-61.153a60.791 60.791 0 0 0-17.895-43.251 60.788 60.788 0 0 0-43.215-17.9z"/>
        <path fill="#fff" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647z"/>
      </svg>
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
    </motion.button>
  );
};
