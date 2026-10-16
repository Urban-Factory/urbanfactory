import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;
export type Category = Project['data']['category'][number];
export const categories: Category[] = ['engagement', 'strategy', 'design'];

export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.data.lang === lang);
  return all.sort((a, b) => a.data.order - b.data.order);
}
