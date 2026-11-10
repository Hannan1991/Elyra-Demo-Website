'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assetUrl, products } from '../data/products';

const likes = ['2.4K', '1.8K', '3.1K', '1.2K', '2.7K', '1.9K'];
const fruitNames = ['raspberry', 'peach', 'cherry', 'lychee', 'mango', 'berry'];
const fruitPositions = ['0% 0%', '50% 0%', '100% 0%', '0% 100%', '50% 100%', '100% 100%'];
const captions = [
  'Een fluwelen framboostint. Jouw nieuwe kenmerkende glans.',
  'Perziklicht in een gloss, gemaakt voor het gouden uur.',
  'Een vleugje kers. Een glow die met je meegaat.',
  'Zacht, licht en stralend — een vleugje lychee.',
  'Een gouden mangotoets, waar je dag je ook brengt.',
  'Bessen voor de avond. Jouw zachte statement.',
];

export default function FruitJourney() {
  const [hearted, setHearted] = useState({});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.utils.toArray('.fruit-chapter').forEach((chapter) => {
        const fruit = chapter.querySelector('.fruit-zoom');
        const floaters = chapter.querySelectorAll('.fruit-floater');
        gsap.fromTo(fruit, { xPercent: -50, yPercent: -50, scale: 0.16, rotate: -12 }, {
          xPercent: -50,
          yPercent: -50,
          scale: 3.6,
          rotate: 8,
          ease: 'none',
          scrollTrigger: { trigger: chapter, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
        });
        gsap.to(floaters, {
          yPercent: (index) => index % 2 ? -85 : 75,
          xPercent: (index) => index % 2 ? 48 : -34,
          rotate: (index) => index % 2 ? 40 : -55,
          ease: 'none',
          stagger: 0.08,
          scrollTrigger: { trigger: chapter, start: 'top bottom', end: 'bottom top', scrub: 1 },
        });
        gsap.fromTo(chapter.querySelector('.fruit-social-card'), { y: 36, opacity: 0.75 }, {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: chapter, start: 'top 78%', end: 'center center', scrub: 0.5 },
        });
      });
    });
    return () => context.revert();
  }, []);

  return (
    <section className="fruit-journey" aria-label="Scrollverhaal: ontdek de ELYRA fruitglosses">
      <div className="fruit-journey-intro page-gutter">
        <span className="eyebrow">ELKE SMAAK IN BLOEI · SCROLL OM TE ONTDEKKEN</span>
        <p>Een nieuwe glow<br /><em>bij elke scroll.</em></p>
      </div>
      {products.map((product, index) => (
        <article className={`fruit-chapter fruit-${fruitNames[index]}`} id={`fruit-${product.slug}`} key={product.slug}>
          <div className="fruit-chapter-word" aria-hidden="true">{product.fruit.toUpperCase()}</div>
          <div className="fruit-lightwash" aria-hidden="true" />
          <div className="fruit-zoom" style={{ '--fruit-position': fruitPositions[index] }} aria-hidden="true"><span className="fruit-gloss-highlight" /></div>
          <div className="fruit-floater floater-a" style={{ '--fruit-position': fruitPositions[index] }} aria-hidden="true" />
          <div className="fruit-floater floater-b" style={{ '--fruit-position': fruitPositions[index] }} aria-hidden="true" />
          <div className="fruit-floater floater-c" style={{ '--fruit-position': fruitPositions[index] }} aria-hidden="true" />
          <div className="fruit-chapter-copy">
            <span className="eyebrow">0{index + 1} / 06 · GLOSS MET FRUITTINT</span>
            <h3>{product.name.split(' ')[0]}<br /><em>{product.name.split(' ').slice(1).join(' ')}</em></h3>
            <p>{captions[index]}</p>
            <span className="chapter-swatch" style={{ '--shade': product.color }}>{product.shade}</span>
          </div>
          <div className="fruit-social-card">
            <div className="social-card-head"><span className="social-avatar">E</span><span><strong>elyra.beauty</strong><small>DE ELYRA GLOW-SELECTIE</small></span><b>···</b></div>
            <div className="social-card-art" style={{ '--shade': product.color, '--shade-light': product.light }}>
              <span className="social-art-caption">EEN BEETJE<br /><em>MEER GLOW</em></span>
              <img src={assetUrl('/images/elyra-tube-model.jpg')} alt={`${product.name} lipgloss conceptbeeld`} loading="lazy" style={{ filter: `hue-rotate(${index * 42}deg)` }} />
              <span className="social-art-fruit">{product.fruit}</span>
            </div>
            <div className="social-card-actions">
              <button className={hearted[index] ? 'is-hearted' : ''} onClick={() => setHearted((current) => ({ ...current, [index]: !current[index] }))} aria-label={hearted[index] ? 'Like verwijderen' : 'Like deze ELYRA demo-post'} aria-pressed={Boolean(hearted[index])}>♥</button>
              <span>♡ <b>{hearted[index] ? '2.5K' : likes[index]}</b> <small>demo-likes</small></span>
              <span>↗</span>
            </div>
            <p className="social-card-copy"><strong>elyra.beauty</strong> {captions[index]}</p>
          </div>
          <a className="fruit-next" href={index < products.length - 1 ? `#fruit-${products[index + 1].slug}` : '#experience'} aria-label={index < products.length - 1 ? `Volgende smaak: ${products[index + 1].name}` : 'Verder naar de ELYRA-wereld'}>
            <span>{index < products.length - 1 ? `VOLGENDE · ${products[index + 1].fruit.toUpperCase()}` : 'ONTDEK DE ELYRA-WERELD'}</span><b>↓</b>
          </a>
          <span className="fruit-chapter-index">ELYRA · 0{index + 1}</span>
        </article>
      ))}
      <p className="fruit-demo-note">De fruitbeelden, social-posts en like-aantallen zijn conceptvisuals voor deze demo.</p>
    </section>
  );
}
