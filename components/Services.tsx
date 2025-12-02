import React from 'react';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: '1',
    title: 'Banho de Gel',
    description: 'Fortalecimento das unhas naturais com uma camada de gel, proporcionando brilho e durabilidade.',
    price: 'R$ 120,00',
    image: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png'
  },
  {
    id: '2',
    title: 'Alongamento em Fibra',
    description: 'Técnica realista e resistente que proporciona alongamento natural e fino.',
    price: 'R$ 250,00',
    image: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png'
  },
  {
    id: '3',
    title: 'Nail Art Exclusiva',
    description: 'Designs personalizados, encapsulados, pedrarias e desenhos à mão livre.',
    price: 'A partir de R$ 50,00',
    image: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png'
  },
  {
    id: '4',
    title: 'Spa dos Pés',
    description: 'Tratamento completo com esfoliação, hidratação profunda e massagem relaxante.',
    price: 'R$ 90,00',
    image: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Nossos Serviços</h2>
          <p className="text-stone-600 text-lg">
            Oferecemos uma experiência completa de cuidado e beleza, utilizando os melhores produtos do mercado para garantir saúde e sofisticação para suas unhas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="group bg-rose-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-600 text-sm mb-4 h-16">{service.description}</p>
                <div className="flex justify-between items-center border-t border-rose-200 pt-4">
                  <span className="font-serif font-bold text-rose-500 text-lg">{service.price}</span>
                  <button className="text-stone-800 text-sm font-bold uppercase tracking-wider hover:text-rose-500 transition-colors">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;