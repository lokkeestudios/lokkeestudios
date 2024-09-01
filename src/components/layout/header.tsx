import lokkeestudiosWordmarkLogoImage from '@/assets/images/logos/lokkeestudios-wordmark.svg';
import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Image } from '@/components/ui/image';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const links = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
  {
    label: 'Services',
    href: '/#services',
  },
] as const;

const GRACE_THRESHOLD = 12;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrollThresholdPassed } = useScrollThreshold({ threshold: GRACE_THRESHOLD });

  const isBackgroundShown = isScrollThresholdPassed || isMobileMenuOpen;

  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full"
    >
      <Container>
        <div
          className={cn(
            'mt-4 rounded-full border-0.5 p-2 transition-colors duration-500',
            isBackgroundShown
              ? 'border-neutrals-600 bg-neutrals-900/90 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm supports-[backdrop-filter]:bg-neutrals-900/60'
              : 'border-transparent bg-transparent',
          )}
        >
          <div className="grid grid-cols-3">
            <div className="flex items-center lg:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
                isBackgroundShown={isBackgroundShown}
              />
            </div>
            <nav
              aria-label="Primary"
              className="ms-4 hidden items-center gap-x-6 lg:flex"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-astro-prefetch
                  className="relative flex h-full items-center p-1 text-sm uppercase text-neutrals-50 after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <a
                href="/"
                title="Navigate home"
                data-astro-prefetch
                className="hover:animate-jiggle"
              >
                <Image
                  metadata={lokkeestudiosWordmarkLogoImage}
                  isAboveTheFold
                  alt="LOKKEE STUDIOS"
                  className="h-3.5 md:h-4"
                />
              </a>
            </div>
            <div className="flex items-center justify-end">
              <Button
                as="a"
                href="/#contact"
                size="small"
                isGhost
                className="rounded-full"
              >
                Hit me up
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={links}
      />
      <MobileNavigation.Overlay
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export { Header };
