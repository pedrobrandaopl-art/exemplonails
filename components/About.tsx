import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-rose-200 rounded-2xl z-0"></div>
            <img 
              src="https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png" 
              alt="Nail Designer Profissional" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-serif font-bold text-stone-800">
              Olá, sou a <span className="text-rose-500">Amanda</span>
            </h2>
            <h3 className="text-xl text-stone-600 font-medium">Especialista em Alongamentos e Nail Art</h3>
            <p className="text-stone-600 leading-relaxed">
              Com mais de 8 anos de experiência no mercado de beleza, dedico minha carreira a elevar a autoestima de mulheres através do cuidado com as unhas. Formada internacionalmente em técnicas de gel e acrílico, busco sempre a perfeição nos detalhes e a saúde das unhas naturais.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Meu estúdio foi pensado para ser um refúgio de tranquilidade em meio à rotina agitada. Aqui, você não apenas faz as unhas, mas vive uma experiência de autocuidado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {['Biossegurança rigorosa', 'Produtos Importados', 'Atendimento Personalizado', 'Ambiente Climatizado'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-rose-500" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
