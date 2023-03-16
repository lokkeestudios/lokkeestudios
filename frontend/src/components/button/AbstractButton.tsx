import classNames from '@utils/classNames';
import type { ReactHTML, ReactNode } from 'react';

const colors = {
  primary: {
    foreground: {
      baseStyles: 'border-primary',
      filledStyles: 'bg-primary hover:text-primary focus-visible:text-primary',
      hollowedStyles: 'text-primary before:bg-primary',
    },
    background: {
      filledStyles: 'text-primary before:bg-primary',
      hollowedStyles:
        'bg-primary hover:text-primary focus-visible:text-primary',
    },
  },
  light: {
    foreground: {
      baseStyles: 'border-neutrals-50',
      filledStyles:
        'bg-neutrals-50 hover:text-neutrals-50 focus-visible:text-neutrals-50',
      hollowedStyles: 'text-neutrals-50 before:bg-neutrals-50',
    },
    background: {
      filledStyles: 'text-neutrals-50 before:bg-neutrals-50',
      hollowedStyles:
        'bg-neutrals-50 hover:text-neutrals-50 focus-visible:text-neutrals-50',
    },
  },
  dark: {
    foreground: {
      baseStyles: 'border-neutrals-900',
      filledStyles:
        'bg-neutrals-900 hover:text-neutrals-900 focus-visible:text-neutrals-900',
      hollowedStyles: 'text-neutrals-900 before:bg-neutrals-900',
    },
    background: {
      filledStyles: 'text-neutrals-900 before:bg-neutrals-900',
      hollowedStyles:
        'bg-neutrals-900 hover:text-neutrals-900 focus-visible:text-neutrals-900',
    },
  },
  error: {
    foreground: {
      baseStyles: 'border-error',
      filledStyles: 'bg-error hover:text-error focus-visible:text-error',
      hollowedStyles: 'text-error before:bg-error',
    },
    background: {
      filledStyles: 'text-error before:bg-error',
      hollowedStyles: 'bg-error hover:text-error focus-visible:text-error',
    },
  },
};

type ButtonColors = keyof typeof colors;

const slideHoverStyles =
  'before:absolute before:-left-3 before:top-0 before:h-full before:w-[calc(100%+1.5rem)] before:origin-left before:-skew-x-[16deg] before:scale-x-0 before:transition-transform before:duration-500 hover:before:scale-x-100 focus-visible:before:scale-x-100';

interface AbstractButtonProps {
  as: keyof ReactHTML;
  foregroundColor: ButtonColors;
  backgroundColor: ButtonColors;
  isHollow: boolean;
  children: ReactNode;
}

function AbstractButton({
  as: As,
  foregroundColor,
  backgroundColor,
  isHollow,
  children,
  ...props
}: AbstractButtonProps) {
  const { foreground } = colors[foregroundColor];
  const { background } = colors[backgroundColor];

  const { baseStyles } = foreground;
  const filledStyles = classNames(
    foreground.filledStyles,
    background.filledStyles,
  );
  const hollowedStyles = classNames(
    foreground.hollowedStyles,
    background.hollowedStyles,
  );

  return (
    <As
      className={classNames(
        'relative mt-8 inline-block select-none overflow-hidden border-2 px-6 py-3 align-middle text-neutrals-50 transition-all duration-500 hover:tracking-[0.075em] md:text-lg',
        slideHoverStyles,
        baseStyles,
        isHollow ? hollowedStyles : filledStyles,
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </As>
  );
}

export default AbstractButton;
export type { ButtonColors };
