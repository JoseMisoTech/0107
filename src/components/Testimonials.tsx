import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Testimonials: React.FC = () => {
  const config = useCompanyConfig();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            O que dizem nossas clientes
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Histórias reais de transformação e satisfação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {config.testimonials.map((testimonial, index) => {
            const gradients = [
              'from-pink-500/10 to-rose-500/10',
              'from-purple-500/10 to-indigo-500/10',
              'from-indigo-500/10 to-blue-500/10'
            ];
            
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradients[index % gradients.length]} backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-pink-300 opacity-50" />
                  <blockquote className="text-white mb-6 leading-relaxed text-lg italic pl-6">
                    {testimonial.text}
                  </blockquote>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <p className="font-semibold text-white text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-purple-200 text-sm mt-1">
                    Cliente Satisfeita
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;