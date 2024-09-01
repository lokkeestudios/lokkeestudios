import futureGridImage from '@/assets/images/future-grid.webp';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useCallback, useEffect } from 'react';

const springConfig = {
  damping: 17.5,
  mass: 0.5,
  stiffness: 150,
};

function GridBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const backgroundXSync = useTransform(mouseX, [-1, 1], [15, -15]);
  const backgroundYSync = useTransform(mouseY, [-1, 1], [15, -15]);
  const backgroundX = useSpring(backgroundXSync, springConfig);
  const backgroundY = useSpring(backgroundYSync, springConfig);

  const updateMouseScreenPosition = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      const screenMiddleX = window.innerWidth / 2;
      const screenMiddleY = window.innerHeight / 2;

      const screenMouseX = (clientX - screenMiddleX) / screenMiddleX;
      const screenMouseY = (clientY - screenMiddleY) / screenMiddleY;

      mouseX.set(screenMouseX);
      mouseY.set(screenMouseY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    window.addEventListener('mousemove', updateMouseScreenPosition);

    return () => {
      window.removeEventListener('mousemove', updateMouseScreenPosition);
    };
  }, [updateMouseScreenPosition]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-50 overflow-hidden bg-primary bg-[size:103%_103%] bg-no-repeat object-fill"
      style={{
        backgroundImage: `url(${futureGridImage.src})`,
        backgroundPosition: useMotionTemplate`calc(50% + ${backgroundX}px) calc(50% + ${backgroundY}px)`,
      }}
    />
  );
}

export { GridBackground };
