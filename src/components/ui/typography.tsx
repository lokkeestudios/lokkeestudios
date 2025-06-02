import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

function Heading({ children, className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'text-neutrals-50 mb-4 text-3xl/tight font-bold text-balance md:text-5xl/tight',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

function Caption({ children, className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'border-primary/30 bg-primary/10 text-primary after:animate-shiny-badge-slide after:bg-primary/10 relative mb-4 inline-block overflow-hidden rounded-full border-[0.5px] px-4 py-1 font-medium text-pretty uppercase backdrop-blur-sm text-shadow-lg after:absolute after:inset-0 max-md:text-sm',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

function Paragraph({ children, className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn('text-neutrals-300 max-w-prose text-base/relaxed', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { Caption, Heading, Paragraph };
