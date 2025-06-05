import { useLayoutEffect } from 'react';

function useLockBody(isLocked: boolean) {
  useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
}

export { useLockBody };
