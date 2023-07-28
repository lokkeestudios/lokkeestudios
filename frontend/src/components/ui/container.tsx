import { cn } from '@/lib/utils';
import { ElementRef, HTMLAttributes, ReactNode, forwardRef } from 'react';

type ContainerHTMLElement = ElementRef<'div'>;

interface ContainerProps extends HTMLAttributes<ContainerHTMLElement> {
  children: ReactNode;
}

const Container = forwardRef<ContainerHTMLElement, ContainerProps>(
  ({ children, className, ...props }, ref) => (
    <div
      className={cn('mx-auto w-11/12 max-w-7xl 2xl:w-4/5', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  ),
);
Container.displayName = 'Container';

export default Container;
