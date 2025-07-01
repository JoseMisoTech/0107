import React, { useState } from 'react';
import { Mail, Send, ShoppingBag, Sparkles } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Contact: React.FC = () => {
  const config = useCompanyConfig();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-pink-300/10 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-white/10 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Fique por dentro das novidades!
          </h2>
          
          <p className="text-xl text-pink-100 mb-16 max-w-3xl mx-auto leading-relaxed">
            Cadastre seu e-mail e seja a primeira a saber sobre nossas novas coleções, promoções exclusivas e eventos especiais
          </p>

          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl max-w-2xl mx-auto border border-white/20">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Obrigada!
                </h3>
                <p className="text-pink-100 text-lg">
                  Você receberá nossas novidades em primeira mão!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu@email.com"
                    required
                    className="w-full pl-16 pr-6 py-6 border-2 border-white/30 rounded-2xl focus:border-yellow-400 focus:outline-none transition-colors text-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white py-6 px-8 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3"
                >
                  <Send className="w-6 h-6" />
                  <span>Quero receber novidades!</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;