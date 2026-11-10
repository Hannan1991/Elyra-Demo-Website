# ELYRA Demo — luxury lip gloss experience

Een mobile-first Next.js concept voor het premium beautymerk ELYRA. De referentie-GIF is alleen gebruikt als inspiratie voor de cinematische productpresentatie, diepte, Instagram-achtige showcase en scrollbewegingen. De naam, teksten, productvisuals en vormgeving zijn nieuw voor ELYRA.

## Analyse van de referentie

In de korte GIF en aangeleverde frames staat een rustige, lichte productpagina met een groot smaakwoord als achtergrond, een zwevende producttube en een social-post met hartje en likes. Fruitdetails zweven los in de compositie; een vrucht groeit naar de camera tot ze bijna het hele scherm vult. Daarna verschijnt een andere smaak met een eigen kleur, productbeeld en social-post. De opeenvolging maakt het scrollen tot een productverhaal.

- **Compositie en sfeer:** warme crème- en perziktinten, veel lege ruimte en enkele sterke kleuraccenten. Grote, zware smaaktypografie contrasteert met kleine product- en social-details.
- **Diepte en beweging:** fruitfragmenten staan op verschillende afstanden; tube, tekst en social-kaart overlappen elkaar. De fruitzoom van klein naar schermvullend is de krachtigste overgang. De productkaart en kleine draaiing van de tube geven een zwevend gevoel.
- **Sociale laag:** de rechthoekige postkaart, profielregel en hart/like-aanduiding geven een vertrouwd social moment in het midden van de productpresentatie.
- **Licht en materiaal:** zachte schaduwen, glanzende fruitoppervlakken en een lichte achtergrond houden het beeld tactiel en premium zonder veel decor.
- **Typografie en ritme:** één enorm smaakwoord draagt elke scène; korte copy en details blijven kleiner. De combinatie van korte scènes, groei en wisseling van fruit houdt de scrollreis levendig.

De korte, gefilmde referentie laat geen betrouwbare exacte scrollsnelheid, cameracurve of framerate zien. Daarom neemt ELYRA de herkenbare principes over — grote smaakwoorden, gelaagde social-kaarten, zwevende fruitdetails, zachte luxe-belichting en de kleine-naar-grote fruittransitie — en geeft ze een eigen compositie, teksten, kleuren en productidentiteit.

## Lokaal starten

Vereist Node.js 20.9 of hoger.

```bash
npm install
npm run dev
```

Open daarna `http://localhost:3000`. Voor een statische GitHub Pages-build:

```bash
npm run build
```

Next.js exporteert de statische site naar `out/`. Publiceer die map als GitHub Pages build artifact of via een eigen GitHub Actions-workflow. `next.config.mjs` staat al op static export.

## Routes / sitemap

- `/` — hero, verhaal, bestsellers, swipebare collectie, voordelen, zes scrollgestuurde fruithoofdstukken met likes, 3D-productervaring, Instagram-demo, reviews, shop-the-look en CTA
- `/shop/` — alle glosses
- `/collection/` — collectie-overzicht
- `/products/raspberry-velvet/` — Raspberry Velvet
- `/products/peach-nectar/` — Peach Nectar
- `/products/cherry-bloom/` — Cherry Bloom
- `/products/lychee-glow/` — Lychee Glow
- `/products/mango-mirage/` — Mango Mirage
- `/products/berry-eclipse/` — Berry Eclipse
- `/cart/` — winkelmand en orderoverzicht
- `/checkout/` — persoonlijke gegevens, verzending, betaalmethode en orderpreview

## UX-flow

Home → ontdek een shade via de bestsellers, swipebare collectie of Instagram-conceptposts → productdetail → toevoegen aan tas → winkelmand met aantallen, kortingscode en upsell → demo-checkout in vier stappen → orderpreview.

De winkeltas wordt lokaal in de browser opgeslagen. De kortingscode `SHINE10` demonstreert korting. Bancontact, iDEAL, Visa, Mastercard, PayPal, Apple Pay en Google Pay zijn alleen voorbeeldopties; de checkout verstuurt geen persoonsgegevens en verwerkt geen betalingen.

De fruitreis bestaat uit een hoofdstuk per gloss: grote smaaktypografie, zwevende fruitdetails, een productpost met like-knop en een fruitmacro die tijdens het scrollen van klein naar schermvullend groeit. De volgende smaak start als een nieuw hoofdstuk. Op touchschermen werkt dezelfde ervaring met scrollen en tikken. Bij het toevoegen van een gloss verschijnt in de winkeltas een geanimeerd, ruimtelijk vormgegeven glowbonnetje.

### Wireframe — desktop

```text
┌──────────────────────────────────────────────────────────────┐
│ ELYRA        COLLECTIE  OVER  ONZE WERELD  CONTACT    TAS 0 │
├──────────────────────────────────────────────────────────────┤
│ GLANS ZONDER GRENZEN.            [zwevende gloss / 3D-scène] │
│ korte introductie + CTA          [editorial productbeeld]   │
├──────────────────────────────────────────────────────────────┤
│ OVER ELYRA · verhaal + beeld  → bestsellers · swipecollectie │
│ voordelen → 6 fruithoofdstukken + likes → full-screen 3D      │
│ Instagram-gallery → reviews → hotspots → finale CTA           │
└──────────────────────────────────────────────────────────────┘
```

### Wireframe — mobiel

```text
┌───────────────────────────┐
│ ☰   ELYRA          SHOP TAS│
├───────────────────────────┤
│ GLANS ZONDER              │
│ GRENZEN.                  │
│ [Shop nu]  [Collectie]     │
│     3D gloss / glow        │
├───────────────────────────┤
│ verhaal + campagnebeeld   │
│ swipebare gloss-collectie │
│ voordeelrijen             │
│ 6 schermhoge fruithoofdstukken met vergroting en like-knop     │
│ 3D reveal + Instagram-posts│
│ review cards              │
│ shop-the-look + CTA       │
└───────────────────────────┘
```

Op kleine schermen wordt de campagne verticaal gecomponeerd, de collectie swipebaar en de Instagram-galerij horizontaal scrollbaar. De navigatie opent als eigen mobiel menu; 3D-kwaliteit wordt begrensd voor lagere GPU-belasting.

## Design system

- **Ivory:** `#F8F5F1` · **Pearl:** `#FAF8F5` · **Champagne:** `#E8D8C3`
- **Soft Nude:** `#EFE6DE` · **Rose Gold:** `#DDB6A3` · **Warm Taupe:** `#C7B19C`
- **Tekst:** `#1B1B1B` · **Subtekst:** `#676767`
- **Headings:** Cormorant Garamond · **body/interface:** Inter
- **Motion:** Lenis voor smooth scroll, GSAP ScrollTrigger voor reveal/parallax, Motion voor React voor micro-interacties en Three.js/React Three Fiber voor productrendering.
- **Responsive:** mobile-first; aanvullende layoutregels voor 320–390 px, 430–767 px, 768–1023 px, 1024–1439 px en 1440 px+.

## Belangrijke componenten

- `components/HeroScene.jsx` — gloss-tube in R3F/Three.js, hover-follow, langzame rotatie, glas- en metalfinish, reflectielicht en particles
- `components/FruitJourney.jsx` — zes scrollhoofdstukken met fruitzoom, floating details, like-knoppen en social productpost
- `components/ProductCard.jsx` — productkaart, hover 3D en add-to-bag
- `components/CartDrawer.jsx` — glassmorphism slide-in tas, geanimeerd 3D-achtig glowbonnetje, hoeveelheid, upsell, kortingscode, btw/verzendoverzicht
- `components/CheckoutFlow.jsx` — vierstaps checkout-preview en bevestigingsscherm
- `components/ShoppingCartPage.jsx` / `components/ProductDetail.jsx` — tas- en productpagina
- `components/SmoothScroll.jsx` — Lenis/GSAP-koppeling; reduced-motion respecteert systeemvoorkeur

## Demo-inhoud en livegang

De productvisuals, prijzen (€ 24), shade-omschrijvingen, reviews, likes, verzending en kortingscode zijn voorbeeldinhoud. Reviews en Instagram-cijfers zijn als demo aangeduid. De productclaims moeten vóór verkoop worden bevestigd. De site bevat nog geen Shopify/Commerce API, betaalprovider, live Instagram-feed, echte klantreviews, orderbackend, verzendintegratie, cookiebeheer of productievoorwaarden. Koppel die onderdelen en vervang demo-inhoud vóór live verkoop.

De checkout toont een indicatieve btw-regel. De demo gebruikt 21% als Belgisch standaardtarief-rekenvoorbeeld; de juiste fiscale behandeling moet voor de uiteindelijke verkoopconfiguratie worden bevestigd.
