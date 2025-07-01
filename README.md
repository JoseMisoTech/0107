# Site Profissional para Lojas de Moda

Este é um site profissional desenvolvido especificamente para lojas de moda e boutiques, otimizado para aprovação no Facebook Business Management.

## 👗 Características Principais

- **Design Fashion**: Layout moderno e elegante adequado para lojas de moda
- **Configuração Fácil**: Altere todas as informações da loja através do arquivo `src/data/companyConfig.json`
- **Compliance Facebook**: Otimizado para passar na verificação do Facebook Business Management
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca

## 📋 Seções Incluídas

1. **Header/Hero**: Apresentação principal com visual fashion e gradientes modernos
2. **Coleção**: Seção destacando os principais produtos e serviços da loja
3. **Sobre a Loja**: História e filosofia da boutique
4. **Depoimentos**: Feedback de clientes satisfeitas
5. **Newsletter**: Cadastro de e-mail para novidades e promoções
6. **Footer**: Informações completas da loja (CNPJ, endereço, horários)
7. **Política de Privacidade**: Página dedicada para compliance

## 🔧 Como Personalizar

### 1. Informações da Loja
Edite o arquivo `src/data/companyConfig.json` com as informações da sua loja:

```json
{
  "company": {
    "shortName": "NOME CURTO DA LOJA",
    "fullName": "NOME COMPLETO DA LOJA LTDA",
    "address": "ENDEREÇO COMPLETO",
    "cnpj": "XX.XXX.XXX/XXXX-XX",
    "phone": "(XX) XXXXX-XXXX",
    "email": "contato@loja.com.br",
    "website": "loja.com.br"
  }
}
```

### 2. Produtos/Serviços
Modifique a seção `services` no arquivo de configuração para refletir os produtos específicos da sua loja.

### 3. Depoimentos
Atualize a seção `testimonials` com depoimentos reais de suas clientes.

### 4. Imagens
As imagens são carregadas do Pexels. Você pode alterar as URLs no arquivo de configuração para usar suas próprias imagens.

## 🚀 Como Executar

1. Clone o projeto
2. Instale as dependências: `npm install`
3. Execute em modo desenvolvimento: `npm run dev`
4. Para produção: `npm run build`

## ✅ Checklist para Facebook Business Management

- [x] Informações claras da loja (nome, CNPJ, endereço)
- [x] Página de política de privacidade
- [x] Informações de contato funcionais
- [x] Design profissional e confiável
- [x] Conteúdo relevante sobre moda e produtos
- [x] Meta tags otimizadas
- [x] Estrutura HTML semântica

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:
- Dispositivos móveis (< 768px)
- Tablets (768px - 1024px)
- Desktops (> 1024px)

## 🎨 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **Lucide React** para ícones
- **React Router** para navegação
- **Vite** como bundler

Este template pode ser facilmente adaptado para diferentes tipos de lojas de moda, bastando alterar o arquivo de configuração JSON.