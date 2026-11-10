import ProductDetail from '../../../components/ProductDetail';
import { products } from '../../../data/products';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  return { title: product ? `${product.name} — ELYRA` : 'ELYRA lipgloss', description: product?.description ?? 'Ontdek de ELYRA lipgloss collectie.' };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug) ?? products[0];
  return <ProductDetail product={product} />;
}
