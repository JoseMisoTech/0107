import React from 'react';
import { Shirt, Users, Gem, Sparkles, Heart, Star, Shield, Zap } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const iconMap = {
  shirt: Shirt,
  users: Users,
  gem: Gem,
  sparkles: Sparkles,
  heart: Heart,
  star: Star,
  shield: Shield,
  zap: Zap,
};

const Services: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Nossa Coleção
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa seleção exclusiva de moda e acessórios cuidadosamente escolhidos para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {config.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Heart;
            const gradients = [
              'from-pink-500 to-rose-500',
              'from-purple-500 to-indigo-500',
              'from-indigo-500 to-blue-500',
              'from-blue-500 to-cyan-500'
            ];
            
            return (
              <div
                key={index}
                className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Explorar</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;