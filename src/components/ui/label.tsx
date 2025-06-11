import { cn } from '@/lib/utils';
import { Label as LabelPrimitive } from 'radix-ui';
import { type ComponentProps } from 'react';

function Label({ className, ...props }: ComponentProps<'label'>) {
  return (
    <LabelPrimitive.Root
      className={cn(
        'text-neutrals-300 mb-2 block text-sm/none uppercase peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      data-slot="label"
      {...props}
    />
  );
}

export { Label };
