/**
 * Все строки интерфейса — здесь. Компоненты берут текст только через t().
 * Языки, которых ещё нет в `published`, не генерируются (HR/RU — этап 4).
 */
export const languages = {
  en: { label: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
  hr: { label: 'HR', name: 'Hrvatski', htmlLang: 'hr', ogLocale: 'hr_HR' },
  ru: { label: 'RU', name: 'Русский', htmlLang: 'ru', ogLocale: 'ru_RU' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const published: Lang[] = ['en', 'hr', 'ru'];

const en = {
  'site.name': 'Urban Factory',
  'site.byline': 'Urban Factory by MAVEK design',
  'site.description':
    'Urban Factory is an international urban development agency based in Zagreb, Croatia: community engagement and events, strategic planning and mobility, urban design and architecture.',
  'a11y.skip': 'Skip to content',
  'a11y.menu': 'Menu',
  'a11y.close': 'Close menu',
  'a11y.language': 'Language',
  'a11y.home': 'Urban Factory — home',
  'a11y.mainNav': 'Main navigation',
  'a11y.footerNav': 'Footer navigation',
  'a11y.soon': 'coming soon',

  'notFound.title': 'Page not found',
  'notFound.text': 'This page doesn\'t exist or has moved. Try the home page or the projects.',
  'notFound.home': 'Home page',
  'nav.services': 'Services',
  'nav.agency': 'Agency',
  'nav.projects': 'Projects',
  'nav.team': 'Team',
  'nav.media': 'Media',
  'nav.contact': 'Contact',

  'cat.engagement': 'Engagement & Events',
  'cat.strategy': 'Strategic Planning & Mobility',
  'cat.design': 'Urban Design & Architecture',
  'cat.engagement.short': 'Engagement',
  'cat.strategy.short': 'Strategy & Mobility',
  'cat.design.short': 'Design',

  'home.meta.title': 'Urban Factory — urban development agency',
  'home.hero.eyebrow': 'Urban development agency · Zagreb',
  'home.hero.title': 'The city is the people',
  'home.hero.lead':
    'Urban Factory helps cities change together with the people who live in them — from research and strategy to public spaces, transport and built results.',
  'home.hero.imageAlt': 'Urban Festival Rostov: people at tables and pallet furniture under yellow flags in a courtyard amphitheatre',
  'home.hero.cta': 'See projects',

  'home.directions.eyebrow': 'Directions',
  'home.directions.title': 'Three directions, one process',
  'home.dir.engagement.text':
    'Festivals, forums and participatory processes that bring residents, experts, business and city teams to one table.',
  'home.dir.strategy.text':
    'City and territorial strategies, public transport and cycling networks, housing programmes — built to fit real budgets and real operators.',
  'home.dir.design.text':
    'Streets, parks and public spaces designed together with the people who will use them — from concept to competition brief.',
  'home.dir.more': 'More about this direction',

  'home.featured.eyebrow': 'Selected work',
  'home.featured.title': 'Projects',
  'home.featured.all': 'All projects',

  'home.approach.eyebrow': 'Approach',
  'home.approach.title': 'From research to built result',
  'home.approach.step1': 'Research',
  'home.approach.step2': 'Concept',
  'home.approach.step3': 'Public support',
  'home.approach.step4': 'Development',
  'home.approach.step5': 'Implementation support',
  'home.approach.text':
    'Urban Factory takes a project from research to a tender-ready brief and remains available as an adviser during implementation. The tram and cycling concepts for Rostov-on-Don went from first sketches to tender documents, and both projects went on to construction.',

  'home.numbers.eyebrow': 'In numbers',
  'home.num.founded': 'founded in Rostov-on-Don',
  'home.num.projects': 'published projects',
  'home.num.area': 'hectares of public space',
  'home.num.tram': 'km city tram programme informed by the network concept',

  'home.geo.eyebrow': 'Geography',
  'home.geo.title': 'Local roots, international exchange',
  'home.geo.text':
    'Founded in Rostov-on-Don in 2013, headquartered in Zagreb since 2020, with projects and partners from Recife to Yerevan.',

  'city.yerevan': 'Yerevan',
  'city.zagreb': 'Zagreb',
  'city.rostov': 'Rostov-on-Don',
  'city.zverevo': 'Zverevo',
  'city.moscow': 'Moscow',
  'city.recife': 'Recife',
  'country.armenia': 'Armenia',
  'country.croatia': 'Croatia',
  'country.russia': 'Russia',
  'country.brazil': 'Brazil',

  'home.cta.title': 'Have a city, a street or a river to work on?',
  'home.cta.text': 'Email is the best way to get in touch.',
  'cta.write': 'Get in touch',
  'cta.other': 'All contacts',

  'footer.company': 'MAVEK design d.o.o.',
  'footer.oib': 'OIB',
  'footer.follow': 'Follow',
  'footer.write': 'Get in touch',
  'footer.rights': 'All rights reserved.',

  'projects.meta.description':
    'Projects by Urban Factory: tram and cycling concepts, city strategies, parks, boulevards, festivals and international exchange.',
  'projects.lead': 'Twelve projects since 2013 — from first festivals to city-wide programmes.',
  'projects.filter.label': 'Filter by direction',
  'projects.filter.all': 'All',
  'projects.empty': 'No projects in this direction yet.',

  'project.years': 'Years',
  'project.present': 'present',
  'project.place': 'Place',
  'project.client': 'Client',
  'project.role': 'Scope',
  'project.directions': 'Directions',
  'project.results': 'Results',
  'project.gallery': 'Gallery',
  'project.all': 'All projects',
  'project.next': 'Next project',
  'project.prev': 'Previous project',

  'services.meta.description':
    'Engagement & Events, Strategic Planning & Mobility, Urban Design & Architecture — what Urban Factory does and how.',
  'services.formats': 'Formats',
  'services.projects': 'Projects',

  'agency.meta.description':
    'Urban Factory: founded in Rostov-on-Don in 2013, headquartered in Zagreb since 2020. History, approach and principles.',
  'agency.history': 'History',
  'agency.approach': 'Approach',
  'agency.principles': 'Principles',

  'team.meta.description': 'Mihail Veklenko, founder and CEO of Urban Factory, and the people who worked with him on past projects.',
  'team.photo': 'Portrait of',
  'team.expertise': 'Expertise',
  'team.projectsLed': 'Key projects',
  'team.experience': 'Experience',
  'team.education': 'Education',
  'project.people': 'Project team',
  'project.media': 'Interviews',
  'project.mediaInput': 'became an input to this project',
  'project.mediaPrefix': 'Interview with',
  'project.videoRu': 'Video (Russian)',
  'project.videoEn': 'Video (English)',
  'project.video': 'Video',
  'project.videoSeries': 'Video interviews',
  'video.play': 'Play video',
  'video.in.ru': 'Video in Russian',
  'video.in.en': 'Video in English',
  'video.in.hr': 'Video in Croatian',
  'video.recorded': 'Recorded',
  'video.published': 'Published',
  'media.watch': 'Watch the video',

  'media.title': 'Media',
  'media.lead': 'Interviews, articles, talks and press coverage — Mihail Veklenko and Urban Factory in the media.',
  'media.meta.description': 'Mihail Veklenko and Urban Factory in the media: interviews with Enrique Peñalosa and Jaime Lerner, articles, talks and press.',
  'media.read': 'Read the interview',
  'media.firstPublished': 'First published',
  'media.related': 'Related projects',
  'media.all': 'Media',
  'media.section.interviews': 'Interviews by Mihail',
  'media.section.articles': 'Articles by Mihail',
  'media.section.talks': 'Talks',
  'media.section.press': 'Press',
  'media.original': 'Original',
  'media.newWindow': 'opens in a new window',
  'media.lang.ru': 'RU',
  'media.lang.en': 'EN',
  'media.lang.hr': 'HR',
  'media.lang.pt': 'PT',

  'contact.meta.description': 'Contact Urban Factory in Zagreb: email, WhatsApp, Telegram, Instagram.',
  'contact.email': 'Email',
  'contact.phone': 'Phone',
  'contact.messengers': 'Messengers and social media',
  'contact.address': 'Office',
};

export type UIKey = keyof typeof en;

export const ui: Record<Lang, Partial<Record<UIKey, string>>> = {
  en,
  hr: {
    'site.name': 'Urban Factory',
    'site.byline': 'Urban Factory by MAVEK design',
    'site.description':
      'Urban Factory je međunarodna agencija za urbani razvoj sa sjedištem u Zagrebu: uključivanje zajednice i događanja, strateško planiranje i mobilnost, urbani dizajn i arhitektura.',
    'a11y.skip': 'Preskoči na sadržaj',
    'a11y.menu': 'Izbornik',
    'a11y.close': 'Zatvori izbornik',
    'a11y.language': 'Jezik',
    'a11y.home': 'Urban Factory — početna',
    'a11y.mainNav': 'Glavni izbornik',
    'a11y.footerNav': 'Izbornik u podnožju',
    'a11y.soon': 'uskoro',

    'notFound.title': 'Stranica nije pronađena',
    'notFound.text': 'Ova stranica ne postoji ili je premještena. Pokušajte s početnom stranicom ili stranicom projekata.',
    'notFound.home': 'Početna stranica',
    'nav.services': 'Usluge',
    'nav.agency': 'Agencija',
    'nav.projects': 'Projekti',
    'nav.team': 'Tim',
    'nav.media': 'Mediji',
    'nav.contact': 'Kontakt',

    'cat.engagement': 'Uključivanje i događanja',
    'cat.strategy': 'Strateško planiranje i mobilnost',
    'cat.design': 'Urbani dizajn i arhitektura',
    'cat.engagement.short': 'Uključivanje',
    'cat.strategy.short': 'Strategija i mobilnost',
    'cat.design.short': 'Dizajn',

    'home.meta.title': 'Urban Factory — agencija za urbani razvoj',
    'home.hero.eyebrow': 'Agencija za urbani razvoj · Zagreb',
    'home.hero.title': 'Grad su ljudi',
    'home.hero.lead':
      'Urban Factory pomaže gradovima da se mijenjaju zajedno s ljudima koji u njima žive — od istraživanja i strategije do javnih prostora, prometa i izvedenih rezultata.',
    'home.hero.imageAlt': 'Festival gradskog prostora Rostov: ljudi za stolovima i namještaj od paleta pod žutim zastavama u amfiteatru dvorišta',
    'home.hero.cta': 'Pogledajte projekte',

    'home.directions.eyebrow': 'Područja rada',
    'home.directions.title': 'Tri smjera, jedan proces',
    'home.dir.engagement.text':
      'Festivali, forumi i participativni procesi koji za isti stol okupljaju stanovnike, stručnjake, poduzetnike i gradske timove.',
    'home.dir.strategy.text':
      'Strategije gradova i područja, mreže javnog prijevoza i biciklističke mreže, stambeni programi — prilagođeni stvarnim proračunima i stvarnim operaterima.',
    'home.dir.design.text':
      'Ulice, parkovi i javni prostori projektirani zajedno s ljudima koji će ih koristiti — od koncepta do projektnog zadatka za natječaj.',
    'home.dir.more': 'Više o ovom smjeru',

    'home.featured.eyebrow': 'Odabrani radovi',
    'home.featured.title': 'Projekti',
    'home.featured.all': 'Svi projekti',

    'home.approach.eyebrow': 'Pristup',
    'home.approach.title': 'Od istraživanja do izvedenog rezultata',
    'home.approach.step1': 'Istraživanje',
    'home.approach.step2': 'Koncept',
    'home.approach.step3': 'Javna podrška',
    'home.approach.step4': 'Razrada',
    'home.approach.step5': 'Podrška provedbi',
    'home.approach.text':
      'Urban Factory vodi projekt od istraživanja do projektnog zadatka spremnog za natječaj i ostaje na raspolaganju kao savjetnik tijekom provedbe. Koncepti tramvajske i biciklističke mreže za Rostov na Donu prošli su put od prvih skica do natječajne dokumentacije, a oba su projekta došla do gradnje.',

    'home.numbers.eyebrow': 'U brojkama',
    'home.num.founded': 'osnovana u Rostovu na Donu',
    'home.num.projects': 'objavljenih projekata',
    'home.num.area': 'hektara javnog prostora',
    'home.num.tram': 'km gradskog tramvajskog programa za koji je koncept mreže poslužio kao podloga',

    'home.geo.eyebrow': 'Geografija',
    'home.geo.title': 'Lokalni korijeni, međunarodna razmjena',
    'home.geo.text':
      'Osnovana u Rostovu na Donu 2013. godine, sa sjedištem u Zagrebu od 2020., s projektima i partnerima od Recifea do Erevana.',

    'city.yerevan': 'Erevan',
    'city.zagreb': 'Zagreb',
    'city.rostov': 'Rostov na Donu',
    'city.zverevo': 'Zverevo',
    'city.moscow': 'Moskva',
    'city.recife': 'Recife',
    'country.armenia': 'Armenija',
    'country.croatia': 'Hrvatska',
    'country.russia': 'Rusija',
    'country.brazil': 'Brazil',

    'home.cta.title': 'Imate grad, ulicu ili rijeku na kojoj treba raditi?',
    'home.cta.text': 'Najbolje je javiti se e-poštom.',
    'cta.write': 'Javite se',
    'cta.other': 'Svi kontakti',

    'footer.company': 'MAVEK design d.o.o.',
    'footer.oib': 'OIB',
    'footer.follow': 'Društvene mreže',
    'footer.write': 'Javite se',
    'footer.rights': 'Sva prava pridržana.',

    'projects.meta.description':
      'Projekti agencije Urban Factory: koncepti tramvajske i biciklističke mreže, strategije gradova, parkovi, šetališta, festivali i međunarodna razmjena.',
    'projects.lead': 'Dvanaest projekata od 2013. — od prvih festivala do programa za cijeli grad.',
    'projects.filter.label': 'Filtriraj po smjeru',
    'projects.filter.all': 'Svi',
    'projects.empty': 'U ovom smjeru još nema projekata.',

    'project.years': 'Godine',
    'project.present': 'danas',
    'project.place': 'Mjesto',
    'project.client': 'Naručitelj',
    'project.role': 'Opseg rada',
    'project.directions': 'Smjerovi',
    'project.results': 'Rezultati',
    'project.gallery': 'Galerija',
    'project.all': 'Svi projekti',
    'project.next': 'Sljedeći projekt',
    'project.prev': 'Prethodni projekt',

    'services.meta.description':
      'Uključivanje i događanja, strateško planiranje i mobilnost, urbani dizajn i arhitektura — što Urban Factory radi i kako.',
    'services.formats': 'Formati',
    'services.projects': 'Projekti',

    'agency.meta.description':
      'Urban Factory: osnovana u Rostovu na Donu 2013., sa sjedištem u Zagrebu od 2020. Povijest, pristup i načela.',
    'agency.history': 'Povijest',
    'agency.approach': 'Pristup',
    'agency.principles': 'Načela',

    'team.meta.description': 'Mihail Veklenko, osnivač i direktor agencije Urban Factory, i ljudi koji su s njim radili na dosadašnjim projektima.',
    'team.photo': 'Portret:',
    'team.expertise': 'Stručnost',
    'team.projectsLed': 'Ključni projekti',
    'team.experience': 'Iskustvo',
    'team.education': 'Obrazovanje',
    'project.people': 'Projektni tim',
    'project.media': 'Intervjui',
    'project.mediaInput': '— postao je jedno od polazišta ovog projekta',
    'project.mediaPrefix': 'Intervju —',
    'project.videoRu': 'Video (ruski)',
    'project.videoEn': 'Video (engleski)',
    'project.video': 'Video',
    'project.videoSeries': 'Video intervjui',
    'video.play': 'Pokreni video',
    'video.in.ru': 'Video na ruskom',
    'video.in.en': 'Video na engleskom',
    'video.in.hr': 'Video na hrvatskom',
    'video.recorded': 'Snimljeno',
    'video.published': 'Objavljeno',
    'media.watch': 'Pogledajte video',

    'media.title': 'Mediji',
    'media.lead': 'Intervjui, članci, predavanja i medijske objave — Mihail Veklenko i Urban Factory u medijima.',
    'media.meta.description': 'Mihail Veklenko i Urban Factory u medijima: intervjui s Enriqueom Peñalosom i Jaimeom Lernerom, članci, predavanja i medijske objave.',
    'media.read': 'Pročitajte intervju',
    'media.firstPublished': 'Prvi put objavljeno',
    'media.related': 'Povezani projekti',
    'media.all': 'Mediji',
    'media.section.interviews': 'Mihailovi intervjui',
    'media.section.articles': 'Mihailovi članci',
    'media.section.talks': 'Predavanja',
    'media.section.press': 'U medijima',
    'media.original': 'Izvornik',
    'media.newWindow': 'otvara se u novom prozoru',
    'media.lang.ru': 'RU',
    'media.lang.en': 'EN',
    'media.lang.hr': 'HR',
    'media.lang.pt': 'PT',

    'contact.meta.description': 'Kontaktirajte Urban Factory u Zagrebu: e-pošta, WhatsApp, Telegram, Instagram.',
    'contact.email': 'E-pošta',
    'contact.phone': 'Telefon',
    'contact.messengers': 'Aplikacije za poruke i društvene mreže',
    'contact.address': 'Ured',
  },
  ru: {
    'site.name': 'Urban Factory',
    'site.byline': 'Urban Factory by MAVEK design',
    'site.description':
      'Urban Factory — международное агентство городского развития с офисом в Загребе (Хорватия): вовлечение сообществ и события, стратегическое планирование и мобильность, городской дизайн и архитектура.',
    'a11y.skip': 'Перейти к содержанию',
    'a11y.menu': 'Меню',
    'a11y.close': 'Закрыть меню',
    'a11y.language': 'Язык',
    'a11y.home': 'Urban Factory — главная',
    'a11y.mainNav': 'Основная навигация',
    'a11y.footerNav': 'Навигация в подвале',
    'a11y.soon': 'скоро',

    'notFound.title': 'Страница не найдена',
    'notFound.text': 'Такой страницы нет или она переехала. Начните с главной или со страницы проектов.',
    'notFound.home': 'Главная',
    'nav.services': 'Услуги',
    'nav.agency': 'Агентство',
    'nav.projects': 'Проекты',
    'nav.team': 'Команда',
    'nav.media': 'Медиа',
    'nav.contact': 'Контакты',

    'cat.engagement': 'Вовлечение и события',
    'cat.strategy': 'Стратегическое планирование и мобильность',
    'cat.design': 'Городской дизайн и архитектура',
    'cat.engagement.short': 'Вовлечение',
    'cat.strategy.short': 'Стратегия и мобильность',
    'cat.design.short': 'Дизайн',

    'home.meta.title': 'Urban Factory — агентство городского развития',
    'home.hero.eyebrow': 'Агентство городского развития · Загреб',
    'home.hero.title': 'Город — это люди',
    'home.hero.lead':
      'Urban Factory помогает городам меняться вместе с людьми, которые в них живут, — от исследований и стратегии до общественных пространств, транспорта и реализованных решений.',
    'home.hero.imageAlt': 'Фестиваль городской среды в Ростове-на-Дону: люди за столами и мебель из паллет под жёлтыми флагами в амфитеатре во дворе',
    'home.hero.cta': 'Смотреть проекты',

    'home.directions.eyebrow': 'Направления',
    'home.directions.title': 'Три направления, один процесс',
    'home.dir.engagement.text':
      'Фестивали, форумы и соучаствующие процессы, которые собирают за одним столом жителей, экспертов, бизнес и городские команды.',
    'home.dir.strategy.text':
      'Стратегии городов и территорий, сети общественного транспорта и велодорожек, жилищные программы — с расчётом на реальные бюджеты и реальных операторов.',
    'home.dir.design.text':
      'Улицы, парки и общественные пространства, спроектированные вместе с теми, кто будет ими пользоваться, — от концепции до технического задания для конкурса.',
    'home.dir.more': 'Подробнее о направлении',

    'home.featured.eyebrow': 'Избранные работы',
    'home.featured.title': 'Проекты',
    'home.featured.all': 'Все проекты',

    'home.approach.eyebrow': 'Подход',
    'home.approach.title': 'От исследования до результата',
    'home.approach.step1': 'Исследование',
    'home.approach.step2': 'Концепция',
    'home.approach.step3': 'Общественная поддержка',
    'home.approach.step4': 'Разработка',
    'home.approach.step5': 'Сопровождение реализации',
    'home.approach.text':
      'Urban Factory ведёт проект от исследования до технического задания, готового для тендера, и остаётся консультантом на этапе реализации. Трамвайная и велосипедная концепции для Ростова-на-Дону прошли путь от первых эскизов до тендерной документации, и оба проекта дошли до строительства.',

    'home.numbers.eyebrow': 'В цифрах',
    'home.num.founded': 'основано в Ростове-на-Дону',
    'home.num.projects': 'опубликованных проектов',
    'home.num.area': 'гектаров общественных пространств',
    'home.num.tram': 'км городской трамвайной программы, в которой учтена концепция сети',

    'home.geo.eyebrow': 'География',
    'home.geo.title': 'Местные корни, международный обмен',
    'home.geo.text':
      'Основано в Ростове-на-Дону в 2013 году, с 2020 года штаб-квартира в Загребе; проекты и партнёры — от Ресифи до Еревана.',

    'city.yerevan': 'Ереван',
    'city.zagreb': 'Загреб',
    'city.rostov': 'Ростов-на-Дону',
    'city.zverevo': 'Зверево',
    'city.moscow': 'Москва',
    'city.recife': 'Ресифи',
    'country.armenia': 'Армения',
    'country.croatia': 'Хорватия',
    'country.russia': 'Россия',
    'country.brazil': 'Бразилия',

    'home.cta.title': 'Есть город, улица или река, с которой нужно поработать?',
    'home.cta.text': 'Лучше всего написать на почту.',
    'cta.write': 'Связаться',
    'cta.other': 'Все контакты',

    'footer.company': 'MAVEK design d.o.o.',
    'footer.oib': 'OIB',
    'footer.follow': 'Соцсети',
    'footer.write': 'Связаться',
    'footer.rights': 'Все права защищены.',

    'projects.meta.description':
      'Проекты Urban Factory: трамвайная и велосипедная концепции, стратегии городов, парки, бульвары, фестивали и международный обмен.',
    'projects.lead': 'Двенадцать проектов с 2013 года — от первых фестивалей до общегородских программ.',
    'projects.filter.label': 'Фильтр по направлению',
    'projects.filter.all': 'Все',
    'projects.empty': 'В этом направлении пока нет проектов.',

    'project.years': 'Годы',
    'project.present': 'н. в.',
    'project.place': 'Место',
    'project.client': 'Заказчик',
    'project.role': 'Объём работ',
    'project.directions': 'Направления',
    'project.results': 'Результаты',
    'project.gallery': 'Галерея',
    'project.all': 'Все проекты',
    'project.next': 'Следующий проект',
    'project.prev': 'Предыдущий проект',

    'services.meta.description':
      'Вовлечение и события, стратегическое планирование и мобильность, городской дизайн и архитектура — что и как делает Urban Factory.',
    'services.formats': 'Форматы',
    'services.projects': 'Проекты',

    'agency.meta.description':
      'Urban Factory: основано в Ростове-на-Дону в 2013 году, с 2020 года штаб-квартира в Загребе. История, подход и принципы.',
    'agency.history': 'История',
    'agency.approach': 'Подход',
    'agency.principles': 'Принципы',

    'team.meta.description': 'Михаил Векленко, основатель и генеральный директор Urban Factory, и люди, работавшие с ним над прошлыми проектами.',
    'team.photo': 'Портрет:',
    'team.expertise': 'Компетенции',
    'team.projectsLed': 'Ключевые проекты',
    'team.experience': 'Опыт',
    'team.education': 'Образование',
    'project.people': 'Команда проекта',
    'project.media': 'Интервью',
    'project.mediaInput': '— стало одной из основ этого проекта',
    'project.mediaPrefix': 'Интервью —',
    'project.videoRu': 'Видео (на русском)',
    'project.videoEn': 'Видео (на английском)',
    'project.video': 'Видео',
    'project.videoSeries': 'Видеоинтервью',
    'video.play': 'Смотреть видео',
    'video.in.ru': 'Видео на русском',
    'video.in.en': 'Видео на английском',
    'video.in.hr': 'Видео на хорватском',
    'video.recorded': 'Записано',
    'video.published': 'Опубликовано',
    'media.watch': 'Смотреть видео',

    'media.title': 'Медиа',
    'media.lead': 'Интервью, статьи, выступления и публикации в прессе — Михаил Векленко и Urban Factory в медиа.',
    'media.meta.description': 'Михаил Векленко и Urban Factory в медиа: интервью с Энрике Пеньялосой и Жайме Лернером, статьи, выступления и пресса.',
    'media.read': 'Читать интервью',
    'media.firstPublished': 'Впервые опубликовано',
    'media.related': 'Связанные проекты',
    'media.all': 'Медиа',
    'media.section.interviews': 'Интервью Михаила',
    'media.section.articles': 'Статьи Михаила',
    'media.section.talks': 'Выступления',
    'media.section.press': 'Пресса',
    'media.original': 'Оригинал',
    'media.newWindow': 'откроется в новом окне',
    'media.lang.ru': 'RU',
    'media.lang.en': 'EN',
    'media.lang.hr': 'HR',
    'media.lang.pt': 'PT',

    'contact.meta.description': 'Контакты Urban Factory в Загребе: электронная почта, WhatsApp, Telegram, Instagram.',
    'contact.email': 'Эл. почта',
    'contact.phone': 'Телефон',
    'contact.messengers': 'Мессенджеры и соцсети',
    'contact.address': 'Офис',
  },
};

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? en[key];
  };
}
