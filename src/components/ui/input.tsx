import { cn } from '@/lib/utils';
import { type ElementRef, type InputHTMLAttributes, type Ref } from 'react';

type InputHTMLElement = ElementRef<'input'>;

function Input({
  type,
  className,
  ref,
  ...props
}: {
  ref?: Ref<InputHTMLElement>;
} & InputHTMLAttributes<InputHTMLElement>) {
  return (
    <input
      ref={ref}
      className={cn(
        'peer block w-full appearance-none rounded-sm border border-neutrals-600 bg-neutrals-800 p-3 caret-primary shadow-[0_0_10px,_inset_0_0_10px] shadow-transparent transition-colors focus:border-primary focus:shadow-primary/70 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
