import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

function Input({ type, className, ...props }: ComponentProps<'input'>) {
  return (
    <input
      data-slot="input"
      className={cn(
        'peer border-neutrals-600 bg-neutrals-800 caret-primary focus:border-primary focus:shadow-primary/70 block w-full appearance-none rounded-sm border p-3 shadow-[0_0_10px,inset_0_0_10px] shadow-transparent transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
