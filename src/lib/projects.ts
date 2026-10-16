import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;
export type Category = Project['data']['category'][number];
export const categories: Category[] = ['engagement', 'strategy', 'design'];

/**
 * Годы проекта из поля year: "2018" → [2018, 2018], "2013–2023" → [2013, 2023],
 * "2023–present" → [2023, текущий год].
 */
export function projectYears(year: string): [number, number] {
  const now = new Date().getFullYear();
  const parts = year.split(/[–-]/).map((p) => p.trim());
  const start = Number(parts[0]);
  const endRaw = parts[1];
  const end = endRaw === undefined ? start : /present|today|now/i.test(endRaw) ? now : Number(endRaw);
  return [start, end];
}

/** Годы для показа: «2023–present» → «2023–danas» и т. п. */
export function formatYears(year: string, present: string): string {
  return year.replace(/present|today|now/i, present);
}

/**
 * Правило сайта: сначала самое свежее. Сортировка по году окончания (по убыванию),
 * затем по году начала (по убыванию); при равенстве — поле order.
 */
export function byRecency(a: Project, b: Project): number {
  const [as, ae] = projectYears(a.data.year);
  const [bs, be] = projectYears(b.data.year);
  return be - ae || bs - as || a.data.order - b.data.order;
}

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.data.lang === lang);
  return all.sort(byRecency);
}
