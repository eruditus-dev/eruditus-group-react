
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';
import SubMenu from '@/components/layout/SubMenu';
import MobileMenu from '@/components/layout/MobileMenu';
import { services } from '@/data/servicesData';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  const closeSubMenu = () => setIsSubMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      closeSubMenu();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeSubMenu();
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#1e0033]/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}
        onMouseLeave={closeSubMenu}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" onClick={closeSubMenu}>
                <Logo />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:flex items-center space-x-8"
            >
              <div 
                className="relative"
                onMouseEnter={() => setIsSubMenuOpen(true)}
              >
                <button 
                  className="flex items-center space-x-1 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <span>Servicios</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <a href="/#nosotros" className="text-white/70 hover:text-white transition-colors duration-300" onClick={closeSubMenu}>Nosotros</a>
              <a href="/#contacto" className="text-white/70 hover:text-white transition-colors duration-300" onClick={closeSubMenu}>Contacto</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Button 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/20 text-white font-semibold rounded-full px-6"
              >
                Cotizar Proyecto
              </Button>
            </motion.div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(true)} className="text-white/80 hover:text-white">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>
        
        <AnimatePresence>
          {isSubMenuOpen && <SubMenu services={services} closeSubMenu={closeSubMenu} />}
        </AnimatePresence>

      </header>
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen} 
        services={services}
        handleContactClick={handleContactClick}
      />
    </>
  );
};

export default Header;
