import type { Lang } from '../i18n/ui';

export const contacts = {
  email: 'info@urbanfactory.agency',
  instagram: 'https://www.instagram.com/urbanfactory.agency',
  whatsapp: 'https://wa.me/385916030470',
  whatsappLabel: '+385 91 603 0470',
  telegram: 'https://t.me/mveklenko',
  address: 'Strojarska cesta 20, 10000 Zagreb, Croatia',
  mapUrl: 'https://www.openstreetmap.org/search?query=Strojarska%20cesta%2020%2C%20Zagreb',
  company: 'MAVEK design d.o.o.',
  oib: '13103774326',
};

/** Ссылка с учётом base (до этапа 6 сайт живёт в подпапке /urbanfactory/). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Путь страницы в другом языке: /en/projects/ → /hr/projects/ */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.replace(/^\/(en|hr|ru)(?=\/|$)/, '');
  return url(`/${lang}${clean.startsWith('/') ? clean : `/${clean}`}`);
}

/** Путь текущей страницы без base и без префикса языка. */
export function pagePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const noBase = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return noBase.replace(/^\/(en|hr|ru)(?=\/|$)/, '') || '/';
}
