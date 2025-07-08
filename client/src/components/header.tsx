import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full glass-effect shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <button onClick={() => scrollToSection('home')} className="logo">
              <div className="h-12 md:h-16 bg-[var(--gold)] rounded-lg px-4 flex items-center">
                <span className="text-white font-serif font-semibold text-lg md:text-xl">
                  Dra. Fabiana Meneghelli
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-[var(--text-primary)]">
            <button onClick={() => scrollToSection('home')} className="hover:text-[var(--gold)] transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="hover:text-[var(--gold)] transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="hover:text-[var(--gold)] transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('galeria')} className="hover:text-[var(--gold)] transition-colors">
              Galeria
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="hover:text-[var(--gold)] transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-[var(--gold)] transition-colors">
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
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
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="p-6 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors py-2"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection('depoimentos')}
                className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors py-2"
              >
                Contato
              </button>
              <Button asChild className="btn-primary w-full mt-6">
                <a
                  href="https://wa.me/5547991626678?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Agendar Consulta
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
