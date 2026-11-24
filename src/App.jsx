import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  MessageCircle,
  Instagram,
  Menu,
  X,
} from 'lucide-react'
import './App.css'

import logoImg from './assets/images/logo_header.png'
import instalacao1 from './assets/images/instalacao_nova_1.jpg'
import instalacao2 from './assets/images/instalacao_nova_2.jpg'
import instalacao3 from './assets/images/instalacao_nova_3.jpg'
import instalacao4 from './assets/images/instalacao_nova_4.jpg'
import instalacao5 from './assets/images/instalacao_nova_5.jpg'
import pAldebaran from './assets/images/projetos/aldebaran.jpg'
import pDirceu from './assets/images/projetos/dirceu.jpg'
import pLandri from './assets/images/projetos/landri.jpg'
import pLuisCorreia from './assets/images/projetos/luis-correia.jpg'
import pIninga from './assets/images/projetos/ininga.jpg'
import pRedonda from './assets/images/projetos/redonda.jpg'

const WHATSAPP = 'https://wa.me/5586981374037'
const INSTAGRAM = 'https://www.instagram.com/solarmachadoeng'

const HERO_SLIDES = [instalacao1, instalacao2, instalacao3, instalacao4, instalacao5]

const NAV = [
  ['#sobre', 'Sobre'],
  ['#servicos', 'Serviços'],
  ['#projetos', 'Projetos'],
  ['#contato', 'Contato'],
]

const SERVICES = [
  {
    title: 'Instalação residencial',
    desc: 'Sistemas fotovoltaicos para a sua casa, com economia na conta de luz desde o primeiro mês.',
    items: ['Projeto personalizado', 'Instalação profissional', 'Homologação na concessionária', 'Aparelhos com até 25 anos de garantia'],
  },
  {
    title: 'Instalação comercial',
    desc: 'Soluções para empresas e indústrias de todos os portes.',
    items: ['Análise de viabilidade', 'Sistemas de grande porte', 'Redução de custos operacionais', 'Retorno do investimento calculado'],
  },
  {
    title: 'Manutenção',
    desc: 'Preventiva e corretiva, para o sistema render o máximo todos os dias.',
    items: ['Limpeza dos painéis', 'Monitoramento remoto', 'Inspeções técnicas', 'Suporte técnico diário'],
  },
]

const STEPS = [
  { title: 'Visita técnica', desc: 'Nossa equipe visita o local, analisa o consumo e faz o levantamento para o projeto.' },
  { title: 'Projeto e aprovação', desc: 'Elaboramos o projeto elétrico e enviamos para aprovação da concessionária.' },
  { title: 'Instalação', desc: 'Equipe especializada instala os painéis e o inversor com segurança e agilidade.' },
  { title: 'Homologação', desc: 'Concluímos a homologação junto à concessionária e entregamos o sistema funcionando.' },
]

const PLANS = [
  {
    title: 'Financiamento bancário',
    tag: 'Até 84 parcelas',
    items: ['Linha de crédito solar', 'Taxas personalizadas para você', 'Aprovação rápida', 'Parcela menor que a conta de luz'],
  },
  {
    title: 'Cartão de crédito',
    tag: 'Em até 18 vezes',
    items: ['Pagamento no cartão', 'Parcelamento em até 18 vezes', 'Sem precisar de financiamento', 'Fale com a gente para simular'],
  },
  {
    title: 'À vista',
    tag: 'Melhor custo-benefício',
    items: ['Desconto especial', 'Retorno em 3 a 5 anos', 'Economia por mais de 25 anos', 'Maior rentabilidade'],
  },
]

const WHY = [
  { big: '85%', title: 'de economia', desc: 'Reduza drasticamente a sua conta de energia elétrica.' },
  { big: '100%', title: 'sustentável', desc: 'Energia limpa e renovável, sem impacto ambiental.' },
  { big: '8%', title: 'de valorização', desc: 'Seu imóvel pode valer até 8% mais com energia solar.' },
  { big: '25', title: 'anos de garantia', desc: 'Aparelhos com até 25 anos de garantia.' },
]

const PROJECTS = [
  { img: pAldebaran, title: 'Aldebaran Leste, Teresina', desc: '900 kWh por mês' },
  { img: pDirceu, title: 'Dirceu Arcoverde II, Teresina', desc: '1.300 kWh por mês' },
  { img: pLandri, title: 'Landri Sales, Piauí', desc: '2.000 kWh por mês' },
  { img: pLuisCorreia, title: 'Luís Correia, Piauí', desc: '1.500 kWh por mês' },
  { img: pIninga, title: 'Ininga, Teresina', desc: '1.500 kWh por mês' },
  { img: pRedonda, title: 'Redonda, Teresina', desc: '1.000 kWh por mês' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `Olá, Solar Machado! Gostaria de solicitar um orçamento.%0A%0A*Nome:* ${formData.name}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Mensagem:* ${formData.message}`
    window.open(`${WHATSAPP}?text=${text}`, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="sm">
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="wa" aria-label="Falar no WhatsApp">
        <MessageCircle size={28} />
      </a>

      {/* Header */}
      <header className="top">
        <div className="wrap">
          <div className="top-in">
            <a href="#inicio" aria-label="Solar Machado, início">
              <img src={logoImg} alt="Solar Machado" />
            </a>
            <nav className="nav" aria-label="Principal">
              {NAV.map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </nav>
            <a href="#contato" className="btn btn-navy top-cta">Pedir orçamento</a>
            <button
              className="burger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
          {menuOpen && (
            <div className="drawer">
              {NAV.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              ))}
              <a href="#contato" className="btn btn-navy" onClick={() => setMenuOpen(false)}>Pedir orçamento</a>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="inicio" className="hero">
          <div className="wrap hero-in">
            <div className="hero-copy">
              <h1>
                <b>Energia solar</b>
                do projeto à conta de luz menor.
              </h1>
              <p>
                Projetamos, instalamos e homologamos sistemas fotovoltaicos para casas,
                empresas e indústrias no Piauí, Maranhão e Ceará.
              </p>
              <div className="hero-actions">
                <a href="#contato" className="btn btn-sun">Pedir orçamento grátis</a>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                  <MessageCircle size={20} /> Falar no WhatsApp
                </a>
              </div>
            </div>
            <figure className="hero-art">
              <svg className="hero-sun" viewBox="-170 -170 340 190" aria-hidden="true" fill="currentColor"><rect x="-13" y="-165" width="26" height="53" rx="6" transform="rotate(-90)" /><rect x="-13" y="-165" width="26" height="53" rx="6" transform="rotate(-45)" /><rect x="-13" y="-165" width="26" height="53" rx="6" transform="rotate(0)" /><rect x="-13" y="-165" width="26" height="53" rx="6" transform="rotate(45)" /><rect x="-13" y="-165" width="26" height="53" rx="6" transform="rotate(90)" /></svg>
              <div className="hero-slides">
                {HERO_SLIDES.map((src, i) => (
                  <img key={src} src={src} alt="Painéis solares instalados pela Solar Machado" style={{ animationDelay: `${i * 5}s` }} />
                ))}
              </div>
            </figure>
          </div>
        </section>

        {/* Números */}
        <section className="facts" aria-label="Solar Machado em números">
          <div className="wrap facts-in">
            <div className="fact"><strong>7+ anos</strong><span>de experiência, desde 2019</span></div>
            <div className="fact"><strong>500+</strong><span>projetos realizados</span></div>
            <div className="fact"><strong>Até 25 anos</strong><span>de garantia nos aparelhos</span></div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="section">
          <div className="wrap about">
            <h2 className="h2"><b>Engenharia solar</b> feita no Piauí, para o clima do Piauí.</h2>
            <div className="about-text">
              <p>
                A Solar Machado foi fundada em 2019 e é especializada em projetos,
                instalação e manutenção de sistemas de energia solar fotovoltaica. Nossa equipe técnica
                qualificada entrega projetos seguros, eficientes e com a máxima economia.
              </p>
              <ul className="checks">
                {['Engenharia própria e projetos personalizados', 'Equipamentos de alta qualidade', 'Garantia e suporte técnico especializado'].map((t) => (
                  <li key={t}><CheckCircle size={20} /> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2 className="h2">Serviços para <b>cada tipo de projeto</b></h2>
            <div className="services">
              {SERVICES.map((s) => (
                <article key={s.title} className="svc">
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                  <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="section steps-bg">
          <div className="wrap">
            <h2 className="h2">Como funciona a instalação, <b>em 4 etapas</b></h2>
            <p className="lead">Do primeiro contato até a sua energia solar funcionando.</p>
            <div className="steps">
              {STEPS.map((s) => (
                <div key={s.title} className="step">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financiamento */}
        <section className="section fin">
          <div className="wrap">
            <h2 className="h2">Financiamento <b>facilitado</b></h2>
            <p className="lead">O investimento inicial não precisa ser um obstáculo. Temos opções para cada perfil.</p>
            <div className="plans">
              {PLANS.map((p) => (
                <article key={p.title} className="plan">
                  <h3>{p.title}</h3>
                  <p className="tag">{p.tag}</p>
                  <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
                </article>
              ))}
            </div>
            <div className="fin-cta">
              <a href="#contato" className="btn btn-sun">Simular meu financiamento</a>
            </div>
          </div>
        </section>

        {/* Por que solar */}
        <section className="section">
          <div className="wrap">
            <h2 className="h2">Por que escolher <b>energia solar</b></h2>
            <p className="lead">Energia limpa, renovável e econômica, que se paga e continua rendendo.</p>
            <div className="why">
              {WHY.map((w) => (
                <div key={w.title} className="why-i">
                  <strong>{w.big}</strong>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="section work-bg">
          <div className="wrap">
            <h2 className="h2">Projetos <b>realizados</b></h2>
            <p className="lead">Alguns dos sistemas que instalamos pelo Piauí.</p>
            <div className="work">
              {PROJECTS.map((p) => (
                <figure key={p.title + p.desc} className="proj" style={{ margin: 0 }}>
                  <div className="pic"><img src={p.img} alt={`${p.title}: ${p.desc}`} loading="lazy" /></div>
                  <figcaption>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="section">
          <div className="wrap">
            <h2 className="h2">O que nossos <b>clientes dizem</b></h2>
            <div className="quotes">
              <figure className="quote-main" style={{ margin: 0 }}>
                <blockquote>“Excelente atendimento e instalação impecável. Minha conta de luz reduziu 85% no primeiro mês. Recomendo a Solar Machado!”</blockquote>
                <figcaption className="who">Maria Rosa<span>Residencial, Teresina</span></figcaption>
              </figure>
              <div className="quote-side">
                <figure style={{ margin: 0 }}>
                  <blockquote>“Projeto bem dimensionado e equipe muito profissional. O retorno do investimento foi ainda melhor que o previsto.”</blockquote>
                  <figcaption className="who">João Silva<span>Comercial, Parnaíba</span></figcaption>
                </figure>
                <figure style={{ margin: 0 }}>
                  <blockquote>“Suporte técnico excepcional e monitoramento constante. Nossa empresa economiza milhares de reais por mês.”</blockquote>
                  <figcaption className="who">Ana Luiza<span>Industrial, Picos</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="section contact">
          <div className="wrap contact-in">
            <div>
              <h2 className="h2">Peça seu <b>orçamento gratuito</b></h2>
              <p className="lead">Conte sobre o seu projeto e receba uma proposta personalizada.</p>
              <div className="info">
                <div><Phone size={22} /><p><b>Telefone</b><span>(86) 98137-4037</span></p></div>
                <div><Mail size={22} /><p><b>E-mail</b><span>solarmachadoeng@gmail.com</span></p></div>
                <div><MapPin size={22} /><p><b>Endereço</b><span>Rua Professor José Amável, 799<br />Cabral, Teresina - PI</span></p></div>
              </div>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <h3>Solicite seu orçamento</h3>
              <label className="field" htmlFor="name">Nome completo
                <input id="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
              </label>
              <label className="field" htmlFor="email">E-mail
                <input id="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} />
              </label>
              <label className="field" htmlFor="phone">Telefone
                <input id="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={handleChange} required />
              </label>
              <label className="field" htmlFor="message">Conte sobre o seu projeto
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} />
              </label>
              <button type="submit" className="btn btn-navy"><MessageCircle size={20} /> Enviar pelo WhatsApp</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot-in">
            <div>
              <img src={logoImg} alt="Solar Machado" />
              <p>Especialistas em energia solar fotovoltaica, com soluções completas para residências e empresas no Piauí, Maranhão e Ceará.</p>
              <p style={{ marginTop: '.75rem', fontSize: '.875rem' }}>CNPJ: 34.757.760/0001-60</p>
            </div>
            <div>
              <h4>Serviços</h4>
              <ul>
                <li>Instalação residencial</li>
                <li>Instalação comercial</li>
                <li>Manutenção</li>
                <li>Consultoria</li>
              </ul>
            </div>
            <div>
              <h4>Contato</h4>
              <ul>
                <li>(86) 98137-4037</li>
                <li>solarmachadoeng@gmail.com</li>
                <li>Teresina - PI</li>
              </ul>
              <div className="social">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={24} /></a>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={24} /></a>
              </div>
            </div>
          </div>
          <p className="legal">&copy; 2026 Solar Machado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
