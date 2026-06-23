import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Sun,
  Zap,
  Shield,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Users,
  Award,
  Leaf,
  MessageCircle
} from 'lucide-react'
import './App.css'

// Importar imagens
import logoImg from './assets/images/logo.png'
import instalacao1 from './assets/images/instalacao_nova_1.jpg'
import instalacao2 from './assets/images/instalacao_nova_2.jpg'
import instalacao3 from './assets/images/instalacao_nova_3.jpg'
import instalacao4 from './assets/images/instalacao_nova_4.jpg'
import instalacao5 from './assets/images/instalacao_nova_5.jpg'

function App() {
  const scrollToContact = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Olá, Solar Machado! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/5586994688482?text=${text}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logoImg} alt="Solar Machado" className="h-36 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#2e3486] transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-[#2e3486] transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-[#2e3486] transition-colors">Serviços</a>
            <a href="#projetos" className="text-gray-700 hover:text-[#2e3486] transition-colors">Projetos</a>
            <a href="#contato" className="text-gray-700 hover:text-[#2e3486] transition-colors">Contato</a>
          </nav>
          <Button className="bg-[#2e3486] hover:bg-[#1e2476]">
            <Phone className="w-4 h-4 mr-2" />
            Orçamento Grátis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-[#2e3486] via-[#2e3486] to-[#fdc300] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Energia Solar com <span className="text-[#fdc300]">Qualidade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforme sua casa ou empresa com energia limpa e econômica. 
            Projetos personalizados e instalações profissionais em Teresina, PI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#fdc300] hover:bg-[#e2a800] text-black font-semibold" onClick={scrollToContact}>
              <Zap className="w-5 h-5 mr-2" />
              Solicitar Orçamento
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1DA851] text-white" 
                    onClick={() => window.open('https://wa.me/5586994688482', '_blank')}> 
              <MessageCircle className="w-5 h-5 mr-2" /> 
              WhatsApp
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Sobre a Empresa */}
      <section id="sobre" className="py-16 bg-[#edece5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">Sobre a Solar Machado</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas em energia solar fotovoltaica, oferecemos soluções completas 
              para residências, empresas e indústrias em todo o Piauí.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={instalacao1} 
                alt="Instalação de painéis solares" 
                className="rounded-lg shadow-lg w-full h-96 object-cover mb-4" 
              />
              <img src={logoImg} alt="Solar Machado Logo" className="h-24 w-auto mx-auto" />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-[#2e3486]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-[#2e3486]" />
                  </div>
                  <h3 className="font-semibold text-[#2e3486]">6+ Anos</h3>
                  <p className="text-gray-600">de Experiência</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#fdc300]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-[#fdc300]" />
                  </div>
                  <h3 className="font-semibold text-[#2e3486]">500+</h3>
                  <p className="text-gray-600">Projetos Realizados</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Fundada em 2019, a Solar Machado é uma empresa especializada em 
                instalação e manutenção de sistemas de energia solar fotovoltaica. Nossa equipe 
                técnica qualificada garante projetos seguros, eficientes e com máxima economia.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#fdc300] mr-3" />
                  <span className="text-gray-700">Engenharia própria e projetos personalizados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#fdc300] mr-3" />
                  <span className="text-gray-700">Equipamentos de alta qualidade</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#fdc300] mr-3" />
                  <span className="text-gray-700">Garantia e suporte técnico especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">
              Soluções completas em energia solar para todos os tipos de projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#2e3486]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-[#2e3486]" />
                </div>
                <CardTitle>Instalação Residencial</CardTitle>
                <CardDescription>
                  Sistemas fotovoltaicos para residências com economia garantida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Projeto personalizado</li>
                  <li>• Instalação profissional</li>
                  <li>• Homologação na concessionária</li>
                  <li>• Garantia de 25 anos</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#fdc300]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#fdc300]" />
                </div>
                <CardTitle>Instalação Comercial</CardTitle>
                <CardDescription>
                  Soluções para empresas e indústrias de todos os portes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Análise de viabilidade</li>
                  <li>• Sistemas de grande porte</li>
                  <li>• Redução de custos operacionais</li>
                  <li>• ROI garantido</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#edece5]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2e3486]" />
                </div>
                <CardTitle>Manutenção</CardTitle>
                <CardDescription>
                  Manutenção preventiva e corretiva para máxima eficiência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Limpeza dos painéis</li>
                  <li>• Monitoramento remoto</li>
                  <li>• Inspeções técnicas</li>
                  <li>• Suporte 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Por que Escolher Energia Solar */}
      <section className="py-16 bg-gradient-to-r from-[#edece5] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">Por que Escolher Energia Solar?</h2>
            <p className="text-xl text-gray-600">
              Invista no futuro com energia limpa, renovável e econômica
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#fdc300]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#fdc300]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e3486] mb-2">Economia de até 95%</h3>
              <p className="text-gray-600">Reduza drasticamente sua conta de energia elétrica</p>
            </div>

            <div className="text-center">
              <div className="bg-[#2e3486]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[#2e3486]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e3486] mb-2">100% Sustentável</h3>
              <p className="text-gray-600">Energia limpa e renovável, sem impacto ambiental</p>
            </div>

            <div className="text-center">
              <div className="bg-[#fdc300]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#fdc300]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e3486] mb-2">Valorização do Imóvel</h3>
              <p className="text-gray-600">Aumente o valor do seu imóvel em até 8%</p>
            </div>

            <div className="text-center">
              <div className="bg-[#2e3486]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#2e3486]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e3486] mb-2">Garantia de 25 Anos</h3>
              <p className="text-gray-600">Investimento seguro com garantia estendida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Realizados */}
      <section id="projetos" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">Projetos Realizados</h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos nossos projetos de sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={instalacao1} 
                  alt="Projeto residencial" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#2e3486]">Residencial - Teresina</h3>
                <p className="text-gray-600">Sistema de 5kWp - Economia de 90%</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={instalacao2} 
                  alt="Projeto comercial" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#2e3486]">Comercial - Parnaíba</h3>
                <p className="text-gray-600">Sistema de 15kWp - ROI em 4 anos</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={instalacao3} 
                  alt="Projeto industrial" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#2e3486]">Industrial - Picos</h3>
                <p className="text-gray-600">Sistema de 50kWp - Economia R$ 8.000/mês</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={instalacao4} 
                  alt="Projeto residencial" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#2e3486]">Residencial - Teresina</h3>
                <p className="text-gray-600">Sistema de 10kWp - Economia de 95%</p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={instalacao5} 
                  alt="Projeto comercial" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#2e3486]">Comercial - Teresina</h3>
                <p className="text-gray-600">Sistema de 20kWp - Redução de custos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-[#edece5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">O que Nossos Clientes Dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#fdc300] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Excelente atendimento e instalação impecável. Minha conta de luz reduziu 85% 
                  no primeiro mês. Recomendo a Solar Machado!"
                </p>
                <div className="flex items-center">
                  <div className="bg-[#2e3486]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#2e3486] font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e3486]">Maria Rosa</p>
                    <p className="text-sm text-gray-600">Residencial - Teresina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#fdc300] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Projeto bem dimensionado e equipe muito profissional. O retorno do investimento 
                  foi ainda melhor que o previsto."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#fdc300]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#fdc300] font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e3486]">João Silva</p>
                    <p className="text-sm text-gray-600">Comercial - Parnaíba</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#fdc300] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Suporte técnico excepcional e monitoramento constante. Nossa empresa economiza 
                  milhares de reais por mês."
                </p>
                <div className="flex items-center">
                  <div className="bg-[#2e3486]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#2e3486] font-semibold">AL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e3486]">Ana Luiza</p>
                    <p className="text-sm text-gray-600">Industrial - Picos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gradient-to-br from-[#2e3486] to-[#fdc300] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl">
              Solicite seu orçamento gratuito e comece a economizar hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-[#fdc300]" />
                  <div>
                    <p className="font-semibold">Telefones</p>
                    <p>(86) 99468-8482</p>
                    <p>(86) 99818-3775</p>
                    <p>(86) 99468-8487</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-[#fdc300]" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p>solarmachadoeng@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-[#fdc300]" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p>Rua Professor José Amável, 799</p>
                    <p>Cabral, Teresina - PI</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Solicite seu Orçamento</CardTitle>
                  <CardDescription className="text-gray-200">
                    Preencha o formulário e receba uma proposta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit}> {/* Adicionado onSubmit */}
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      value={formData.name} 
                      onChange={handleChange}
                    />
                    <Input 
                      id="email" 
                      placeholder="Seu e-mail" 
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      value={formData.email} 
                      onChange={handleChange}
                    />
                    <Input 
                      id="phone" 
                      placeholder="Seu telefone" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      value={formData.phone} 
                      onChange={handleChange}
                    />
                    <Textarea 
                      id="message" 
                      placeholder="Conte-nos sobre seu projeto..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                      rows={4}
                      value={formData.message} 
                      onChange={handleChange}
                    />
                    <Button type="submit" className="w-full bg-[#fdc300] hover:bg-[#e2a800] text-black font-semibold">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Enviar pelo WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2e3486] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={logoImg} alt="Solar Machado" className="h-36 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Especialistas em energia solar fotovoltaica, oferecendo soluções 
                completas para residências e empresas em todo o Piauí.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Instalação Residencial</li>
                <li>Instalação Comercial</li>
                <li>Manutenção</li>
                <li>Consultoria</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>(86) 99468-8482</p>
                <p>solarmachadoeng@gmail.com</p>
                <p>Teresina - PI</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Solar Machado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

