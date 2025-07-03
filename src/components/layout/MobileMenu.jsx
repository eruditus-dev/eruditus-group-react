
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Home } from 'lucide-react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';

const MobileMenu = ({ isOpen, setIsOpen, services, handleContactClick }) => {
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const onContactClick = () => {
    handleLinkClick();
    handleContactClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-background/55 backdrop-blur-xl z-50 flex flex-col p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-12 flex-shrink-0">
            <Logo />
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6 text-center">
            <Link 
              to="/" 
              onClick={handleLinkClick} 
              className="flex items-center justify-center space-x-2 text-2xl font-bold text-white hover:text-pink-500 transition-colors"
            >
              <Home className="w-6 h-6" />
              <span>Inicio</span>
            </Link>
            <a href="/#nosotros" onClick={handleLinkClick} className="text-2xl font-bold text-white hover:text-pink-500 transition-colors">Nosotros</a>
            <a href="/#contacto" onClick={handleLinkClick} className="text-2xl font-bold text-white hover:text-pink-500 transition-colors">Contacto</a>
            
            <div className="pt-6 border-t border-white/10">
                <p className="text-pink-500 font-bold mb-4 text-sm tracking-wider">Servicios</p>
                <div className="flex flex-col space-y-4">
                    {services.map((service) => (
                        <Link 
                            key={service.slug} 
                            to={`/servicio/${service.slug}`}
                            onClick={handleLinkClick}
                            className="text-lg text-white/80 hover:text-white transition-colors"
                        >
                            {service.title}
                        </Link>
                    ))}
                </div>
            </div>
          </nav>

          <div className="mt-12 text-center">
             <Button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/20 text-white font-semibold rounded-full px-8 py-3 text-lg w-full"
            >
              Cotizar Proyecto
            </Button>
          </div>

          <div className="mt-auto text-center pt-12">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Eruditus.group</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
