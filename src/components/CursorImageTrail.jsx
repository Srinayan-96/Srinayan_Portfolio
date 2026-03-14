import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/hoverimages/hoverimages/react.png',
  '/hoverimages/hoverimages/node.png',
  '/hoverimages/hoverimages/mongodb.png',
  '/hoverimages/hoverimages/java.png',
  '/hoverimages/hoverimages/figma.jpg',
  '/hoverimages/hoverimages/next.webp',
  '/hoverimages/hoverimages/javascript.png',
  '/hoverimages/hoverimages/spring.png',
];

const SPAWN_DISTANCE = 85;
const IMAGE_GAP = 25;
const MAX_IMAGES = 4;
const FADE_OUT_DELAY = 250;

function getRandomScale() {
  return 0.9 + Math.random() * 0.15;
}

let recentImages = [];

function getRandomImage() {
  const availableImages = IMAGES.filter((img) => !recentImages.includes(img));
  const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
  recentImages.push(newImage);
  if (recentImages.length > 4) {
    recentImages.shift();
  }
  return newImage;
}

export default function CursorImageTrail({ heroRef }) {
  const [trailImages, setTrailImages] = useState([]);
  const lastSpawnPos = useRef({ x: 0, y: 0 });
  const hasSpawned = useRef(false);
  const fadeOutTimeout = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const { clientX, clientY } = e;
      if (!heroRef?.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const inHero =
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom;

      if (!inHero) {
        fadeOutTimeout.current = setTimeout(() => setTrailImages([]), 300);
        return;
      }

      if (fadeOutTimeout.current) {
        clearTimeout(fadeOutTimeout.current);
        fadeOutTimeout.current = null;
      }

      const localX = clientX - rect.left;
      const localY = clientY - rect.top;

      const dx = localX - lastSpawnPos.current.x;
      const dy = localY - lastSpawnPos.current.y;
      const dist = Math.hypot(dx, dy);

      if (dist >= SPAWN_DISTANCE || !hasSpawned.current) {
        hasSpawned.current = true;

        let spawnX = localX;
        let spawnY = localY;
        if (dist >= SPAWN_DISTANCE && (dx !== 0 || dy !== 0)) {
          const ux = dx / dist;
          const uy = dy / dist;
          spawnX = lastSpawnPos.current.x + ux * (SPAWN_DISTANCE + IMAGE_GAP);
          spawnY = lastSpawnPos.current.y + uy * (SPAWN_DISTANCE + IMAGE_GAP);
        }

        lastSpawnPos.current = { x: spawnX, y: spawnY };

        const isVertical = Math.abs(dy) >= Math.abs(dx);
        const rotation = isVertical ? (Math.random() - 0.5) * 15 : (Math.random() - 0.5) * 20;

        const newImage = {
          id: crypto.randomUUID(),
          x: spawnX,
          y: spawnY,
          rotation,
          scale: getRandomScale(),
          imageUrl: getRandomImage(),
        };

        setTrailImages((prev) => [...prev, newImage].slice(-MAX_IMAGES));
      }

      fadeOutTimeout.current = setTimeout(() => {
        setTrailImages([]);
      }, FADE_OUT_DELAY);
    },
    [heroRef]
  );

  useEffect(() => {
    const rafHandler = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener('mousemove', rafHandler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', rafHandler);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (fadeOutTimeout.current) clearTimeout(fadeOutTimeout.current);
    };
  }, [handleMouseMove]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence>
        {trailImages.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 0.78,
              scale: img.scale,
              x: '-50%',
              y: '-50%',
              rotate: img.rotation,
              transition: { type: 'spring', stiffness: 200, damping: 20 },
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8, 
              transition: { duration: 0.3, ease: 'easeOut' } 
            }}
            className="absolute w-[125px] h-[170px] rounded-2xl overflow-hidden"
            style={{
              left: img.x,
              top: img.y,
              boxShadow: '0 15px 35px -10px rgba(0,0,0,0.6)',
              willChange: 'transform, opacity'
            }}
          >
            <div className="absolute inset-0 bg-black/10 z-10" /> {/* Balanced Dimming */}
            <img
              src={img.imageUrl}
              alt=""
              className="w-full h-full object-cover filter brightness-95"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
