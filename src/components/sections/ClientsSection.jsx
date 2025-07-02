import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
  const clients = [
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
    { name: 'Miacargo Logistics', logo: 'https://eruditus-assets.eruditus.cloud/1a7aa45ee6b636232186f74d95ec9d6b.jpg' },
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-2 px-2 sm:px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent tracking-tighter">
            Clientes que confían en nosotros
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Empresas y marcas que nos han elegido para llevar sus proyectos digitales al siguiente nivel
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex space-x-12 scroller">
          {duplicatedClients.map((client, index) => (
            <motion.div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-purple-500/30 transition-all duration-300">
<img 
  src={client.logo} 
  alt={`Logo de ${client.name}`}
  className="max-w-[220px] h-auto aspect-[3/1] object-contain mx-auto filter brightness-90 group-hover:brightness-110 transition-all duration-60"
/>
              </div>
              <p className="text-center text-sm text-white/60 mt-3 group-hover:text-white/80 transition-colors duration-100">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-background to-transparent pointer-events-none z-20"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
