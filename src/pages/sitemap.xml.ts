import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { defaultLang, languages, published } from '../i18n/ui';
import { localePath } from '../lib/site';

/** sitemap.xml: все страницы на всех языках + hreflang-альтернативы. Редиректы не включаем. */
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://urbanfactory.agency');
  const projects = [...new Set((await getCollection('projects')).map((p) => p.data.slug))];
  const interviews = [...new Set((await getCollection('interviews')).map((i) => i.data.slug))];
  const paths = [
    '/',
    '/projects/',
    ...projects.map((s) => `/projects/${s}/`),
    '/services/',
    '/media/',
    ...interviews.map((s) => `/media/${s}/`),
    '/contact/',
  ];
  const abs = (lang: (typeof published)[number], p: string) => new URL(localePath(lang, p), base).href;
  const urls = paths.flatMap((p) =>
    published.map(
      (lang) => `  <url>
    <loc>${abs(lang, p)}</loc>
${published.map((l) => `    <xhtml:link rel="alternate" hreflang="${languages[l].htmlLang}" href="${abs(l, p)}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(defaultLang, p)}"/>
  </url>`,
    ),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
