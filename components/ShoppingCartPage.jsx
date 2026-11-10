'use client';

import Link from 'next/link';
import { useCart } from '../app/providers';
import { formatPrice, products } from '../data/products';
import OrderSummary from './OrderSummary';
import ProductCard from './ProductCard';

export default function ShoppingCartPage() {
  const { lines, setQuantity, remove, itemCount } = useCart();
  const suggestions = products.filter((product) => !lines.some((line) => line.slug === product.slug)).slice(0, 3);
  return <main className="page-shell cart-page"><section className="page-intro"><span className="eyebrow">HET ELYRA-RITUEEL</span><h1>Jouw<br /><em>winkeltas.</em></h1><p>{itemCount} producten in jouw collectie</p></section>
    {lines.length === 0 ? <div className="empty-cart"><span>✳</span><h2>Een beetje glow wacht op je.</h2><Link className="button button-dark" href="/shop">Ontdek de collectie <span>↗</span></Link></div> : <div className="cart-layout"><div className="cart-page-lines">{lines.map(({ slug, product, quantity }) => <article className="cart-page-line" key={slug}><div className="cart-page-image" style={{ '--shade': product.color, '--shade-light': product.light }}><img src="/images/elyra-tube-model.jpg" alt="" /></div><div className="cart-page-info"><span className="eyebrow">{product.shade}</span><h2>{product.name}</h2><p>{product.description}</p><div className="quantity-control"><button onClick={() => setQuantity(slug, quantity - 1)} aria-label="Verminder aantal">−</button><span>{quantity}</span><button onClick={() => setQuantity(slug, quantity + 1)} aria-label="Verhoog aantal">＋</button></div><button className="remove-line" onClick={() => remove(slug)}>Verwijder</button></div><strong>{formatPrice(product.price * quantity)}</strong></article>)}<p className="shipping-note">Gratis verzending vanaf € 60.</p></div><OrderSummary /></div>}
    <section className="cart-upsells"><div className="section-heading"><div><span className="eyebrow">NOG EEN BEETJE GLOW</span><h2>Maak jouw<br /><em>collectie compleet.</em></h2></div><Link className="underlined-link" href="/collection">Bekijk alles <span>↗</span></Link></div><div className="product-grid">{suggestions.map((product, index) => <ProductCard key={product.slug} product={product} index={index} compact />)}</div></section>
  </main>;
}
