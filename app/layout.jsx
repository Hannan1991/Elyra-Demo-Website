import './globals.css';
import { CartProvider } from './providers';
import SiteHeader from '../components/SiteHeader';
import CartDrawer from '../components/CartDrawer';
import SiteFooter from '../components/SiteFooter';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: 'ELYRA — Luxury. Shine. Confidence.',
  description: 'Ontdek de ELYRA-demo: premium lipgloss met een luxueuze glans, fruitige tinten en een cinematografische beauty-ervaring.',
  keywords: ['lipgloss', 'premium lipgloss', 'luxury lip gloss', 'hydraterende lipgloss', 'glossy lips', 'beauty brand', 'cosmetics', 'makeup brand'],
  openGraph: {
    title: 'ELYRA — Luxury. Shine. Confidence.',
    description: 'Een luxueuze fruitgloss-ervaring van ELYRA.',
    locale: 'nl_BE',
    type: 'website',
    ...(siteUrl ? { images: ['/images/elyra-tube-model.jpg'] } : {}),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl-BE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body><CartProvider><SiteHeader />{children}<SiteFooter /><CartDrawer /></CartProvider></body>
    </html>
  );
}
