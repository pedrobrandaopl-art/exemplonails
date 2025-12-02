import React from 'react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl font-serif font-bold mb-6">Agende seu horário</h2>
                    <p className="text-stone-400 mb-8 text-lg">
                        Pronta para transformar suas unhas? Entre em contato pelo WhatsApp ou visite nosso estúdio. Atendemos apenas com hora marcada para garantir sua exclusividade.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400 shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                                <p className="text-stone-400">(11) 99999-9999</p>
                                <a href="#" className="text-rose-400 text-sm hover:underline mt-1 inline-block">Clique para conversar</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400 shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Endereço</h4>
                                <p className="text-stone-400">Av. Paulista, 1000 - Sala 405<br/>Bela Vista, São Paulo - SP</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400 shrink-0">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Horário</h4>
                                <p className="text-stone-400">Terça a Sábado: 09h às 19h<br/>Domingo e Segunda: Fechado</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white text-stone-800 rounded-2xl p-8 shadow-2xl">
                    <form className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold mb-6">Envie uma mensagem</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-stone-600">Nome</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 outline-none transition-all" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-stone-600">Telefone</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 outline-none transition-all" placeholder="(00) 00000-0000" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-stone-600">Serviço de Interesse</label>
                            <select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 outline-none transition-all">
                                <option>Banho de Gel</option>
                                <option>Alongamento em Fibra</option>
                                <option>Manutenção</option>
                                <option>Spa dos Pés</option>
                                <option>Outro</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-stone-600">Mensagem</label>
                            <textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 outline-none transition-all h-32" placeholder="Olá, gostaria de agendar..."></textarea>
                        </div>
                        <button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:-translate-y-1">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;