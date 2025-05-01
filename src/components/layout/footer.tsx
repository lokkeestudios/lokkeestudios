import lokkeestudiosLogoImage from '@/assets/images/logos/lokkeestudios.svg';
import { Container } from '@/components/ui/container';
import { Icons } from '@/components/ui/icons';
import { Image } from '@/components/ui/image';
import { useState } from 'react';
import { siteConfig } from 'src/config/site';

const primaryLinks = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Work',
    href: '/#work',
  },
  {
    label: 'Customer Stories',
    href: '/#stories',
  },
  {
    label: 'Services',
    href: '/#services',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
  {
    label: 'Source code',
    href: '/#source-code',
  },
] as const;

const secondaryLinks = [
  {
    label: 'Imprint',
    href: '/imprint',
  },
] as const;

const socials = [
  {
    label: 'View GitHub profile',
    href: siteConfig.links.github,
    icon: Icons.GitHub,
  },
  {
    label: 'View Instagram profile',
    href: siteConfig.links.instagram,
    icon: Icons.Instagram,
  },
  {
    label: 'View LinkedIn profile',
    href: siteConfig.links.linkedin,
    icon: Icons.LinkedIn,
  },
] as const;

function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer
      aria-label="Primary"
      className="border-t-0.5 border-neutrals-600 bg-neutrals-900 relative z-10 w-full py-3"
    >
      <Container>
        <div className="flex justify-center py-12">
          <a
            href="/"
            title="Navigate home"
            data-astro-prefetch
          >
            <Image
              metadata={lokkeestudiosLogoImage}
              alt="LOKKEE STUDIOS"
              className="h-16 w-16"
            />
          </a>
        </div>
        <hr className="via-neutrals-600 h-px border-0 bg-linear-to-r from-transparent to-transparent" />
        <nav
          aria-label="Primary"
          className="flex flex-wrap justify-center gap-6 py-12"
        >
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-astro-prefetch
              className="text-neutrals-300 hover:text-neutrals-50 focus-visible:text-neutrals-50 text-sm uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <hr className="via-neutrals-600 h-px border-0 bg-linear-to-r from-transparent to-transparent" />
        <div className="grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3">
          <nav
            aria-label="Secondary"
            className="flex flex-wrap justify-center gap-6 lg:order-last lg:justify-end"
          >
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                className="text-neutrals-300 hover:text-neutrals-50 focus-visible:text-neutrals-50 text-xs uppercase transition-colors"
                href={link.href}
                data-astro-prefetch
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ul
            aria-label="Socials"
            className="flex flex-wrap justify-center gap-2"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  title={label}
                  aria-label={label}
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutrals-300 hover:text-neutrals-50 focus-visible:text-neutrals-50 transition-colors"
                >
                  <Icon
                    aria-hidden
                    className="size-7"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:order-first lg:justify-start">
            <small className="text-neutrals-300 text-xs">&copy; {currentYear} LOKKEE STUDIOS</small>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
