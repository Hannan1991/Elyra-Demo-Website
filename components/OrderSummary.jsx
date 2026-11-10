'use client';

import Link from 'next/link';
import { useCart } from '../app/providers';
import { formatPrice } from '../data/products';

export default function OrderSummary({ checkout = false }) {
  const { subtotal, discount, shipping, total } = useCart();
  const vat = total / 1.21 * 0.21;
  return <aside className="order-card"><span className="eyebrow">BESTELOVERZICHT</span><h2>Jouw overzicht</h2><div className="summary-rows"><div><span>Subtotaal</span><span>{formatPrice(subtotal)}</span></div><div><span>Korting</span><span>− {formatPrice(discount)}</span></div><div><span>Verzending</span><span>{shipping ? formatPrice(shipping) : 'Gratis'}</span></div><div><span>BTW inbegrepen · indicatief</span><span>{formatPrice(vat)}</span></div><div className="summary-total"><strong>Totaal</strong><strong>{formatPrice(total)}</strong></div></div>{checkout ? <p className="checkout-demo-note">Dit is een demo-checkout. Er worden geen gegevens verzonden of betalingen verwerkt.</p> : <Link className="button button-dark full-button" href="/checkout">Verder naar afrekenen <span>↗</span></Link>}<p className="tax-note">Belgisch btw-rekenvoorbeeld; tarieven en verzending zijn demo-instellingen.</p></aside>;
}
