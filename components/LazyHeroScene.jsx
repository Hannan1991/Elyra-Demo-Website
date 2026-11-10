'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false, loading: () => <div className="scene-fallback"><span>ELYRA</span></div> });

export default function LazyHeroScene({ shade = '#c85d72' }) {
  const host = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!host.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { rootMargin: '180px' });
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);
  return <div className="lazy-scene" ref={host}>{visible ? <HeroScene shade={shade} /> : <div className="scene-fallback"><span>ELYRA</span></div>}</div>;
}
