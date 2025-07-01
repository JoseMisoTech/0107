import React from 'react';
import { Award, Users, Heart, Sparkles } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const About: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full -translate-x-48 -translate-y-48 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full translate-x-48 translate-y-48 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {config.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-10">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-3xl border-l-4 border-pink-500 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">
                Nossa História
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {config.about.mission}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-3xl border-l-4 border-purple-500 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">
                Nossa Filosofia
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {config.about.vision}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
                <div className="text-gray-600">Clientes Satisfeitas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
                <div className="text-gray-600">Marcas Parceiras</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Nossa boutique"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8" />
                <div>
                  <div className="text-2xl font-bold">Atendimento</div>
                  <div className="text-pink-200">Personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;