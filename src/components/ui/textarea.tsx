import { cn } from '@/lib/utils';
import { type ComponentProps } from 'react';

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'peer border-neutrals-600 bg-neutrals-800 caret-primary focus:border-primary focus:shadow-primary/70 block max-h-36 min-h-18 w-full appearance-none rounded-sm border p-3 shadow-[0_0_10px,inset_0_0_10px] shadow-transparent transition-colors focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
