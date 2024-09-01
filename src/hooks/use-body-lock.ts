import { useEffect } from 'react';

function useLockBody(isLocked: boolean) {
  useEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}

export { useLockBody };
