import lokkeestudiosLogo from '@assets/images/logos/lokkeestudios.svg';
import Container from '@components/Container';
import DiscordIcon from '@components/icons/DiscordIcon';
import GithubIcon from '@components/icons/GithubIcon';
import site from '@data/site';
import { useState } from 'react';

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
    label: 'Contact',
    href: '/#contact',
  },
  {
    label: 'Source code',
    href: '/#sourcecode',
  },
];

const secondaryLinks = [
  {
    label: 'Imprint',
    href: '/imprint',
  },
];

const socials = [
  {
    label: 'View GitHub profile',
    href: site.githubUrl,
    icon: GithubIcon,
  },
  {
    label: 'Join Discord server',
    href: site.discordUrl,
    icon: DiscordIcon,
  },
];

function Footer() {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer
      aria-label="Primary"
      className="relative z-10 w-full border-t-0.5 border-neutrals-600 py-3"
    >
      <Container>
        <div className="flex justify-center py-12">
          <a
            href="/"
            title="Navigate home"
          >
            <img
              src={lokkeestudiosLogo.src}
              alt="LOKKEE STUDIOS"
              width={64}
              height={64}
              decoding="async"
              loading="lazy"
            />
          </a>
        </div>
        <hr className="h-[1px] border-0 bg-gradient-to-r from-transparent via-neutrals-600 to-transparent" />
        <nav
          aria-label="Primary"
          className="flex justify-center gap-x-6 py-12"
        >
          {primaryLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm uppercase text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <hr className="h-[1px] border-0 bg-gradient-to-r from-transparent via-neutrals-600 to-transparent" />
        <div className="grid grid-cols-1 items-center justify-center gap-6 py-12 lg:grid-cols-3">
          <nav
            aria-label="Secondary"
            className="flex justify-center gap-x-6 lg:order-last lg:justify-end"
          >
            {secondaryLinks.map((link, index) => (
              <a
                key={index}
                className="text-xs uppercase text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <ul
            aria-label="Socials"
            className="flex justify-center gap-x-2"
          >
            {socials.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  title={label}
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutrals-300 transition-colors hover:text-neutrals-50 focus-visible:text-neutrals-50"
                >
                  <Icon
                    aria-hidden
                    className="h-7 w-7"
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center lg:order-first lg:justify-start">
            <p className="text-xs text-neutrals-300">
              &copy; {currentYear} LOKKEE STUDIOS
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
