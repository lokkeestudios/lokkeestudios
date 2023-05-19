import { cn } from '@/lib/utils';
import { LabelHTMLAttributes, ReactNode, forwardRef } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'mb-2 block text-sm uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  ),
);
Label.displayName = 'Label';

export default Label;
