import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Olá! Sou sua consultora virtual de unhas. Em dúvida sobre qual cor ou formato escolher para seu evento? Pergunte-me! ✨💅' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getDesignAdvice(input);
      const aiMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: 'Desculpe, tive um problema técnico. Tente novamente!', isError: true };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">
        
        <div className="lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-rose-300 font-bold text-sm uppercase tracking-wider backdrop-blur-sm border border-white/10">
            <Sparkles className="w-4 h-4" />
            Powered by Gemini AI
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Não sabe qual design escolher?
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            Nossa Inteligência Artificial analisa a ocasião, seu estilo e as tendências do momento para sugerir a combinação perfeita para suas unhas.
          </p>
          <ul className="space-y-4 text-stone-300">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">1</div>
              <span>Descreva o evento (ex: casamento na praia, formatura).</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">2</div>
              <span>Conte suas preferências (ex: gosto de tons nude, unhas curtas).</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">3</div>
              <span>Receba uma sugestão personalizada instantaneamente!</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[500px]">
          <div className="bg-rose-50 p-4 border-b border-rose-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center text-rose-600">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-stone-800 text-sm">Lumière Assistant</h3>
              <p className="text-xs text-green-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-rose-500 text-white rounded-tr-none' 
                    : 'bg-stone-100 text-stone-800 rounded-tl-none border border-stone-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-stone-100 p-3 rounded-2xl rounded-tl-none border border-stone-200 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 text-rose-500 animate-spin" />
                  <span className="text-xs text-stone-500">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-stone-50 border-t border-stone-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: Vou ser madrinha, vestido azul..."
              className="flex-1 px-4 py-2 rounded-full border border-stone-300 focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-stone-800 text-sm"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-stone-900 text-white p-2 rounded-full hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default AiConsultant;