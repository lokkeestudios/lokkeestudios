import { cn } from '@/lib/utils';
import type { ElementRef, HTMLAttributes, ReactNode } from 'react';

interface HeadingProps extends HTMLAttributes<ElementRef<'h2'>> {
  children: ReactNode;
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        'mb-4 text-3xl font-bold leading-tight text-neutrals-50 md:text-5xl md:leading-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

interface CaptionProps extends HTMLAttributes<ElementRef<'p'>> {
  children: ReactNode;
}

function Caption({ children, className, ...props }: CaptionProps) {
  return (
    <p
      className={cn(
        'mb-4 inline-block rounded-full border-0.5 border-primary/30 bg-primary/10 px-4 py-1 font-medium uppercase text-primary backdrop-blur-sm max-md:text-sm relative after:absolute after:inset-0 after:bg-primary/10 after:animate-shiny-badge-slide overflow-hidden',
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}

interface ParagraphProps extends HTMLAttributes<ElementRef<'p'>> {
  children: ReactNode;
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn('max-w-prose leading-relaxed text-neutrals-300', className)}
      {...props}
    >
      {children}
    </p>
  );
}

export { Caption, Heading, Paragraph };
