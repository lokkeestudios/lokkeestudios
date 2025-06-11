import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function MobileNavigation({
  links,
  className,
}: {
  links: readonly {
    readonly label: string;
    readonly href: string;
  }[];
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            'rounded-full px-3 py-1.5 transition-colors duration-500 md:px-4 md:py-2',
            className,
          )}
        >
          <div className="relative size-5">
            <span
              className={cn(
                'absolute left-0 block h-[1.5px] w-4 bg-gray-50 transition-all duration-100',
                isOpen ? 'top-[0.5rem] rotate-45' : 'top-1.25',
              )}
            />
            <span
              className={cn(
                'absolute left-0 block h-[1.5px] w-4 bg-gray-50 transition-all duration-100',
                isOpen ? 'top-[0.5rem] -rotate-45' : 'top-3.25',
              )}
            />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="bottom"
        sideOffset={18}
        alignOffset={-8}
      >
        <nav
          aria-label="Primary"
          className="divide-y-0.5 divide-neutrals-600 flex flex-col justify-center"
        >
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutrals-200 hover:text-neutrals-50 focus-visible:text-neutrals-50 p-2 text-sm uppercase transition-[letter-spacing,color] hover:tracking-wider focus-visible:tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
}

export { MobileNavigation };
