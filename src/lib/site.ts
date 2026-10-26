import type { Lang } from '../i18n/ui';

export const contacts = {
  instagram: 'https://www.instagram.com/urbanfactory.agency',
  instagramLabel: '@urbanfactory.agency',
  telegram: 'https://t.me/mveklenko',
  telegramLabel: '@mveklenko',
  addressLines: ['Strojarska cesta 20', '10000 Zagreb'],
  company: 'MAVEK design d.o.o.',
  oib: '13103774326',
};

/**
 * Email не лежит в HTML открытым текстом (защита от ботов):
 * строка перевёрнута, закодирована в base64 и разбита на части.
 * Собирает её скрипт в components/Protected.astro. Новое значение:
 *   node -e "console.log(Buffer.from([...'текст'].reverse().join('')).toString('base64'))"
 */
export const protectedContacts = {
  email: ['eWNuZWdhLnly', 'b3RjYWZuYWJy', 'dUBvZm5p'],
} as const;

/**
 * Телефон — только по кнопке (components/RevealPhone.astro), собирается при клике.
 * Группы цифр номера, каждая перевёрнута и в base64, лежат вперемешку;
 * seq — порядок сборки (код страны, оператор, две группы абонента).
 */
export const phoneParts = {
  bits: ['ODg4', 'NTgz', 'MDIwMg==', 'OTk='],
  seq: [1, 3, 0, 2],
} as const;

/** Ссылка с учётом base (BASE_PATH из workflow; на домене — корень). */
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
