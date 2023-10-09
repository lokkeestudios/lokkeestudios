import { cn } from '@/lib/utils';
import { forwardRef, type ElementRef, type InputHTMLAttributes } from 'react';

type InputHTMLElement = ElementRef<'input'>;

type InputProps = InputHTMLAttributes<InputHTMLElement>;

const Input = forwardRef<InputHTMLElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'peer block w-full appearance-none rounded-sm border border-neutrals-600 bg-neutrals-800 p-3 shadow-[0_0_10px,_inset_0_0_10px] shadow-transparent transition-colors focus:border-primary focus:shadow-primary/70 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';

export default Input;
