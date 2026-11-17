import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Film, Image } from 'lucide-react';
import { portfolio as p } from '../data/portfolio';

const slides = [
  ...p.videos.map((src, index) => ({ kind: 'video' as const, src, title: `Product video ${index + 1}` })),
  ...p.photos.map((photo, photoIndex) => ({ kind: 'photo' as const, ...photo, photoIndex })),
];

export function BusinessShowcase({ onPhotoSelect }: { onPhotoSelect: (index: number) => void }) {
  const [active, setActive] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);

  useEffect(() => {
    viewport.current?.querySelectorAll('video').forEach((video, index) => {
      if (index !== active) video.pause();
    });
  }, [active]);

  const goTo = (index: number) => {
    const track = viewport.current;
    if (!track) return;
    track.scrollTo({
      left: Math.max(0, Math.min(slides.length - 1, index)) * track.clientWidth,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  };

  return (
    <article className="business-card" aria-labelledby="business-title">
      <div className="window-bar" aria-hidden="true">
        <span className="window-dot window-dot-close" />
        <span className="window-dot window-dot-minimize" />
        <span className="window-dot window-dot-maximize" />
        <span className="window-title">Handmade & Cosmetic Shop</span>
      </div>
      <div className="business-gallery" role="region" aria-roledescription="carousel" aria-label="Small business videos and photos">
        <div
          ref={viewport}
          id="business-media"
          className="business-slides"
          tabIndex={0}
          aria-label="Swipe to explore, or use the left and right arrow keys"
          onScroll={() => {
            const track = viewport.current;
            if (track) setActive(Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / track.clientWidth))));
          }}
          onKeyDown={event => {
            if (event.target !== event.currentTarget) return;
            if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
              event.preventDefault();
              goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
            }
          }}
        >
          {slides.map((slide, index) => (
            <div className="business-slide" key={slide.src} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.title}`} inert={index !== active}>
              {slide.kind === 'video' ? (
                <video src={`${slide.src}#t=0.1`} autoPlay muted loop playsInline preload={index === active ? 'metadata' : 'none'} aria-label={slide.title} />
              ) : (
                <button className="business-photo" onClick={() => onPhotoSelect(slide.photoIndex)} aria-label={`Enlarge ${slide.title.toLowerCase()}`}>
                  <img src={slide.src} alt={slide.alt} loading="lazy" />
                  <span>View photo <ArrowUpRight size={16} /></span>
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="gallery-controls">
          <div className="gallery-dots" aria-label="Choose a slide">
            {slides.map((slide, index) => <button key={slide.src} className="gallery-dot" aria-label={`Show ${slide.title.toLowerCase()}`} aria-current={active === index ? 'true' : undefined} aria-controls="business-media" onClick={() => goTo(index)}><span /></button>)}
          </div>
        </div>
      </div>
      <div className="business-copy">
        <p className="eyebrow">Small business · 2020 – 2023</p>
        <h3 id="business-title">Handmade &<br />Cosmetic Shop</h3>
        <p>My online shop, from handmade products to daily operations.</p>
        <div className="gallery-caption">
          <span aria-live="polite" aria-atomic="true">{active < p.videos.length ? <Film size={16} /> : <Image size={16} />} {slides[active].title} · {active + 1} / {slides.length}</span>
        </div>
      </div>
    </article>
  );
}
