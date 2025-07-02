import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
  const clients = [
    { name: 'Legis', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Legis_logo.png' },
    { name: 'Geomatrix', logo: 'https://geomatrix.co/logo.svg' },
    { name: 'Solfluinco', logo: 'https://solfluinco.com/logo.png' },
    { name: 'Guio', logo: 'https://guio.com.co/logo.svg' },
    { name: 'Chimeneas el chalet', logo: 'https://chimeneaselchalet.com/logo.png' },
    { name: 'ACPEF', logo: 'https://acpef.org/wp-content/uploads/2024/05/acpef-logo.png' },
    { name: 'Ligautismo', logo: 'https://ligautismo.org/logo.png' },
    { name: 'Miacargo Logistics', logo: 'https://miacargo.com/logo.png' },
    { name: 'Camacero', logo: 'https://camacero.com/logo.svg' },
    { name: 'Interior Vision Designs', logo: 'https://interiorvisiondesigns.com/logo.png' },
    { name: '+Medicos', logo: 'https://masmedicos.com/logo.svg' },
    { name: 'Easy2go', logo: 'https://easy2go.co/logo.png' },
    { name: 'Porteco', logo: 'https://porteco.com/logo.svg' },
    { name: 'Textiles Unoxuno', logo: 'https://unoxuno.com.co/logo.svg' },
    { name: 'Joserrago', logo: 'https://joserrago.com/logo.png' },
    { name: 'Exhibidores y diseños', logo: 'https://exhibidoresydisenos.com/logo.svg' },
    { name: 'Zonatesis', logo: 'https://zonatesis.com/logo.png' },
    { name: 'Creativetime360', logo: 'https://creativetime360.com/logo.png' },
    { name: 'Mamanunzia', logo: 'https://mamanunzia.com/logo.svg' },
    { name: 'Flaminio Angulo', logo: 'https://flaminioangulo.com/logo.svg' },
    { name: 'Alteca Calefacción', logo: 'https://alteca.com/logo.svg' },
    { name: 'M3 Automatismos', logo: 'https://m3automatismos.com/logo.svg' },
    { name: 'Tecsil', logo: 'https://tecsil.com/logo.png' },
    { name: 'Atráeme', logo: 'https://atraeme.com.co/logo.png' }
  ];

  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 px-2 sm:px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
                  className="w-12 h-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-100"
                />
              </div>
              <p className="text-center text-sm text-white/60 mt-3 group-hover:text-white/80 transition-colors duration-100">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
