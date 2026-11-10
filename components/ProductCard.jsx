'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useCart } from '../app/providers';
import { formatPrice } from '../data/products';

export default function ProductCard({ product, index = 0, compact = false }) {
  const { add } = useCart();
  return (
    <motion.article className={`product-card ${compact ? 'product-card-compact' : ''}`} style={{ '--shade': product.color, '--shade-light': product.light }} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -7 }}>
      <Link href={`/products/${product.slug}`} className="product-visual" aria-label={`Bekijk ${product.name}`}>
        <span className="product-aura" />
        <span className="product-fruit" aria-hidden="true">{product.symbol}</span>
        <img src="/images/elyra-tube-model.jpg" alt="" loading="lazy" style={{ filter: `hue-rotate(${index * 38}deg) saturate(0.92)` }} />
        <span className="product-view-label">BEKIJK DE TINT <span>↗</span></span>
      </Link>
      <div className="product-card-info"><div><span className="eyebrow">{product.shade}</span><h3>{product.name}</h3><p>{product.note}</p></div><span className="product-price">{formatPrice(product.price)}</span></div>
      <button className="add-to-bag-button" onClick={() => add(product.slug)}>Voeg toe aan tas <span>＋</span></button>
    </motion.article>
  );
}
