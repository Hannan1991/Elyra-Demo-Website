export const products = [
  { slug: 'raspberry-velvet', name: 'Raspberry Velvet', fruit: 'Raspberry', fruitNl: 'framboos', note: 'Zachte bessengloed', shade: 'Bessen · zacht roze', price: 24, color: '#b93656', light: '#f3cbd0', symbol: '✺', description: 'Een zachte bessentint met een luxueuze, spiegelende glans.' },
  { slug: 'peach-nectar', name: 'Peach Nectar', fruit: 'Peach', fruitNl: 'perzik', note: 'Warme perzikglans', shade: 'Perzik · warm nude', price: 24, color: '#c7795a', light: '#f4d8c8', symbol: '◉', description: 'Een warme perzikkleur die je look een zachte glow geeft.' },
  { slug: 'cherry-bloom', name: 'Cherry Bloom', fruit: 'Cherry', fruitNl: 'kers', note: 'Frisse kersentint', shade: 'Kers · transparant rood', price: 24, color: '#a6263e', light: '#efd0d5', symbol: '✿', description: 'Een levendige rode glans, geïnspireerd op rijpe kersen.' },
  { slug: 'lychee-glow', name: 'Lychee Glow', fruit: 'Lychee', fruitNl: 'lychee', note: 'Parelroze licht', shade: 'Lychee · parelroze', price: 24, color: '#c88391', light: '#f2dfe2', symbol: '✧', description: 'Een subtiele parelroze tint met een verfijnde glans.' },
  { slug: 'mango-mirage', name: 'Mango Mirage', fruit: 'Mango', fruitNl: 'mango', note: 'Gouden-uurglans', shade: 'Mango · zacht amber', price: 24, color: '#bf823e', light: '#f2e2c9', symbol: '✹', description: 'Een zachte amberkleur die de warme gloed van het gouden uur vangt.' },
  { slug: 'berry-eclipse', name: 'Berry Eclipse', fruit: 'Berry', fruitNl: 'bes', note: 'Diepe bessensluier', shade: 'Bes · pruimtint', price: 24, color: '#713149', light: '#ead9de', symbol: '✴', description: 'Een diepe bessentint met een zachte, elegante finish.' },
];

export const formatPrice = (value) => new Intl.NumberFormat('nl-BE', { style: 'currency', currency: 'EUR' }).format(value);
