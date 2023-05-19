import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, ReactNode, forwardRef } from 'react';

interface ButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
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
