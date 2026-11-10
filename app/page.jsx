'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '../components/ProductCard';
import LazyHeroScene from '../components/LazyHeroScene';
import FruitJourney from '../components/FruitJourney';
import SmoothScroll from '../components/SmoothScroll';
import { useCart } from './providers';
import { formatPrice, products } from '../data/products';


const benefits = [
  ['01', 'Spiegelende glans', 'Een luxueuze finish met een zachte, verfijnde glans.'],
  ['02', 'Comfort, de hele dag', 'Een comfortabel gevoel dat licht en soepel aanvoelt.'],
  ['03', 'Verzorgend gevoel', 'Een verzorgend lipmoment, ontworpen voor dagelijks gebruik.'],
  ['04', 'Niet plakkerig', 'Een zachte, gladde finish zonder plakkerig gevoel.'],
];
const posts = [
  ['DE GLOW-SELECTIE', 'Raspberry Velvet', 'ig-art-berry'],
  ['EEN MOMENT IN PERZIK', 'Peach Nectar', 'ig-art-peach'],
  ['ZACHT LICHT, ZACHTE GLOW', 'Lychee Glow', 'ig-art-lychee'],
  ['ALTIJD IN JE TAS', 'Het ELYRA-ritueel', 'ig-art-ritual'],
  ['EEN VLEUGJE KERS', 'Cherry Bloom', 'ig-art-cherry'],
  ['ALTIJD GOUDEN UUR', 'Mango Mirage', 'ig-art-mango'],
];
const reviews = [
  ['“Een zachte glans die meteen mijn nieuwe daily ritual werd.”', 'ILLUSTRATIEVE DEMOQUOTE'],
  ['“De tinten voelen verfijnd en passen moeiteloos bij mijn look.”', 'ILLUSTRATIEVE DEMOQUOTE'],
  ['“Een klein beauty-moment dat altijd in mijn tas meegaat.”', 'ILLUSTRATIEVE DEMOQUOTE'],
];

function SectionLabel({ number, children }) { return <p className="section-label"><span>{number}</span>{children}</p>; }

export default function HomePage() {
  const heroRef = useRef(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [formMessage, setFormMessage] = useState('');
  const { add } = useCart();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((item) => {
        gsap.fromTo(item, { autoAlpha: 0, y: 34 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 88%', once: true } });
      });
      gsap.to('.hero-visual', { yPercent: -7, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 } });
      gsap.to('.hero-glow', { scale: 1.14, opacity: 0.72, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  function handlePointer(event) {
    if (!heroRef.current || event.pointerType !== 'mouse') return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--pointer-x', `${(event.clientX - rect.left) / rect.width - 0.5}`);
    heroRef.current.style.setProperty('--pointer-y', `${(event.clientY - rect.top) / rect.height - 0.5}`);
  }

  function shiftProduct(direction) {
    setActiveProduct((current) => (current + direction + products.length) % products.length);
  }

  function submitNewsletter(event) {
    event.preventDefault();
    setFormMessage('Bedankt — de inschrijving is in deze demo niet naar een mailinglijst verstuurd.');
  }

  return (
    <>
      <SmoothScroll />
      <main ref={heroRef} onPointerMove={handlePointer}>
        <section className="hero" id="home">
          <div className="hero-backdrop" aria-hidden="true"><span>ELYRA</span><i className="hero-glow" /></div>
          <div className="hero-layout page-gutter">
            <div className="hero-copy">
              <p className="eyebrow hero-kicker"><span className="tiny-star">✳</span> EEN NIEUWE GLOW</p>
              <h1>GLANS<br /><em>ZONDER</em><br />GRENZEN.</h1>
              <p className="hero-subtitle">Ontdek luxueuze lipgloss ontworpen voor een moeiteloze glow.</p>
              <div className="hero-actions"><Link className="button button-dark" href="/shop">Shop nu <span>↗</span></Link><a className="text-action" href="#collection">Bekijk collectie <span>↓</span></a></div>
              <div className="hero-note"><span>01 / DE ELYRA GLOW</span><span>LUXE · GLANS · ZELFVERTROUWEN</span></div>
            </div>
            <div className="hero-visual" aria-label="Zwevende ELYRA lipgloss in een lichte studio">
              <div className="hero-image-well"><img src="/images/elyra-tube-model.jpg" alt="ELYRA gloss-tubes met fruitige glans" fetchPriority="high" /><div className="image-glass-label">HET<br />GLOW-<br />OBJECT</div></div>
              <div className="scene-layer scene-layer-one" aria-hidden="true">✳</div><div className="scene-layer scene-layer-two" aria-hidden="true">◌</div>
              <LazyHeroScene shade={products[activeProduct].color} />
              <span className="visual-side-note">ONTWORPEN VOOR JOUW GEVOEL</span>
            </div>
          </div>
          <div className="hero-bottom page-gutter"><span>LIPGLOSS MET FRUITTINTEN</span><span>SCROLL OM TE ONTDEKKEN <b>↓</b></span><span>OPGERICHT IN 2026</span></div>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="intro-stamp" aria-hidden="true">E<span>✳</span></div>
          <div className="intro-copy" data-reveal><SectionLabel number="01 /">OVER ELYRA</SectionLabel><h2>Gemaakt om te stralen.<br /><em>Helemaal van jou.</em></h2></div>
          <div className="intro-detail" data-reveal><p>ELYRA brengt fruitige kleur, een luxueuze finish en een moment voor jezelf samen in één gloss.</p><p>Een moderne beauty-essential die past bij jouw ritme, jouw stijl en jouw manier van stralen.</p><Link className="underlined-link" href="/collection">Ontdek ELYRA <span>↗</span></Link></div>
          <div className="intro-visual" data-reveal><img src="/images/fruit-macro.jpg" alt="Abstracte close-up van glanzend rood fruit" loading="lazy" /><span>JOUW EIGEN<br />MANIER VAN STRALEN</span></div>
        </section>

        <section className="bestsellers-section section-pad" id="bestsellers">
          <div className="section-heading" data-reveal><div><SectionLabel number="02 /">GLOW-FAVORIETEN</SectionLabel><h2>Onze favoriete<br /><em>kleine luxe.</em></h2></div><Link className="underlined-link" href="/shop">Bekijk alle glosses <span>↗</span></Link></div>
          <div className="product-grid bestseller-grid">{products.slice(0, 3).map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}</div>
        </section>

        <section className="collection-section" id="collection">
          <div className="collection-top section-pad" data-reveal><div><SectionLabel number="03 /">DE ELYRA-COLLECTIE</SectionLabel><h2>Vind jouw<br /><em>fruitige glow.</em></h2></div><p>Zes tinten. Eén kenmerkende glans.<br />Swipe en ontdek jouw favoriet.</p></div>
          <div className="collection-carousel" onTouchStart={(event) => setTouchStart(event.touches[0].clientX)} onTouchEnd={(event) => { if (touchStart == null) return; const delta = event.changedTouches[0].clientX - touchStart; if (Math.abs(delta) > 42) shiftProduct(delta < 0 ? 1 : -1); setTouchStart(null); }}>
            <div className="collection-track" style={{ '--active-index': activeProduct }}>
              {products.map((product, index) => <motion.div className={`collection-slide ${index === activeProduct ? 'is-active' : ''}`} key={product.slug} animate={{ opacity: index === activeProduct ? 1 : 0.58, scale: index === activeProduct ? 1 : 0.92 }} transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}>
                <button className="collection-object" onClick={() => setActiveProduct(index)} aria-label={`Ontdek ${product.name}`} style={{ '--shade': product.color, '--shade-light': product.light }}><span className="collection-sigil">{product.symbol}</span><img src="/images/elyra-tube-model.jpg" alt="" loading="lazy" style={{ filter: `hue-rotate(${index * 38}deg)` }} /><span className="collection-reflection" /></button>
                <div className="collection-caption"><div><span className="eyebrow">0{index + 1} — {product.shade}</span><h3>{product.name}</h3><p>{product.note}</p></div><button className="round-add" onClick={() => add(product.slug)} aria-label={`Voeg ${product.name} toe aan tas`}>＋</button></div>
              </motion.div>)}
            </div>
          </div>
          <div className="carousel-controls section-pad"><span>0{activeProduct + 1} <i /> 06</span><div><button onClick={() => shiftProduct(-1)} aria-label="Vorige gloss">←</button><button onClick={() => shiftProduct(1)} aria-label="Volgende gloss">→</button></div><Link className="underlined-link" href="/collection">Ontdek alle shades <span>↗</span></Link></div>
        </section>

        <section className="benefits-section section-pad" id="benefits">
          <div className="benefits-head" data-reveal><SectionLabel number="04 /">DIT MAAKT ELYRA BIJZONDER</SectionLabel><h2>Zacht voor je lippen.<br /><em>Gemaakt voor dit moment.</em></h2><p>Een fijne finish, een verzorgend gevoel en glans die jouw eigen stijl laat spreken.</p></div>
          <div className="benefit-list">{benefits.map(([number, title, copy], index) => <motion.article className="benefit-row" key={number} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.09, duration: 0.65 }}><span>{number}</span><h3>{title}</h3><p>{copy}</p><i aria-hidden="true">✳</i></motion.article>)}</div>
        </section>

        <FruitJourney />

        <section className="experience-section" id="experience">
          <div className="experience-backdrop" aria-hidden="true"><span>DE GLOW</span></div>
          <div className="experience-copy" data-reveal><SectionLabel number="05 /">VAN DICHTBIJ</SectionLabel><h2>Ontdek jouw<br /><em>nieuwe ritueel.</em></h2><p>Een sculpturale gloss, transparant glas en een zachte fruitkleur. Ontdek ELYRA van alle kanten.</p><Link className="button button-light" href="/shop">Ontdek de gloss <span>↗</span></Link></div>
          <div className="experience-object"><LazyHeroScene shade={products[activeProduct].color} /><span className="experience-orbit orbit-a" /><span className="experience-orbit orbit-b" /><span className="experience-caption">360° ZACHTE GLANS</span></div>
          <div className="experience-foot"><span>05 / 11</span><span>BEWEEG JE MUIS OM TE ONTDEKKEN · SCROLL VERDER</span></div>
        </section>

        <section className="instagram-section section-pad" id="instagram">
          <div className="instagram-heading" data-reveal><div><SectionLabel number="06 /">DE WERELD VAN ELYRA</SectionLabel><h2>Voor de gloss.<br /><em>Blijf voor de glow.</em></h2></div><a className="social-handle" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><span>◎</span> @ELYRA.BEAUTY <b>↗</b></a></div>
          <div className="instagram-grid">{posts.map(([eyebrow, title, art], index) => <motion.a className={`instagram-post ${art}`} key={title} href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={`${title}, Instagram-demo post`} initial={{ opacity: 0, y: 30, rotate: index % 2 ? 2 : -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: (index % 3) * 0.1 }} whileHover={{ y: -7, rotate: index % 2 ? 1 : -1 }}>
            <div className="ig-art"><img src="/images/elyra-tube-model.jpg" alt="" loading="lazy" style={{ filter: `hue-rotate(${index * 42}deg)` }} /><span className="ig-art-word">{index === 0 ? 'GLOW' : index === 1 ? 'SOFT' : index === 2 ? 'DEW' : index === 3 ? 'ELYRA' : index === 4 ? 'KISS' : 'SHINE'}</span><span className="ig-art-orbit">✳</span></div>
            <div className="ig-post-caption"><span className="eyebrow">{eyebrow}</span><strong>{title}</strong><div><span>♡ {['2.4K','1.8K','3.1K','1.2K','2.7K','1.9K'][index]}</span><span>↗</span></div></div>
          </motion.a>)}</div>
          <p className="demo-caption">Instagram-posts zijn originele conceptvisuals voor deze ELYRA-demo, geen live feed of echte statistieken.</p>
        </section>

        <section className="reviews-section section-pad" id="reviews"><div className="reviews-heading" data-reveal><div><SectionLabel number="07 /">GLOW-ERVARINGEN</SectionLabel><h2>Een beetje liefde<br /><em>voor je lippen.</em></h2></div><p>Voorbeeldreviews voor de demo — te vervangen door echte klantfeedback.</p></div><div className="review-grid">{reviews.map(([quote, label], index) => <motion.article className="review-card" key={quote} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.12 }}><span className="review-stars">★★★★★</span><p>{quote}</p><span className="eyebrow">{label}</span></motion.article>)}</div></section>

        <section className="shop-look-section">
          <div className="shop-look-image"><img src="/images/elyra-tube-model.jpg" alt="ELYRA fruit-inspired lipgloss campagnebeeld" loading="lazy" /><div className="look-shimmer" /><button className="hotspot hotspot-one" onClick={() => add('raspberry-velvet')} aria-label="Voeg Raspberry Velvet toe"><span>＋</span></button><button className="hotspot hotspot-two" onClick={() => add('peach-nectar')} aria-label="Voeg Peach Nectar toe"><span>＋</span></button><div className="hotspot-label">THE JUICY DUO <span>↗</span></div></div>
          <div className="shop-look-copy" data-reveal><SectionLabel number="08 /">SHOP DE LOOK</SectionLabel><h2>Twee glosses.<br /><em>Oneindig veel glow.</em></h2><p>Combineer, laag of draag solo. Tik op een punt in de campagne om je ELYRA-favoriet toe te voegen.</p><Link className="underlined-link" href="/collection">Ontdek de tinten <span>↗</span></Link></div>
        </section>

        <section className="final-cta section-pad" id="contact"><div className="cta-glow" /><SectionLabel number="09 /">JOUW VOLGENDE GLOW</SectionLabel><h2>Klaar om<br /><em>te stralen?</em></h2><p>Ontdek jouw perfecte ELYRA glow.</p><Link className="button button-dark" href="/shop">Shop nu <span>↗</span></Link><form className="newsletter-form" onSubmit={submitNewsletter}><label htmlFor="newsletter">Af en toe een berichtje van ELYRA</label><div><input id="newsletter" type="email" placeholder="Jouw e-mailadres" required /><button aria-label="Inschrijven">↗</button></div>{formMessage && <small role="status">{formMessage}</small>}</form></section>
      </main>
    </>
  );
}
