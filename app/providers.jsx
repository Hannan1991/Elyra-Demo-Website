'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { products } from '../data/products';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [lines, setLines] = useState([]);
  const [ready, setReady] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState(null);
  const [discountRate, setDiscountRate] = useState(0);
  const [promoCode, setPromoCode] = useState('');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('elyra-demo-cart');
      if (saved) setLines(JSON.parse(saved));
    } catch { /* Keep the demo usable if local storage is unavailable. */ }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      try { window.localStorage.setItem('elyra-demo-cart', JSON.stringify(lines)); } catch { /* Checkout remains a front-end demo without persistence. */ }
    }
  }, [lines, ready]);

  useEffect(() => { if (!cartOpen) setLastAdded(null); }, [cartOpen]);

  const add = (slug, quantity = 1) => {
    setLines((current) => {
      const found = current.find((line) => line.slug === slug);
      return found
        ? current.map((line) => line.slug === slug ? { ...line, quantity: line.quantity + quantity } : line)
        : [...current, { slug, quantity }];
    });
    setLastAdded(slug);
    setCartOpen(true);
  };
  const setQuantity = (slug, quantity) => setLines((current) => quantity < 1
    ? current.filter((line) => line.slug !== slug)
    : current.map((line) => line.slug === slug ? { ...line, quantity } : line));
  const remove = (slug) => setLines((current) => current.filter((line) => line.slug !== slug));
  const clear = () => { setLines([]); setDiscountRate(0); setPromoCode(''); };
  const applyPromo = (code) => {
    if (code.trim().toUpperCase() === 'SHINE10') { setDiscountRate(0.1); setPromoCode('SHINE10'); return true; }
    setDiscountRate(0); setPromoCode(''); return false;
  };

  const value = useMemo(() => {
    const hydrated = lines.map((line) => ({ ...line, product: products.find((product) => product.slug === line.slug) })).filter((line) => line.product);
    const subtotal = hydrated.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
    const discount = subtotal * discountRate;
    const itemCount = hydrated.reduce((sum, line) => sum + line.quantity, 0);
    const shipping = subtotal === 0 || subtotal - discount >= 60 ? 0 : 4.95;
    return { lines: hydrated, subtotal, discount, discountRate, promoCode, shipping, total: subtotal - discount + shipping, itemCount, add, setQuantity, remove, clear, applyPromo, cartOpen, setCartOpen, lastAdded };
  }, [lines, cartOpen, lastAdded, discountRate, promoCode]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
