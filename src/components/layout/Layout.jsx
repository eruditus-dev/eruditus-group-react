import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import Chatbot from '@/components/chatbot/Chatbot';

const pageVariants = {
  initial: { opacity: 0, y: 5 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -5 },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.3,
};

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster />
      <Chatbot />
    </div>
  );
};

export default Layout;