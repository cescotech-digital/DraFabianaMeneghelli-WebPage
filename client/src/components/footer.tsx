export default function Footer() {
  return (
    <footer className="bg-[var(--text-primary)] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="h-16 bg-[var(--gold)] rounded-lg px-4 flex items-center mb-4 w-fit">
              <span className="text-white font-serif font-semibold text-lg">
                Dra. Fabiana Meneghelli
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialista em harmonização facial e estética avançada em Itajaí-SC. Tratamentos personalizados que valorizam sua beleza natural com resultados harmônicos e duradouros.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://wa.me/5547991626678" className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-serif text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-[var(--gold)] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-serif text-lg mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p><i className="fas fa-phone mr-2 text-[var(--gold)]"></i> (47) 99162-6678</p>
              <p><i className="fas fa-envelope mr-2 text-[var(--gold)]"></i> drafabianameneghelli@gmail.com</p>
              <p><i className="fas fa-map-marker-alt mr-2 text-[var(--gold)]"></i> Itajaí - SC</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Dra. Fabiana Meneghelli. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com <i className="fas fa-heart text-[var(--gold)]"></i> para realçar sua beleza natural.</p>
        </div>
      </div>
    </footer>
  );
}
