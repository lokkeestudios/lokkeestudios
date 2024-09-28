import { cn } from '@/lib/utils';
import { type ElementRef, type LabelHTMLAttributes, type RefObject } from 'react';

type LabelHTMLElement = ElementRef<'label'>;

function Label({
  children,
  htmlFor,
  className,
  ref,
  ...props
}: { ref?: RefObject<LabelHTMLElement> } & LabelHTMLAttributes<LabelHTMLElement>) {
  return (
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
  );
}

export { Label };
