import AbstractButton, {
  type ButtonColors,
} from '@components/button/AbstractButton';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  foregroundColor?: ButtonColors;
  backgroundColor?: ButtonColors;
  isHollow?: boolean;
  children: ReactNode;
}

function ButtonLink({
  foregroundColor = 'light',
  backgroundColor = 'dark',
  isHollow = false,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <AbstractButton
      as="a"
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
      isHollow={isHollow}
      {...props}
    >
      {children}
    </AbstractButton>
  );
}

export default ButtonLink;
