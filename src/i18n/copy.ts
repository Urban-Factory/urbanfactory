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
    founder: { name: string; role: string; bio: string[]; expertise: string[]; experience: string[]; education: string[]; projects: string[] };
    pastTitle: string;
    pastText: string;
    past: { project: string; people: { name: string; role: string }[] }[];
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
        text: 'Urban Factory by MAVEK design works from Zagreb on urban strategy, mobility and public space with partners across Europe and beyond.',
      },
    ],
    approach: [
      { title: 'Research', text: 'We start with the city as it is: data, history, people and the real resources at hand.' },
      { title: 'Concept', text: 'A clear idea that can be explained on one page and defended in any room.' },
      { title: 'Public support (when needed)', text: 'When a project needs it, festivals, forums, workshops and media turn a concept into a shared goal.' },
      { title: 'Development', text: 'We develop the project in detail — design, documentation and the briefs for competitions and tenders — so it survives the hand-over.' },
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
    lead: 'Urban Factory is led by its founder, Mihail Veklenko. For each project we bring together the specialists it needs.',
    founder: {
      name: 'Mihail Veklenko',
      role: 'Founder & CEO',
      bio: [
        'Mihail founded Urban Factory in Rostov-on-Don in 2013, after more than a decade in real estate and development.',
        'He initiated and led the agency’s key transport and planning projects — the Rostov tram network concept, the cycling programme for Rostov-on-Don, the Great Rostov agglomeration rail concept and the Zverevo Development Strategy 2030 — and co-founded ANO Park Temernik and the Urban Festival where Urban Factory was born.',
        'He holds a Postgraduate Diploma in Urban Studies from The University of Manchester (joint programme with MSSES) and is a postgraduate student in urban transport at the Faculty of Transport and Traffic Sciences in Zagreb.',
        'Since 2020 he has led the agency from Zagreb, Croatia.',
      ],
      expertise: [
        'City and territorial strategy',
        'Public transport and cycling',
        'Public engagement and events',
        'Project economics and partnerships',
        'International cooperation',
      ],
      experience: [
        'Session producer, Moscow Urban Forum (2013)',
        'Tutor, Faculty of Media Communications, Don State Technical University, 2014–2015',
        'On-site consultant, Innopolis, 2015',
        'Transport researcher, CRISALIDE (EU ERA.NET RUS Plus), 2018–2019',
        'Koordinator voditelja projekata, Institut IGH, Zagreb, 2022',
      ],
      education: [
        'Postgraduate study “Gradski promet” (urban transport), Faculty of Transport and Traffic Sciences, University of Zagreb — 2024–present',
        'The University of Manchester (programme delivered with the Moscow School of Social and Economic Sciences) — Postgraduate Diploma in Urban Studies, 2013–2015 (awarded Oct 2015)',
        'Don State Technical University, Rostov-on-Don — Specialist degree in International Economic Relations, 2002–2007',
      ],
      projects: ['rostov-tram', 'cycling-rostov-on-don', 'zverevo-strategy-2030', 'temernik-river-park', 'urban-festival-rostov', 'great-rostov', 'urban-thinkers-campus-recife', 'rostov-300'],
    },
    pastTitle: 'Project teams',
    pastText: 'For every project we build a team around the task: Mihail Veklenko together with the experts, partners and colleagues who joined him.',
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
          { name: 'Dmitry Gusev', role: 'Head of the I Bike RnD media project; won the design tender' },
        ],
      },
      {
        project: 'zverevo-strategy-2030',
        people: [
          { name: 'Mihail Veklenko', role: 'Urban planner, project lead' },
          { name: 'Elena Ishchenko', role: 'Territorial marketing expert' },
          { name: 'Nikolay Pryanishnikov', role: 'MSSES' },
          { name: 'Grisha Krasnov', role: 'Video' },
          { name: 'Prof. Circe Monteiro', role: 'Expert round table' },
        ],
      },
      {
        project: 'kolesnikov-boulevard',
        people: [
          { name: 'Mihail Veklenko', role: 'Urban planner, project lead' },
          { name: 'Julia Litvinova', role: 'Architect' },
          { name: 'Mikael Sarkisyants', role: 'Consulting architect' },
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
          { name: 'N. N. Britvina', role: 'Initiative group, ANO Park Temernik' },
          { name: 'N. N. Britvin', role: 'ANO Park Temernik' },
          { name: 'S. B. Shneider', role: 'Chamber of Commerce and Industry of the Rostov Region — moderator of the Small Rivers forum, 2018' },
          { name: 'Sotnikova', role: '“Eco-river Temernik” concept, 2017' },
          { name: 'Strelchenko', role: 'Cadastral survey of the riverbank' },
          { name: 'Bespalov', role: 'Don State Technical University — river rehabilitation algorithm' },
          { name: 'Prof. Circe Monteiro', role: 'INCITI / UFPE, Recife' },
          { name: 'Swami Jyothirmayah', role: 'Speaker, Moscow Urban Forum 2017' },
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
          { name: 'Grisha Krasnov', role: 'Video' },
          { name: 'Daria Solovyova', role: 'PR' },
          { name: 'Alexey Solovyov', role: 'SMM' },
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
    lead: 'Write to us about your city, street, river or project. Email is the best way to reach us.',
  },
};

const copy: Record<Lang, PageCopy> = { en, hr: en, ru: en };

export function getCopy(lang: Lang): PageCopy {
  return copy[lang];
}
