import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiVercel,
  SiJest,
  SiEjs,
  SiGooglecloud,
  SiPostman
} from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';

export const technologyMap = [
  {
    name: 'Front End',
    technologies: [
      { name: 'JavaScript', logo: SiJavascript, color: '#F7DF1E', description: 'Dynamic scripting language for web development' },
      { name: 'TypeScript', logo: SiTypescript, color: '#3178C6', description: 'Typed superset of JavaScript' },
      { name: 'HTML5', logo: SiHtml5, color: '#E34F26', description: 'Markup language for web structure' },
      { name: 'CSS3', logo: SiCss3, color: '#1572B6', description: 'Stylesheet language for design' },
      { name: 'React', logo: SiReact, color: '#61DAFB', description: 'Library for building UIs' },
      { name: 'Next.js', logo: SiNextdotjs, color: '#000000', description: 'React framework with SSR/SSG' },
      { name: 'Tailwind CSS', logo: SiTailwindcss, color: '#06B6D4', description: 'Utility-first CSS framework' },
    ],
  },
  {
    name: 'Back End',
    technologies: [
      { name: 'Node.js', logo: SiNodedotjs, color: '#339933', description: 'JavaScript runtime environment' },
      { name: 'Express.js', logo: SiExpress, color: '#000000', description: 'Minimal web framework for Node.js' },
      { name: 'Python', logo: SiPython, color: '#306998', description: 'General-purpose programming language' },
      { name: 'EJS', logo: SiEjs, color: '#A91E50', description: 'Embedded JavaScript templating' },
    ],
  },
  {
    name: 'Databases / API / Query Languages',
    technologies: [
      { name: 'MySQL', logo: SiMysql, color: '#4479A1', description: 'Relational database system' },
      { name: 'PostgreSQL', logo: SiPostgresql, color: '#336791', description: 'Relational database emphasizing extensibility' },
      { name: 'MongoDB', logo: SiMongodb, color: '#47A248', description: 'Document-oriented NoSQL database' },
      { name: 'Redis', logo: SiRedis, color: '#DC382D', description: 'In-memory key-value data store' },
      { name: 'GraphQL', logo: GrGraphQl, color: '#E10098', description: 'Query language for APIs and runtime for executing queries' },
      { name: 'REST APIs', logo: SiPostman, color: '#FF6C37', description: 'Architectural style for building scalable APIs' },
    ],
  },
  {
    name: 'DevOps / Deployment / Infrastructure',
    technologies: [
      { name: 'Docker', logo: SiDocker, color: '#2496ED', description: 'Container platform for apps' },
      { name: 'Vercel', logo: SiVercel, color: '#000000', description: 'Hosting and deployment platform' },
      { name: 'Google Cloud Platform', logo: SiGooglecloud, color: '#4285F4', description: 'Cloud computing services for hosting, storage, and computing' },
    ],
  },
  {
    name: 'Other',
    technologies: [
      { name: 'Jest', logo: SiJest, color: '#C21325', description: 'JavaScript testing framework' },
    ],
  },
];
