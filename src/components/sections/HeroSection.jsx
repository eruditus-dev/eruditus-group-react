import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CodeTypingBackground from './CodeTypingBackground';

const HeroSection = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden bg-gradient-to-br from-[#0a0818] via-[#0e0820] to-[#080614]">
      <CodeTypingBackground />
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tighter animated-gradient-text"
          >
            Soluciones Digitales de Vanguardia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Transformamos ideas en experiencias digitales extraordinarias. Creamos el futuro digital de tu empresa con tecnología de punta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-base rounded-full transition-all transition-colors duration-300"
            >
              <span className="relative z-20 flex items-center">
                Comenzar Proyecto <ArrowRight className="ml-2 h-5 w-5" />
              </span>
              <span className="absolute inset-0 z-10 pointer-events-none">
                <span className="absolute top-0 left-[-75%] h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 group-hover:animate-sheen rounded-full blur-md"></span>
              </span>
            </Button>

            <Button 
              onClick={handleContactClick}
              variant="outline"
              size="lg"
              className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-full transition-colors duration-300"
            >
              Ver Portfolio
            </Button>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-code {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-code {
          animation: scroll-code 90s linear infinite;
        }

        @keyframes sheen {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        .group-hover\:animate-sheen:hover .group-hover\\:animate-sheen {
          animation: sheen 1.5s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
