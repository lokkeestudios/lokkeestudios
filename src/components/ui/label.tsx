import { cn } from '@/lib/utils';
import { forwardRef, type ElementRef, type LabelHTMLAttributes, type ReactNode } from 'react';

type LabelHTMLElement = ElementRef<'label'>;

interface LabelProps extends LabelHTMLAttributes<LabelHTMLElement> {
  children: ReactNode;
}

const Label = forwardRef<LabelHTMLElement, LabelProps>(
  ({ children, htmlFor, className, ...props }, ref) => (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={cn(
        'mb-2 block text-sm/none uppercase text-neutrals-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
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
