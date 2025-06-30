
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

const ChatbotButton = ({ onClick, isOpen }) => {
  const auraSmallRing = {
    rest: { scale: 1, opacity: 0 },
    hover: {
      scale: 1.6,
      opacity: 0.3,
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  const auraLargeRing = {
    rest: { scale: 1, opacity: 0 },
    hover: {
      scale: 2.2,
      opacity: 0.15,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-700 text-white shadow-lg flex items-center justify-center z-[60] cursor-pointer hover:from-purple-500 hover:to-indigo-600 transition-colors"
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
    >
      <motion.div
        variants={auraSmallRing}
        className="absolute inset-0 rounded-full bg-purple-400"
      />
      <motion.div
        variants={auraLargeRing}
        className="absolute inset-0 rounded-full bg-purple-400"
      />

      <div className="z-10">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={isOpen ? 'x' : 'chat'}
            initial={{ y: -20, opacity: 0, rotate: -30 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 30 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};

export default ChatbotButton;
