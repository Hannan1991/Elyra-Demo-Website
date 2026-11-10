'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useCart } from '../app/providers';
import { assetUrl, formatPrice, products } from '../data/products';

export default function CartDrawer() {
  const { lines, subtotal, discount, shipping, total, itemCount, setQuantity, remove, add, cartOpen, setCartOpen, applyPromo, lastAdded } = useCart();
  const [code, setCode] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const vat = total / 1.21 * 0.21;
  const addedProduct = products.find((product) => product.slug === lastAdded);

  useEffect(() => {
    if (!cartOpen) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') setCartOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [cartOpen, setCartOpen]);

  function submitPromo(event) {
    event.preventDefault();
    const applied = applyPromo(code);
    setPromoMessage(applied ? 'SHINE10 toegepast — je demo-korting staat klaar.' : 'Gebruik de demo-code SHINE10.');
  }

  return (
    <AnimatePresence>
      {cartOpen && <>
        <motion.button className="drawer-scrim" aria-label="Winkeltas sluiten" onClick={() => setCartOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
        <motion.aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Jouw ELYRA-winkeltas" initial={{ x: '105%' }} animate={{ x: 0 }} exit={{ x: '105%' }} transition={{ type: 'spring', damping: 32, stiffness: 260 }}>
          <div className="drawer-header"><div><span className="eyebrow">JOUW ELYRA MOMENT</span><h2>Winkeltas <small>({itemCount})</small></h2></div><button className="drawer-close" onClick={() => setCartOpen(false)} aria-label="Sluiten">×</button></div>
          {addedProduct && <motion.div className="added-ticket" role="status" initial={{ opacity: 0, rotateX: -38, rotateY: 12, y: 12 }} animate={{ opacity: 1, rotateX: 0, rotateY: 0, y: 0 }} transition={{ type: 'spring', damping: 18, stiffness: 180 }}><span>ELYRA · GLOWBON</span><strong>{addedProduct.name}</strong><small>{formatPrice(addedProduct.price)} · TOEGEVOEGD AAN JE TAS</small><b aria-hidden="true">✳</b></motion.div>}
          {lines.length === 0 ? <div className="drawer-empty"><span className="empty-orbit">✳</span><p>Jouw collectie begint<br />met een vleugje glans.</p><Link className="button button-dark" href="/shop" onClick={() => setCartOpen(false)}>Ontdek de collectie <span>↗</span></Link></div> : <>
            <div className="cart-lines">{lines.map(({ slug, product, quantity }) => <motion.article className="cart-line" key={slug} initial={{ opacity: 0, x: 22, scale: .96 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ type: 'spring', damping: 24, stiffness: 240 }}>
              <div className="cart-product-image" style={{ '--shade': product.color, '--shade-light': product.light }}><img src={assetUrl('/images/elyra-tube-model.jpg')} alt="" /></div>
              <div className="cart-product-info"><span className="eyebrow">{product.shade}</span><h3>{product.name}</h3><span className="line-price">{formatPrice(product.price)}</span><div className="quantity-control"><button aria-label={`Minder ${product.name}`} onClick={() => setQuantity(slug, quantity - 1)}>−</button><span>{quantity}</span><button aria-label={`Meer ${product.name}`} onClick={() => setQuantity(slug, quantity + 1)}>＋</button></div></div>
              <button className="remove-line" onClick={() => remove(slug)} aria-label={`${product.name} verwijderen`}>×</button>
            </motion.article>)}</div>
            <p className="shipping-note">{subtotal - discount >= 60 ? 'Je bestelling komt in aanmerking voor gratis verzending.' : `Nog ${formatPrice(Math.max(0, 60 - (subtotal - discount)))} tot gratis verzending.`}</p>
            <div className="drawer-upsell"><div><span className="eyebrow">GLOW-COMBINATIE</span><strong>Maak je ritueel compleet</strong></div>{products.filter((p) => !lines.some((line) => line.slug === p.slug)).slice(0, 1).map((p) => <button key={p.slug} onClick={() => add(p.slug)}>+ {p.name} · {formatPrice(p.price)}</button>)}</div>
            <form className="promo-form" onSubmit={submitPromo}><label htmlFor="promo-code">Democode · SHINE10</label><div><input id="promo-code" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Voer code in" /><button type="submit">Toepassen</button></div>{promoMessage && <small role="status">{promoMessage}</small>}</form>
            <div className="order-summary"><div><span>Subtotaal</span><span>{formatPrice(subtotal)}</span></div><div><span>Korting</span><span>− {formatPrice(discount)}</span></div><div><span>Verzending</span><span>{shipping ? formatPrice(shipping) : 'Gratis'}</span></div><div><span>BTW inbegrepen · indicatief</span><span>{formatPrice(vat)}</span></div><div className="summary-total"><strong>Totaal</strong><strong>{formatPrice(total)}</strong></div><Link className="button button-dark checkout-link" href="/checkout" onClick={() => setCartOpen(false)}>Verder naar afrekenen <span>↗</span></Link><p className="demo-disclaimer">Demo-afrekening — er wordt geen betaling verwerkt.</p></div>
          </>}
        </motion.aside>
      </>}
    </AnimatePresence>
  );
}
