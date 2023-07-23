import lokkeestudiosTypeLogoImage from '@/assets/images/logos/lokkeestudios-type.svg';
import MobileNavigation from '@/components/layout/mobile-navigation';
import ButtonLink from '@/components/ui/button-link';
import Container from '@/components/ui/container';
import Image from '@/components/ui/image';
import useScroll from '@/hooks/useScroll';
import useWindowSize from '@/hooks/useWindowSize';
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
];

interface HeaderProps {
  isInitialBackgroundTransparent?: boolean | undefined;
}

function Header({ isInitialBackgroundTransparent = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();

  const hasScrolledPastHeroSection = scrollY > windowSize.height - 1;
  const isBackgroundShown =
    !isInitialBackgroundTransparent ||
    hasScrolledPastHeroSection ||
    isMobileMenuOpen;

  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full"
    >
      <div
        className={cn(
          'border-b-0.5 py-2 transition-colors duration-500',
          isBackgroundShown
            ? 'border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50'
            : 'border-transparent bg-transparent',
        )}
      >
        <Container>
          <div className="grid grid-cols-3">
            <div className="flex items-center md:hidden">
              <MobileNavigation.Toggle
                isOpen={isMobileMenuOpen}
                onIsOpenChange={setIsMobileMenuOpen}
              />
            </div>
            <nav
              aria-label="Primary"
              className="hidden items-center gap-x-6 md:flex"
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="relative py-1 text-sm uppercase text-neutrals-50 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:scale-x-0 after:bg-gradient-to-r after:from-transparent after:via-neutrals-200 after:to-transparent after:transition-transform hover:after:-scale-x-125 focus-visible:after:-scale-x-125"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <a
                href="/"
                title="Navigate home"
              >
                <Image
                  metadata={lokkeestudiosTypeLogoImage}
                  alt="LOKKEE STUDIOS"
                  className="h-3 md:h-4"
                />
              </a>
            </div>
            <div className="flex items-center justify-end">
              <ButtonLink
                href="/#contact"
                size="small"
                isGhost
              >
                Hit me up
              </ButtonLink>
            </div>
          </div>
        </Container>
      </div>
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

export default Header;
