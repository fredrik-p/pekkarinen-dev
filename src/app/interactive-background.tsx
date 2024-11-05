'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Particle {
  id: number;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
}

const PARTICLE_COUNT = 50;
const PARTICLE_RADIUS = 8;
const INTERACTION_DISTANCE = 100;

export default function InteractiveBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  const generateParticles = useCallback(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      initialX: 0,
      initialY: 0,
    }));
  }, []);

  useEffect(() => {
    setParticles(generateParticles());

    const handleResize = () => {
      setParticles(generateParticles());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateParticles]);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });

      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const dx = clientX - particle.x;
          const dy = clientY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < INTERACTION_DISTANCE) {
            const angle = Math.atan2(dy, dx);
            const force =
              (INTERACTION_DISTANCE - distance) / INTERACTION_DISTANCE;
            return {
              ...particle,
              x: particle.x - Math.cos(angle) * force * 10,
              y: particle.y - Math.sin(angle) * force * 10,
            };
          }
          return particle;
        }),
      );
    },
    [],
  );

  useEffect(() => {
    controls.start((i) => ({
      x: particles[i]?.x || 0,
      y: particles[i]?.y || 0,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    }));
  }, [particles, controls]);

  return (
    <div className={`fixed inset-0 bg-gray-900 ${inter.className}`}>
      <div
        className="w-full h-full"
        onPointerMove={handlePointerMove}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          handlePointerMove({
            clientX: touch.clientX,
            clientY: touch.clientY,
          } as React.PointerEvent<HTMLDivElement>);
        }}
      >
        {particles.map((particle, index) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-300 via-magenta-300 to-yellow-300"
            style={{
              width: PARTICLE_RADIUS * 4,
              height: PARTICLE_RADIUS * 4,
              x: particle.initialX,
              y: particle.initialY,
            }}
            animate={controls}
            custom={index}
          />
        ))}
      </div>
    </div>
  );
}
