import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511999999999?text=Olá! Vim pelo site e gostaria de saber mais sobre os produtos."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-full bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-shadow duration-300"
      // Fitts' Law: Corner placement for easy access on mobile
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline">Fale Conosco</span>
      
      {/* Pulse animation for attention */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20" />
    </motion.a>
  );
};

export default WhatsAppButton;
