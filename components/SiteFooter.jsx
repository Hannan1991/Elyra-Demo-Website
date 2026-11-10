import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-main">
        <div><Link className="brand-mark footer-brand" href="/">ELYRA<span>®</span></Link><p>Luxury. Shine. Confidence.</p></div>
        <div className="footer-links"><div><span>ONTDEK</span><Link href="/">Home</Link><Link href="/shop">Winkel</Link><Link href="/collection">Collectie</Link><Link href="/cart">Winkeltas</Link></div><div><span>ELYRA</span><Link href="/#about">Over</Link><Link href="/#experience">Onze wereld</Link><Link href="/#contact">Contact</Link><Link href="/checkout">Afrekenen</Link></div><div><span>VOLG ONS</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">TikTok ↗</a><a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">Pinterest ↗</a></div></div>
      </div>
      <div className="footer-bottom"><span>© 2026 ELYRA DEMO. Alle rechten voorbehouden.</span><span>Een conceptuele beauty-ervaring</span></div>
    </footer>
  );
}
