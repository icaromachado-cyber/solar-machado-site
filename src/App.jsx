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
  MessageCircle,
  Instagram,
  Menu,
  X,
  ClipboardList,
  Wrench,
  FileCheck,
  BadgeCheck,
  CreditCard
} from 'lucide-react'
import './App.css'

import logoImg from './assets/images/logo.png'
import instalacao1 from './assets/images/instalacao_nova_1.jpg'
import instalacao2 from './assets/images/instalacao_nova_2.jpg'
import instalacao3 from './assets/images/instalacao_nova_3.jpg'
import instalacao4 from './assets/images/instalacao_nova_4.jpg'
import instalacao5 from './assets/images/instalacao_nova_5.jpg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const scrollToContact = () => {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Olá, Solar Machado! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Mensagem:* ${formData.message}`
    window.open(`https://wa.me/5586994688482?text=${text}`, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Botão flutuante WhatsApp */}
      <a
        href="https://wa.me/5586994688482"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logoImg} alt="Solar Machado" className="h-16 w-auto" />

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#2e3486] transition-colors">Início</a>
            <a href="#sobre" className="text-gray-700 hover:text-[#2e3486] transition-colors">Sobre</a>
            <a href="#servicos" className="text-gray-700 hover:text-[#2e3486] transition-colors">Serviços</a>
            <a href="#projetos" className="text-gray-700 hover:text-[#2e3486] transition-colors">Projetos</a>
            <a href="#contato" className="text-gray-700 hover:text-[#2e3486] transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden md:flex bg-[#2e3486] hover:bg-[#1e2476]" onClick={scrollToContact}>
              <Phone className="w-4 h-4 mr-2" />
              Orçamento Grátis
            </Button>
            {/* Hamburger mobile */}
            <button
              className="md:hidden p-2 rounded-md text-[#2e3486]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
            <a href="#inicio" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#2e3486] py-2 border-b">Início</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#2e3486] py-2 border-b">Sobre</a>
            <a href="#servicos" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#2e3486] py-2 border-b">Serviços</a>
            <a href="#projetos" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#2e3486] py-2 border-b">Projetos</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-[#2e3486] py-2 border-b">Contato</a>
            <Button className="bg-[#2e3486] hover:bg-[#1e2476] w-full" onClick={scrollToContact}>
              <Phone className="w-4 h-4 mr-2" />
              Orçamento Grátis
            </Button>
          </div>
        )}
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
            <Button size="lg" className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white"
              onClick={() => window.open('https://www.instagram.com/solarmachadoeng', '_blank')}>
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
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
              <img src={instalacao1} alt="Instalação de painéis solares" className="rounded-lg shadow-lg w-full h-96 object-cover mb-4" />
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
            <p className="text-xl text-gray-600">Soluções completas em energia solar para todos os tipos de projeto</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-[#2e3486]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="w-6 h-6 text-[#2e3486]" />
                </div>
                <CardTitle>Instalação Residencial</CardTitle>
                <CardDescription>Sistemas fotovoltaicos para residências com economia garantida</CardDescription>
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
                <CardDescription>Soluções para empresas e indústrias de todos os portes</CardDescription>
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
                <div className="bg-[#edece5]/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2e3486]" />
                </div>
                <CardTitle>Manutenção</CardTitle>
                <CardDescription>Manutenção preventiva e corretiva para máxima eficiência</CardDescription>
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

      {/* Como Funciona */}
      <section className="py-16 bg-[#edece5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">Como Funciona a Instalação</h2>
            <p className="text-xl text-gray-600">Do primeiro contato até sua energia solar funcionando em 4 etapas</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: ClipboardList, step: '01', title: 'Visita Técnica', desc: 'Nossa equipe visita o local, analisa o consumo e faz o levantamento para o projeto.' },
              { icon: FileCheck, step: '02', title: 'Projeto e Aprovação', desc: 'Elaboramos o projeto elétrico e submetemos para aprovação na concessionária.' },
              { icon: Wrench, step: '03', title: 'Instalação', desc: 'Equipe especializada instala os painéis e o inversor com total segurança e agilidade.' },
              { icon: BadgeCheck, step: '04', title: 'Homologação', desc: 'Concluímos a homologação junto à concessionária e entregamos o sistema funcionando.' },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="bg-white rounded-xl shadow-md p-6 h-full">
                  <div className="bg-[#2e3486] text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm">
                    {step}
                  </div>
                  <div className="bg-[#fdc300]/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#2e3486]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#2e3486] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financiamento */}
      <section className="py-16 bg-gradient-to-r from-[#2e3486] to-[#1e2476] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Financiamento Facilitado</h2>
            <p className="text-xl text-white/80">Não deixe o investimento inicial ser um obstáculo. Temos opções para todos os perfis.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="bg-[#fdc300]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-[#fdc300]" />
                </div>
                <CardTitle className="text-white">Financiamento Bancário</CardTitle>
                <CardDescription className="text-white/70">Parcele em até 60x no banco</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Linha de crédito solar</li>
                  <li>• Taxas a partir de 0,99% ao mês</li>
                  <li>• Aprovação rápida</li>
                  <li>• Parcela menor que a conta de luz</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-[#fdc300] border-0 text-black">
              <CardHeader>
                <div className="bg-black/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                <CardTitle className="text-black">Consórcio Solar</CardTitle>
                <CardDescription className="text-black/70">Sem juros, sem entrada</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-black/80">
                  <li>• Sem juros (só taxa admin)</li>
                  <li>• Parcelas a partir de R$ 200/mês</li>
                  <li>• Ideal para planejamento futuro</li>
                  <li>• Possibilidade de lance</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <div className="bg-[#fdc300]/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-[#fdc300]" />
                </div>
                <CardTitle className="text-white">À Vista</CardTitle>
                <CardDescription className="text-white/70">Melhor custo-benefício</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Desconto especial</li>
                  <li>• Retorno em 3 a 5 anos</li>
                  <li>• Economia por 25+ anos</li>
                  <li>• Maior rentabilidade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-[#fdc300] hover:bg-[#e2a800] text-black font-semibold" onClick={scrollToContact}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Simular meu financiamento
            </Button>
          </div>
        </div>
      </section>

      {/* Por que Escolher Energia Solar */}
      <section className="py-16 bg-gradient-to-r from-[#edece5] to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#2e3486] mb-4">Por que Escolher Energia Solar?</h2>
            <p className="text-xl text-gray-600">Invista no futuro com energia limpa, renovável e econômica</p>
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
            <p className="text-xl text-gray-600">Conheça alguns dos nossos projetos de sucesso</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: instalacao1, title: 'Residencial - Teresina', desc: 'Sistema de 5kWp - Economia de 90%' },
              { img: instalacao2, title: 'Comercial - Parnaíba', desc: 'Sistema de 15kWp - ROI em 4 anos' },
              { img: instalacao3, title: 'Industrial - Picos', desc: 'Sistema de 50kWp - Economia R$ 8.000/mês' },
              { img: instalacao4, title: 'Residencial - Teresina', desc: 'Sistema de 10kWp - Economia de 95%' },
              { img: instalacao5, title: 'Comercial - Teresina', desc: 'Sistema de 20kWp - Redução de custos' },
            ].map(({ img, title, desc }) => (
              <div key={title} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img src={img} alt={title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#2e3486]">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
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
            {[
              { initials: 'MR', name: 'Maria Rosa', local: 'Residencial - Teresina', color: '[#2e3486]', text: '"Excelente atendimento e instalação impecável. Minha conta de luz reduziu 85% no primeiro mês. Recomendo a Solar Machado!"' },
              { initials: 'JS', name: 'João Silva', local: 'Comercial - Parnaíba', color: '[#fdc300]', text: '"Projeto bem dimensionado e equipe muito profissional. O retorno do investimento foi ainda melhor que o previsto."' },
              { initials: 'AL', name: 'Ana Luiza', local: 'Industrial - Picos', color: '[#2e3486]', text: '"Suporte técnico excepcional e monitoramento constante. Nossa empresa economiza milhares de reais por mês."' },
            ].map(({ initials, name, local, color, text }) => (
              <Card key={name}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-[#fdc300] fill-current" />)}
                  </div>
                  <p className="text-gray-700 mb-4">{text}</p>
                  <div className="flex items-center">
                    <div className={`bg-${color}/10 w-10 h-10 rounded-full flex items-center justify-center mr-3`}>
                      <span className={`text-${color} font-semibold`}>{initials}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#2e3486]">{name}</p>
                      <p className="text-sm text-gray-600">{local}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gradient-to-br from-[#2e3486] to-[#fdc300] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl">Solicite seu orçamento gratuito e comece a economizar hoje mesmo</p>
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
                  <CardDescription className="text-gray-200">Preencha o formulário e receba uma proposta personalizada</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input id="name" placeholder="Seu nome completo" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" value={formData.name} onChange={handleChange} />
                    <Input id="email" placeholder="Seu e-mail" type="email" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" value={formData.email} onChange={handleChange} />
                    <Input id="phone" placeholder="Seu telefone" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" value={formData.phone} onChange={handleChange} />
                    <Textarea id="message" placeholder="Conte-nos sobre seu projeto..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" rows={4} value={formData.message} onChange={handleChange} />
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
              <img src={logoImg} alt="Solar Machado" className="h-24 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">Especialistas em energia solar fotovoltaica, oferecendo soluções completas para residências e empresas em todo o Piauí.</p>
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
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://wa.me/5586994688482" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:opacity-80 transition-opacity">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/solarmachadoeng" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:opacity-80 transition-opacity">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Solar Machado. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App
