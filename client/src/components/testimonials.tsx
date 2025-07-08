export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Carolina",
      testimonial: "Fiz harmonização facial com a Dra. Fabiana e o resultado superou todas as minhas expectativas. Muito natural e elegante. Recomendo demais!"
    },
    {
      name: "Mariana Santos",
      testimonial: "Profissional excepcional! A Dra. Fabiana tem um olhar muito apurado e conseguiu realçar minha beleza natural. Ambiente acolhedor e resultado perfeito."
    },
    {
      name: "Fernanda Lima",
      testimonial: "Fiz preenchimento labial e toxina botulínica. O resultado ficou incrível, muito natural! A Dra. Fabiana é muito cuidadosa e atenciosa."
    },
    {
      name: "Juliana Costa",
      testimonial: "Excelente profissional! Fiz bioestimulador e skinbooster. A pele ficou com aspecto renovado e muito natural. Clínica linda e acolhedora."
    },
    {
      name: "Patricia Oliveira",
      testimonial: "Resultado incrível! A Dra. Fabiana tem uma técnica impecável e um olhar artístico. Me sinto muito mais confiante. Recomendo a todos!"
    },
    {
      name: "Camila Rodrigues",
      testimonial: "Profissional de excelência! Fiz harmonização facial e o resultado ficou perfeito. Atendimento diferenciado e ambiente muito acolhedor."
    }
  ];

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[var(--gold)] font-medium text-sm tracking-wide uppercase">Experiências</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mt-2 mb-4">Depoimentos</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubra o que nossos pacientes dizem sobre sua experiência em nossa clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-quote-left text-white"></i>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">{testimonial.name}</h4>
                  <div className="flex text-[var(--gold)]">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
