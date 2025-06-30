import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white/80">
            Con la confianza de empresas líderes
          </h2>
        </motion.div>
        
        <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
          <motion.div
            className="flex"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              ease: 'linear',
              duration: 50,
              repeat: Infinity,
            }}
          >
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Legis">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Legis" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Geomatrix">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Geomatrix" src="https://images.unsplash.com/photo-1646939222913-1cba94051fe3" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Solfluinco">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Solfluinco" src="https://images.unsplash.com/photo-1636114673156-052a83459fc1" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Guio">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Guio" src="https://images.unsplash.com/photo-1575821104894-b683ce7525ff" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Chimeneas el chalet">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Chimeneas el chalet" src="https://images.unsplash.com/photo-1586731214571-271df7b95cab" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="acpef">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de acpef" src="https://images.unsplash.com/photo-1689019764322-2f4d41817f60" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Ligautismo">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Ligautismo" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Miacargo Logistics">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Miacargo Logistics" src="https://images.unsplash.com/photo-1681783050350-6833746d717e" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Camacero">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Camacero" src="https://images.unsplash.com/photo-1681935833519-ad8419f9d55a" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Interior vision designs">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Interior vision designs" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="+medicos">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de +medicos" src="https://images.unsplash.com/photo-1540287731691-369d64579fcd" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Easy2go">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Easy2go" src="https://images.unsplash.com/photo-1633575071864-feffbd84723d" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Porteco">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Porteco" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Textiles Unoxuno">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Textiles Unoxuno" src="https://images.unsplash.com/photo-1505308088817-f1e3cb2a2f63" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Joserrago">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Joserrago" src="https://images.unsplash.com/photo-1513600684907-999315c1b06b" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Exhibidores y diseños">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Exhibidores y diseños" src="https://images.unsplash.com/photo-1675473086331-bfd4aebb45ac" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Zonatesis">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Zonatesis" src="https://images.unsplash.com/photo-1643101447396-81d5c65ce03f" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Creativetime360">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Creativetime360" src="https://images.unsplash.com/photo-1690900553517-0eeec3553f4f" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Mamanunzia">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Mamanunzia" src="https://images.unsplash.com/photo-1692897711480-6931f061a159" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Flaminio angulo">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Flaminio angulo" src="https://images.unsplash.com/photo-1651513358203-217d19c55cb3" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Alteca calefacción">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Alteca calefacción" src="https://images.unsplash.com/photo-1700124084147-995973b6a970" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="M3 automatismos">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de M3 automatismos" src="https://images.unsplash.com/photo-1518841252147-00cc0a43dcaf" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Tecsil">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Tecsil" src="https://images.unsplash.com/photo-1603678610745-e67e8223b697" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Atráeme">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Atráeme" src="https://images.unsplash.com/photo-1689019764322-2f4d41817f60" />
            </div>
            
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Legis">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Legis" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Geomatrix">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Geomatrix" src="https://images.unsplash.com/photo-1646939222913-1cba94051fe3" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Solfluinco">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Solfluinco" src="https://images.unsplash.com/photo-1636114673156-052a83459fc1" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Guio">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Guio" src="https://images.unsplash.com/photo-1575821104894-b683ce7525ff" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Chimeneas el chalet">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Chimeneas el chalet" src="https://images.unsplash.com/photo-1586731214571-271df7b95cab" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="acpef">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de acpef" src="https://images.unsplash.com/photo-1689019764322-2f4d41817f60" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Ligautismo">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Ligautismo" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Miacargo Logistics">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Miacargo Logistics" src="https://images.unsplash.com/photo-1681783050350-6833746d717e" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Camacero">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Camacero" src="https://images.unsplash.com/photo-1681935833519-ad8419f9d55a" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Interior vision designs">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Interior vision designs" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="+medicos">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de +medicos" src="https://images.unsplash.com/photo-1540287731691-369d64579fcd" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Easy2go">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Easy2go" src="https://images.unsplash.com/photo-1633575071864-feffbd84723d" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Porteco">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Porteco" src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Textiles Unoxuno">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Textiles Unoxuno" src="https://images.unsplash.com/photo-1505308088817-f1e3cb2a2f63" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Joserrago">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Joserrago" src="https://images.unsplash.com/photo-1513600684907-999315c1b06b" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Exhibidores y diseños">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Exhibidores y diseños" src="https://images.unsplash.com/photo-1675473086331-bfd4aebb45ac" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Zonatesis">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Zonatesis" src="https://images.unsplash.com/photo-1643101447396-81d5c65ce03f" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Creativetime360">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Creativetime360" src="https://images.unsplash.com/photo-1690900553517-0eeec3553f4f" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Mamanunzia">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Mamanunzia" src="https://images.unsplash.com/photo-1692897711480-6931f061a159" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Flaminio angulo">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Flaminio angulo" src="https://images.unsplash.com/photo-1651513358203-217d19c55cb3" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Alteca calefacción">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Alteca calefacción" src="https://images.unsplash.com/photo-1700124084147-995973b6a970" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="M3 automatismos">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de M3 automatismos" src="https://images.unsplash.com/photo-1518841252147-00cc0a43dcaf" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Tecsil">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Tecsil" src="https://images.unsplash.com/photo-1603678610745-e67e8223b697" />
            </div>
            <div className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-8" title="Atráeme">
              <img  className="max-h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" alt="Logo de Atráeme" src="https://images.unsplash.com/photo-1689019764322-2f4d41817f60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
