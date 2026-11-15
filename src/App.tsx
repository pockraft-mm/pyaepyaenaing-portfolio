import { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Award, BookOpen, GraduationCap, Globe2, School, X } from 'lucide-react';
import { portfolio as p } from './data/portfolio';
import { BusinessShowcase } from './components/BusinessShowcase';

const navigation = [['About', 'about'], ['Experience', 'experience'], ['Education', 'education'], ['Work', 'work'], ['Contact', 'contact']];
const educationIcons = [GraduationCap, Award, Globe2, BookOpen, School];

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const photoDialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (selectedPhoto !== null) photoDialog.current?.showModal();
    else photoDialog.current?.close();
  }, [selectedPhoto]);

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
        <section className="portfolio-hero section-border" id="top" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Based in {p.location}</p>
              <h1 id="hero-title">Pyae Pyae Naing<span aria-hidden="true">.</span></h1>
            </div>
            <div className="hero-portrait">
              <img className="profile-image" src="/profile-clean.png" alt="Pyae Pyae Naing in a black blazer" width="1122" height="1402" fetchPriority="high" />
            </div>
            <div className="hero-intro">
              <p>{p.introduction}</p>
              <div className="hero-actions">
                <a className="button button-default hero-work-button" href="#work">View My Work <ArrowRight size={16} /></a>
                <a className="button button-outline" href={p.cv} download="Pyae-Pyae-Naing-CV.jpg">Download CV <ArrowDownToLine size={16} /></a>
              </div>
              <span className="availability">{p.role} · Business Operations</span>
            </div>
          </div>
        </section>

        <section className="about section-border" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div><p className="eyebrow">About</p><h2 id="about-title">A little about me</h2></div>
            <div>
              <p className="about-description">{p.about}</p>
              <p className="about-outlook">{p.outlook}</p>
              <dl className="facts"><div><dt>Background</dt><dd>International business</dd></div><div><dt>Location</dt><dd>{p.location}</dd></div><div><dt>Role</dt><dd>{p.role}</dd></div><div><dt>Focus</dt><dd>Accounting & business operations</dd></div></dl>
            </div>
          </div>
        </section>

        <section className="services section-border" id="experience" aria-labelledby="experience-title">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Experience</p><h2 id="experience-title">Learning through doing.</h2></div>
            <div className="service-list">
              <article className="service"><span className="service-number">01</span><div><h3>{p.role}</h3><p className="entry-subtitle">{p.company}</p></div><p>Accounting role within a digital marketing agency.</p></article>
              <article className="service"><span className="service-number">02</span><div><h3>Page Admin & Shop Operations</h3><p className="entry-subtitle">Handmade & Cosmetic Shop · 2020 – 2023</p></div><ul className="experience-details">{p.responsibilities.map(item => <li key={item}>{item}</li>)}</ul></article>
            </div>
          </div>
        </section>

        <section className="services education-section section-border" id="education" aria-labelledby="education-title">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">Education</p><h2 id="education-title">Building a strong foundation.</h2></div>
            <div className="service-list">
              {p.education.map((item, index) => { const EducationIcon = educationIcons[index] ?? School; return <article className="service" key={item.title}><span className="service-number">0{index + 1}</span><h3><EducationIcon className="education-icon" size={18} aria-hidden="true" />{item.title}</h3><div><p>{item.institution}</p><p className="entry-subtitle">{item.years}</p></div></article>; })}
            </div>
            <p className="language-note">Chinese · Level 1 completed — Ys Chinese Language School</p>
          </div>
        </section>

        <section className="work section-border" id="work" aria-labelledby="work-title">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">My work</p><h2 id="work-title">A small business.<br />A personal commitment.</h2></div>
            <BusinessShowcase onPhotoSelect={setSelectedPhoto} />
          </div>
        </section>

        <section className="services section-border" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading"><p className="eyebrow">What I bring</p><h2 id="skills-title">How I can help</h2></div>
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
