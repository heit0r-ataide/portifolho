import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import portraitImage from '../Captura de tela 2026-10-04 171644.png';
import resumeUrl from '../curriculo_cia_estagios (2)_260930_140727.pdf?url';
import './styles.css';

const languages = [
  { code: 'pt-BR', label: 'PT-BR' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
];

const translations = {
  'pt-BR': {
    documentTitle: 'Heitor Gaddo Ataíde | Software Engineer',
    documentDescription: 'Portfólio de Heitor Gaddo Ataíde, estudante e desenvolvedor de software.',
    homeLabel: 'Voltar ao início',
    navigationLabel: 'Navegação principal',
    aboutNav: 'Sobre mim', experienceNav: 'Experiência', contactNav: 'Contato',
    languageLabel: 'Selecionar idioma',
    themeLightLabel: 'Ativar tema claro', themeDarkLabel: 'Ativar tema escuro', light: 'Claro', dark: 'Escuro',
    hero: {
      greeting: 'Olá, eu sou o Heitor', titleStart: 'Transformo curiosidade em', titleHighlight: 'software', titleEnd: 'que faz sentido.',
      description: 'Estudante de Engenharia de Software e desenvolvedor em formação. Gosto de entender problemas, criar soluções e deixar cada produto um pouco melhor.',
      cta: 'Vamos conversar', journey: 'Ver minha jornada', imageAlt: 'Heitor Gaddo Ataíde', imageLabel: <>Em construção<br />com propósito</>,
      availability: 'disponível para oportunidades', scroll: 'scroll para explorar',
    },
    about: {
      section: 'sobre', eyebrow: 'Um pouco sobre mim', title: 'Entre o código e as pessoas, encontrei meu lugar.',
      first: 'Sou movido pela vontade de aprender e pela ideia de que a tecnologia pode ser mais simples, acessível e humana. Hoje, divido meu tempo entre a graduação e a prática no desenvolvimento de software.',
      second: 'Minha passagem pela educação me ensinou a ouvir, explicar e trabalhar com diferentes perspectivas. Levo essa bagagem para cada linha de código e para cada projeto.',
      degree: 'Engenharia de Software', degreeDetails: 'UniDomBosco-RJ · conclusão em dezembro de 2029',
    },
    experience: {
      section: 'experiência', eyebrow: 'Onde estive aprendendo', title: 'Experiência que', highlight: 'me trouxe até aqui.',
      entries: [
        { period: 'Experiência atual', title: 'Estagiário de Desenvolvimento de Software', company: 'Elevate Software House', description: 'Construindo repertório em desenvolvimento de software, colaboração em equipe e entrega de soluções digitais com impacto real.', tag: 'Software' },
        { period: 'Experiência atual', title: 'Professor de Inglês', company: 'KNN', description: 'Desenvolvimento de comunicação, didática e liderança ao transformar conhecimento em experiências de aprendizagem claras e humanas.', tag: 'Educação' },
      ],
    },
    skills: { section: 'repertório', eyebrow: 'Ferramentas do dia a dia', title: 'Construindo uma base', highlight: 'para ir além.', values: ['Java', 'Node.js', 'React', 'Python', 'PHP', 'MySQL', 'APIs REST', 'Git & GitHub'] },
    social: { section: 'redes', eyebrow: 'Conhecer-me mais', title: 'Me encontre', highlight: 'por aí.', githubLabel: 'Acessar GitHub de Heitor', linkedinLabel: 'Acessar LinkedIn de Heitor' },
    resume: { section: 'currículo', eyebrow: 'Minha trajetória profissional', title: 'Currículo', viewLabel: 'Visualizar currículo', downloadLabel: 'Baixar currículo' },
    contact: { section: 'contato', eyebrow: 'Tem uma ideia?', title: 'Vamos fazer algo', highlight: 'interessante juntos.' },
    footerMade: 'feito com curiosidade', backToTop: 'voltar ao topo',
  },
  en: {
    documentTitle: 'Heitor Gaddo Ataíde | Software Engineer',
    documentDescription: 'Portfolio of Heitor Gaddo Ataíde, software engineering student and developer.',
    homeLabel: 'Back to home', navigationLabel: 'Main navigation',
    aboutNav: 'About', experienceNav: 'Experience', contactNav: 'Contact', languageLabel: 'Select language',
    themeLightLabel: 'Switch to light theme', themeDarkLabel: 'Switch to dark theme', light: 'Light', dark: 'Dark',
    hero: {
      greeting: "Hi, I'm Heitor", titleStart: 'I turn curiosity into', titleHighlight: 'software', titleEnd: 'that makes sense.',
      description: 'A Software Engineering student and aspiring developer. I enjoy understanding problems, building solutions, and making every product a little better.',
      cta: "Let's talk", journey: 'Explore my journey', imageAlt: 'Heitor Gaddo Ataíde', imageLabel: <>Building<br />with purpose</>,
      availability: 'open to opportunities', scroll: 'scroll to explore',
    },
    about: {
      section: 'about', eyebrow: 'A little about me', title: 'Between code and people, I found my place.',
      first: 'I am driven by a desire to learn and the belief that technology can be simpler, more accessible, and more human. Today, I divide my time between university and hands-on software development.',
      second: 'My experience in education taught me to listen, explain, and work with different perspectives. I bring that experience to every line of code and every project.',
      degree: 'Software Engineering', degreeDetails: 'UniDomBosco-RJ · expected graduation: December 2029',
    },
    experience: {
      section: 'experience', eyebrow: 'Where I have been learning', title: 'Experience that', highlight: 'brought me here.',
      entries: [
        { period: 'Current role', title: 'Software Development Intern', company: 'Elevate Software House', description: 'Building software development skills, collaborating with a team, and delivering digital solutions with real impact.', tag: 'Software' },
        { period: 'Current role', title: 'English Teacher', company: 'KNN', description: 'Building communication, teaching, and leadership skills by turning knowledge into clear, engaging learning experiences.', tag: 'Education' },
      ],
    },
    skills: { section: 'toolkit', eyebrow: 'Tools I use every day', title: 'Building a foundation', highlight: 'to go further.', values: ['Java', 'Node.js', 'React', 'Python', 'PHP', 'MySQL', 'REST APIs', 'Git & GitHub'] },
    social: { section: 'social', eyebrow: 'Get to know me', title: 'Find me', highlight: 'online.', githubLabel: "Visit Heitor's GitHub", linkedinLabel: "Visit Heitor's LinkedIn" },
    resume: { section: 'resume', eyebrow: 'My professional journey', title: 'Resume', viewLabel: 'View resume', downloadLabel: 'Download resume' },
    contact: { section: 'contact', eyebrow: 'Have an idea?', title: "Let's build something", highlight: 'interesting together.' },
    footerMade: 'made with curiosity', backToTop: 'back to top',
  },
  es: {
    documentTitle: 'Heitor Gaddo Ataíde | Ingeniero de Software',
    documentDescription: 'Portafolio de Heitor Gaddo Ataíde, estudiante y desarrollador de software.',
    homeLabel: 'Volver al inicio', navigationLabel: 'Navegación principal',
    aboutNav: 'Sobre mí', experienceNav: 'Experiencia', contactNav: 'Contacto', languageLabel: 'Seleccionar idioma',
    themeLightLabel: 'Activar tema claro', themeDarkLabel: 'Activar tema oscuro', light: 'Claro', dark: 'Oscuro',
    hero: {
      greeting: 'Hola, soy Heitor', titleStart: 'Transformo la curiosidad en', titleHighlight: 'software', titleEnd: 'que tiene sentido.',
      description: 'Estudiante de Ingeniería de Software y desarrollador en formación. Me gusta entender problemas, crear soluciones y mejorar un poco cada producto.',
      cta: 'Hablemos', journey: 'Conoce mi trayectoria', imageAlt: 'Heitor Gaddo Ataíde', imageLabel: <>En construcción<br />con propósito</>,
      availability: 'disponible para oportunidades', scroll: 'desplázate para explorar',
    },
    about: {
      section: 'sobre mí', eyebrow: 'Un poco sobre mí', title: 'Entre el código y las personas, encontré mi lugar.',
      first: 'Me impulsa el deseo de aprender y la idea de que la tecnología puede ser más sencilla, accesible y humana. Hoy divido mi tiempo entre la universidad y la práctica del desarrollo de software.',
      second: 'Mi experiencia en educación me enseñó a escuchar, explicar y trabajar con distintas perspectivas. Llevo ese aprendizaje a cada línea de código y a cada proyecto.',
      degree: 'Ingeniería de Software', degreeDetails: 'UniDomBosco-RJ · graduación prevista para diciembre de 2029',
    },
    experience: {
      section: 'experiencia', eyebrow: 'Dónde he aprendido', title: 'Experiencias que', highlight: 'me trajeron hasta aquí.',
      entries: [
        { period: 'Trabajo actual', title: 'Pasante de desarrollo de software', company: 'Elevate Software House', description: 'Ampliando mis conocimientos en desarrollo de software, colaborando en equipo y creando soluciones digitales con impacto real.', tag: 'Software' },
        { period: 'Trabajo actual', title: 'Profesor de inglés', company: 'KNN', description: 'Desarrollando comunicación, didáctica y liderazgo al transformar conocimientos en experiencias de aprendizaje claras y cercanas.', tag: 'Educación' },
      ],
    },
    skills: { section: 'herramientas', eyebrow: 'Herramientas del día a día', title: 'Construyendo una base', highlight: 'para ir más allá.', values: ['Java', 'Node.js', 'React', 'Python', 'PHP', 'MySQL', 'APIs REST', 'Git & GitHub'] },
    social: { section: 'redes', eyebrow: 'Conóceme mejor', title: 'Encuéntrame', highlight: 'por ahí.', githubLabel: 'Visitar GitHub de Heitor', linkedinLabel: 'Visitar LinkedIn de Heitor' },
    resume: { section: 'currículum', eyebrow: 'Mi trayectoria profesional', title: 'Currículum', viewLabel: 'Ver currículum', downloadLabel: 'Descargar currículum' },
    contact: { section: 'contacto', eyebrow: '¿Tienes una idea?', title: 'Hagamos algo', highlight: 'interesante juntos.' },
    footerMade: 'hecho con curiosidad', backToTop: 'volver arriba',
  },
  fr: {
    documentTitle: 'Heitor Gaddo Ataíde | Ingénieur logiciel',
    documentDescription: 'Portfolio de Heitor Gaddo Ataíde, étudiant et développeur en génie logiciel.',
    homeLabel: "Retour à l'accueil", navigationLabel: 'Navigation principale',
    aboutNav: 'À propos', experienceNav: 'Expérience', contactNav: 'Contact', languageLabel: 'Choisir la langue',
    themeLightLabel: 'Activer le thème clair', themeDarkLabel: 'Activer le thème sombre', light: 'Clair', dark: 'Sombre',
    hero: {
      greeting: "Bonjour, je m'appelle Heitor", titleStart: 'Je transforme la curiosité en', titleHighlight: 'logiciel', titleEnd: 'qui a du sens.',
      description: 'Étudiant en génie logiciel et développeur en devenir. J’aime comprendre les problèmes, créer des solutions et améliorer chaque produit.',
      cta: 'Parlons-en', journey: 'Découvrir mon parcours', imageAlt: 'Heitor Gaddo Ataíde', imageLabel: <>En construction<br />avec du sens</>,
      availability: 'ouvert aux opportunités', scroll: 'défiler pour explorer',
    },
    about: {
      section: 'à propos', eyebrow: 'Quelques mots sur moi', title: "Entre le code et les personnes, j'ai trouvé ma place.",
      first: "J’aime apprendre et je crois que la technologie peut être plus simple, accessible et humaine. Aujourd’hui, je partage mon temps entre mes études et la pratique du développement logiciel.",
      second: "Mon expérience dans l’enseignement m’a appris à écouter, à expliquer et à travailler avec différents points de vue. J’enrichis chaque ligne de code et chaque projet de cette expérience.",
      degree: 'Génie logiciel', degreeDetails: 'UniDomBosco-RJ · diplôme prévu en décembre 2029',
    },
    experience: {
      section: 'expérience', eyebrow: "Là où j'ai appris", title: 'Des expériences qui', highlight: "m'ont mené jusqu'ici.",
      entries: [
        { period: 'Poste actuel', title: 'Stagiaire en développement logiciel', company: 'Elevate Software House', description: 'Développer mes compétences, collaborer en équipe et créer des solutions numériques à impact réel.', tag: 'Logiciel' },
        { period: 'Poste actuel', title: "Professeur d'anglais", company: 'KNN', description: "Développer la communication, la pédagogie et le leadership en transformant le savoir en expériences d’apprentissage claires et humaines.", tag: 'Éducation' },
      ],
    },
    skills: { section: 'compétences', eyebrow: 'Mes outils au quotidien', title: 'Construire des bases', highlight: 'pour aller plus loin.', values: ['Java', 'Node.js', 'React', 'Python', 'PHP', 'MySQL', 'API REST', 'Git & GitHub'] },
    social: { section: 'réseaux', eyebrow: 'Pour mieux me connaître', title: 'Retrouvez-moi', highlight: 'en ligne.', githubLabel: 'Voir le GitHub de Heitor', linkedinLabel: 'Voir le LinkedIn de Heitor' },
    resume: { section: 'CV', eyebrow: 'Mon parcours professionnel', title: 'CV', viewLabel: 'Voir le CV', downloadLabel: 'Télécharger le CV' },
    contact: { section: 'contact', eyebrow: 'Une idée en tête ?', title: 'Créons quelque chose', highlight: "d'intéressant ensemble." },
    footerMade: 'créé avec curiosité', backToTop: 'retour en haut',
  },
  de: {
    documentTitle: 'Heitor Gaddo Ataíde | Softwareentwickler',
    documentDescription: 'Portfolio von Heitor Gaddo Ataíde, Student und Entwickler im Bereich Software Engineering.',
    homeLabel: 'Zurück zum Anfang', navigationLabel: 'Hauptnavigation',
    aboutNav: 'Über mich', experienceNav: 'Erfahrung', contactNav: 'Kontakt', languageLabel: 'Sprache auswählen',
    themeLightLabel: 'Helles Design aktivieren', themeDarkLabel: 'Dunkles Design aktivieren', light: 'Hell', dark: 'Dunkel',
    hero: {
      greeting: 'Hallo, ich bin Heitor', titleStart: 'Ich verwandle Neugier in', titleHighlight: 'Software', titleEnd: ', die Sinn ergibt.',
      description: 'Student im Bereich Software Engineering und angehender Entwickler. Ich löse gern Probleme, entwickle Lösungen und mache jedes Produkt ein Stück besser.',
      cta: 'Lass uns reden', journey: 'Mein Werdegang', imageAlt: 'Heitor Gaddo Ataíde', imageLabel: <>Im Aufbau<br />mit Sinn</>,
      availability: 'offen für neue Möglichkeiten', scroll: 'weiter scrollen',
    },
    about: {
      section: 'über mich', eyebrow: 'Ein wenig über mich', title: 'Zwischen Code und Menschen habe ich meinen Platz gefunden.',
      first: 'Mich treibt die Freude am Lernen an und der Gedanke, dass Technologie einfacher, zugänglicher und menschlicher sein kann. Heute teile ich meine Zeit zwischen Studium und praktischer Softwareentwicklung.',
      second: 'Meine Erfahrung in der Bildung hat mich gelehrt zuzuhören, zu erklären und unterschiedliche Perspektiven einzubeziehen. Diese Erfahrung bringe ich in jede Codezeile und jedes Projekt ein.',
      degree: 'Software Engineering', degreeDetails: 'UniDomBosco-RJ · voraussichtlicher Abschluss: Dezember 2029',
    },
    experience: {
      section: 'erfahrung', eyebrow: 'Wo ich gelernt habe', title: 'Erfahrungen, die', highlight: 'mich hierher gebracht haben.',
      entries: [
        { period: 'Aktuelle Tätigkeit', title: 'Praktikant für Softwareentwicklung', company: 'Elevate Software House', description: 'Softwareentwicklung lernen, im Team zusammenarbeiten und digitale Lösungen mit echter Wirkung umsetzen.', tag: 'Software' },
        { period: 'Aktuelle Tätigkeit', title: 'Englischlehrer', company: 'KNN', description: 'Kommunikation, Didaktik und Führung stärken und Wissen in klare, menschliche Lernerfahrungen verwandeln.', tag: 'Bildung' },
      ],
    },
    skills: { section: 'kenntnisse', eyebrow: 'Werkzeuge im Alltag', title: 'Ein solides Fundament', highlight: 'für den nächsten Schritt.', values: ['Java', 'Node.js', 'React', 'Python', 'PHP', 'MySQL', 'REST-APIs', 'Git & GitHub'] },
    social: { section: 'profile', eyebrow: 'Lerne mich besser kennen', title: 'Hier findest du mich', highlight: 'online.', githubLabel: 'Heitors GitHub öffnen', linkedinLabel: 'Heitors LinkedIn öffnen' },
    resume: { section: 'Lebenslauf', eyebrow: 'Mein beruflicher Werdegang', title: 'Lebenslauf', viewLabel: 'Lebenslauf ansehen', downloadLabel: 'Lebenslauf herunterladen' },
    contact: { section: 'kontakt', eyebrow: 'Eine Idee?', title: 'Lass uns etwas', highlight: 'Spannendes zusammen entwickeln.' },
    footerMade: 'mit Neugier gestaltet', backToTop: 'nach oben',
  },
};

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return Object.hasOwn(translations, savedLanguage) ? savedLanguage : 'pt-BR';
  });
  const content = translations[language];

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.documentTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.documentDescription);
    localStorage.setItem('language', language);
  }, [content, language]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label={content.homeLabel}>
          <span>Heitor Gaddo Ataíde</span>
        </a>
        <nav className="nav-links" aria-label={content.navigationLabel}>
          <a href="#sobre">{content.aboutNav}</a>
          <a href="#experiencia">{content.experienceNav}</a>
          <a href="#contato">{content.contactNav}</a>
        </nav>
        <div className="header-controls">
          <label className="language-control">
            <span className="visually-hidden">{content.languageLabel}</span>
            <select aria-label={content.languageLabel} value={language} onChange={(event) => setLanguage(event.target.value)}>
              {languages.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}
            </select>
          </label>
          <button className="theme-toggle" type="button" onClick={() => setIsDark((value) => !value)} aria-label={isDark ? content.themeLightLabel : content.themeDarkLabel}>
            <span className="theme-icon" aria-hidden="true">{isDark ? '☀' : '◐'}</span>
            <span>{isDark ? content.light : content.dark}</span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-grid" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow reveal">{content.hero.greeting} <span className="wave">✦</span></p>
            <h1 className="reveal reveal-delay-1">{content.hero.titleStart} <em>{content.hero.titleHighlight}</em>{language === 'de' ? '' : ' '}{content.hero.titleEnd}</h1>
            <p className="hero-description reveal reveal-delay-2">{content.hero.description}</p>
            <div className="hero-actions reveal reveal-delay-3">
              <a className="button button-primary" href="#contato">{content.hero.cta} <ArrowUpRight /></a>
              <a className="text-link" href="#experiencia">{content.hero.journey} <ArrowUpRight /></a>
            </div>
          </div>
          <div className="hero-aside reveal reveal-delay-2">
            <div className="portrait-frame">
              <img className="portrait-image" src={portraitImage} alt={content.hero.imageAlt} />
              <span className="portrait-label">{content.hero.imageLabel}</span>
            </div>
            <div className="availability"><span className="status-dot" /> {content.hero.availability}</div>
          </div>
          <div className="scroll-cue"><span>01</span><span className="scroll-line" /><span>{content.hero.scroll}</span></div>
        </section>

        <section className="intro section-grid" id="sobre">
          <div className="section-number">02 <span>/ {content.about.section}</span></div>
          <div className="intro-content">
            <p className="eyebrow">{content.about.eyebrow}</p>
            <h2>{content.about.title}</h2>
            <div className="intro-columns">
              <p>{content.about.first}</p>
              <p>{content.about.second}</p>
            </div>
            <div className="education-note"><span className="note-icon">✣</span><div><strong>{content.about.degree}</strong><span>{content.about.degreeDetails}</span></div></div>
          </div>
        </section>

        <section className="experience section-grid" id="experiencia">
          <div className="section-number">03 <span>/ {content.experience.section}</span></div>
          <div className="experience-content">
            <div className="section-heading-row"><div><p className="eyebrow">{content.experience.eyebrow}</p><h2>{content.experience.title}<br /><em>{content.experience.highlight}</em></h2></div><span className="chapter-mark">✳</span></div>
            <div className="experience-list">
              {content.experience.entries.map((experience, index) => <article className="experience-item" key={experience.company}><span className="experience-index">0{index + 1}</span><div className="experience-main"><div className="experience-meta"><span>{experience.period}</span><span className="experience-tag">{experience.tag}</span></div><h3>{experience.title}</h3><p className="company">{experience.company}</p><p className="experience-description">{experience.description}</p></div><ArrowUpRight /></article>)}
            </div>
          </div>
        </section>

        <section className="skills section-grid">
          <div className="section-number">04 <span>/ {content.skills.section}</span></div>
          <div className="skills-content"><p className="eyebrow">{content.skills.eyebrow}</p><h2>{content.skills.title}<br /><em>{content.skills.highlight}</em></h2><div className="skill-list">{content.skills.values.map((skill, index) => <span className="skill-pill" key={skill}><b>0{index + 1}</b>{skill}</span>)}</div></div>
        </section>

        <section className="contact section-grid" id="redes">
          <div className="section-number">05 <span>/ {content.social.section}</span></div>
          <div className="contact-content">
            <p className="eyebrow">{content.social.eyebrow}</p>
            <h2>{content.social.title}<br /><em>{content.social.highlight}</em></h2>
            <div className="hero-actions">
              <a className="text-link" href="https://github.com/heit0r-ataide" target="_blank" rel="noreferrer" aria-label={content.social.githubLabel}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.04c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 2.31 3.4 1.64.1-.72.4-1.21.72-1.49-2.47-.28-5.07-1.24-5.07-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.6 5.23-5.08 5.5.4.35.76 1.03.76 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" /></svg>
                GitHub
              </a>
              <a className="text-link" href="https://www.linkedin.com/in/heitor-gaddo-ataíde-590a16377" target="_blank" rel="noreferrer" aria-label={content.social.linkedinLabel}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.34H4.97V9.08h2.96v9.26ZM6.45 7.81a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm11.89 10.53h-2.96v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58H9.2V9.08h2.84v1.27h.04c.4-.73 1.36-1.5 2.8-1.5 3 0 3.56 1.98 3.56 4.55v4.94Z" /></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section className="resume section-grid" id="curriculo">
          <div className="section-number">06 <span>/ {content.resume.section}</span></div>
          <div className="resume-content">
            <p className="eyebrow">{content.resume.eyebrow}</p>
            <h2>{content.resume.title}</h2>
            <div className="resume-actions">
              <a className="button button-primary resume-button" href={resumeUrl} target="_blank" rel="noopener noreferrer">
                {content.resume.viewLabel} <ArrowUpRight />
              </a>
              <a className="button button-outline resume-button" href={resumeUrl} download="curriculo-heitor-gaddo-ataide.pdf">
                {content.resume.downloadLabel} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact section-grid" id="contato">
          <div className="section-number">07 <span>/ {content.contact.section}</span></div>
          <div className="contact-content"><p className="eyebrow">{content.contact.eyebrow}</p><h2>{content.contact.title}<br /><em>{content.contact.highlight}</em></h2><a className="contact-link" href="mailto:heitorgataide@gmail.com">heitorgataide@gmail.com <ArrowUpRight /></a></div>
        </section>
      </main>

      <footer className="footer"><span>© 2026 Heitor Gaddo Ataíde</span><span>{content.footerMade} <span className="footer-star">✦</span></span><a href="#inicio">{content.backToTop} ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
