/**
 * Выгрузка всех текстов сайта для вычитки переводов: по документу .docx на язык (HR, RU).
 * Таблица «ID · English · перевод» — по ID легко найти и поправить текст в файлах сайта.
 *
 *   npm run translations:export
 *
 * Результат: translations-review/UrbanFactory-texts-HR.docx и …-RU.docx
 * (папка в .gitignore — это рабочие документы, в публичный репозиторий не попадают).
 */
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  PageOrientation,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import { ui } from '../src/i18n/ui.ts';
import { en as copyEn } from '../src/i18n/copy.ts';
import { hr as copyHr } from '../src/i18n/copy.hr.ts';
import { ru as copyRu } from '../src/i18n/copy.ru.ts';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'translations-review');
const LANGS = {
  hr: { name: 'Hrvatski', copy: copyHr, title: 'Urban Factory — tekstovi web stranice (HR)', note: 'Za ispravke navedite ID retka i novi tekst.' },
  ru: { name: 'Русский', copy: copyRu, title: 'Urban Factory — тексты сайта (RU)', note: 'Для правок укажите ID строки и новый текст.' },
};

// ---------- чтение контента ----------
function readMd(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { data: YAML.parse(m[1]) ?? {}, body: m[2].trim() } : { data: {}, body: raw.trim() };
}
const dirFiles = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort() : []);
const paragraphs = (body) =>
  body
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter(Boolean);

/** Плоский список текстовых полей объекта: [['services.blocks.design.formats.0', 'text'], …] */
function flatten(obj, prefix = '', out = []) {
  if (typeof obj === 'string') out.push([prefix, obj]);
  else if (Array.isArray(obj)) obj.forEach((v, i) => flatten(v, `${prefix}.${i}`, out));
  else if (obj && typeof obj === 'object')
    for (const [k, v] of Object.entries(obj)) {
      if (['project', 'projects', 'teamPage', 'slug', 'lang', 'category', 'cover', 'src', 'id', 'url', 'interview', 'video', 'series', 'section', 'originalLang', 'order', 'featured', 'published', 'date'].includes(k)) continue;
      flatten(v, prefix ? `${prefix}.${k}` : k, out);
    }
  return out;
}

// ---------- docx ----------
const cell = (text, opts = {}) =>
  new TableCell({
    width: { size: opts.w ?? 40, type: WidthType.PERCENTAGE },
    shading: opts.head ? { fill: 'F4F3EF' } : undefined,
    children: String(text ?? '')
      .split('\n')
      .map((line) => new Paragraph({ children: [new TextRun({ text: line, bold: opts.head, size: opts.small ? 16 : 19, color: opts.muted ? '6B6B66' : undefined })] })),
  });
function table(rows, langName) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({ tableHeader: true, children: [cell('ID', { w: 16, head: true }), cell('English', { w: 42, head: true }), cell(langName, { w: 42, head: true })] }),
      ...rows.map(([id, a, b]) => new TableRow({ children: [cell(id, { w: 16, small: true, muted: true }), cell(a, { w: 42, muted: true }), cell(b ?? '— (нет перевода)', { w: 42 })] })),
    ],
  });
}
const h1 = (t) => new Paragraph({ text: t, heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 160 } });
const h2 = (t) => new Paragraph({ text: t, heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 120 } });
const p = (t, opts = {}) => new Paragraph({ children: [new TextRun({ text: t, italics: opts.italic, color: opts.muted ? '6B6B66' : undefined })], spacing: { after: 120 } });

function buildDoc(lang) {
  const L = LANGS[lang];
  const children = [
    new Paragraph({ text: L.title, heading: HeadingLevel.TITLE }),
    p(`${new Date().toISOString().slice(0, 10)} · ${L.note}`, { muted: true }),
  ];

  // 1. Интерфейс
  children.push(h1('1. Interface (src/i18n/ui.ts)'));
  children.push(table(Object.entries(ui.en).map(([k, v]) => [`ui:${k}`, v, ui[lang][k]]), L.name));

  // 2. Тексты страниц
  children.push(h1('2. Pages (src/i18n/copy.' + lang + '.ts)'));
  const tr = new Map(flatten(L.copy));
  children.push(table(flatten(copyEn).map(([k, v]) => [`copy:${k}`, v, tr.get(k)]), L.name));

  // 3. Проекты
  children.push(h1('3. Projects (src/content/projects/' + lang + '/)'));
  for (const f of dirFiles(path.join(ROOT, 'src/content/projects/en'))) {
    const a = readMd(path.join(ROOT, 'src/content/projects/en', f));
    const bPath = path.join(ROOT, 'src/content/projects', lang, f);
    const b = fs.existsSync(bPath) ? readMd(bPath) : { data: {}, body: '' };
    const slug = f.replace(/\.md$/, '');
    children.push(h2(b.data.title ?? a.data.title));
    const fa = new Map(flatten(a.data));
    const fb = new Map(flatten(b.data));
    const rows = [...fa].filter(([k]) => k !== 'year').map(([k, v]) => [`${slug}:${k}`, v, fb.get(k)]);
    const pa = paragraphs(a.body);
    const pb = paragraphs(b.body);
    const n = Math.max(pa.length, pb.length);
    for (let i = 0; i < n; i++) rows.push([`${slug}:p${i + 1}`, pa[i] ?? '', pb[i]]);
    children.push(table(rows, L.name));
  }

  // 4. Media
  children.push(h1('4. Media (src/content/media/' + lang + '/)'));
  const mrows = [];
  for (const f of dirFiles(path.join(ROOT, 'src/content/media/en'))) {
    const a = readMd(path.join(ROOT, 'src/content/media/en', f)).data;
    const bPath = path.join(ROOT, 'src/content/media', lang, f);
    const b = fs.existsSync(bPath) ? readMd(bPath).data : {};
    const id = f.replace(/\.md$/, '');
    const fa = new Map(flatten(a));
    const fb = new Map(flatten(b));
    for (const [k, v] of fa) mrows.push([`media/${id}:${k}`, v, fb.get(k)]);
  }
  children.push(table(mrows, L.name));

  // 5. Интервью
  children.push(h1('5. Interviews (src/content/interviews/' + lang + '/)'));
  if (lang === 'ru')
    children.push(p('Тексты интервью на русском — оригинальные опубликованные тексты, не редактируются. Ниже — только описания (заголовок, подпись, раздел «Об…»).', { italic: true }));
  else children.push(p('Prijevod s ruskog izvornika (izvorni tekst intervjua je objavljen na ruskom). Molimo provjerite cijeli tekst.', { italic: true }));
  for (const f of dirFiles(path.join(ROOT, 'src/content/interviews/en'))) {
    const a = readMd(path.join(ROOT, 'src/content/interviews/en', f));
    const bPath = path.join(ROOT, 'src/content/interviews', lang, f);
    const b = fs.existsSync(bPath) ? readMd(bPath) : { data: {}, body: '' };
    const id = f.replace(/\.md$/, '');
    children.push(h2(b.data.title ?? a.data.title));
    const fa = new Map(flatten(a.data));
    const fb = new Map(flatten(b.data));
    const rows = [...fa].map(([k, v]) => [`${id}:${k}`, v, fb.get(k)]);
    if (lang === 'ru') {
      // только раздел «Об …» в конце
      const about = (body) => body.slice(body.lastIndexOf('\n## ') + 1);
      rows.push([`${id}:about`, about(a.body), about(b.body)]);
    } else {
      const pa = paragraphs(a.body);
      const pb = paragraphs(b.body);
      const n = Math.max(pa.length, pb.length);
      for (let i = 0; i < n; i++) rows.push([`${id}:p${i + 1}`, pa[i] ?? '', pb[i]]);
    }
    children.push(table(rows, L.name));
  }

  return new Document({
    creator: 'Urban Factory',
    title: L.title,
    styles: { default: { document: { run: { font: 'Calibri', size: 19 } } } },
    sections: [{ properties: { page: { size: { orientation: PageOrientation.LANDSCAPE } } }, children }],
  });
}

fs.mkdirSync(OUT, { recursive: true });
for (const lang of Object.keys(LANGS)) {
  const buf = await Packer.toBuffer(buildDoc(lang));
  const file = path.join(OUT, `UrbanFactory-texts-${lang.toUpperCase()}.docx`);
  fs.writeFileSync(file, buf);
  console.log('written', file, Math.round(buf.length / 1024) + ' KB');
}
