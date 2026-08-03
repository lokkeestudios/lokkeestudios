/**
 * i18n helpers for bilingual (EN/DE) support.
 * In Astro components use Astro.currentLocale, then getTranslations(locale).
 * Pass locale + translations from Layout to React components.
 */

import { defaultLocale as defaultLocaleKey, type Locale } from './translations';

export {
  type Locale,
  type Translations,
  defaultLocale,
  locales,
  getTranslations,
  translations,
} from './translations';

// Re-export Astro i18n helper when available (run in Astro context)
export { getRelativeLocaleUrl } from 'astro:i18n';

/**
 * Base path for the current locale ('' for default English, '/de' for German).
 * Use for building hash links via getSectionHref(base).
 */
export function getLocaleBasePath(locale: string): string {
  return locale === 'en' ? '' : `/${locale}`;
}

/**
 * Returns a function that builds same-locale section links (e.g. /#intro or /de/#intro).
 * Use with getLocaleBasePath(locale) in Astro; in React use rootUrl and strip trailing slash.
 */
export function getSectionHref(basePath: string): (hash: string) => string {
  return (hash: string) => (basePath ? `${basePath}/` : '/') + '#' + hash;
}

/**
 * Returns the pathname for the same page in another locale.
 * e.g. pathname '/imprint' + locale 'de' → '/de/imprint'
 *      pathname '/de/imprint' + locale 'en' → '/imprint'
 */
export function getLocalizedPathname(
  targetLocale: Locale,
  pathname: string
): string {
  const withoutLeadingSlash = pathname.replace(/^\//, '');
  const withoutDePrefix = withoutLeadingSlash.replace(/^de\/?/, '');
  if (targetLocale === defaultLocaleKey) {
    return withoutDePrefix ? `/${withoutDePrefix}` : '/';
  }
  return withoutDePrefix ? `/de/${withoutDePrefix}` : '/de/';
}
