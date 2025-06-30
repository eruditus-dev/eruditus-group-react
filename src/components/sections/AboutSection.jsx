import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tighter">
              ¿Por qué elegir Eruditus?
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Somos un equipo de expertos apasionados por la tecnología, comprometidos con entregar soluciones que no solo cumplan, sino que superen las expectativas de nuestros clientes.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mt-1">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white/90 mb-1">Experiencia Comprobada</h3>
                  <p className="text-white/60">Más de 5 años desarrollando soluciones digitales exitosas para clientes de todo el mundo.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mt-1">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white/90 mb-1">Equipo Especializado</h3>
                  <p className="text-white/60">Profesionales certificados en las últimas tecnologías, listos para afrontar cualquier desafío.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mt-1">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white/90 mb-1">Calidad Garantizada</h3>
                  <p className="text-white/60">Procesos rigurosos de testing y control de calidad para un producto final impecable.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-[#1c1c1e] rounded-3xl p-4 border border-white/10">
              <img  alt="Equipo de desarrollo colaborando en una oficina moderna y luminosa" class="w-full h-auto object-cover rounded-2xl" src="https://images.unsplash.com/photo-1556761175-b413da4baf72" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;