export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[var(--background-warm)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-5/12">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                alt="Dra. Fabiana Meneghelli - Especialista em Harmonização Facial" 
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--gold)]/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-[var(--terra-quota)]/20 rounded-full blur-xl"></div>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <div className="mb-6">
              <span className="text-[var(--gold)] font-medium text-sm tracking-wide uppercase">Especialista</span>
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mt-2 mb-4">
                Dra. Fabiana M. Meneghelli
              </h2>
              <div className="w-20 h-1 bg-[var(--gold)]"></div>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Biomédica especialista em estética avançada e harmonização facial, com mais de 5 anos de experiência dedicados à beleza que respeita a naturalidade de cada rosto.
              </p>
              <p>
                Formada pela Universidade do Vale do Itajaí (UNIVALI) com especialização em procedimentos estéticos minimamente invasivos, desenvolvi uma abordagem única que valoriza a individualidade de cada paciente.
              </p>
              <p>
                Minha filosofia de trabalho é baseada na compreensão profunda das necessidades de cada pessoa, criando protocolos personalizados que realçam a beleza natural, proporcionando resultados harmônicos e duradouros.
              </p>
            </div>
            
            {/* Credenciais */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-award text-[var(--gold)] mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Especialista Certificada</h4>
                  <p className="text-sm text-gray-600">Harmonização Facial</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-certificate text-[var(--gold)] mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Membro Ativo</h4>
                  <p className="text-sm text-gray-600">Sociedade Brasileira de Estética</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-user-md text-[var(--gold)] mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Experiência Comprovada</h4>
                  <p className="text-sm text-gray-600">Mais de 5.000 procedimentos</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <i className="fas fa-graduation-cap text-[var(--gold)] mr-3 text-xl"></i>
                <div>
                  <h4 className="font-medium text-[var(--text-primary)]">Formação UNIVALI</h4>
                  <p className="text-sm text-gray-600">Biomedicina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
