import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center overflow-hidden"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
    </motion.button>
  );
};
