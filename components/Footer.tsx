import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-serif font-bold text-white mb-2">Lumière Nail Studio</h2>
                <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
            </div>
            
            <div className="flex space-x-6">
                <a href="#" className="hover:text-rose-400 transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href="#" className="hover:text-rose-400 transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href="#" className="hover:text-rose-400 transition-colors"><Twitter className="w-6 h-6" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;