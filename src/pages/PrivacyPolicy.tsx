import React from 'react';
import { useCompanyConfig } from '../hooks/useCompanyConfig';

const PrivacyPolicy: React.FC = () => {
  const config = useCompanyConfig();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidade
          </h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Informações Gerais</h2>
              <p className="leading-relaxed">
                Esta Política de Privacidade descreve como a <strong>{config.company.fullName}</strong>, 
                inscrita no CNPJ {config.company.cnpj}, coleta, usa e protege suas informações pessoais 
                quando você utiliza nossos serviços ou visita nosso website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              <p className="leading-relaxed mb-4">Coletamos as seguintes informações:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Informações de contato (nome, e-mail, telefone)</li>
                <li>Informações sobre sua empresa e necessidades de negócio</li>
                <li>Dados de navegação e cookies para melhorar sua experiência</li>
                <li>Informações fornecidas voluntariamente em formulários de contato</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
              <p className="leading-relaxed mb-4">Utilizamos suas informações para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Responder às suas solicitações e dúvidas</li>
                <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Proteção de Dados</h2>
              <p className="leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para 
                proteger suas informações pessoais contra acesso não autorizado, alteração, 
                divulgação ou destruição.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Compartilhamento de Informações</h2>
              <p className="leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto quando necessário para fornecer nossos serviços ou quando exigido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Seus Direitos</h2>
              <p className="leading-relaxed mb-4">Você tem o direito de:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Corrigir informações incorretas</li>
                <li>Solicitar a exclusão de suas informações</li>
                <li>Retirar seu consentimento a qualquer momento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação. Você pode 
                desabilitar os cookies em seu navegador, mas isso pode afetar a funcionalidade 
                do nosso website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contato</h2>
              <p className="leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                entre em contato conosco:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p><strong>E-mail:</strong> {config.company.email}</p>
                <p><strong>Telefone:</strong> {config.company.phone}</p>
                <p><strong>Endereço:</strong> {config.company.address}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Alterações nesta Política</h2>
              <p className="leading-relaxed">
                Podemos atualizar esta Política de Privacidade ocasionalmente. As alterações 
                serão publicadas nesta página e entrarão em vigor imediatamente.
              </p>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;