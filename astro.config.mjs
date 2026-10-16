// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// До подключения домена (этап 6) сайт живёт на urban-factory.github.io/urbanfactory/.
// SITE_URL и BASE_PATH задаются в workflow деплоя; локально — корень.
const site = process.env.SITE_URL ?? 'https://urbanfactory.agency';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    locales: ['en', 'hr', 'ru'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
