import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        nome: "",
        telefone: "",
        email: "",
        servico: "",
        mensagem: ""
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.nome || !formData.telefone || !formData.email || !formData.servico || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contato" className="py-20 bg-[var(--background-warm)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[var(--gold)] font-medium text-sm tracking-wide uppercase">Conecte-se</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--text-primary)] mt-2 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-[var(--gold)] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Agende sua consulta personalizada e descubra como podemos realçar sua beleza natural.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card>
            <CardContent className="p-8">
              <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-6">Solicite uma Avaliação</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Nome completo
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      className="focus:ring-[var(--gold)] focus:border-[var(--gold)]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      className="focus:ring-[var(--gold)] focus:border-[var(--gold)]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="focus:ring-[var(--gold)] focus:border-[var(--gold)]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Serviço de interesse
                  </label>
                  <Select value={formData.servico} onValueChange={(value) => handleInputChange('servico', value)}>
                    <SelectTrigger className="focus:ring-[var(--gold)] focus:border-[var(--gold)]">
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="harmonizacao">Harmonização Facial</SelectItem>
                      <SelectItem value="toxina">Toxina Botulínica</SelectItem>
                      <SelectItem value="preenchimento">Preenchimento Facial</SelectItem>
                      <SelectItem value="bioestimulador">Bioestimulador de Colágeno</SelectItem>
                      <SelectItem value="skinbooster">Skinbooster</SelectItem>
                      <SelectItem value="peeling">Peeling Químico</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    rows={4}
                    className="focus:ring-[var(--gold)] focus:border-[var(--gold)]"
                    placeholder="Conte-nos sobre suas expectativas e dúvidas..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-8">
            {/* Informações gerais */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Telefone</p>
                      <p className="text-gray-600">(47) 99162-6678</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">E-mail</p>
                      <p className="text-gray-600">drafabianameneghelli@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-white"></i>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text-primary)]">Endereço</p>
                      <p className="text-gray-600">Rua João Bauer, 498, Sala 609<br />Centro, Itajaí - SC</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Horário de Funcionamento */}
            <Card>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-6">Horário de Funcionamento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-primary)] font-medium">Segunda - Sexta</span>
                    <span className="text-gray-600">9:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-primary)] font-medium">Sábado</span>
                    <span className="text-gray-600">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-primary)] font-medium">Domingo</span>
                    <span className="text-gray-600">Fechado</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp Call-to-Action */}
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fab fa-whatsapp text-white text-2xl"></i>
                </div>
                <h3 className="font-serif text-xl text-[var(--text-primary)] mb-2">Agende pelo WhatsApp</h3>
                <p className="text-gray-600 mb-4">Atendimento rápido e personalizado</p>
                <Button asChild className="btn-primary">
                  <a 
                    href="https://wa.me/5547991626678?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Conversar no WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Redes Sociais */}
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="font-serif text-xl text-[var(--text-primary)] mb-6">Siga-nos nas Redes Sociais</h3>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[var(--gold)] rounded-full flex items-center justify-center text-white hover:bg-[var(--terra-quota)] transition-colors">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
