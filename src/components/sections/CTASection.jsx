import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const CTASection = () => {
  const {
    toast
  } = useToast();
  const handleContactClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀"
    });
  };
  return <section className="py-28 px-6">
      <div className="container mx-auto text-center">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tighter">¿Listo para transformar tu negocio?
        </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos llevar tu empresa al siguiente nivel digital.
          </p>
          
          <Button onClick={handleContactClick} size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-xl hover:shadow-purple-500/20 text-white font-bold px-8 py-6 text-base rounded-full transition-all duration-300">
            Solicitar Cotización <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>;
};
export default CTASection;