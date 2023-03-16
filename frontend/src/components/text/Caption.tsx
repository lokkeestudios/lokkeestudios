import { motion, Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const captionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

interface CaptionProps {
  children: ReactNode;
}

function Caption({ children }: CaptionProps) {
  return (
    <motion.p
      className="mb-4 inline-block font-medium uppercase text-primary sm:text-lg"
      variants={captionVariants}
    >
      {children}
    </motion.p>
  );
}

export default Caption;
