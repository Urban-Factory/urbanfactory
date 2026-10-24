// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Домен urbanfactory.agency (этап 6). SITE_URL и BASE_PATH задаются в workflow деплоя; локально — корень.
const site = process.env.SITE_URL ?? 'https://urbanfactory.agency';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    locales: ['hr', 'en', 'ru'],
    defaultLocale: 'hr', // основной язык; корень / ведёт на /hr/ (src/pages/index.astro)
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  // Старые адреса прежнего сайта агентства → новые страницы (старый сайт был на русском)
  redirects: {
    '/rostov300': '/ru/projects/rostov-300/',
    '/rostovtramdesign': '/ru/projects/rostov-tram/',
    '/rostovtramlines': '/ru/projects/rostov-tram/',
    '/rostovtramstrategy': '/ru/projects/rostov-tram/',
    '/greatrostov': '/ru/projects/great-rostov/',
    '/highspeedrailways': '/ru/projects/great-rostov/',
    '/ibikernd': '/ru/projects/cycling-rostov-on-don/',
    '/gagarinsquare': '/ru/projects/gagarin-bridge/',
    '/urbanisland': '/ru/projects/urban-islands/',
    '/utc2017': '/ru/projects/urban-thinkers-campus-recife/',
    '/zverevostrategy': '/ru/projects/zverevo-strategy-2030/',
    '/zverevooutlet': '/ru/projects/zverevo-strategy-2030/',
    '/zverevoboulevard': '/ru/projects/kolesnikov-boulevard/',
    '/circemonteirorussia': '/ru/projects/temernik-river-park/',
    '/mosurbanforun2017': '/ru/projects/temernik-river-park/',
    '/enriquepenalosa': '/ru/media/enrique-penalosa/',
    '/jaimelerner': '/ru/media/jaime-lerner/',
    '/donleftbank': '/ru/projects/',
    '/theheritagedoor': '/ru/projects/',
    '/thevillage': '/ru/projects/',
  },
  vite: { plugins: [tailwindcss()] },
});
