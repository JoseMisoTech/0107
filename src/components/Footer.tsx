import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ShoppingBag } from 'lucide-react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const Footer: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Informações da Loja</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {config.company.address}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg">
                  {config.company.phone}
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300 text-lg">
                  {config.company.email}
                </p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-2">
                <strong>CNPJ:</strong> {config.company.cnpj}
              </p>
              <p className="text-sm text-gray-400">
                {config.company.fullName}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-8">Links Úteis</h3>
            
            <div className="space-y-6">
              <a
                href="/politica-privacidade"
                className="flex items-center space-x-3 text-pink-400 hover:text-pink-300 transition-colors text-lg group"
              >
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Política de Privacidade</span>
              </a>
              
              <div className="pt-6">
                <h4 className="font-semibold mb-4 text-xl">Horário de Funcionamento</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Segunda a Sexta: 9h às 19h</p>
                  <p>Sábado: 9h às 17h</p>
                  <p>Domingo: 10h às 16h</p>
                </div>
              </div>
              
              <div className="pt-6">
                <h4 className="font-semibold mb-4 text-xl">Contato</h4>
                <div className="space-y-2 text-gray-300">
                  <p>{config.company.phone}</p>
                  <p>{config.company.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © Copyright 2024 {config.company.fullName} - Todos os Direitos Reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;