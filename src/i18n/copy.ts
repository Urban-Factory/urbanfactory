/**
 * Тексты страниц (длинные блоки). Короткие строки интерфейса — в ui.ts.
 * EN — здесь; переводы — copy.hr.ts и copy.ru.ts (та же структура PageCopy).
 */
import type { Lang } from './ui';
import { hr } from './copy.hr.ts';
import { ru } from './copy.ru.ts';

type Item = { title: string; text: string };

export interface PageCopy {
  services: {
    title: string;
    lead: string;
    blocks: Record<'engagement' | 'strategy' | 'design', { intro: string; formats: string[] }>;
  };
  // Главная = страница агентства: lead — вводный абзац блока «Подход»
  agency: {
    lead: string;
    history: { year: string; title: string; text: string }[];
    approach: Item[];
    principles: Item[];
  };
  team: {
    // Блок «Основатель» на главной (#osnivac); summary — выделенная строка под биографией
    founder: { name: string; role: string; bio: string[]; summary: string; expertise: string[] };
    partners: { title: string; text: string }; // абзац «Партнёрская сеть» в блоке основателя
    // Участники проектов — блок «Project team» на страницах кейсов
    past: { project: string; people: { name: string; role: string }[] }[];
  };
  contact: { title: string; lead: string };
}

export const en: PageCopy = {
  services: {
    title: 'Services',
    lead: 'Three lines of work connected in one process: research and engagement of residents and stakeholders, strategy and concept, design and implementation support.',
    blocks: {
      engagement: {
        intro:
          'Change in a city starts with conversation. Urban Factory designs and runs events and participatory processes that bring residents, experts, business and city teams to the same table, and turns their ideas into a project brief.',
        formats: [
          'City festivals and public-space events',
          'Forums, conferences and expert sessions',
          'Participatory workshops and community engagement',
          'International exchange of experience and study visits',
          'Discussion series and video interviews',
          'Government relations: municipalities, regional and national authorities',
          'Partnerships with business, universities and NGOs',
          'Preparation and management of EU projects',
        ],
      },
      strategy: {
        intro:
          'Urban Factory prepares strategies that a city can afford: from development strategies for small towns to tram, rail and cycling networks for a metropolitan region and a housing programme for displaced families. The work is built around real budgets, real operators and real timelines. That is why projects are prepared from the start to be implementable. Traffic analyses are built with open-source software and AI, so the client receives a model it can check and rerun on its own, without buying licences.',
        formats: [
          'Urban research: surveys, mobility data, stakeholder interviews',
          'Development strategies at every scale: district, city, agglomeration, region',
          'Public transport: tram and light rail, urban and suburban rail, bus and trolleybus; interchanges and integrated fares',
          'Active mobility: walking and cycling networks',
          'Housing programmes',
          'Project economics and partnership models',
          'Briefs and documentation for design competitions and tenders',
          'Sustainable urban mobility plans (SUMP)',
          'Transport and parking studies',
          'Traffic modelling and microsimulation of intersections and networks',
          'Traffic counts from video with automatic detection of vehicles and pedestrians',
          'Traffic impact assessment of new developments and site evaluation',
          'Accessibility analysis: public transport, walking and cycling (15-minute city)',
          'Analytical groundwork for spatial plans: existing conditions, scenarios, indicators',
          'Feasibility studies and cost-benefit analysis (CBA)',
        ],
      },
      design: {
        intro:
          'Public spaces are designed together with the people who will use them. Streets, boulevards, parks and riverbanks — from the first workshop with residents to a concept, a design package and a competition brief.',
        formats: [
          'Concepts for streets, squares and boulevards',
          'Parks, rivers and waterfronts',
          'Transport design concepts: tram redesign, a cycle and pedestrian bridge',
          'Settlement planning',
          'Modular and temporary installations',
          'Participatory design',
          '3D visualisation and video simulation of traffic and public spaces',
        ],
      },
    },
  },
  agency: {
    lead: 'Urban Factory is an international urban development agency, founded in Rostov-on-Don in 2013 and based in Zagreb, Croatia, since 2020.',
    history: [
      {
        year: '2013',
        title: 'Born at a festival',
        text: 'Urban Factory began at Urban Festival Rostov — a city festival about public space in Rostov-on-Don, where the name and the idea of the agency first appeared.',
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
        text: 'The Rostov 300 expert platform was the agency’s last major project in Rostov-on-Don. In the same year it moved its headquarters to Zagreb, Croatia.',
      },
      {
        year: 'Today',
        title: 'Working from Zagreb',
        text: 'Urban Factory by MAVEK design works from Zagreb on urban strategy, mobility and public space with partners across Europe and beyond.',
      },
    ],
    approach: [
      { title: 'Research', text: 'Every project starts with the city as it is: data, history, people and the real resources at hand.' },
      { title: 'Concept', text: 'A clear idea that can be explained on one page and defended in any room.' },
      { title: 'Public support', text: 'Festivals, forums, workshops and media turn a concept into a goal the city shares.' },
      { title: 'Development', text: 'The project is developed in detail — design, documentation and briefs for competitions and tenders — so it survives the hand-over.' },
      { title: 'Implementation support', text: 'After the brief is handed over, Urban Factory remains available as an adviser to the city and the contractors through construction and launch.' },
    ],
    principles: [
      {
        title: 'The city is the people',
        text: 'Every project starts and ends with the people who live in the place. Their knowledge is the main source.',
      },
      {
        title: 'Feasible by design',
        text: 'Solutions that fit the real budget and the real operator. For Rostov-on-Don, Urban Factory proposed developing the existing tram network instead of a metro the city could not afford.',
      },
      {
        title: 'Translators between worlds',
        text: 'Urban Factory speaks the languages of city administrations, business, experts and residents — and helps them understand each other.',
      },
      {
        title: 'Local roots, international exchange',
        text: 'International experience goes into local projects, and local experience into international ones — from Rostov-on-Don to Recife and Zagreb.',
      },
    ],
  },
  team: {
    founder: {
      name: 'Mihail Veklenko',
      role: 'Founder & CEO',
      bio: [
        'Mihail founded Urban Factory in Rostov-on-Don in 2013, after more than a decade in real estate and development.',
        'He initiated and led the agency’s key transport and planning projects — the Rostov tram network concept, the cycling programme for Rostov-on-Don, the Great Rostov agglomeration rail concept and the Socio-economic Development Strategy of the town of Zverevo to 2030 — and co-founded ANO Park Temernik and Urban Festival Rostov, where Urban Factory was born.',
        'He holds a Postgraduate Diploma in Urban Studies from The University of Manchester (joint programme with MSSES) and is enrolled in the postgraduate specialist study in Urban Transport (in progress) at the Faculty of Transport and Traffic Sciences in Zagreb.',
        'Since 2020 he has led the agency from Zagreb, Croatia.',
      ],
      summary: '13+ years in urban and transport planning; before that 10+ years in real estate development',
      expertise: [
        'City and territorial strategy',
        'Public transport and cycling',
        'Public engagement and events',
        'Project economics and partnerships',
        'International cooperation',
      ],
    },
    partners: {
      title: 'Partner network',
      text: 'For projects that require it, Urban Factory works with a licensed transport engineer and with other specialists as the project needs.',
    },
    past: [
      {
        project: 'rostov-tram',
        people: [
          { name: 'Mihail Veklenko', role: 'Initiator and project lead; urban and transport planner' },
          { name: 'Alexander Semenov', role: 'MOO “City and Transport” — partner' },
        ],
      },
      {
        project: 'cycling-rostov-on-don',
        people: [
          { name: 'Mihail Veklenko', role: 'Initiator and project lead; urban and transport planner' },
          { name: 'Dmitry Gusev', role: 'Head of the I Bike RnD media project; his company Velovod won the design tender and prepared the city cycle network scheme (2018–2019)' },
        ],
      },
      {
        project: 'zverevo-strategy-2030',
        people: [
          { name: 'Mihail Veklenko', role: 'Urban planner, project lead' },
          { name: 'Elena Ishchenko', role: 'Territorial marketing expert' },
          { name: 'Nikolay Pryanishnikov', role: 'MSSES' },
          { name: 'Grisha Krasnov', role: 'Videographer' },
          { name: 'Prof. Circe Monteiro', role: 'Expert round table' },
        ],
      },
      {
        project: 'kolesnikov-boulevard',
        people: [
          { name: 'Mihail Veklenko', role: 'Urban planner, project lead' },
          { name: 'Julia Litvinova', role: 'Architect' },
          { name: 'Mikael Sarkisyants', role: 'Architect' },
          { name: 'Alexey Matveenko', role: '“Gorod-Park” — workshop format' },
          { name: 'Elena Ishchenko', role: 'Territorial marketing expert' },
          { name: 'Nikolay Pryanishnikov', role: 'MSSES' },
        ],
      },
      {
        project: 'temernik-river-park',
        people: [
          { name: 'Mihail Veklenko', role: 'Co-founder of the ANO; urban planner and economist — river strategy and economics, international partnerships, forums' },
          { name: 'Yuri Pogrebshchikov', role: 'Director, ANO Park Temernik' },
          { name: 'Nikolay Britvin', role: 'Chairman of the Board, ANO Park Temernik; initiative group' },
          { name: 'Sergey Shneider', role: 'Chamber of Commerce and Industry of the Rostov Region — moderator of the Small Rivers forum, 2018' },
          { name: 'Sotnikova', role: '“Eco-river Temernik” concept, 2017' },
          { name: 'Alexey Strelchenko', role: 'Cadastral survey of the riverbank' },
          { name: 'Bespalov', role: 'Don State Technical University — river rehabilitation algorithm' },
          { name: 'Prof. Circe Monteiro', role: 'INCITI / UFPE, Recife' },
          { name: 'Don State Technical University', role: 'Academic partner' },
        ],
      },
      {
        project: 'urban-festival-rostov',
        people: [
          { name: 'Mihail Veklenko', role: 'Co-founder and organiser' },
          { name: 'Diana Karnaukhova', role: 'Co-founder and organiser' },
          { name: 'Alexey Karachinsky', role: 'Co-founder and organiser' },
          { name: 'Mariya Iskrennikova', role: '“Botaniki” — festival in the Botanical Garden, 2013' },
          { name: 'Sviatoslav Murunov', role: 'Centre for Applied Urbanism — lecturer, 2014' },
          { name: 'Marina Khrustaleva', role: 'Arkhnadzor — lecturer, 2014' },
          { name: 'Daria Zueva', role: 'Lecturer, 2014' },
        ],
      },
      {
        project: 'great-rostov',
        people: [
          { name: 'Mihail Veklenko', role: 'Initiator and project lead; urban and transport planner' },
          { name: 'Milton Botler', role: 'Recife — co-author of the high-speed rail proposal' },
          { name: 'Pedro Guedes', role: 'Recife — co-author of the high-speed rail proposal' },
          { name: 'Nikolay Protsenko', role: 'Journalist' },
        ],
      },
      {
        project: 'urban-thinkers-campus-recife',
        people: [
          { name: 'Mihail Veklenko', role: 'Organiser and moderator of the session' },
          { name: 'Prof. Circe Monteiro', role: 'INCITI' },
          { name: 'Bárbara Maranhão', role: 'Interpreter' },
          { name: 'Clemente Coelho Junior', role: 'Speaker' },
          { name: 'Renato Lins', role: 'Speaker' },
          { name: 'Renato Raposo', role: 'Speaker' },
          { name: 'Denise Moura', role: 'Speaker' },
        ],
      },
      {
        project: 'rostov-300',
        people: [
          { name: 'Mihail Veklenko', role: 'Co-curator and author of the concept' },
          { name: 'Alexandra Chernova', role: 'Co-curator, Don State Public Library' },
          { name: 'Daria Rud', role: 'Sociologist' },
          { name: 'Nikolay Protsenko', role: 'Journalist' },
          { name: 'Grisha Krasnov', role: 'Videographer' },
          { name: 'Daria Solovyova', role: 'PR' },
          { name: 'Alexey Solovyov', role: 'SMM' },
        ],
      },
      {
        project: 'tun-foundation',
        people: [
          { name: 'Mihail Veklenko', role: 'Initiator and founder; urban planner of the housing programme' },
        ],
      },
      {
        project: 'urban-islands',
        people: [
          { name: 'Mihail Veklenko', role: 'Project manager; government relations — work with the municipality' },
        ],
      },
      {
        project: 'gagarin-bridge',
        people: [
          { name: 'Mihail Veklenko', role: 'Author of the concept idea' },
          { name: 'E. Kotlyarova', role: 'Architect — illustrations of the concept' },
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    lead: 'Write about your city, street, river or project. Email is the best way to get in touch.',
  },
};

const copy: Record<Lang, PageCopy> = { en, hr: hr ?? en, ru: ru ?? en };

export function getCopy(lang: Lang): PageCopy {
  return copy[lang];
}
