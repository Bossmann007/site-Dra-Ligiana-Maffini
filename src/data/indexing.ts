import { locales, localizedPath, pageIds, type Locale, type PageId } from './i18n';

const indexablePages: Record<Locale, readonly PageId[]> = {
  'pt-BR': pageIds,
  en: ['home', 'about', 'contact', 'family'],
  de: ['home', 'about', 'contact', 'family'],
  it: ['home', 'about', 'contact', 'family'],
  fr: [],
  es: [],
};

export function isIndexable(locale: Locale, page: PageId): boolean {
  return indexablePages[locale].includes(page);
}

export function hreflangLocales(page: PageId): Locale[] {
  return locales.filter((locale) => isIndexable(locale, page));
}

export function robotsFor(locale: Locale, page: PageId): 'index, follow' | 'noindex, follow' {
  return isIndexable(locale, page) ? 'index, follow' : 'noindex, follow';
}

export function isIndexableUrl(url: string): boolean {
  const pathname = new URL(url, 'https://www.draligianamaffini.com.br').pathname;
  return locales.some((locale) =>
    pageIds.some((page) => isIndexable(locale, page) && localizedPath(locale, page) === pathname),
  );
}
