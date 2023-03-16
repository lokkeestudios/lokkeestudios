import futureGridImage from '@assets/images/future-grid.webp';
import useMouseScreenPosition from '@hooks/useMouseScreenPosition';
import { motion, useReducedMotion } from 'framer-motion';

function clamp(number: number, min: number, max: number) {
  return Math.min(Math.max(number, min), max);
}

const parallaxMultiplier = -10;
const maxParallaxShift = 15;

function GridBackground() {
  const mouseScreenPosition = useMouseScreenPosition();
  const shouldReduceMotion = useReducedMotion();

  const parallaxX = clamp(
    mouseScreenPosition.x * parallaxMultiplier,
    -maxParallaxShift,
    maxParallaxShift,
  );
  const parallaxY = clamp(
    mouseScreenPosition.y * parallaxMultiplier,
    -maxParallaxShift,
    maxParallaxShift,
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-50 h-full w-full overflow-hidden"
    >
      <motion.img
        src={futureGridImage.src}
        alt=""
        width={futureGridImage.width}
        height={futureGridImage.height}
        decoding="async"
        loading="lazy"
        className="h-full w-full object-fill"
        animate={{
          x: shouldReduceMotion ? 0 : parallaxX,
          y: shouldReduceMotion ? 0 : parallaxY,
        }}
      />
    </div>
  );
}

export default GridBackground;
