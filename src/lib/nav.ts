// Главная = страница агентства: пункт «Agencija» ведёт на /{lang}/ и подсвечен только на главной
export const mainNav = [
  { key: 'nav.agency', href: '/' },
  { key: 'nav.projects', href: '/projects/' },
  { key: 'nav.services', href: '/services/' },
  { key: 'nav.media', href: '/media/' },
  { key: 'nav.contact', href: '/contact/' },
] as const;

/** Активный пункт меню: главная — только точное совпадение, остальные — по началу пути */
export function isActiveNav(href: string, path: string): boolean {
  return href === '/' ? path === '/' : path.startsWith(href);
}
