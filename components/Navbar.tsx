import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Início', href: '#home', id: 'home' },
    { name: 'Serviços', href: '#services', id: 'services' },
    { name: 'Sobre', href: '#about', id: 'about' },
    { name: 'Portfólio', href: '#gallery', id: 'gallery' },
    { name: 'Depoimentos', href: '#testimonials', id: 'testimonials' },
  ];

  // Função para controlar o Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset maior para detectar a seção antes dela chegar no topo

      let currentSection = 'home';
      
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = link.id;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função de rolagem suave manual
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120; // Espaço para o cabeçalho flutuante não cobrir o título
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      {/* Container Principal Flutuante - pointer-events-none para não bloquear cliques nas laterais */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        
        {/* Navbar Card - pointer-events-auto para permitir interação com o menu */}
        <nav className="pointer-events-auto bg-white/90 backdrop-blur-md border border-white/40 shadow-xl shadow-stone-200/50 rounded-full p-2 pl-6 pr-2 flex items-center justify-between transition-all duration-300 max-w-5xl w-full mx-auto md:w-auto">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="font-serif font-bold text-stone-800 flex items-center gap-1 text-lg mr-4 md:mr-8 cursor-pointer select-none"
          >
            <Sparkles className="w-4 h-4 text-rose-400" />
            Lumière<span className="text-rose-400">.</span>
          </a>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`
                    relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex flex-col items-center justify-center cursor-pointer select-none
                    ${activeSection === link.id 
                      ? 'bg-stone-100 text-stone-900 shadow-inner' 
                      : 'text-stone-500 hover:text-rose-500 hover:bg-stone-50'}
                  `}
                >
                  {/* Indicador traço preto no topo */}
                  {activeSection === link.id && (
                    <span className="absolute top-1.5 w-5 h-0.5 bg-stone-800 rounded-full"></span>
                  )}
                  {/* Ajuste de margem para compensar visualmente o indicador */}
                  <span className={activeSection === link.id ? 'mt-1' : ''}>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Divisor Desktop */}
            <div className="hidden md:block w-px h-6 bg-stone-200 mx-2"></div>

            {/* Botão Agendar */}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hidden md:block bg-stone-900 text-white px-6 py-2.5 rounded-full hover:bg-rose-500 transition-all shadow-md text-sm font-bold cursor-pointer"
            >
              Agendar
            </a>

            {/* Toggle Mobile */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-full bg-stone-100 text-stone-800 hover:bg-rose-100 hover:text-rose-500 transition-colors focus:outline-none active:scale-95 transform cursor-pointer"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      <div 
        className={`
          fixed inset-x-4 top-24 z-40 md:hidden
          transform transition-all duration-300 ease-in-out origin-top
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}
        `}
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-4 border border-white/50 ring-1 ring-black/5">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`
                    flex items-center justify-between px-6 py-4 rounded-2xl text-lg font-medium transition-all cursor-pointer
                    ${activeSection === link.id 
                      ? 'bg-stone-100 text-stone-900 font-bold' 
                      : 'text-stone-500 hover:bg-rose-50 hover:text-rose-500'}
                  `}
                >
                  {link.name}
                  {activeSection === link.id && <div className="w-2 h-2 rounded-full bg-rose-500"></div>}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-stone-100 mt-2">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block w-full bg-stone-900 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:bg-rose-500 transition-colors cursor-pointer"
              >
                Agendar Horário
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;