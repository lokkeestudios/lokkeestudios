/**
 * Reads i18n (locale + translations) from the page.
 * - Client: set once in Layout via window.__I18N__
 * - SSR: pass initial from Astro so first paint is correct
 *
 * Use without args in components that are fine with fallback on SSR (e.g. DE).
 * Pass initial in components that must be correct on first paint (e.g. Header).
 */

import { getSectionHref } from '@/i18n';
import type { Locale } from '@/i18n/translations';
import type { Translations } from '@/i18n/translations';
import { getTranslations } from '@/i18n/translations';
import { defaultLocale } from '@/i18n/translations';

/** Serializable payload set by Layout (no functions). */
export type I18nPayload = {
  locale: Locale;
  t: Translations;
  rootUrl: string;
  otherLocale: Locale;
  otherLocaleUrl: string;
};

export type I18nData = I18nPayload & {
  sectionHref: (hash: string) => string;
};

declare global {
  interface Window {
    __I18N__?: I18nPayload;
  }
}

function buildSectionHref(rootUrl: string): (hash: string) => string {
  const base = rootUrl === '/' ? '' : rootUrl.replace(/\/$/, '');
  return getSectionHref(base);
}

function toI18nData(p: I18nPayload): I18nData {
  return { ...p, sectionHref: buildSectionHref(p.rootUrl) };
}

function getI18nFromWindow(): I18nData | undefined {
  if (typeof window === 'undefined') return undefined;
  const p = window.__I18N__;
  return p ? toI18nData(p) : undefined;
}

/** Fallback when no initial and no window (SSR). */
function getDefaultI18n(): I18nData {
  const locale = defaultLocale;
  const t = getTranslations(locale);
  const rootUrl = '/';
  return toI18nData({
    locale,
    t,
    rootUrl,
    otherLocale: 'de',
    otherLocaleUrl: '/de/',
  });
}

/**
 * Returns current i18n. Pass initial from Astro so SSR/first paint is correct;
 * on client, window.__I18N__ (set by Layout script) is used.
 */
export function useI18n(initial?: I18nData | I18nPayload | null): I18nData {
  const fromWindow = getI18nFromWindow();
  if (fromWindow) return fromWindow;
  if (initial) return 'sectionHref' in initial ? initial : toI18nData(initial);
  return getDefaultI18n();
}
