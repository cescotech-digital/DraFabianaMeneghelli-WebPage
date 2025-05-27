// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex-1 flex justify-start">
            <nav className={`hidden md:flex space-x-8 text-sm font-medium text-gray-700`}>
              <a href="#sobre" className="hover:text-[#C6A97C] transition-colors duration-300 cursor-pointer whitespace-nowrap">Sobre</a>
              <a href="#servicos" className="hover:text-[#C6A97C] transition-colors duration-300 cursor-pointer whitespace-nowrap">Serviços</a>
              <a href="#diferenciais" className="hover:text-[#C6A97C] transition-colors duration-300 cursor-pointer whitespace-nowrap">Diferenciais</a>
            </nav>
          </div>
          
          <div className="flex-1 flex justify-center">
            <a href="#" className="cursor-pointer">
              <img src="/1mm.jpg" alt="Dra. Fabiana Meneghelli" className="h-16" />
            </a>
          </div>
          
          <div className="flex-1 flex justify-end">
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
              <a href="#depoimentos" className="hover:text-[#C6A97C] transition-colors duration-300 cursor-pointer whitespace-nowrap">Depoimentos</a>
              <a href="#contato" className="hover:text-[#C6A97C] transition-colors duration-300 cursor-pointer whitespace-nowrap">Contato</a>
            </nav>
            <button className="ml-8 hidden md:block bg-[#C6A97C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">Agendar Consulta</button>
            
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden text-gray-700">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-4 space-y-3 text-center">
            <a href="#sobre" className="block text-gray-700 hover:text-[#C6A97C] cursor-pointer">Sobre</a>
            <a href="#servicos" className="block text-gray-700 hover:text-[#C6A97C] cursor-pointer">Serviços</a>
            <a href="#diferenciais" className="block text-gray-700 hover:text-[#C6A97C] cursor-pointer">Diferenciais</a>
            <a href="#depoimentos" className="block text-gray-700 hover:text-[#C6A97C] cursor-pointer">Depoimentos</a>
            <a href="#contato" className="block text-gray-700 hover:text-[#C6A97C] cursor-pointer">Contato</a>
            <button className="w-full bg-[#C6A97C] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">Agendar Consulta</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Elegant%20beauty%20clinic%20interior%20with%20soft%20lighting%2C%20minimalist%20decor%20in%20nude%20and%20gold%20tones%2C%20creating%20a%20sophisticated%20and%20welcoming%20atmosphere%20for%20facial%20treatments%2C%20with%20blurred%20background%20showing%20treatment%20area%20and%20subtle%20luxury%20details&width=1440&height=800&seq=hero-bg-1&orientation=landscape" 
            alt="Clínica de estética" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-gray-800 mb-6 leading-tight">
              Sua essência, realçada com leveza e naturalidade
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-light">
              Descubra o cuidado personalizado que valoriza sua beleza natural, com tratamentos exclusivos e resultados harmônicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#C6A97C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
                Agendar Consulta
              </button>
              <button className="border border-[#C6A97C] text-[#C6A97C] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#C6A97C] hover:bg-opacity-10 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
                Conheça Nossos Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-[#FDF9F6]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-5/12 overflow-hidden rounded-lg">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20in%20white%20coat%2C%20elegant%20and%20confident%2C%20in%20a%20modern%20aesthetic%20clinic%20with%20soft%20lighting%2C%20gold%20and%20nude%20color%20accents%2C%20sophisticated%20medical%20environment%2C%20portrait%20style%20with%20neutral%20expression&width=600&height=800&seq=doctor-1&orientation=portrait" 
                alt="Dra. Fabiana Meneghelli" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="md:w-7/12">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6">Dra. Fabiana M. Meneghelli</h2>
              <div className="w-20 h-1 bg-[#C6A97C] mb-8"></div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Biomédica especialista em estética avançada e harmonização facial, com mais de 10 anos de experiência dedicados à beleza que respeita a naturalidade de cada rosto.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Formada pela Universidade de São Paulo com especialização em procedimentos estéticos minimamente invasivos, a Dra. Fabiana desenvolveu uma abordagem única que valoriza a individualidade de cada paciente.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Sua filosofia de trabalho é baseada na compreensão profunda das necessidades de cada pessoa, criando protocolos personalizados que realçam a beleza natural, proporcionando resultados harmônicos e duradouros.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center">
                  <i className="fas fa-award text-[#C6A97C] mr-2"></i>
                  <span className="text-gray-700 text-sm">Especialista em Harmonização Facial</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-certificate text-[#C6A97C] mr-2"></i>
                  <span className="text-gray-700 text-sm">Membro da Sociedade Brasileira de Estética</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-user-md text-[#C6A97C] mr-2"></i>
                  <span className="text-gray-700 text-sm">Mais de 5.000 procedimentos realizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-[#C6A97C] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos tratamentos personalizados que valorizam sua beleza natural, com técnicas avançadas e produtos de alta qualidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FDF9F6] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-magic text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Harmonização Facial</h3>
              <p className="text-gray-600 mb-6">
                Conjunto de procedimentos que visam equilibrar os traços faciais, proporcionando resultados naturais e harmônicos, respeitando as características individuais.
              </p>
              <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center cursor-pointer">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
            
            {/* Serviço 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FDF9F6] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-syringe text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Toxina Botulínica</h3>
              <p className="text-gray-600 mb-6">
                Tratamento que suaviza linhas de expressão e previne o envelhecimento, proporcionando um aspecto rejuvenescido sem perder a naturalidade das expressões.
              </p>
              <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center cursor-pointer">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
            
            {/* Serviço 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FDF9F6] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-fill-drip text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Preenchimento Facial</h3>
              <p className="text-gray-600 mb-6">
                Recupera o volume facial perdido com o tempo, preenche sulcos e melhora o contorno, devolvendo a jovialidade com resultados imediatos.
              </p>
              <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center cursor-pointer">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
            
            {/* Serviço 4 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FDF9F6] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-dna text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Bioestimulador de Colágeno</h3>
              <p className="text-gray-600 mb-6">
                Estimula a produção natural de colágeno, melhorando a firmeza e elasticidade da pele, com resultados progressivos e duradouros.
              </p>
              <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center cursor-pointer">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
            
            {/* Serviço 5 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FDF9F6] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-tint text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Skinbooster</h3>
              <p className="text-gray-600 mb-6">
                Hidratação profunda que melhora a qualidade da pele, aumentando sua luminosidade, textura e elasticidade, ideal para todos os tipos de pele.
              </p>
              <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center cursor-pointer">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
            
            {/* Serviço 6 */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-[#FDF9F6] rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-spa text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Cuidados com a Pele</h3>
              <p className="text-gray-600 mb-6">
                Protocolos personalizados para tratamento e prevenção de problemas cutâneos, com produtos e técnicas avançadas para uma pele saudável.
              </p>
              <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center cursor-pointer">
                Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-[#C6A97C] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-20 bg-[#FDF9F6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">Nossos Diferenciais</h2>
            <div className="w-20 h-1 bg-[#C6A97C] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O que torna nossa clínica única e especial para cuidar da sua beleza.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Diferencial 1 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <i className="fas fa-user-md text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Atendimento Personalizado</h3>
              <p className="text-gray-600">
                Cada paciente recebe um protocolo exclusivo, desenvolvido após análise detalhada das suas necessidades e objetivos estéticos.
              </p>
            </div>
            
            {/* Diferencial 2 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <i className="fas fa-gem text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Ambiente Acolhedor</h3>
              <p className="text-gray-600">
                Nossa clínica foi projetada para proporcionar conforto e tranquilidade, com espaços elegantes e aconchegantes para sua experiência.
              </p>
            </div>
            
            {/* Diferencial 3 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <i className="fas fa-award text-[#C6A97C] text-2xl"></i>
              </div>
              <h3 className="text-xl font-serif text-gray-800 mb-4">Excelência Técnica</h3>
              <p className="text-gray-600">
                Utilizamos as técnicas mais avançadas e produtos de alta qualidade, garantindo resultados seguros, naturais e duradouros.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-7/12 md:pr-8 mb-8 md:mb-0">
                <h3 className="text-2xl font-serif text-gray-800 mb-4">Experiência Transformadora</h3>
                <p className="text-gray-600 mb-6">
                  Na clínica Dra. Fabiana Meneghelli, acreditamos que a verdadeira beleza está em realçar o que você tem de melhor, respeitando sua individualidade.
                </p>
                <p className="text-gray-600 mb-6">
                  Nossa abordagem integra técnicas avançadas com um olhar humanizado, criando uma jornada de transformação que vai além da estética, promovendo bem-estar e autoconfiança.
                </p>
                <button className="bg-[#C6A97C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
                  Conheça Nossa Filosofia
                </button>
              </div>
              <div className="md:w-5/12">
                <img 
                  src="https://readdy.ai/api/search-image?query=Elegant%20aesthetic%20clinic%20reception%20area%20with%20soft%20lighting%2C%20gold%20accents%2C%20comfortable%20seating%20in%20nude%20tones%2C%20fresh%20flowers%2C%20and%20a%20sophisticated%20atmosphere%20that%20conveys%20luxury%20and%20tranquility&width=600&height=400&seq=clinic-interior-1&orientation=landscape" 
                  alt="Clínica Dra. Fabiana Meneghelli" 
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">Depoimentos</h2>
            <div className="w-20 h-1 bg-[#C6A97C] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O que nossas pacientes dizem sobre suas experiências e resultados.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="text-[#C6A97C] text-4xl font-serif">"</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                Encontrei na Dra. Fabiana uma profissional que realmente entendeu o que eu queria. Os resultados foram naturais e todos perceberam como estou mais radiante, sem exageros. Me sinto mais confiante e feliz.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F7E6E6] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#C6A97C] font-medium">CM</span>
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium">Carolina Mendes</h4>
                  <p className="text-gray-500 text-sm">42 anos, empresária</p>
                </div>
              </div>
              <div className="mt-4 flex">
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
              </div>
            </div>
            
            {/* Depoimento 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="text-[#C6A97C] text-4xl font-serif">"</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                Depois de pesquisar muito, escolhi a clínica da Dra. Fabiana e não me arrependo. O ambiente é acolhedor, o atendimento é impecável e os resultados superaram minhas expectativas. Recomendo a todas as minhas amigas.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F7E6E6] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#C6A97C] font-medium">LS</span>
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium">Luciana Santos</h4>
                  <p className="text-gray-500 text-sm">35 anos, advogada</p>
                </div>
              </div>
              <div className="mt-4 flex">
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
              </div>
            </div>
            
            {/* Depoimento 3 */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="text-[#C6A97C] text-4xl font-serif">"</div>
              </div>
              <p className="text-gray-600 italic mb-6">
                Tinha receio de fazer procedimentos estéticos, mas a Dra. Fabiana me deixou muito segura. O resultado foi tão natural que ninguém percebeu que fiz algo, apenas comentam como estou bem e descansada.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#F7E6E6] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#C6A97C] font-medium">RF</span>
                </div>
                <div>
                  <h4 className="text-gray-800 font-medium">Renata Ferreira</h4>
                  <p className="text-gray-500 text-sm">29 anos, jornalista</p>
                </div>
              </div>
              <div className="mt-4 flex">
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
                <i className="fas fa-star text-[#C6A97C]"></i>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="border border-[#C6A97C] text-[#C6A97C] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#C6A97C] hover:text-white transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
              Ver Mais Depoimentos
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C6A97C] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Comece sua transformação hoje</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma consulta de avaliação e descubra como podemos realçar sua beleza natural com tratamentos personalizados.
          </p>
          <button className="bg-white text-[#C6A97C] px-8 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
            Agendar Consulta
          </button>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">Entre em Contato</h2>
            <div className="w-20 h-1 bg-[#C6A97C] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estamos à disposição para esclarecer suas dúvidas e agendar sua consulta.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-sm h-full">
                <h3 className="text-2xl font-serif text-gray-800 mb-6">Informações de Contato</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-[#C6A97C]"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium mb-2">Endereço</h4>
                      <p className="text-gray-600">
                        Av. Paulista, 1000, Conjunto 501<br />
                        Bela Vista, São Paulo - SP<br />
                        CEP: 01310-100
                      </p>
                      <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center mt-2 cursor-pointer">
                        Ver no Google Maps <i className="fas fa-external-link-alt ml-2 text-xs"></i>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-phone-alt text-[#C6A97C]"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium mb-2">Telefone</h4>
                      <p className="text-gray-600">
                        (11) 3456-7890<br />
                        (11) 98765-4321 (WhatsApp)
                      </p>
                      <a href="#" className="text-[#C6A97C] font-medium inline-flex items-center mt-2 cursor-pointer">
                        Enviar mensagem <i className="fab fa-whatsapp ml-2"></i>
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-envelope text-[#C6A97C]"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium mb-2">E-mail</h4>
                      <p className="text-gray-600">
                        contato@drafabianameneghelli.com.br<br />
                        atendimento@drafabianameneghelli.com.br
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <i className="fas fa-clock text-[#C6A97C]"></i>
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-medium mb-2">Horário de Atendimento</h4>
                      <p className="text-gray-600">
                        Segunda a sexta: 9h às 19h<br />
                        Sábado: 9h às 14h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-gray-800 font-medium mb-4">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center hover:bg-[#C6A97C] hover:text-white transition-all duration-300 cursor-pointer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center hover:bg-[#C6A97C] hover:text-white transition-all duration-300 cursor-pointer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-[#FDF9F6] rounded-full flex items-center justify-center hover:bg-[#C6A97C] hover:text-white transition-all duration-300 cursor-pointer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-serif text-gray-800 mb-6">Envie uma Mensagem</h3>
                
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">Nome completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A97C] focus:ring-1 focus:ring-[#C6A97C] outline-none transition-all duration-300"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A97C] focus:ring-1 focus:ring-[#C6A97C] outline-none transition-all duration-300"
                      placeholder="Seu e-mail"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm">Telefone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A97C] focus:ring-1 focus:ring-[#C6A97C] outline-none transition-all duration-300"
                      placeholder="Seu telefone"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2 text-sm">Assunto</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A97C] focus:ring-1 focus:ring-[#C6A97C] outline-none transition-all duration-300 bg-white"
                    >
                      <option value="">Selecione o assunto</option>
                      <option value="agendamento">Agendamento de consulta</option>
                      <option value="duvida">Dúvidas sobre procedimentos</option>
                      <option value="orcamento">Solicitação de orçamento</option>
                      <option value="outro">Outro assunto</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C6A97C] focus:ring-1 focus:ring-[#C6A97C] outline-none transition-all duration-300 resize-none"
                      placeholder="Sua mensagem"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#C6A97C] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300 !rounded-button cursor-pointer whitespace-nowrap">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0 md:w-1/3">
              <img src="/1mm.jpg" alt="Dra. Fabiana Meneghelli" className="h-16 mb-6 invert" />
              <p className="text-gray-400 mb-6 max-w-sm">
                Clínica especializada em harmonização facial e procedimentos estéticos avançados, com foco em resultados naturais e personalizados.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>
            </div>
            
            <div className="mb-8 md:mb-0 md:w-1/5">
              <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li><a href="#sobre" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Sobre</a></li>
                <li><a href="#servicos" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Serviços</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Depoimentos</a></li>
                <li><a href="#contato" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Contato</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Blog</a></li>
              </ul>
            </div>
            
            <div className="mb-8 md:mb-0 md:w-1/5">
              <h4 className="text-lg font-medium mb-4">Serviços</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Harmonização Facial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Toxina Botulínica</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Preenchimento Facial</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Bioestimulador</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">Skinbooster</a></li>
              </ul>
            </div>
            
            <div className="md:w-1/4">
              <h4 className="text-lg font-medium mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#C6A97C]"></i>
                  <span className="text-gray-400">Av. Paulista, 1000, Conjunto 501, Bela Vista, São Paulo - SP</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-phone-alt mt-1 mr-3 text-[#C6A97C]"></i>
                  <span className="text-gray-400">(11) 3456-7890</span>
                </li>
                <li className="flex items-start">
                  <i className="fab fa-whatsapp mt-1 mr-3 text-[#C6A97C]"></i>
                  <span className="text-gray-400">(11) 98765-4321</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-envelope mt-1 mr-3 text-[#C6A97C]"></i>
                  <span className="text-gray-400">contato@drafabianameneghelli.com.br</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Dra. Fabiana Meneghelli. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 cursor-pointer">Política de Privacidade</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-300 cursor-pointer">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="#" className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 cursor-pointer">
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>
    </div>
  );
};

export default App;

