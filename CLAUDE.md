# CLAUDE.md — сайт urbanfactory.agency

Технические правила сайта Urban Factory. Внутренние правила по текстам и источникам — в `CLAUDE.local.md`, история решений — в `PROGRESS.md` (оба файла локальные, в репозиторий не входят). При расхождении действует более позднее решение Михаила.

## Порядок работы
- Задания выполняются по разделам и по порядку; после каждого — `npm run build` (astro check + build) без ошибок.
- Изменения, которых нет в задании, — сначала спросить Михаила.
- В конце: отчёт с разделом «Вопросы»; после push — проверка деплоя (GitHub Actions → GitHub Pages, домен urbanfactory.agency).
- Историю git не переписывать.
- Итоги и новые решения записывать в `PROGRESS.md` (дата, источник).

## Git: commit и push
- Commit можно делать самому — после `npm run build` и проверки на номера и email (поиск по `dist/` и PDF).
- Push — только после подтверждения Михаила. Перед push показать `git log origin/main..HEAD --oneline`, `git diff origin/main..HEAD --stat` и полный diff (для PDF и изображений — список файлов и результат проверки `pdftotext`), затем ждать явного «пушь» / «ок». Одно подтверждение — на один push.
- `--no-verify`, `push --force`, переписывание истории — только по прямому указанию Михаила.
- Хуки `.git/hooks/pre-commit` и `commit-msg` (локальные, не в репозитории) блокируют телефоны, email кроме info@urbanfactory.agency и запрещённые файлы. Если хук остановил коммит — показать Михаилу, что он нашёл, ничего не обходить.
- Email автора коммитов в этом репозитории — GitHub noreply (`git config --local user.email`).

## Устройство
- Astro 7 + Tailwind 4. Языки HR (основной) / EN / RU; `/` → `/hr/`, hreflang x-default → HR.
- Строки интерфейса — `src/i18n/ui.ts`; тексты страниц — `src/i18n/copy.ts` (EN), `copy.hr.ts`, `copy.ru.ts`. Любой текст правится сразу на трёх языках.
- Кейсы — `src/content/projects/<lang>/<slug>.md`; Media — `src/content/media/<lang>/`; интервью — `src/content/interviews/<lang>/`.
- Обложки — `src/assets/projects/<slug>/cover.jpg` (≤2400px, JPG q≈82, прогрессивный); в frontmatter `cover` и `coverAlt` на трёх языках; `coverCredit` — только если нужна подпись правообладателя.
- PDF для сайта — `public/docs/` (reference-list и cv-veklenko, HR/EN; RU подхватывается автоматически, если есть файл `*-ru.pdf`, см. `src/lib/docs.ts`). PDF приходят готовыми, сами PDF не редактируем.
- Меню из 5 пунктов: Agencija (= главная) · Projekti · Usluge · Mediji · Kontakt (`src/lib/nav.ts`).

## Контакты и защита данных
- В репозитории и на сайте единственный email — info@urbanfactory.agency. Он собирается JS (`components/Protected.astro`), без JS — ссылка на Telegram (`NoJsContact`).
- Телефон показывается только по кнопке «Prikaži broj / Show number / Показать номер» (`components/RevealPhone.astro`): номер собирается скриптом при клике из `lib/site.ts → phoneParts`, ссылки `tel:` и WhatsApp создаются тогда же. После раскрытия — номер и WhatsApp; Telegram — в списке мессенджеров (подвал, «Kontakt»). Без JS — «Telefon na upit».
- Номер телефона открытым текстом нигде не писать: ни в HTML, JS, data-атрибутах, мета-тегах, JSON-LD, sitemap, PDF, ни в `src/**`, ни в CLAUDE.md, ни в сообщениях коммитов (репозиторий публичный). Ссылки `wa.me`, `tel:` заранее в коде не держать.
- Проверка после сборки: поиск вариантов номера по `dist/` (вместе с JS) и по `public/docs/*.pdf` (`pdftotext`) — 0 совпадений.
- Файлы `*-private.*`, `.env*`, `_sync_inbox.md` не копировать в репозиторий и не коммитить.

## Дизайн
- Токены — `src/styles/global.css` (`@theme`). Светлые цвета — только плашки, полосы, маркеры, фон CTA; цветной текст — только через `*-text`.
- Направления: Engagement & Events — red / red-text; Strategic Planning & Mobility — blue / blue-text; Urban Design & Architecture — wheat #D9B979 / wheat-text #7D5F1C (с 27.10.2026, как на визитке). green остаётся в палитре, для направления не используется.
- Порядок цветов в наборах направлений: красный → синий → пшеничный. Логотипы в `src/assets/brand` не менять. Обложки и фото не перекрашивать.
- Фокус: обводка 3px `blue-text`; на `bg-ink` — paper, на `bg-red` и `bg-wheat` — ink. У карточек проектов обводку рисует карточка (ссылка растянута на всю карточку).
- Шрифты: Roboto Condensed (заголовки) + Inter (текст), self-hosted.

## Медиа (техника)
- Видео показывается в версии на языке ролика (`lang` / `originalLang`), кроме отмеченных `youtubeAllLangs` / `allLangs`.
- Для ссылок, недоступных из ЕС, — оригинал плюс архивная копия (поле `archive`).

## Сортировка
- Везде сначала самое свежее: проекты — по году окончания, затем по году начала (`lib/projects.ts → byRecency`, «present» = текущий год), `order` — только при равенстве. Media — по `date` внутри раздела; интервью — по `order`; закреплённый блок Media — поле `pin`.

## Common rules (C:\projects\CLAUDE.md, 2026-11-04)
Overview: C:\projects\PLANNER.md. Full text of the common rules: C:\projects\CLAUDE.md.
Sync: the PC is the main memory, but Mihail's latest decision wins wherever it was made. On "sync": read _sync_inbox.md, STATUS/PROGRESS, DECISIONS, PLANNER.md; show a table of differences with dates; never overwrite silently; update only after "ok". A file date is a hint, not proof.
Public vs. closed: everything is closed by default; public only what this project marks as public or Mihail allows in this session; in doubt = closed, ask. Channels: PUBLIC (sites, public repos, social, links for anyone) / ADDRESSED (mail, offers to a specific person) / INTERNAL. Never public: phones, personal e-mails, home addresses, citizenship, birth dates, document numbers; client/partner names without consent; prices, contracts, deals; files *-private*, .env, keys; folders with CLOSED.md. Before publishing: show changes and sources, check C:\projects\_private\closed_terms.txt, publish only after "ok".
Finish line: every task ends in an external action (send, publish, call, submit, pay, meet, print). At the end of a session give: done / missing / ONE next action prepared for ~5 minutes. Open loops ("ready but not sent") go to STATUS.md (or PROGRESS.md if the project keeps status there) → section "Open loops", with date prepared; follow-up +7 days after sending. Close only with proof (date, link, Sent mail). Gentle: max 3 open loops shown per session; external actions only after Mihail's "ok". Full rule: C:\projects\CLAUDE.md.

## Public vs. closed — this project
- The repository is PUBLIC: everything committed is public, including history.
- Nothing from internal or closed folders is copied here; a needed fact = show Mihail the wording and source, insert after "ok".
- Before each commit: diff + sources of new facts + check against C:\projects\_private\closed_terms.txt. Push only after confirmation. Do not disable the hook. CLAUDE.local.md stays local.
