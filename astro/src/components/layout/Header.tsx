import Container from '@components/Container';
import DiscordIcon from '@components/icons/DiscordIcon';
import GithubIcon from '@components/icons/GithubIcon';
import site from '@data/site';
import { Menu } from '@headlessui/react';
import useScroll from '@hooks/useScroll';
import useWindowSize from '@hooks/useWindowSize';
import classNames from '@utils/classNames';
import { AnimatePresence, motion } from 'framer-motion';

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
    label: 'Contact',
    href: '/#contact',
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

function MobileNavigationMenu() {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button title="Toggle navigation menu">
            <span className="sr-only">Menu</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              animate={open ? 'open' : 'closed'}
              initial={false}
              className="h-7 w-7"
            >
              <motion.path
                fillRule="evenodd"
                d="M3,17.25C3,16.839 3.339,16.5 3.75,16.5L20.25,16.5C20.661,16.5 21,16.839 21,17.25C21,17.661 20.661,18 20.25,18L3.75,18C3.339,18 3,17.661 3,17.25Z"
                clipRule="evenodd"
                variants={{
                  closed: {
                    y: ['-0.325rem', '-0.325rem', '0rem'],
                    rotate: [45, 0, 0],
                  },
                  open: {
                    y: ['0rem', '-0.325rem', '-0.325rem'],
                    rotate: [0, 0, 45],
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                fillRule="evenodd"
                d="M3,12C3,11.589 3.339,11.25 3.75,11.25L20.25,11.25C20.661,11.25 21,11.589 21,12C21,12.411 20.661,12.75 20.25,12.75L3.75,12.75C3.339,12.75 3,12.411 3,12Z"
                clipRule="evenodd"
                variants={{
                  closed: { opacity: [0, 0, 1] },
                  open: { opacity: [1, 1, 0] },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                fillRule="evenodd"
                d="M3,6.75C3,6.339 3.339,6 3.75,6L20.25,6C20.661,6 21,6.339 21,6.75C21,7.161 20.661,7.5 20.25,7.5L3.75,7.5C3.339,7.5 3,7.161 3,6.75Z"
                clipRule="evenodd"
                variants={{
                  closed: {
                    y: ['0.325rem', '0.325rem', '0rem'],
                    rotate: [-45, 0, 0],
                  },
                  open: {
                    y: ['0rem', '0.325rem', '0.325rem'],
                    rotate: [0, 0, -45],
                  },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </Menu.Button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className="fixed top-0 left-0 right-0 -z-50 border-b-0.5 border-neutrals-600 bg-neutrals-900 py-1 pt-16"
              >
                <Container>
                  <Menu.Items
                    static
                    as={motion.nav}
                    aria-label="Primary"
                    initial={{ y: -10 }}
                    animate={{
                      y: 0,
                    }}
                    exit={{
                      y: -10,
                    }}
                    className="flex flex-col items-center justify-center divide-y-0.5 divide-neutrals-600"
                  >
                    {links.map((link, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <a
                            href={link.href}
                            className={classNames(
                              'w-full py-2 text-lg uppercase text-neutrals-50',
                              active ? 'bg-neutrals-800' : '',
                            )}
                          >
                            {link.label}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Container>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Menu>
  );
}

interface HeaderProps {
  isInitialBackgroundTransparent?: boolean;
}

function Header({ isInitialBackgroundTransparent = false }: HeaderProps) {
  const windowSize = useWindowSize();
  const { scrollY } = useScroll();

  const hasScrolledPastHeroSection = scrollY > windowSize.height - 1;
  const isBackgroundShown =
    !isInitialBackgroundTransparent || hasScrolledPastHeroSection;

  return (
    <header
      aria-label="Primary"
      className="fixed top-0 z-40 w-full py-4"
    >
      <div
        className={classNames(
          'absolute inset-0 -z-10 h-full border-b-0.5 transition-colors duration-500',
          isBackgroundShown
            ? 'border-neutrals-600 bg-neutrals-900/90 backdrop-blur-md supports-[backdrop-filter]:bg-neutrals-900/50'
            : 'border-transparent bg-transparent',
        )}
      />
      <Container>
        <div className="grid grid-cols-3">
          <div className="flex items-center md:hidden">
            <MobileNavigationMenu />
          </div>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-x-6 md:flex"
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm uppercase text-neutrals-50 hover:text-neutrals-50/70"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-center">
            <a
              href="/"
              title="Navigate home"
              className="font-display text-xl"
            >
              <span className="font-bold">LOKKEE</span>&nbsp;STUDIOS
            </a>
          </div>
          <ul className="flex items-center justify-end space-x-2">
            {socials.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <a
                  href={href}
                  title={label}
                  rel="noreferrer"
                  target="_blank"
                  className="text-neutrals-50 transition-colors hover:text-neutrals-50/70 focus-visible:text-neutrals-50"
                >
                  <Icon
                    aria-hidden
                    className="h-7 w-7"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header;
