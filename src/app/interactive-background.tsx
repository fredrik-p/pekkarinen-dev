'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  velocityX: number;
  velocityY: number;
}

const PARTICLE_COUNT = 8;
const PARTICLE_RADIUS = 20;
const INTERACTION_DISTANCE = 150;
const FORCE_MULTIPLIER = 25;
const VELOCITY_DECAY = 0.95;

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
      velocityX: 0,
      velocityY: 0,
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
            const newVelocityX =
              particle.velocityX - Math.cos(angle) * force * FORCE_MULTIPLIER;
            const newVelocityY =
              particle.velocityY - Math.sin(angle) * force * FORCE_MULTIPLIER;

            return {
              ...particle,
              velocityX: newVelocityX,
              velocityY: newVelocityY,
              x: particle.x + newVelocityX,
              y: particle.y + newVelocityY,
            };
          }

          // Apply velocity decay when not interacting
          return {
            ...particle,
            velocityX: particle.velocityX * VELOCITY_DECAY,
            velocityY: particle.velocityY * VELOCITY_DECAY,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
          };
        }),
      );
    },
    [],
  );

  useEffect(() => {
    controls.start((i) => ({
      x: particles[i]?.x || 0,
      y: particles[i]?.y || 0,
      transition: { type: 'spring', stiffness: 180, damping: 12, velocity: 2 },
    }));
  }, [particles, controls]);

  return (
    <div className="fixed inset-0 bg-transparent">
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
            className="absolute rounded-full bg-custom-magenta bg-opacity-50"
            style={{
              width: PARTICLE_RADIUS * 10,
              height: PARTICLE_RADIUS * 10,
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
