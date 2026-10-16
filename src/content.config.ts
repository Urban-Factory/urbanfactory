import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// ID записи = путь файла (en/rostov-tram), а не поле slug: иначе версии на разных языках с одинаковым slug перезаписывают друг друга
const byPath = ({ entry }: { entry: string }) => entry.replace(/\.mdx?$/, '');

const category = z.enum(['engagement', 'strategy', 'design']);

// Проекты: src/content/projects/<lang>/<slug>.md — по одному файлу на язык.
// Шаблон для нового проекта: src/content/project.template.md
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects', generateId: byPath }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      lang: z.enum(['en', 'hr', 'ru']),
      category: z.array(category).min(1),
      year: z.string(),
      city: z.string(),
      country: z.string(),
      client: z.string().optional(),
      role: z.string(),
      summary: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      results: z.array(z.string()).default([]),
      // Видео (YouTube и т.п.): блок на странице кейса появляется, только если поле заполнено
      videoRu: z.url().optional(),
      videoEn: z.url().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

// Интервью и публикации: src/content/media/<lang>/<slug>.md
const media = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/media', generateId: byPath }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      lang: z.enum(['en', 'hr', 'ru']),
      person: z.string(),
      date: z.string(), // как показывать: "December 2013"
      place: z.string(),
      summary: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      firstPublished: z.object({ label: z.string(), url: z.url().optional() }).optional(),
      related: z.array(z.string()).default([]), // slug проектов
      order: z.number().default(100),
    }),
});

export const collections = { projects, media };
