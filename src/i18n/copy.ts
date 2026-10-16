/**
 * Тексты страниц (длинные блоки). Короткие строки интерфейса — в ui.ts.
 * Переводы HR/RU добавляются сюда же отдельными объектами (этап 4).
 */
import type { Lang } from './ui';

type Item = { title: string; text: string };

export interface PageCopy {
  services: {
    title: string;
    lead: string;
    blocks: Record<'engagement' | 'strategy' | 'design', { intro: string; formats: string[] }>;
  };
  agency: {
    title: string;
    lead: string;
    history: { year: string; title: string; text: string }[];
    approach: Item[];
    principles: Item[];
  };
  team: {
    title: string;
    lead: string;
    founder: { name: string; role: string; bio: string[] };
    networkTitle: string;
    networkText: string;
  };
  contact: { title: string; lead: string };
}

const en: PageCopy = {
  services: {
    title: 'Services',
    lead: 'Three directions that work as one process: we listen to the city, turn what we hear into a strategy, and carry it through to design and implementation.',
    blocks: {
      engagement: {
        intro:
          'Change in a city starts with conversation. We design and run events and participatory processes that bring residents, experts, business and city teams to the same table — and turn their ideas into a brief that can be built.',
        formats: [
          'City festivals and public-space events',
          'Forums, conferences and expert sessions',
          'Participatory workshops and community engagement',
          'International exchange and study visits',
          'Discussion series and video interviews',
        ],
      },
      strategy: {
        intro:
          'We write strategies that a city can afford. From development strategies for small towns to tram, rail and cycling networks for a metropolitan region, our work is built around real budgets, real operators and real timelines.',
        formats: [
          'City and territorial development strategies',
          'Public transport network concepts: tram, rail, agglomeration',
          'Cycling concepts and active mobility',
          'Project economics and partnership models',
          'Briefs and documentation for design competitions and tenders',
        ],
      },
      design: {
        intro:
          'We design public spaces together with the people who will use them. Streets, boulevards, parks and riverbanks — from the first workshop with residents to a concept, a design package and a competition brief.',
        formats: [
          'Concepts for streets, squares and boulevards',
          'Parks, rivers and waterfronts',
          'Modular and temporary installations',
          'Participatory design',
          'Architectural concepts',
        ],
      },
    },
  },
  agency: {
    title: 'Agency',
    lead: 'Urban Factory is an international urban development agency. We were founded in Rostov-on-Don in 2013 and have been based in Zagreb, Croatia, since 2020.',
    history: [
      {
        year: '2013',
        title: 'Born at a festival',
        text: 'Urban Factory began at the Urban Festival in Rostov-on-Don — a city festival about public space, where the name and the idea of the agency first appeared.',
      },
      {
        year: '2013–2016',
        title: 'From events to concepts',
        text: 'Festivals and public-space projects grew into long-term work: a concept for the city tram network, a cycling concept, a modular micro-park and a bridge proposal for cyclists and pedestrians.',
      },
      {
        year: '2016–2019',
        title: 'Strategies and international exchange',
        text: 'A development strategy adopted by a city council, a participatory boulevard design, an agglomeration rail concept and the revival of a city river — and a steady exchange with partners in Recife, Brazil.',
      },
      {
        year: '2020',
        title: 'Zagreb',
        text: 'The Rostov 300 expert platform was our last major project in Rostov-on-Don. In the same year the agency moved its headquarters to Zagreb, Croatia.',
      },
      {
        year: 'Today',
        title: 'Working from Zagreb',
        text: 'Urban Factory by MAVEK design works from Zagreb on strategy, mobility, public space and architectural concepts with partners across Europe and beyond.',
      },
    ],
    approach: [
      { title: 'Research', text: 'We start with the city as it is: data, history, people and the real resources at hand.' },
      { title: 'Concept', text: 'A clear idea that can be explained on one page and defended in any room.' },
      { title: 'Public support', text: 'Festivals, forums, workshops and media turn a concept into a shared goal.' },
      { title: 'Competition brief', text: 'We help put the idea into tender and competition documents, so it survives the hand-over.' },
      { title: 'Implementation', text: 'We stay with the project through design and construction for as long as we are needed.' },
    ],
    principles: [
      {
        title: 'The city is the people',
        text: 'Every project starts and ends with the people who live in the place. Their knowledge is our main source.',
      },
      {
        title: 'Realistic by design',
        text: 'Solutions that fit the real budget and the real operator. For Rostov-on-Don we proposed developing the existing tram network instead of a metro the city could not afford.',
      },
      {
        title: 'Translators between worlds',
        text: 'We speak the languages of city administrations, business, experts and residents — and help them understand each other.',
      },
      {
        title: 'Local roots, international exchange',
        text: 'We bring international experience to local projects and local experience to international ones — from Rostov-on-Don to Recife and Zagreb.',
      },
    ],
  },
  team: {
    title: 'Team',
    lead: 'A small core team and a network of experts we bring together for each project.',
    founder: {
      name: 'Mihail Veklenko',
      role: 'Founder & CEO',
      bio: [
        'Mihail founded Urban Factory in Rostov-on-Don in 2013, after more than a decade in real estate and development.',
        'He holds a Postgraduate Diploma in Urban Studies from The University of Manchester (joint programme with MSSES) and is a postgraduate student in urban transport at the Faculty of Transport and Traffic Sciences in Zagreb.',
        'He leads the agency’s work on strategy, mobility and international partnerships.',
      ],
    },
    networkTitle: 'Experts and partners',
    networkText:
      'For each project we assemble a team of architects, transport planners, sociologists, economists and journalists from our network — in Croatia, Brazil, Serbia and beyond.',
  },
  contact: {
    title: 'Contact',
    lead: 'Write to us about your city, street, river or project. The fastest way is email or WhatsApp.',
  },
};

const copy: Record<Lang, PageCopy> = { en, hr: en, ru: en };

export function getCopy(lang: Lang): PageCopy {
  return copy[lang];
}
