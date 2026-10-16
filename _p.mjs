import fs from 'fs';
let s = fs.readFileSync('PROGRESS.md', 'utf8');
s = s.replace('- [ ] Этап 4 — HR и RU.', '- [x] Этап 4 — HR и RU (17.10.2026): все страницы, 12 кейсов, Media, интервью (HR — перевод с русского оригинала), переключатель языков активен. **Ждёт вычитки Михаила.**');
s = s.replace(
  '## Как устроено (этап 2)\n',
  `## Как устроено (этап 2)
- Переводы (этап 4): строки интерфейса — src/i18n/ui.ts (en/hr/ru); тексты страниц — copy.ts (EN), copy.hr.ts, copy.ru.ts; кейсы — src/content/projects/<lang>/; Media — src/content/media/<lang>/; интервью — src/content/interviews/<lang>/. Глоссарий переводчика — в чате/скретчпаде (термины, имена, топонимы).
- Документы для вычитки: \`npm run translations:export\` → translations-review/UrbanFactory-texts-HR.docx и …-RU.docx (папка в .gitignore). Таблица «ID · English · перевод»; правки присылать по ID.
`,
);
s = s.replace(
  '## Открытые вопросы (ждут Михаила)\n',
  `## Открытые вопросы (ждут Михаила)
- Вычитка HR/RU по документам. На проверку: транслитерация имён (HR: Natalija Zubarevič, Aleksandr Semjonov, Dmitrij Gusev…; RU: Клементе Коэлью Жуниор, Ренату Линс, Ренату Рапозу, Денизе Моура; фамилии спикеров фестиваля); RU «Урбанистический фестиваль в Ростове» — было ли устоявшееся русское название; «GR» (RU) / «Odnosi s javnom upravom» (HR); «Основатель и генеральный директор».
`,
);
fs.writeFileSync('PROGRESS.md', s);
