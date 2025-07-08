export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: "fas fa-magic",
      title: "Harmonização Facial",
      description: "Conjunto de procedimentos que visam equilibrar os traços faciais, proporcionando resultados naturais e harmônicos, respeitando suas características individuais.",
      price: "A partir de R$ 800"
    },
    {
      icon: "fas fa-syringe",
      title: "Toxina Botulínica",
      description: "Tratamento que suaviza linhas de expressão e previne o envelhecimento, proporcionando aspecto rejuvenescido sem perder a naturalidade.",
      price: "A partir de R$ 600"
    },
    {
      icon: "fas fa-fill-drip",
      title: "Preenchimento Facial",
      description: "Recupera o volume facial perdido, preenche sulcos e melhora contornos, devolvendo a jovialidade com resultados imediatos.",
      price: "A partir de R$ 900"
    },
    {
      icon: "fas fa-dna",
      title: "Bioestimulador de Colágeno",
      description: "Estimula a produção natural de colágeno, melhorando firmeza e elasticidade da pele, com resultados progressivos e duradouros.",
      price: "A partir de R$ 1.200"
    },
    {
      icon: "fas fa-tint",
      title: "Skinbooster",
      description: "Hidratação profunda da pele através de microinjeções de ácido hialurônico, promovendo luminosidade e textura uniforme.",
      price: "A partir de R$ 700"
    },
    {
      icon: "fas fa-leaf",
      title: "Peeling Químico",
      description: "Renovação celular controlada que melhora textura, uniformiza tom da pele e reduz manchas, revelando uma pele mais jovem.",
      price: "A partir de R$ 400"
    }
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[var(--gold)] font-medium text-sm tracking-wide uppercase">Tratamentos</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mt-2 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Oferecemos tratamentos personalizados que valorizam sua beleza natural, com técnicas avançadas e produtos de alta qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--gold)] to-[var(--terra-quota)] rounded-full flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-serif text-[var(--text-primary)] mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-[var(--gold)] font-medium inline-flex items-center hover:text-[var(--terra-quota)] transition-colors"
                >
                  Saiba mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
                </button>
                <span className="text-sm text-gray-500">{service.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
