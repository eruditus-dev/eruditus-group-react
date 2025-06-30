
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';
import { services } from '@/data/servicesData';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  const half = Math.ceil(services.length / 2);
  const servicesCol1 = services.slice(0, half);
  const servicesCol2 = services.slice(half);

  return (
    <footer id="contacto" className="bg-[#10001a] border-t border-white/10 py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-white/60 max-w-xs text-sm">
              Transformando ideas en soluciones digitales extraordinarias.
            </p>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-white/80 mb-4 block tracking-wider">Servicios</span>
            <div className="flex flex-col space-y-3">
              {servicesCol1.map(service => (
                 <Link key={service.slug} to={`/servicio/${service.slug}`} className="text-white/60 hover:text-white transition-colors text-sm">{service.title}</Link>
              ))}
            </div>
          </div>

           <div>
            <span className="text-sm font-semibold text-white/80 mb-4 block tracking-wider opacity-0">Servicios</span>
            <div className="flex flex-col space-y-3">
              {servicesCol2.map(service => (
                 <Link key={service.slug} to={`/servicio/${service.slug}`} className="text-white/60 hover:text-white transition-colors text-sm">{service.title}</Link>
              ))}
            </div>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-white/80 mb-4 block tracking-wider">Empresa</span>
            <div className="flex flex-col space-y-3 mb-6">
                <a href="/#nosotros" className="text-white/60 hover:text-white transition-colors text-sm">Nosotros</a>
                <a href="#contacto" className="text-white/60 hover:text-white transition-colors text-sm">Contacto</a>
            </div>

            <span className="text-sm font-semibold text-white/80 mb-4 block tracking-wider">Contáctanos</span>
            <div className="space-y-2 text-white/60 text-sm">
              <p>info@eruditus.group</p>
              <p>305 8643021</p>
            </div>
            <div className="flex space-x-3 mt-6">
              <Button onClick={handleSocialClick} variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button onClick={handleSocialClick} variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button onClick={handleSocialClick} variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Eruditus.group. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
