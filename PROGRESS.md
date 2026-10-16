# PROGRESS — urbanfactory.agency

ТЗ: `C:\projects\Urban Factory\urbanfactory-TZ.md`. Работа по этапам, после каждого — отчёт и «ок» от Михаила.

## Статус
- [x] Этап 1 — аудит (29.09.2026): `C:\projects\Urban Factory\00_admin\site_stage1_audit.md`.
- [x] Этап 2 — каркас (16.10.2026): Astro 7 + Tailwind 4, графика, i18n, дизайн-система, шапка/футер, главная EN, деплой в GitHub Pages (Actions зелёный, https://urban-factory.github.io/urbanfactory/en/). **Ждёт утверждения стиля.**
- [x] Этап 3 — все страницы и кейсы EN (16.10.2026): Services, Agency, Projects (фильтр), 13 кейсов, Team, Contact. **Ждёт «ок».**
- [x] Этап 4 — HR и RU (17.10.2026): все страницы, 12 кейсов, Media, интервью (HR — перевод с русского оригинала), переключатель языков активен. **Ждёт вычитки Михаила.**
- [ ] Этап 5 — SEO, изображения, Lighthouse, 404.
- [ ] Этап 6 — домен и DNS.
- [ ] Этап 7 — README.

## Как устроено (этап 2)
- Переводы (этап 4): строки интерфейса — src/i18n/ui.ts (en/hr/ru); тексты страниц — copy.ts (EN), copy.hr.ts, copy.ru.ts; кейсы — src/content/projects/<lang>/; Media — src/content/media/<lang>/; интервью — src/content/interviews/<lang>/. Глоссарий переводчика — в чате/скретчпаде (термины, имена, топонимы).
- Документы для вычитки: `npm run translations:export` → translations-review/UrbanFactory-texts-HR.docx и …-RU.docx (папка в .gitignore). Таблица «ID · English · перевод»; правки присылать по ID.
- `src/i18n/ui.ts` — все строки интерфейса; `published` — какие языки генерируются (сейчас только `en`; HR/RU в шапке показаны неактивными).
- `src/pages/[lang]/index.astro` — главная; `src/pages/index.astro` — редирект `/` → `/en/`.
- `src/content.config.ts` — коллекция `projects` (`src/content/projects/<lang>/<slug>.md`), шаблон `src/content/project.template.md`.
- `src/styles/global.css` — токены (`@theme`): цвета, шрифты, размеры, отступы.
- `src/assets/brand/` — логотип в SVG, векторизован из PDF папки `final`: `logo-horizontal` (шапка/футер), `logo-vertical`, `logo-agency` (с «.agency»), `mark` (знак). Вариант `*-current.svg` красится через `currentColor`.
- `src/assets/projects/<slug>/cover.jpg` — обложки (уменьшены до ≤2400px; WebP генерирует astro:assets).
- `src/lib/site.ts` — контакты, `url()`/`localePath()` с учётом base.
- Тексты страниц — `src/i18n/copy.ts` (по языку), строки интерфейса — `src/i18n/ui.ts`. Ссылки между кейсами в Markdown — относительные (`../slug/`), чтобы работали с любым base.
- Деплой: `.github/workflows/deploy.yml` (withastro/action → deploy-pages). До этапа 6 сайт на `https://urban-factory.github.io/urbanfactory/` (`BASE_PATH=/urbanfactory`). На этапе 6 поменять `SITE_URL`/`BASE_PATH` в workflow и добавить `public/CNAME`.

## Правило сортировки (Михаил, 16.10.2026)
- Везде на сайте сначала самое свежее, дальше по убыванию даты. Проекты — по году окончания, затем по году начала (lib/projects.ts → byRecency; «present» = текущий год); поле order — только при равенстве. Так сортируются: список проектов, избранное на главной, связанные проекты в Услугах, Key projects и Project teams на Team, соседние кейсы. Media — по полю date внутри каждого раздела. Интервью — по order (Lerner 1, Peñalosa 2).
- Главная → Where we work: Yerevan, Zagreb, Rostov-on-Don, Zverevo, Moscow, Recife (по последней активности), под городом — страна.

## Правила перевода (Михаил, 16.10.2026) — учитывать на этапе 4
- Видео не переводим. Ролик показывается только в версии сайта на языке ролика (поле lang у youtube / originalLang у записи media). Все видео Rostov 300 и TEDx — RU → только в /ru/. В коде: фильтр по языку в projects/[slug].astro и media/index.astro.
- Переводим только контент, который произвёл Михаил: интервью, которые он брал (текстовые — Peñalosa, Lerner — на все языки), и его статьи (Articles by Mihail).
- Публикации СМИ (Press) не переводим — даём ссылку на оригинал.

## Ключевые решения
- 17.10.2026 (решения Михаила по отчёту о цифрах): цифры без источника оставить, кроме Urban Islands «200–800 m²» (убрано). Kolesnikov — «4 contracts». «Некролог ростовскому трамваю» — дата акции 18.02.2015, описание: «Public action in support of keeping the Stanislavskogo Street tram line, February 2015. The tracks were kept.» Правило: политические акции и обращения — факт, цель, результат, без имён и обвинений (поле description у записи media). Lerner — 14.04.2016 (перекрывает inventory «фев. 2018»).
- 17.10.2026: видео Rostov 300 (13) — на ВСЕХ языковых версиях (youtubeAllLangs: true) с пометкой «Video in Russian» / HR «Video na ruskom» / в RU без пометки; заголовки роликов переводим. У каждого ролика recorded («2020»; вступление — «Opening, 5 March 2020») и published (uploadDate с YouTube). Отдельная карточка Зубаревич в Interviews by Mihail (26-interviews.md, видео K5Qs_nt_sIQ, опубликовано 02.03.2021 — подтверждено uploadDate; allLangs: true) + сетка серии; AiF — в Press. Rostov 300: концепция 02.2020, открытие 05.03.2020 (Don State Public Library), онлайн с 04.2020. TEDx и 4 трамвайных видео — по-прежнему только в RU-версии.
- 16.10.2026: велопроект — только проверяемые факты: 2014 запрос города → 2014–2015 исследование → тендер департамента транспорта, победитель Velovod (Dmitry Gusev) — схема велосети 2018–2019 → велодорожки очередями с 2021 (Пушкинская ~3,5 км; Левенцовка 2023). year: 2014–2023. «20+ km» — только строка контекста в кейсе со ссылкой DG-Yug, в цифрах НЕ используется. Главная без изменений (6 избранных, фото фестиваля 2013). Цифры: 2013 · 12 published projects · 3.1 ha · 119 km. Urban Islands — Михаил: project manager; government relations. «Architectural concepts» убрано.
- 16.10.2026: новый проект TUN Foundation (tun-foundation, 2023–present, Armenia; strategy + design; featured: false; order 13). Без финансов, имён партнёров и директора, фото людей, генплана и типовых домов партнёра. Project team — только Михаил («Initiator and founder; urban planner of the housing programme»), в «Project teams» на Team не выводится (teamPage: false). В Key projects основателя — первым. Обложка — пейзаж Котайка (фото Михаила, _inbox/photo_2026-10-16_23-36-26.jpg, EXIF удалён). Проектов 12.
- 16.10.2026: поле role проекта выводится как «Scope» — объём работ агентства, без должностей; должности — только в «Project team».
- 16.10.2026 (роли подтверждены Михаилом): в КАЖДОМ проекте в списке людей (Team → «Project teams» и блок «Project team» на странице проекта) первой строкой «Mihail Veklenko — роль» (данные: src/i18n/copy.ts → team.past). Роли: Rostov Tram, Cycling, Great Rostov — initiator and project lead; urban and transport planner; Zverevo, Kolesnikov — urban planner, project lead; Temernik — co-founder of the ANO, urban planner and economist; Urban Festival — co-founder and organiser; UTC Recife — organiser and moderator of the session; Rostov 300 — co-curator and author of the concept; Gagarin bridge — author of the concept idea. E. Kotlyarova — «Architect — illustrations of the concept».
- 16.10.2026: Rivers & cities влит в Temernik River Park (раздел «International part: Recife ↔ Rostov-on-Don», фото перенесены). Проектов 11. Старый URL /<lang>/projects/rivers-and-cities/ — страница-редирект (noindex) на Temernik; на этапе 5 исключить из sitemap.
- 16.10.2026: у основателя раздел Education (FPZ Zagreb 2024–; Manchester/MSSES 2013–2015; DSTU 2002–2007); в Experience — «Session producer, Moscow Urban Forum (2013)», FPZ убран в Education.
- 16.10.2026: Rostov 300 — 13 роликов (добавлен Aleksan Mkrtchyan, sk2xS92M4RA); «12 video interviews» в тексте верно (12 бесед + вступление).
- 16.10.2026: TEDx — видео 7NrY4BeLrgI (RU, канал TEDx Talks) в записи 11-talks.md; плеер только в RU-версии.
- 16.10.2026: видео — компонент components/LiteYouTube.astro (превью i.ytimg.com, iframe youtube-nocookie.com только по клику, без JS — ссылка на YouTube). У проекта поле youtube: [{id, title, lang}] — в кейсе Rostov 300 12 роликов (блок «Video interviews»). Отчёт Rostov 300 пока не добавляем.
- 16.10.2026: Media → Interviews by Mihail: все 12 видео Rostov 300 сеткой (запись 21-interviews.md с полем series: rostov-300 — ролики берутся из кейса, один источник), затем Lerner и Peñalosa. Видеоинтервью с Зубаревич — 2 марта 2021. Статья AiF (15.03.2021) — в Press.
- 16.10.2026: Media — 20 публикаций из 01_research/media_publications.md (раздел «Показываем»), коллекция media: src/content/media/<lang>/NN-<section>.md (по записи на публикацию; поля: title — НАШ нейтральный заголовок, section, date, outlet, originalLang, role, url, interview, video, verify). Разделы: Interviews by Mihail · Articles by Mihail · Talks · Press. Интервью с полным текстом — отдельная коллекция interviews (src/content/interviews/<lang>/), страницы /media/<slug>/. TEDx везде: «TEDxBolshayaSadovayaStreet, Rostov-on-Don, 2018».
- 16.10.2026: ID записей коллекций — путь файла (en/slug), иначе EN и RU с одинаковым slug перезаписывают друг друга (из-за этого пропадало интервью Пеньялосы). Места интервью: «площадка, город, страна» (Moscow Urban Forum, Moscow, Russia; Jaime Lerner Arquitetos Associados studio, Curitiba, Brazil). Пеньялоса — 6 декабря 2013.
- 16.10.2026: встреча с Лернером — 14 апреля 2016. Тексты интервью — зафиксированные ранее опубликованные тексты: дословно по источникам (RU — опубликованная страница, EN — docx Михаила), НЕ редактировать (исключение, согласовано 16.10.2026: в EN исправлены только артефакты машинного перевода — метки собеседников → «J. L.:»/«M. V.:», имя → Mihail Veklenko). Редактируются только описания людей (разделы About…, title/summary/alt). Фото основателя — src/assets/team/mihail-veklenko.png (astro:assets Picture, AVIF/WebP, фон — токен surface).
- 16.10.2026 (правки Михаила, роли и факты подтверждены лично — это источник):
  - Цифры «8 forums / 6 festivals / 2 summer schools / 120 students» — НЕ подтверждены, на сайт не выводить. Проектов 12.
  - Small Wooden House удалён (не относится к UF).
  - Велопроект: «Cycling Rostov-on-Don» (slug cycling-rostov-on-don; HR «Biciklizacija Rostova na Donu», RU «Велосипедизация Ростова-на-Дону»). I Bike RnD — медиапроект внутри, руководил Dmitry Gusev; тендер на проектирование выиграл Dmitry Gusev. Михаил — создал и инициировал проект, организовал и провёл исследование, консультировал до реализации. Хронология 2014 → 2014–2015 → 2016 → 2017 → 2018 → 2020.
  - Мост на пл. Гагарина: «Concept idea by Mihail Veklenko; illustrations by E. Kotlyarova».
  - Rostov Tram, Great Rostov: Михаил — автор, руководитель, координатор; партнёр в трамвае — только Alexander Semenov.
  - Rivers & cities: UF — партнёр-соорганизатор сессии «Aqua est vita» (МУФ 2017), форум организует дирекция МУФ. Видео — поля videoRu/videoEn во frontmatter, блок скрыт, пока пусто.
  - Team: акцент на Михаиле + блок Experience; «People who worked with us» сгруппированы по проектам (данные — src/i18n/copy.ts → team.past; они же выводятся на страницах кейсов в блоке People). Не показывать: Pishchulina, Rashpil, Karen Medvedev, Mariya Vyskrebentseva, Tatiana Alcantara, Arsenia Godall, Dubover (карточкой), Pligin, Füg, Lerner, Peñalosa; должностных лиц не указывать.
  - Контакты: главный канал — email (кнопка «Write to us» на главной, в Contacts, в футере и в CTA). Email и телефон закодированы (src/lib/site.ts → protectedContacts), собираются JS (components/Protected.astro); без JS — «Telegram: @mveklenko». Ссылки на карту нет.
  - Media: новая страница /media/ (коллекция media, EN + RU, HR — этап 4): интервью Enrique Peñalosa (МУФ, 6 декабря 2013; first published Delovoy Kvartal 24.02.2014) и Jaime Lerner (Curitiba, 14.04.2016). urbanfactory.ru — только источник, на сайте не упоминается. В кейсах Rostov Tram и Great Rostov — строка «Interview with … became an input to this project» (автоматически по полю related).
  - Agency: Approach (research → concept → public support (when needed) → development → implementation) → Principles → History → Numbers.
  - Палитра без изменений, #9C0001.
- 16.10.2026 (ответы Михаила): фестиваль 2013 — 2 000 посетителей и 8 000 онлайн за 16 дней; на сайте «8 forums · 6 festivals · 2 summer schools (120 students)»; I Bike RnD — Михаил инициатор, главный организатор и руководитель проекта от начала до конца, другие участвовали в отдельных фазах; WCF — 1 500 участников из русскоговорящих стран (для CV, на сайте не используется); команда — акцент на Михаиле, остальные только как «People who worked with us» (участники прошлых проектов), не как текущая команда.
- 16.10.2026: меморандум АНО «Парк Темерник» — INCITI подписан в 10.2018; организаторы фестиваля 2013 — Mihail Veklenko, Diana Karnaukhova, Alexey Karachinsky (имена на сайте); обложка Great Rostov (схема ТПУ 2020) — оставляем.
- Языки EN/HR/RU, корень → /en/.
- Палитра (утверждена в аудите): ink #1D1D1B, red #9C0001 (Engagement & Events), blue #0000F6 (Strategy & Mobility), green #5DA130 / #3F7A1F (Design & Architecture), surface #F4F3EF, muted #6B6B66. В самом логотипе «.agency» — #C10000 (как в исходнике).
- Шрифты: Roboto Condensed (заголовки) + Inter (текст), self-hosted через @fontsource (кириллица + Latin Ext).
- Тексты: без политики и имён должностных лиц; фонд-донор Rostov 300 не упоминать; старые сайты не упоминать; основатель — Mihail Veklenko.
- На главной 6 featured: Rostov Tram, I Bike RnD, Zverevo 2030, Kolesnikov Boulevard, Temernik, Urban Festival. Цифры (главная и «Агентство»): 2013, 12 проектов, 3,1 га, 119 км.

## Открытые вопросы (ждут Михаила)
- Вычитка HR/RU по документам. На проверку: транслитерация имён (HR: Natalija Zubarevič, Aleksandr Semjonov, Dmitrij Gusev…; RU: Клементе Коэлью Жуниор, Ренату Линс, Ренату Рапозу, Денизе Моура; фамилии спикеров фестиваля); RU «Урбанистический фестиваль в Ростове» — было ли устоявшееся русское название; «GR» (RU) / «Odnosi s javnom upravom» (HR); «Основатель и генеральный директор».
- (решено) 4 видео про трамвай — канал Rostov_tram: 22-press, 23-press, 24-press (TV и открытие путей), 25-talks (акция «Некролог ростовскому трамваю»); RU, только в RU-версии.
- Media, verify: true — проверить ссылки: 10 «What twin cities can do» (Minsk Urban Platform, 01.10.2018); 14 «The Rostov agglomeration needs economies of scale» (Expert South, 15.05.2019); 19 «Tram network modernisation…» (Expert South, 10.10.2021).
- Rostov 300: фото из Facebook с неизвестными правами не использованы — кейс без обложки. Нужны свои фото.
- Фото низкого разрешения: Temernik (897px), Gagarin bridge (748–894px), Rivers & cities (~900px), I Bike RnD (1080px).
- Команда: фото Михаила. В «People who worked with us» — только люди, чья роль описана в кейсах (Monteiro, Botler, Guedes, Karnaukhova, Karachinsky, Kotlyarova, Rud, Protsenko). Sarkisyants, Maranhão, Khrustaleva, Krasnov, Litvinova — не указаны: нет проекта/роли в материалах.
- Фото: для Temernik обложки нет (стоит заглушка-знак); I Bike RnD — только 1080px; Zverevo — кадр из видео.
- Kolesnikov Boulevard: конкурс 2019 не выигран/не реализован — в тексте только «все этапы работ сданы».
