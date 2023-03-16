import AbstractButton, {
  type ButtonColors,
} from '@components/button/AbstractButton';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  foregroundColor?: ButtonColors;
  backgroundColor?: ButtonColors;
  isHollow?: boolean;
  children: ReactNode;
}

function Button({
  foregroundColor = 'light',
  backgroundColor = 'dark',
  isHollow = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <AbstractButton
      as="button"
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
      isHollow={isHollow}
      {...props}
    >
      {children}
    </AbstractButton>
  );
}

export default Button;
