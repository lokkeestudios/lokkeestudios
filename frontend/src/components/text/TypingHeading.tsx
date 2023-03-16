import usePreviousState from '@hooks/usePreviousState';
import classNames from '@utils/classNames';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const typingSpeed = 0.25;
const deleteSpeed = 0.1;
const delayBeforeDelete = 1.1;

const headingVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: typingSpeed,
    },
  },
  exit: {
    transition: {
      staggerChildren: deleteSpeed,
      staggerDirection: -1,
    },
  },
};

const letterVariants: Variants = {
  enter: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -2.5 },
};

type TypingMode = 'typing' | 'deleting';

interface TypingHeadingProps {
  headings: string[];
  isDark?: boolean;
}

function TypingHeading({ headings, isDark = false }: TypingHeadingProps) {
  const [typingMode, setTypingMode] = useState<TypingMode>('typing');
  const [headingIndex, setHeadingIndex] = useState(0);
  const previousHeadingIndex = usePreviousState(0, headingIndex);

  const currentHeading = headings[headingIndex];
  const previousHeading = headings[previousHeadingIndex];

  function updateTypingModeTimer() {
    if (typingMode === 'typing') {
      const typingDuration =
        (currentHeading.length * typingSpeed + delayBeforeDelete) * 1000;

      return setTimeout(() => {
        const nextHeadingIndex = (headingIndex + 1) % headings.length;

        setHeadingIndex(nextHeadingIndex);
        setTypingMode('deleting');
      }, typingDuration);
    }

    const deleteDuration = previousHeading.length * deleteSpeed * 1000;

    return setTimeout(() => {
      setTypingMode('typing');
    }, deleteDuration);
  }

  useEffect(() => {
    const typingTimer = updateTypingModeTimer();

    return () => clearTimeout(typingTimer);
  }, [typingMode, headingIndex, previousHeadingIndex]);

  return (
    <div
      className={classNames(
        'mb-6 font-mono text-3xl font-bold sm:text-4xl md:text-5xl',
        isDark ? 'text-neutrals-900' : 'text-neutrals-50',
      )}
    >
      <h2 className="sr-only">{currentHeading}</h2>
      <AnimatePresence mode="wait">
        <motion.h2
          aria-hidden
          key={currentHeading}
          variants={headingVariants}
          initial="enter"
          animate="visible"
          exit="exit"
        >
          {currentHeading.split('').map((char, index) => (
            <motion.span
              key={index}
              className="inline-block whitespace-pre"
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}

export default TypingHeading;
