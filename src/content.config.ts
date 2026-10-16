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
      role: z.string(), // «Scope» — объём работ агентства, без должностей (должности — в team.past)
      summary: z.string(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      results: z.array(z.string()).default([]),
      // Видео (YouTube и т.п.): блок на странице кейса появляется, только если поле заполнено
      videoRu: z.url().optional(),
      videoEn: z.url().optional(),
      // Серия роликов YouTube (lite-embed): id ролика, заголовок, язык видео
      youtube: z
        .array(
          z.object({
            id: z.string(),
            title: z.string(),
            lang: z.enum(['ru', 'en', 'hr']).default('ru'),
            recorded: z.string().optional(), // «2020» или «Opening, 5 March 2020»
            published: z.string().optional(), // YYYY-MM-DD — uploadDate на YouTube
          }),
        )
        .default([]),
      youtubeAllLangs: z.boolean().default(false), // true — ролики на всех языковых версиях (с пометкой языка)
      featured: z.boolean().default(false),
      order: z.number().default(100),
    }),
});

// Интервью с полным текстом (страницы /media/<slug>/): src/content/interviews/<lang>/<slug>.md
// Текст интервью — опубликованный ранее, не редактировать; правятся только описания людей.
const interviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interviews', generateId: byPath }),
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

// Публикации на странице Media (по записи на публикацию): src/content/media/<lang>/<id>.md
// Заголовок — НАШ нейтральный, оригинальные заголовки не копируем.
const media = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/media', generateId: byPath }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['en', 'hr', 'ru']),
    section: z.enum(['interviews', 'articles', 'talks', 'press']),
    date: z.string(), // YYYY-MM-DD, YYYY-MM или YYYY
    outlet: z.string(),
    originalLang: z.enum(['ru', 'en', 'hr', 'pt']),
    role: z.string(),
    url: z.url().optional(), // внешняя ссылка
    urlLabel: z.string().optional(), // подпись ссылки вместо «Original»
    interview: z.string().optional(), // slug интервью с полным текстом на сайте
    video: z.string().optional(), // id ролика YouTube — становится основной ссылкой карточки
    allLangs: z.boolean().default(false), // видео показывать на всех языковых версиях
    description: z.string().optional(), // короткое нейтральное описание: факт, цель, результат
    seeAlso: z.object({ project: z.string(), label: z.string() }).optional(), // строка-ссылка на кейс
    series: z.string().optional(), // slug проекта: вывести его серию роликов (поле youtube) сеткой
    verify: z.boolean().default(false), // ссылку нужно проверить перед публикацией
  }),
});

export const collections = { projects, interviews, media };
