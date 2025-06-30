import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import Logo from '@/components/Logo';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = () => {
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
    });
  };

  return (
    <footer id="contacto" className="bg-[#161617] border-t border-white/10 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-white/60 max-w-sm">
              Transformando ideas en soluciones digitales extraordinarias.
            </p>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-white/80 mb-4 block uppercase tracking-wider">Servicios</span>
            <div className="flex flex-col space-y-2">
              <Link to="/servicio/desarrollo-web" className="text-white/60 hover:text-white transition-colors">Desarrollo Web</Link>
              <Link to="/servicio/e-commerce" className="text-white/60 hover:text-white transition-colors">E-commerce</Link>
              <Link to="/servicio/optimizacion-seo" className="text-white/60 hover:text-white transition-colors">Optimización SEO</Link>
              <Link to="/servicio/chatbots" className="text-white/60 hover:text-white transition-colors">Chatbots</Link>
            </div>
          </div>
          
          <div>
            <span className="text-sm font-semibold text-white/80 mb-4 block uppercase tracking-wider">Contacto</span>
            <div className="space-y-2 text-white/60">
              <p>developer@eruditusgroup</p>
              <p>305 8643021</p>
            </div>
            <div className="flex space-x-2 mt-4">
              <Button onClick={handleSocialClick} variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">LI</Button>
              <Button onClick={handleSocialClick} variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">TW</Button>
              <Button onClick={handleSocialClick} variant="ghost" size="sm" className="text-white/60 hover:text-white p-2">GH</Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Eruditus Group ® . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;