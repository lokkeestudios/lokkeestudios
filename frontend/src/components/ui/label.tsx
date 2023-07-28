import { cn } from '@/lib/utils';
import { ElementRef, LabelHTMLAttributes, ReactNode, forwardRef } from 'react';

type LabelHTMLElement = ElementRef<'label'>;

interface LabelProps extends LabelHTMLAttributes<LabelHTMLElement> {
  children: ReactNode;
}

const Label = forwardRef<LabelHTMLElement, LabelProps>(
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
