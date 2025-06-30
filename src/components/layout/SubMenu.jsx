import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SubMenu = ({ services, closeSubMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 bg-gradient-to-b from-[#1e0033] to-[#10001a] border-b border-white/10 shadow-2xl"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <h3 className="text-pink-500 font-bold mb-4 text-sm tracking-wider uppercase">Nuestros Servicios</h3>
            <p className="text-white/60 text-sm mb-6">
              Soluciones digitales diseñadas para impulsar tu negocio al siguiente nivel.
            </p>
            <Link 
              to="/#servicios" 
              onClick={closeSubMenu}
              className="group inline-flex items-center text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
            >
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                to={`/servicio/${service.slug}`} 
                className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                onClick={closeSubMenu}
              >
                <div className="flex-shrink-0 mt-1 p-2 bg-white/10 rounded-lg transition-colors duration-300 group-hover:bg-purple-600">
                  <service.icon className="w-5 h-5 text-pink-400 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white transition-colors duration-300 mb-1">{service.title}</p>
                  <p className="text-xs text-white/50 transition-colors duration-300 group-hover:text-white/70">
                    {service.features[0]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubMenu;