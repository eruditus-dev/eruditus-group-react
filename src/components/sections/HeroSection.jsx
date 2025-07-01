import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };


  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
<motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-wide text-white animated-shadow-soft"
>
  Soluciones Digitales de Vanguardia
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          >
            Transformamos ideas en experiencias digitales extraordinarias. Creamos el futuro digital de tu empresa con tecnología de punta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/20 text-white font-bold px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              Comenzar Proyecto <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={handleContactClick}
              variant="outline"
              size="lg"
              className="border-white/20 text-white/80 hover:bg-white/10 hover:text-white px-8 py-6 text-base rounded-full transition-all duration-300"
            >
              Ver Portfolio
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
