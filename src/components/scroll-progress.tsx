import { motion, useScroll, useTransform } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed inset-x-0 top-0 z-10000 h-px bg-neutrals-600">
      <motion.div
        style={{ width: progressWidth }}
        className="h-full bg-linear-to-r from-neutrals-100/30 via-neutrals-100 to-neutrals-100/30"
      />
    </div>
  );
}

export { ScrollProgress };
