'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../app/providers';
import LazyHeroScene from './LazyHeroScene';
import { assetUrl, formatPrice, products } from '../data/products';


export default function ProductDetail({ product }) {
  const { add } = useCart();
  const [quantity, setQuantity] = useState(1);
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  return <main className="page-shell detail-page"><nav className="breadcrumbs"><Link href="/">Start</Link><span>/</span><Link href="/collection">Collectie</Link><span>/</span><span>{product.name}</span></nav>
    <section className="product-detail-layout"><div className="detail-visual" style={{ '--shade': product.color, '--shade-light': product.light }}><div className="detail-art"><img src={assetUrl('/images/elyra-tube-model.jpg')} alt={`${product.name} ELYRA lipgloss`} /><span className="detail-foil">ELYRA<br />GLOSS</span><LazyHeroScene shade={product.color} /></div><span className="detail-image-index">HET GLOW-OBJECT · 01 / 03</span></div>
      <div className="detail-copy"><span className="eyebrow">{product.shade}</span><h1>{product.name}<br /><em>Gloss met {product.fruitNl}</em></h1><p className="detail-note">{product.description}</p><div className="rating-line"><span>★★★★★</span><span>DEMO · beoordelingen niet gekoppeld</span></div><div className="detail-price">{formatPrice(product.price)} <small>BTW inbegrepen · indicatieve demoprijs</small></div><div className="shade-selector"><span className="eyebrow">KIES JOUW TINT</span><div>{products.map((item) => <Link key={item.slug} href={`/products/${item.slug}`} className={item.slug === product.slug ? 'shade-dot selected' : 'shade-dot'} style={{ '--shade': item.color }} aria-label={item.name} title={item.name} />)}</div><p>{product.name}</p></div><div className="detail-buy"><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Minder">−</button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Meer">＋</button></div><button className="button button-dark" onClick={() => add(product.slug, quantity)}>Voeg toe aan jouw ELYRA-collectie <span>↗</span></button></div><div className="detail-accordions"><details open><summary>De glow <span>＋</span></summary><p>Een zachte fruitkleur, comfortabel gevoel en luxueuze glans. Productclaims in deze demo zijn conceptueel en moeten vóór verkoop worden bevestigd.</p></details><details><summary>Zo gebruik je de gloss <span>＋</span></summary><p>Breng aan op de lippen zoals gewenst. Draag solo of combineer met je favoriete lipkleur.</p></details><details><summary>Verzending en retour <span>＋</span></summary><p>Verzend- en retourvoorwaarden zijn nog niet ingesteld in deze demo.</p></details></div><p className="product-demo-note">Productbeelden, prijzen en omschrijvingen zijn conceptuele demo-inhoud.</p></div></section>
    <section className="related-products"><div className="section-heading"><div><span className="eyebrow">NOG EEN BEETJE GLOW</span><h2>Misschien word jij<br /><em>hier ook blij van.</em></h2></div><Link className="underlined-link" href="/collection">Bekijk alle tinten <span>↗</span></Link></div><div className="product-grid">{related.map((item, index) => <div key={item.slug} className="related-card"><Link href={`/products/${item.slug}`}><img src={assetUrl('/images/elyra-tube-model.jpg')} alt="" style={{ filter: `hue-rotate(${index * 54}deg)` }} /><span>{item.name} ↗</span></Link></div>)}</div></section>
  </main>;
}
