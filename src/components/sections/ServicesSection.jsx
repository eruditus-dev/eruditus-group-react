import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/servicesData';

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tighter">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para impulsar tu presencia digital y optimizar tus procesos empresariales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            >
              <Link to={`/servicio/${service.slug}`} className="group block h-full">
                <div className="bg-[#1c1c1e] rounded-2xl p-6 h-full flex flex-col border border-transparent group-hover:border-purple-500/30 group-hover:bg-[#222224] transition-all duration-300">
                  <div className="flex-shrink-0 mb-4">
                    <div className="p-3 inline-block bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white/90 mb-2">{service.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <span className="flex items-center text-sm font-semibold text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      Más Información <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;