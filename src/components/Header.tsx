import React from 'react';
import { ShoppingBag, Sparkles } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Header: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <header 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 via-pink-900/60 to-black/50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20"></div>
      </div>
      <div className="absolute bottom-32 right-16 animate-pulse">
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <ShoppingBag className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
          {config.hero.title}
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-pink-200">
          {config.hero.subtitle}
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
          {config.hero.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-3">
            <ShoppingBag className="w-6 h-6 group-hover:animate-bounce" />
            <span>Ver Coleção</span>
          </button>
          <button className="border-3 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl backdrop-blur-sm">
            Agendar Consultoria
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;