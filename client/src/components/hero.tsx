import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&h=1200" 
          alt="Clínica de estética moderna e sofisticada" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-[var(--text-primary)] mb-6 leading-tight animate-fade-in">
            Sua <span className="gradient-text">essência</span>, realçada com leveza e naturalidade
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-light animate-slide-up">
            Descubra o cuidado personalizado que valoriza sua beleza natural, com tratamentos exclusivos e resultados harmônicos que respeitam sua individualidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button asChild className="btn-primary">
              <a
                href="https://wa.me/5547991626678?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Agendar Consulta
              </a>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('servicos')}
              className="border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white transition-all"
            >
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 bg-[var(--gold)]/20 rounded-full blur-xl animate-float hidden lg:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-[var(--terra-quota)]/20 rounded-full blur-xl animate-float delay-75 hidden lg:block"></div>
    </section>
  );
}
