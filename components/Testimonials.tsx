import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina Silva',
    role: 'Cliente VIP',
    content: 'Simplesmente a melhor nail designer da cidade! O acabamento é impecável e a durabilidade do alongamento me surpreendeu. Não troco por nada.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Juliana Costa',
    role: 'Modelo',
    content: 'O ambiente é super aconchegante e o atendimento é vip. Fiz o spa dos pés e saí pisando nas nuvens. Recomendo muito!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Beatriz Martins',
    role: 'Advogada',
    content: 'Sempre pontual e muito higiênica. Os materiais são de primeira e a criatividade para nail art é sem igual. Minhas unhas nunca estiveram tão saudáveis.',
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center text-stone-800 mb-16">
          O que dizem nossas clientes
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-rose-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-rose-200 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>
              <p className="text-stone-600 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden">
                  <img src="https://i.ibb.co/5XqVbShJ/Captura-de-tela-2025-12-02-155709.png" alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-stone-800">{review.name}</p>
                  <p className="text-xs text-stone-500 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;