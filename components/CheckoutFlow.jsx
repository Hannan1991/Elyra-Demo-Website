'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useCart } from '../app/providers';
import { formatPrice } from '../data/products';

const steps = ['Persoonlijk', 'Verzending', 'Betaling', 'Bevestiging'];
const methods = ['Bancontact', 'iDEAL', 'Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'];

export default function CheckoutFlow() {
  const { lines, subtotal, discount, shipping, total, clear } = useCart();
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState('Bancontact');
  const [order, setOrder] = useState(null);
  const [trackingMessage, setTrackingMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', city: '', postal: '', country: 'België' });
  const [error, setError] = useState('');
  const orderNumber = useMemo(() => `ELYRA-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`, []);
  const vat = total / 1.21 * 0.21;

  function update(event) { setForm((current) => ({ ...current, [event.target.name]: event.target.value })); }
  function advance(event) {
    event.preventDefault();
    setError('');
    if (step < 2) { setStep(step + 1); return; }
    if (!document.querySelector('#demo-terms')?.checked) { setError('Bevestig dat je begrijpt dat dit een demo-checkout is.'); return; }
    setOrder({ number: orderNumber, items: lines, total, name: form.name, address: `${form.address}, ${form.postal} ${form.city}, ${form.country}`, payment });
    clear();
    setStep(3);
  }

  if (!lines.length && !order) return <main className="page-shell checkout-page"><div className="empty-cart"><span>✳</span><h1>Je tas is nog leeg.</h1><p>Ontdek de ELYRA-collectie en vind jouw glow.</p><Link className="button button-dark" href="/shop">Shop de collectie <span>↗</span></Link></div></main>;

  if (order) return <main className="page-shell confirmation-page"><section className="confirmation-card"><div className="confirmation-spark">✳</div><span className="eyebrow">BESTELPREVIEW · {order.number}</span><h1>WELKOM BIJ<br /><em>ELYRA</em> ✨</h1><p>Bedankt voor je bestelpreview. Er is geen betaling verwerkt en er wordt niets verzonden.</p><div className="confirmation-detail"><div><span>Demobestelnummer</span><strong>{order.number}</strong></div><div><span>Producten</span><strong>{order.items.reduce((sum, item) => sum + item.quantity, 0)} stuks · {formatPrice(order.total)}</strong></div><div><span>Verzendadres (alleen demo)</span><strong>{order.address || 'Niet opgegeven'}</strong></div><div><span>Leverdatum</span><strong>Wordt bepaald in de echte checkout</strong></div></div><p className="demo-disclaimer">Dit bevestigingsscherm is alleen een preview. Je gegevens zijn niet verstuurd.</p><div className="confirmation-actions"><button className="underlined-link" onClick={() => setTrackingMessage('Bestelling volgen kan zodra de demo aan een echte winkel is gekoppeld.')}>Volg bestelling ↗</button><Link className="button button-dark" href="/shop">Verder winkelen <span>↗</span></Link></div>{trackingMessage && <p role="status" className="tracking-message">{trackingMessage}</p>}</section></main>;

  return <main className="page-shell checkout-page"><div className="checkout-title"><span className="eyebrow">AFREKENEN BIJ ELYRA</span><h1>Bijna<br /><em>van jou.</em></h1><span className="demo-banner">DEMO · GEEN BETALING WORDT VERWERKT</span></div>
    <div className="checkout-progress" aria-label={`Stap ${step + 1} van 4`}><div className="progress-line"><i style={{ width: `${(step / 3) * 100}%` }} /></div>{steps.map((label, index) => <button key={label} className={step === index ? 'is-current' : step > index ? 'is-done' : ''} onClick={() => index < step && setStep(index)} disabled={index > step}><span>{index < step ? '✓' : `0${index + 1}`}</span>{label}</button>)}</div>
    <div className="checkout-layout"><div className="checkout-main"><AnimatePresence mode="wait"><motion.form key={step} onSubmit={advance} className="checkout-step" initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -14 }} transition={{ duration: 0.28 }}>
      {step === 0 && <><span className="eyebrow">STAP 01 / 04</span><h2>Vertel ons wie je bent.</h2><div className="form-grid"><label>Volledige naam<input name="name" autoComplete="name" value={form.name} onChange={update} required placeholder="Jouw naam" /></label><label>E-mailadres<input type="email" name="email" autoComplete="email" value={form.email} onChange={update} required placeholder="jij@voorbeeld.be" /></label><label>Telefoonnummer <small>(optioneel)</small><input name="phone" autoComplete="tel" value={form.phone} onChange={update} placeholder="+32" /></label></div></>}
      {step === 1 && <><span className="eyebrow">STAP 02 / 04</span><h2>Waar mogen we jouw glow bezorgen?</h2><div className="form-grid"><label>Adres<input name="address" autoComplete="street-address" value={form.address} onChange={update} required placeholder="Straat en huisnummer" /></label><label>Postcode<input name="postal" autoComplete="postal-code" value={form.postal} onChange={update} required placeholder="2000" /></label><label>Gemeente<input name="city" autoComplete="address-level2" value={form.city} onChange={update} required placeholder="Antwerpen" /></label><label>Land<select name="country" value={form.country} onChange={update}><option>België</option><option>Nederland</option><option>Luxemburg</option></select></label></div><p className="shipping-estimate">Verzending: {subtotal >= 60 ? 'gratis (demo)' : '€ 4,95 (demo)'} · levering wordt pas berekend bij een echte checkout.</p></>}
      {step === 2 && <><span className="eyebrow">STAP 03 / 04</span><h2>Kies je betaalmethode.</h2><p className="payment-demo">Kies een methode om de demo te bekijken. Er wordt niets afgeschreven.</p><div className="payment-grid">{methods.map((method) => <button type="button" key={method} className={payment === method ? 'payment-option selected' : 'payment-option'} onClick={() => setPayment(method)}><span className="payment-mark">{method === 'Bancontact' ? 'BC' : method === 'iDEAL' ? 'iD' : method === 'Visa' ? 'VISA' : method === 'Mastercard' ? 'MC' : method === 'PayPal' ? 'P' : method === 'Apple Pay' ? 'Pay' : 'G'}</span>{method}<i>{payment === method ? '●' : '○'}</i></button>)}</div><label className="demo-check"><input id="demo-terms" type="checkbox" required /><span>Ik begrijp dat dit een demo is: mijn gegevens worden niet verstuurd en er vindt geen betaling plaats.</span></label></>}
      {error && <p className="form-error" role="alert">{error}</p>}
      {step < 3 && <div className="checkout-actions"><button className="button button-dark" type="submit">{step === 2 ? 'Bekijk bestelpreview' : 'Verder'} <span>↗</span></button>{step > 0 && <button className="back-step" type="button" onClick={() => setStep(step - 1)}>← Terug</button>}</div>}
    </motion.form></AnimatePresence><p className="secure-note">◇ Voorbeeldafrekening · geen betaalservice gekoppeld</p></div>
    <div className="checkout-aside"><div className="checkout-items"><span className="eyebrow">JOUW ELYRA-SELECTIE</span>{lines.map(({ slug, product, quantity }) => <div className="checkout-item" key={slug}><div className="checkout-thumb" style={{ '--shade': product.color }}><img src="/images/elyra-tube-model.jpg" alt="" /></div><span>{product.name}<small>Aantal {quantity} · {product.shade}</small></span><strong>{formatPrice(product.price * quantity)}</strong></div>)}</div><div className="checkout-totals"><div><span>Subtotaal</span><span>{formatPrice(subtotal)}</span></div><div><span>Korting</span><span>− {formatPrice(discount)}</span></div><div><span>Verzending</span><span>{shipping ? formatPrice(shipping) : 'Gratis'}</span></div><div><span>BTW inbegrepen · indicatief</span><span>{formatPrice(vat)}</span></div><div className="summary-total"><strong>Totaal</strong><strong>{formatPrice(total)}</strong></div></div><p className="checkout-demo-note">Alle bedragen, betaalmethoden en verzendopties zijn voorbeelden. Bancontact, iDEAL, kaarten, PayPal, Apple Pay en Google Pay zijn niet gekoppeld.</p></div></div>
  </main>;
}
