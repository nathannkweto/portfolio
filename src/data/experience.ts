import type { Experience } from '../types/experience';

export const experience: Experience[] = [
  {
    id: 'sen-dev-fintech',
    role: 'Senior Frontend Engineer',
    company: 'FinTech Global',
    location: 'London, UK (Remote)',
    startDate: 'Mar 2021',
    endDate: 'Present',
    description: [
      'Led the migration of a legacy jQuery dashboard to React/TypeScript, reducing load times by 40%.',
      'Established an internal design system used by 4 distinct product teams.',
      'Mentored 3 junior developers through code reviews and pair programming sessions.',
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Jest', 'Cypress'],
  },
  {
    id: 'soft-eng-startup',
    role: 'Software Engineer',
    company: 'Innovate Startup',
    location: 'Berlin, DE',
    startDate: 'Jun 2018',
    endDate: 'Feb 2021',
    description: [
      'Developed a real-time collaboration tool using WebSockets and Node.js.',
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time from 20 mins to 4 mins.',
      'Collaborated directly with founders to define product roadmap and MVP features.',
    ],
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'Docker', 'AWS'],
  },
];
