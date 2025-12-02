import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png', title: 'Francesinha Moderna' },
    { url: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png', title: 'Almond Nude' },
    { url: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png', title: 'Baby Boomer' },
    { url: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png', title: 'Encapsulada Gold' },
    { url: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png', title: 'Stiletto Red' },
    { url: 'https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png', title: 'Glitter Ombré' },
  ];

  return (
    <section id="gallery" className="py-24 bg-rose-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-stone-800 mb-4">Nosso Portfólio</h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Cada unha é uma tela em branco. Confira algumas das nossas criações favoritas e inspire-se para o seu próximo atendimento.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-serif text-xl italic">{img.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block border-b-2 border-stone-800 pb-1 text-stone-800 font-bold hover:text-rose-500 hover:border-rose-500 transition-colors uppercase tracking-widest text-sm">
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;