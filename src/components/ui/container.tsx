import { cn } from '@/lib/utils';
import { type ElementRef, type HTMLAttributes, type RefObject } from 'react';

type ContainerHTMLElement = ElementRef<'div'>;

function Container({
  children,
  className,
  ref,
  ...props
}: {
  ref?: RefObject<ContainerHTMLElement>;
} & HTMLAttributes<ContainerHTMLElement>) {
  return (
    <div
      className={cn('mx-auto w-11/12 max-w-screen-2xl 2xl:w-4/5', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
