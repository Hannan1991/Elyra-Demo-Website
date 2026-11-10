'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

function GlossTube({ shade, reducedMotion }) {
  const group = useRef();
  const { pointer, camera } = useThree();

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) return;
    const scroll = typeof window !== 'undefined' ? Math.min(window.scrollY / Math.max(window.innerHeight, 1), 4) : 0;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.3 + scroll * 0.24, 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.12 + Math.sin(state.clock.elapsedTime * 0.38) * 0.035, 4, delta);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.2, 2.4, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.y * 0.12, 2.4, delta);
    camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <Float speed={1.05} rotationIntensity={0.08} floatIntensity={0.18}>
        <group rotation={[0.05, 0, -0.24]}>
          {/* Gloss reservoir */}
          <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.39, 0.39, 1.8, 64, 1, false]} />
            <MeshTransmissionMaterial backside samples={6} resolution={256} thickness={0.4} roughness={0.09} transmission={0.92} ior={1.34} chromaticAberration={0.015} color="#fffaf6" />
          </mesh>
          <mesh position={[0, -0.12, 0]}>
            <cylinderGeometry args={[0.31, 0.31, 1.56, 48]} />
            <meshPhysicalMaterial color={shade} roughness={0.19} metalness={0.03} clearcoat={1} clearcoatRoughness={0.1} />
          </mesh>
          {/* Rose-gold neck and delicate rings */}
          <mesh position={[0, 0.87, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.1, 48]} />
            <meshStandardMaterial color="#d8b894" metalness={0.8} roughness={0.24} />
          </mesh>
          <mesh position={[0, 0.97, 0]}>
            <cylinderGeometry args={[0.33, 0.35, 0.28, 48]} />
            <meshPhysicalMaterial color="#eeded0" roughness={0.16} clearcoat={1} />
          </mesh>
          {/* Sculpted cap */}
          <mesh position={[0, 1.45, 0]} castShadow>
            <cylinderGeometry args={[0.34, 0.34, 0.72, 48, 1, false]} />
            <meshPhysicalMaterial color="#e8d8c3" roughness={0.18} metalness={0.15} clearcoat={1} clearcoatRoughness={0.08} />
          </mesh>
          <mesh position={[0, 1.82, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 0.045, 48]} />
            <meshStandardMaterial color="#c8a97e" metalness={0.84} roughness={0.21} />
          </mesh>
          {/* Highlight glints */}
          <mesh position={[-0.31, -0.08, 0.12]}>
            <boxGeometry args={[0.018, 1.24, 0.016]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.76} />
          </mesh>
        </group>
      </Float>
      <Sparkles count={26} scale={[3.1, 3.5, 1.7]} size={1.6} speed={0.18} opacity={0.38} color="#d6c2a8" />
    </group>
  );
}

export default function HeroScene({ shade = '#c85d72' }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener?.('change', update);
    return () => preference.removeEventListener?.('change', update);
  }, []);
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 34 }} dpr={[1, 1.35]} frameloop={reducedMotion ? 'demand' : 'always'} shadows gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }} fallback={<div className="scene-fallback">ELYRA</div>}>
      <ambientLight intensity={1.15} />
      <directionalLight position={[3, 5, 4]} intensity={2.6} color="#fff8ef" castShadow shadow-mapSize-width={512} shadow-mapSize-height={512} />
      <pointLight position={[-3, -1, 2]} intensity={1.3} color="#d6c2a8" />
      <pointLight position={[1.5, 2, -2]} intensity={1.8} color={shade} />
      <GlossTube shade={shade} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
