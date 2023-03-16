import {
  motion,
  useAnimationControls,
  useInView,
  Variants,
} from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

const containerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

interface ChildrenEntranceAnimatorProps {
  children: ReactNode;
}

function ChildrenEntranceAnimator({ children }: ChildrenEntranceAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);
  const animationControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      void animationControls.start('visible');
    }
    if (!isInView) {
      void animationControls.start('hidden');
    }
  }, [animationControls, isInView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={animationControls}
    >
      {children}
    </motion.div>
  );
}

export default ChildrenEntranceAnimator;
