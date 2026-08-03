import lokkeestudiosWordmarkLogoImage from '@/assets/images/logos/lokkeestudios-wordmark.svg';
import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { Image } from '@/components/ui/image';
import type { I18nPayload } from '@/hooks/use-i18n';
import { useI18n } from '@/hooks/use-i18n';
import { useScrollThreshold } from '@/hooks/use-scroll-threshold';
import { cn } from '@/lib/utils';

type HeaderProps = {
  i18n: I18nPayload;
};

const EN_COOKIE = 'locale=en;path=/;max-age=31536000;SameSite=Lax';

function Header({ i18n: initialI18n }: HeaderProps) {
  const { t, rootUrl, sectionHref, otherLocale, locale, otherLocaleUrl } = useI18n(initialI18n);
  const { isScrollThresholdPassed } = useScrollThreshold();
  const isBackgroundShown = isScrollThresholdPassed;

  const cleanOtherLocaleUrl =
    otherLocale === 'en' ? otherLocaleUrl.split('?')[0] || '/' : otherLocaleUrl;

  const handleLocaleSwitch = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (otherLocale !== 'en') return;
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    document.cookie = EN_COOKIE;
    window.location.href = cleanOtherLocaleUrl;
  };

  const navLinks = [
    // { label: t.nav.intro, href: sectionHref('intro') },
    { label: t.nav.projects, href: sectionHref('projects') },
    { label: t.nav.testimonials, href: sectionHref('testimonials') },
    { label: t.nav.services, href: sectionHref('services') },
    { label: t.nav.about, href: sectionHref('about') },
  ];

  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full"
    >
      <Container>
        <div
          className={cn(
            'mt-4 rounded-full border-[0.5px] p-2 transition-colors duration-500',
            isBackgroundShown
              ? 'border-neutrals-50/20 bg-neutrals-900/60 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm'
              : 'border-transparent bg-transparent',
          )}
        >
          <div className="grid grid-cols-3">
            <div className="flex items-center gap-1 xl:hidden">
              <MobileNavigation links={navLinks} />
              <a
                href={otherLocaleUrl}
                onClick={handleLocaleSwitch}
                lang={otherLocale}
                data-astro-prefetch
                className="text-neutrals-50 after:via-neutrals-200 relative flex h-full items-center gap-1 p-1 text-sm uppercase after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-linear-to-r after:from-transparent after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"
                aria-label={`Switch to ${otherLocale === 'de' ? 'German' : 'English'}`}
              >
                <Icons.Globe className="size-5" /> {otherLocale.toUpperCase()}
              </a>
            </div>
            <nav
              aria-label="Primary"
              className="ms-4 hidden items-center gap-x-6 xl:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-astro-prefetch
                  className="text-neutrals-50 after:via-neutrals-200 relative flex h-full items-center p-1 text-sm text-nowrap uppercase after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-linear-to-r after:from-transparent after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center">
              <a
                href={rootUrl}
                title={t.navigateHome}
                data-astro-prefetch
                className="hover:animate-jiggle"
              >
                <Image
                  metadata={lokkeestudiosWordmarkLogoImage}
                  isAboveTheFold
                  alt="LOKKEE STUDIOS"
                  className="h-3.5 w-auto md:h-4"
                />
              </a>
            </div>
            <div className="flex items-center justify-end gap-4">
              <a
                href={otherLocaleUrl}
                onClick={handleLocaleSwitch}
                lang={otherLocale}
                data-astro-prefetch
                className="text-neutrals-50 after:via-neutrals-200 relative flex h-full items-center gap-1 p-1 text-sm uppercase after:absolute after:inset-x-0 after:bottom-[12.25%] after:h-px after:scale-x-0 after:bg-linear-to-r after:from-transparent after:to-transparent after:transition-transform hover:after:-scale-x-100 focus-visible:after:-scale-x-100 max-xl:hidden"
                aria-label={`Switch to ${otherLocale === 'de' ? 'German' : 'English'}`}
              >
                <Icons.Globe className="size-5" />
                {locale.toUpperCase()} |{' '}
                <span className="opacity-70">{otherLocale.toUpperCase()}</span>
              </a>
              <Button
                as="a"
                href={rootUrl === '/' ? '#contact' : `${rootUrl}#contact`}
                size="small"
                isGhost
                className="rounded-full"
              >
                {t.nav.hitUsUp}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export { Header };
