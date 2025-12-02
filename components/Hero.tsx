import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-100/50 -z-10 rounded-bl-[100px] hidden md:block"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <span className="inline-block px-4 py-1 bg-rose-200 text-rose-800 rounded-full text-sm font-bold tracking-wider uppercase mb-2">
            Especialista em Nail Design
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-800 leading-tight">
            Sua beleza começa <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600">
              pelas mãos.
            </span>
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-lg">
            Transforme suas unhas em obras de arte. Técnicas avançadas de alongamento, banho de gel e nail art exclusiva para elevar sua autoestima.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group bg-stone-900 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
              Agendar Horário
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#gallery" className="px-8 py-4 rounded-full font-bold text-stone-700 border-2 border-stone-200 hover:border-rose-400 hover:text-rose-500 transition-all flex items-center justify-center">
              Ver Portfólio
            </a>
          </div>

          <div className="pt-8 flex items-center gap-8">
            <div>
              <p className="text-3xl font-serif font-bold text-stone-800">5k+</p>
              <p className="text-sm text-stone-500 uppercase tracking-wide">Clientes Felizes</p>
            </div>
            <div className="w-px h-12 bg-stone-300"></div>
            <div>
              <p className="text-3xl font-serif font-bold text-stone-800">8 Anos</p>
              <p className="text-sm text-stone-500 uppercase tracking-wide">Experiência</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden md:block">
          <div className="relative">
            <img 
              src="https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png" 
              alt="Unhas elegantes" 
              className="rounded-t-full rounded-b-[200px] shadow-2xl w-full max-w-md mx-auto object-cover border-8 border-white"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center text-2xl">💅</div>
                <div>
                  <p className="font-bold text-stone-800">Qualidade Premium</p>
                  <p className="text-sm text-stone-500">Produtos importados e técnicas seguras.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;