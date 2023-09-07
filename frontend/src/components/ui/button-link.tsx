import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ElementRef,
  type ReactNode,
} from 'react';

type ButtonLinkHTMLElement = ElementRef<'a'>;

interface ButtonLinkProps
  extends AnchorHTMLAttributes<ButtonLinkHTMLElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const ButtonLink = forwardRef<ButtonLinkHTMLElement, ButtonLinkProps>(
  (
    { foreground, background, size, isGhost, children, className, ...props },
    ref,
  ) => (
    <a
      className={cn(
        buttonVariants({
          foreground,
          background,
          size,
          isGhost,
          className,
        }),
      )}
      ref={ref}
      {...props}
    >
      {children}
    </a>
  ),
);
ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
