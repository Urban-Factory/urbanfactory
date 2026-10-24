import fs from 'node:fs';
import path from 'node:path';
import type { Lang } from '../i18n/ui';

const exists = (file: string) => fs.existsSync(path.join(process.cwd(), 'public', 'docs', file));

/**
 * PDF для скачивания из public/docs: <base>-<lang>.pdf.
 * HR — хорватский файл; RU — русский, если он уже есть, иначе английский; EN — английский.
 * Возвращает имя файла или undefined, если файла нет (тогда кнопку не показываем).
 */
export function docFile(base: string, lang: Lang): string | undefined {
  const order: string[] = lang === 'hr' ? ['hr'] : lang === 'ru' ? ['ru', 'en'] : ['en'];
  return order.map((l) => `${base}-${l}.pdf`).find(exists);
}
