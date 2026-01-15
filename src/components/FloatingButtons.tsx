import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export const FloatingButtons = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I would like to book a free hearing test at REHEARing clinic."
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
  };

  const callNow = () => {
    window.open("tel:+919999999999");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={openWhatsApp}
        className="floating-btn right-6 bottom-24 bg-green-500 hover:bg-green-600 text-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      </motion.button>

      {/* Call Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        onClick={callNow}
        className="floating-btn right-6 bottom-6 bg-primary hover:bg-primary/90 text-primary-foreground"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </>
  );
};
