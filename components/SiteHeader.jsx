'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../app/providers';

const links = [
  ['Collectie', '/collection'],
  ['Over ELYRA', '/#about'],
  ['Onze wereld', '/#experience'],
  ['Contact', '/#contact'],
];

export default function SiteHeader() {
  const { itemCount, setCartOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <button className="menu-toggle" aria-label={menuOpen ? 'Menu sluiten' : 'Menu openen'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <Link className="brand-mark" href="/" aria-label="ELYRA home">ELYRA<span>®</span></Link>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Hoofdnavigatie">
        {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
      </nav>
      <Link className="header-shop" href="/shop">Winkel <span>↗</span></Link>
      <button className="bag-trigger" onClick={() => setCartOpen(true)} aria-label={`Winkelmand, ${itemCount} producten`}>
        <span className="bag-label">WINKELTAS</span><span className="bag-count">{itemCount}</span>
      </button>
    </header>
  );
}
