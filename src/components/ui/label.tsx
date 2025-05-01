import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

function Label({ children, className, ...props }: ComponentProps<'label'>) {
  return (
    <label
      className={cn(
        'text-neutrals-300 mb-2 block text-sm/none uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export { Label };
