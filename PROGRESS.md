# PROGRESS — urbanfactory.agency

ТЗ: `C:\projects\Urban Factory\urbanfactory-TZ.md`. Работа по этапам, после каждого — отчёт и «ок» от Михаила.

## Статус
- [x] Этап 1 — аудит (29.09.2026): `C:\projects\Urban Factory\00_admin\site_stage1_audit.md`.
- [x] Этап 2 — каркас (16.10.2026): Astro 7 + Tailwind 4, графика, i18n, дизайн-система, шапка/футер, главная EN, деплой в GitHub Pages (Actions зелёный, https://urban-factory.github.io/urbanfactory/en/). **Ждёт утверждения стиля.**
- [x] Этап 3 — все страницы и кейсы EN (16.10.2026): Services, Agency, Projects (фильтр), 13 кейсов, Team, Contact. **Ждёт «ок».**
- [ ] Этап 4 — HR и RU.
- [ ] Этап 5 — SEO, изображения, Lighthouse, 404.
- [ ] Этап 6 — домен и DNS.
- [ ] Этап 7 — README.

## Как устроено (этап 2)
- `src/i18n/ui.ts` — все строки интерфейса; `published` — какие языки генерируются (сейчас только `en`; HR/RU в шапке показаны неактивными).
- `src/pages/[lang]/index.astro` — главная; `src/pages/index.astro` — редирект `/` → `/en/`.
- `src/content.config.ts` — коллекция `projects` (`src/content/projects/<lang>/<slug>.md`), шаблон `src/content/project.template.md`.
- `src/styles/global.css` — токены (`@theme`): цвета, шрифты, размеры, отступы.
- `src/assets/brand/` — логотип в SVG, векторизован из PDF папки `final`: `logo-horizontal` (шапка/футер), `logo-vertical`, `logo-agency` (с «.agency»), `mark` (знак). Вариант `*-current.svg` красится через `currentColor`.
- `src/assets/projects/<slug>/cover.jpg` — обложки (уменьшены до ≤2400px; WebP генерирует astro:assets).
- `src/lib/site.ts` — контакты, `url()`/`localePath()` с учётом base.
- Тексты страниц — `src/i18n/copy.ts` (по языку), строки интерфейса — `src/i18n/ui.ts`. Ссылки между кейсами в Markdown — относительные (`../slug/`), чтобы работали с любым base.
- Деплой: `.github/workflows/deploy.yml` (withastro/action → deploy-pages). До этапа 6 сайт на `https://urban-factory.github.io/urbanfactory/` (`BASE_PATH=/urbanfactory`). На этапе 6 поменять `SITE_URL`/`BASE_PATH` в workflow и добавить `public/CNAME`.

## Ключевые решения
- Языки EN/HR/RU, корень → /en/.
- Палитра (утверждена в аудите): ink #1D1D1B, red #9C0001 (Engagement & Events), blue #0000F6 (Strategy & Mobility), green #5DA130 / #3F7A1F (Design & Architecture), surface #F4F3EF, muted #6B6B66. В самом логотипе «.agency» — #C10000 (как в исходнике).
- Шрифты: Roboto Condensed (заголовки) + Inter (текст), self-hosted через @fontsource (кириллица + Latin Ext).
- Тексты: без политики и имён должностных лиц; фонд-донор Rostov 300 не упоминать; старые сайты не упоминать; основатель — Mihail Veklenko.
- На главной 6 featured: Rostov Tram, I Bike RnD, Zverevo 2030, Kolesnikov Boulevard, Temernik, Urban Festival. Цифры на главной — только бесспорные: 2013, 13 проектов, 3,1 га, 119 км.

## Открытые вопросы (ждут Михаила)
- Rostov 300: фото из Facebook с неизвестными правами не использованы — кейс без обложки. Нужны свои фото.
- Rivers & cities: меморандум АНО «Парк Темерник» — INCITI указан как подписанный (10.2018), в файлах только проект — подтвердить.
- Urban Festival: в тексте названы организаторы 2013 — Diana Karnaukhova, Alexey Karachinsky — согласовать.
- Small Wooden House: роль UF — «in collaboration with»; количество страниц не указываем.
- Great Rostov: обложка — схема ТПУ 2020 года.
- Фото низкого разрешения: Temernik (897px), Gagarin bridge (748–894px), Rivers & cities (~900px), I Bike RnD (1080px).
- Цифры: посетители фестиваля 2013; «8 форумов / 6 фестивалей / 2 школы»; WCF 1 500 или 2 000 — на сайт пока не выводятся.
- I Bike RnD: точная роль UF/Михаила (в карточке нейтрально: «Research and cycling concept»).
- Команда: кого из экспертов показываем, согласия и фото; фото Михаила.
- Фото: для Temernik обложки нет (стоит заглушка-знак); I Bike RnD — только 1080px; Zverevo — кадр из видео.
- Kolesnikov Boulevard: конкурс 2019 не выигран/не реализован — в тексте только «все этапы работ сданы».
