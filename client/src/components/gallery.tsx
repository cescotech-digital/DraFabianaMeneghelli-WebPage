export default function Gallery() {
  const beforeAfterImages = [
    {
      src: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Antes e depois harmonização facial",
      title: "Harmonização Facial",
      subtitle: "Realce natural dos traços faciais"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Resultado preenchimento labial natural",
      title: "Preenchimento Labial",
      subtitle: "Volume natural e proporção harmônica"
    },
    {
      src: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Resultado contorno facial",
      title: "Contorno Facial",
      subtitle: "Definição e simetria natural"
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Resultado toxina botulínica",
      title: "Toxina Botulínica",
      subtitle: "Suavização de linhas de expressão"
    },
    {
      src: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Resultado bioestimulador",
      title: "Bioestimulador",
      subtitle: "Rejuvenescimento natural da pele"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Resultado skinbooster",
      title: "Skinbooster",
      subtitle: "Hidratação e luminosidade"
    }
  ];

  const clinicImages = [
    {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Recepção da clínica moderna e acolhedora",
      title: "Ambiente Acolhedor",
      subtitle: "Recepção moderna e confortável"
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Equipamentos modernos para estética facial",
      title: "Tecnologia Avançada",
      subtitle: "Equipamentos de última geração"
    },
    {
      src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      alt: "Sala de procedimentos elegante e sofisticada",
      title: "Sala de Procedimentos",
      subtitle: "Ambiente seguro e sofisticado"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-[var(--background-warm)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[var(--gold)] font-medium text-sm tracking-wide uppercase">Resultados</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mt-2 mb-4">Galeria de Transformações</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça alguns dos nossos trabalhos e veja como priorizamos a naturalidade e harmonia em cada procedimento.
          </p>
        </div>

        {/* Before/After Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {beforeAfterImages.map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 group">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover gallery-image"
                />
                <div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">{image.title}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-[var(--text-primary)] mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinic Environment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicImages.map((image, index) => (
            <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover gallery-image"
              />
              <div className="absolute inset-0 bg-black/20 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
