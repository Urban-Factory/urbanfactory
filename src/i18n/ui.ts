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
export const published: Lang[] = ['en'];

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

  'nav.services': 'Services',
  'nav.agency': 'Agency',
  'nav.projects': 'Projects',
  'nav.team': 'Team',
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
    'We help cities change with the people who live in them — from research and strategy to public spaces, transport and built results.',
  'home.hero.imageAlt': 'Urban Festival in Rostov-on-Don: people at tables and pallet furniture under yellow flags in a courtyard amphitheatre',
  'home.hero.cta': 'See our projects',
  'home.hero.cta2': 'Get in touch',

  'home.directions.eyebrow': 'What we do',
  'home.directions.title': 'Three directions, one process',
  'home.dir.engagement.text':
    'Festivals, forums and participatory processes that bring residents, experts, business and city teams to one table.',
  'home.dir.strategy.text':
    'City and territorial strategies, public transport networks and cycling concepts that fit real budgets and real operators.',
  'home.dir.design.text':
    'Streets, parks and public spaces designed together with the people who will use them — from concept to competition brief.',
  'home.dir.more': 'More about this direction',

  'home.featured.eyebrow': 'Selected work',
  'home.featured.title': 'Projects',
  'home.featured.all': 'All projects',

  'home.approach.eyebrow': 'How we work',
  'home.approach.title': 'From research to built result',
  'home.approach.step1': 'Research',
  'home.approach.step2': 'Concept',
  'home.approach.step3': 'Public support',
  'home.approach.step4': 'Competition brief',
  'home.approach.step5': 'Implementation',
  'home.approach.text':
    'We stay with a project for as long as it takes. Our tram and cycling concepts for Rostov-on-Don travelled all the way from first sketches to tender documents and construction.',

  'home.numbers.eyebrow': 'In numbers',
  'home.num.founded': 'founded in Rostov-on-Don',
  'home.num.projects': 'projects on this site',
  'home.num.area': 'hectares of public space designed with residents',
  'home.num.forums': 'forums and conferences organised',
  'home.num.festivals': 'city festivals',
  'home.num.schools': 'summer schools',
  'home.num.students': 'summer-school students',
  'home.num.tram': 'km city tram programme our network concept fed into',

  'home.geo.eyebrow': 'Where we work',
  'home.geo.title': 'Local roots, international exchange',
  'home.geo.text':
    'Founded in Rostov-on-Don in 2013, headquartered in Zagreb since 2020, with projects and partners from Recife to Istria.',

  'home.geo.founded': 'Founded in 2013',
  'home.geo.hq': 'Headquarters since 2020',

  'home.cta.title': 'Have a city, a street or a river to work on?',
  'home.cta.text': 'Write to us by email, WhatsApp or Telegram.',
  'home.cta.button': 'Contact us',

  'footer.company': 'MAVEK design d.o.o.',
  'footer.oib': 'OIB',
  'footer.follow': 'Follow',
  'footer.write': 'Write to us',
  'footer.rights': 'All rights reserved.',

  'projects.meta.description':
    'Projects by Urban Factory: tram and cycling concepts, city strategies, parks, boulevards, festivals and international exchange.',
  'projects.lead': 'Thirteen projects from 2013 to today — from first festivals to city-wide programmes.',
  'projects.filter.label': 'Filter by direction',
  'projects.filter.all': 'All',
  'projects.empty': 'No projects in this direction yet.',

  'project.years': 'Years',
  'project.place': 'Place',
  'project.client': 'Client',
  'project.role': 'Our role',
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

  'team.meta.description': 'Mihail Veklenko, founder and CEO of Urban Factory, and the people who worked with us on past projects.',
  'team.photo': 'Photo of',
  'team.expertise': 'Expertise',
  'team.projectsLed': 'Projects led',

  'contact.meta.description': 'Contact Urban Factory in Zagreb: email, WhatsApp, Telegram, Instagram.',
  'contact.email': 'Email',
  'contact.whatsapp': 'WhatsApp',
  'contact.telegram': 'Telegram',
  'contact.instagram': 'Instagram',
  'contact.address': 'Office',
  'contact.map': 'Open on the map',
};

export type UIKey = keyof typeof en;

export const ui: Record<Lang, Partial<Record<UIKey, string>>> = {
  en,
  hr: {},
  ru: {},
};

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? en[key];
  };
}
