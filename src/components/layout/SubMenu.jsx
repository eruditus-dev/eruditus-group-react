
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SubMenu = ({ services, closeSubMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 bg-[#1e0033]/95 backdrop-blur-lg border-b border-white/10 shadow-2xl"
    >
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          <div className="md:col-span-1 pr-8">
            <h3 className="text-pink-500 font-bold mb-4 text-sm tracking-wider uppercase">Nuestros Servicios</h3>
            <p className="text-white/60 text-sm">
              Soluciones digitales diseñadas para impulsar tu negocio al siguiente nivel.
            </p>
          </div>
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                to={`/servicio/${service.slug}`} 
                className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-200"
                onClick={closeSubMenu}
              >
                <div className="flex-shrink-0 p-2 bg-white/10 rounded-md transition-colors duration-300 group-hover:bg-purple-600">
                  <service.icon className="w-5 h-5 text-pink-400 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover:text-pink-400 transition-colors duration-300 text-sm">{service.title}</p>
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
