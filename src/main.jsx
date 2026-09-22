import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const experiences = [
  {
    period: 'Experiência atual',
    title: 'Estagiário de Desenvolvimento de Software',
    company: 'Elevate Software House',
    description: 'Construindo repertório em desenvolvimento de software, colaboração em equipe e entrega de soluções digitais com impacto real.',
    tag: 'Software',
  },
  {
    period: 'Experiência anterior',
    title: 'Professor de Inglês',
    company: 'KNN',
    description: 'Desenvolvimento de comunicação, didática e liderança ao transformar conhecimento em experiências de aprendizagem claras e humanas.',
    tag: 'Educação',
  },
];

const skills = ['Java', 'Node.js', 'React', 'JavaScript', 'Python', 'PHP', 'MySQL', 'APIs REST', 'Git & GitHub'];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <span className="brand-mark">H</span>
          <span>HGA<span className="brand-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#sobre">Sobre mim</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
        <button className="theme-toggle" type="button" onClick={() => setIsDark((value) => !value)} aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}>
          <span className="theme-icon" aria-hidden="true">{isDark ? '☀' : '◐'}</span>
          <span>{isDark ? 'Claro' : 'Escuro'}</span>
        </button>
      </header>

      <main>
        <section className="hero section-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow reveal">Olá, eu sou o Heitor <span className="wave">✦</span></p>
            <h1 className="reveal reveal-delay-1">Transformo curiosidade em <em>software</em> que faz sentido.</h1>
            <p className="hero-description reveal reveal-delay-2">Estudante de Engenharia de Software e desenvolvedor em formação. Gosto de entender problemas, criar soluções e deixar cada produto um pouco melhor.</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button button-primary" href="#contato">Vamos conversar <ArrowUpRight /></a>
              <a className="text-link" href="#experiencia">Ver minha jornada <ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-aside reveal reveal-delay-2">
            <div className="portrait-frame">
              <div className="portrait-initials">HGA</div>
              <span className="portrait-label">Em construção<br />com propósito</span>
            </div>
            <div className="availability"><span className="status-dot" /> disponível para oportunidades</div>
          </div>
          <div className="scroll-cue"><span>01</span><span className="scroll-line" /><span>scroll para explorar</span></div>
        </section>

        <section className="intro section-grid" id="sobre">
          <div className="section-number">02 <span>/ sobre</span></div>
          <div className="intro-content">
            <p className="eyebrow">Um pouco sobre mim</p>
            <h2>Entre o código e as pessoas, encontrei meu lugar.</h2>
            <div className="intro-columns">
              <p>Sou movido pela vontade de aprender e pela ideia de que a tecnologia pode ser mais simples, acessível e humana. Hoje, divido meu tempo entre a graduação e a prática no desenvolvimento de software.</p>
              <p>Minha passagem pela educação me ensinou a ouvir, explicar e trabalhar com diferentes perspectivas. Levo essa bagagem para cada linha de código e para cada projeto.</p>
            </div>
            <div className="education-note"><span className="note-icon">✣</span><div><strong>Engenharia de Software</strong><span>UniDomBosco-RJ · conclusão em dezembro de 2029</span></div></div>
          </div>
        </section>

        <section className="experience section-grid" id="experiencia">
          <div className="section-number">03 <span>/ experiência</span></div>
          <div className="experience-content">
            <div className="section-heading-row"><div><p className="eyebrow">Onde estive aprendendo</p><h2>Experiência que<br /><em>me trouxe até aqui.</em></h2></div><span className="chapter-mark">✳</span></div>
            <div className="experience-list">
              {experiences.map((experience, index) => <article className="experience-item" key={experience.company}><span className="experience-index">0{index + 1}</span><div className="experience-main"><div className="experience-meta"><span>{experience.period}</span><span className="experience-tag">{experience.tag}</span></div><h3>{experience.title}</h3><p className="company">{experience.company}</p><p className="experience-description">{experience.description}</p></div><ArrowUpRight /></article>)}
            </div>
          </div>
        </section>

        <section className="skills section-grid">
          <div className="section-number">04 <span>/ repertório</span></div>
          <div className="skills-content"><p className="eyebrow">Ferramentas do dia a dia</p><h2>Construindo uma base<br /><em>para ir além.</em></h2><div className="skill-list">{skills.map((skill, index) => <span className="skill-pill" key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></div>
        </section>

        <section className="contact section-grid" id="contato">
          <div className="section-number">05 <span>/ contato</span></div>
          <div className="contact-content"><p className="eyebrow">Tem uma ideia?</p><h2>Vamos fazer algo<br /><em>interessante juntos.</em></h2><a className="contact-link" href="mailto:heitor.gaddo@gmail.com">heitor.gaddo@gmail.com <ArrowUpRight /></a></div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Heitor Gaddo Ataíde</span><span>feito com curiosidade <span className="footer-star">✦</span></span><a href="#inicio">voltar ao topo ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
