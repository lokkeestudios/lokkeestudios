import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
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
