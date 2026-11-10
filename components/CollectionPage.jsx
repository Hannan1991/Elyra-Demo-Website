import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function CollectionPage({ title = 'De ELYRA collectie' }) {
  return <main className="page-shell collection-page"><section className="page-intro collection-page-intro"><span className="eyebrow">LUXE · GLANS · ZELFVERTROUWEN</span><h1>{title.split(' ')[0]}<br /><em>{title.split(' ').slice(1).join(' ')}.</em></h1><p>Zes fruitige tinten, één kenmerkende glans. Vind jouw nieuwe favoriet.</p></section><div className="collection-filter"><span>06 TINTEN</span><span>FRUITIG · INTENSE GLANS</span><button>Filter <span>⌄</span></button></div><div className="product-grid collection-page-grid">{products.map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}</div><p className="product-demo-note">ELYRA-productinformatie en prijzen zijn conceptuele demo-inhoud.</p></main>;
}
