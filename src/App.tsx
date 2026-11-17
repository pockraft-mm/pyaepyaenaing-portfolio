import { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, ArrowRight, ArrowUpRight, X } from 'lucide-react';
import { portfolio as p } from './data/portfolio';
import { BusinessShowcase } from './components/BusinessShowcase';

const navigation = [['About', 'about'], ['Experience', 'experience'], ['Education', 'education'], ['Work', 'work'], ['Contact', 'contact']];
const educationLogos = ['/miba-collage-logo.png', '/kmd-college-logo.png', '/shrm-college-logo.png', '/shrm-college-logo.png', '/no-16-bhs-logo.jpg'];
const educationDisplayOrder = [0, 1, 2, 3, 4];

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const photoDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedPhoto !== null) photoDialog.current?.showModal();
    else photoDialog.current?.close();
  }, [selectedPhoto]);

  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const targets = document.querySelectorAll<HTMLElement>('.about-grid > div:first-child, .about-window, .section-heading, .service, .education-card-static, .work .business-card, .contact-panel');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('scroll-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    targets.forEach(target => {
      target.classList.add('scroll-enter');
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <a className="logo" href="#top" aria-label={`${p.name}, home`}>{p.name}</a>
        <span className="nav-title">{p.role}</span>
        <nav className="nav" aria-label="Main navigation">
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </header>

      <main id="main">
        <section className="portrait-hero section-border" id="top" aria-labelledby="hero-title">
          <div className="portrait-frame">
            <img className="portrait-frame-image" src="/nora-in-burmese-cutout.png" alt="Pyae Pyae Naing in Burmese dress" width="1024" height="1536" fetchPriority="high" />
            <div className="hero-quick-actions"><a href="#about">About me <ArrowRight size={15} aria-hidden="true" /></a><a href={p.cv} download="Pyae-Pyae-Naing-CV.jpg">Download my CV <ArrowDownToLine size={15} aria-hidden="true" /></a></div>
            <h1 id="hero-title">Pyae Pyae Naing</h1>
          </div>
        </section>

        <section className="about section-border" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div><h2 id="about-title">A little About me</h2></div>
            <div className="about-window">
              <div className="about-window-bar" aria-hidden="true"><span className="window-light window-light-red" /><span className="window-light window-light-yellow" /><span className="window-light window-light-green" /><span className="about-window-title">About me</span></div>
              <div className="about-window-content">
                <p className="about-description">{p.about}</p>
                <p className="about-outlook">{p.outlook}</p>
                <dl className="facts"><div><dt>Background</dt><dd>International business</dd></div><div><dt>Location</dt><dd>{p.location}</dd></div><div><dt>Role</dt><dd>{p.role}</dd></div><div><dt>Focus</dt><dd>Accounting & business operations</dd></div></dl>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-border" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading"><h2 id="experience-title">Experience</h2></div>
            <div className="service-list">
              <article className="service"><span className="service-number">01</span><div><h3>{p.role}</h3><p className="entry-subtitle">{p.company}</p></div><p>Accounting role within a digital marketing agency.</p></article>
              <article className="service"><span className="service-number">02</span><div><h3>Page Admin & Shop Operations</h3><p className="entry-subtitle">Handmade & Cosmetic Shop · 2020 – 2023</p></div><ul className="experience-details">{p.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></article>
            </div>
          </div>
        </section>

        <section className="services education-section section-border" id="education" aria-labelledby="education-title">
          <div className="container">
            <div className="section-heading"><h2 id="education-title">Education</h2></div>
            <div className="education-grid">
              {educationDisplayOrder.map((educationIndex, displayIndex) => { const item = p.education[educationIndex]; return <article className="education-card-static" key={item.title}>
                <img src={educationLogos[educationIndex]} alt={`${item.institution} logo`} loading="lazy" />
                <div><span className="education-card-index">0{displayIndex + 1} / 06 · {item.years}</span><h3>{item.title}</h3><p>{item.institution}</p></div>
              </article>; })}
              <article className="education-card-static education-card-language">
                <img src="/ys-chinese-language-school-logo.png" alt="Ys Chinese Language School logo" loading="lazy" />
                <div><span className="education-card-index">06 / 06 · Level 1 completed</span><h3>Chinese Language</h3><p>Ys Chinese Language School</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="work section-border" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading"><h2 id="work-title">My work</h2></div>
            <BusinessShowcase onPhotoSelect={setSelectedPhoto} />
          </div>
        </section>

        <section className="services section-border" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading"><h2 id="skills-title">What I bring</h2></div>
            <div className="service-list">{p.skills.map((skill, index) => <article className="service" key={skill.title}><span className="service-number">0{index + 1}</span><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container contact-panel">
            <p className="eyebrow">Contact</p><h2 id="contact-title">Let’s connect.</h2>
            <p>For professional opportunities and collaborations, I’d be happy to hear from you.</p>
            <a className="button button-inverse" href={`mailto:${p.email}`}>Send a message <ArrowRight size={16} /></a>
            <footer className="contact-bottom">
              <span>{p.name} · {p.role}</span>
              <div className="social-links"><a href={`mailto:${p.email}`}>Email <ArrowUpRight size={14} /></a><a href={p.cv} download="Pyae-Pyae-Naing-CV.jpg">CV <ArrowDownToLine size={14} /></a></div>
              <a className="pockraft-credit" href="https://pockraft-studio-landing.moriartylink.workers.dev/" target="_blank" rel="noreferrer">Made by Pockraft <ArrowUpRight size={13} /></a>
              <span>© {new Date().getFullYear()}</span>
            </footer>
          </div>
        </section>
      </main>
      <dialog ref={photoDialog} className="photo-dialog" onClose={() => setSelectedPhoto(null)} onClick={event => { if (event.target === event.currentTarget) setSelectedPhoto(null); }} aria-label="Product photo"><button className="dialog-close" onClick={() => setSelectedPhoto(null)} aria-label="Close photo"><X size={24} /></button>{selectedPhoto !== null && <img src={p.photos[selectedPhoto].src} alt={p.photos[selectedPhoto].alt} />}</dialog>
    </>
  );
}
