import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

function Container({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={cn('mx-auto w-11/12 max-w-[96rem] 2xl:w-4/5', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container };
