import { Project } from '../types/api';
import blocks from '../assets/png/e-portfolio/blocks.png';
import skills from '../assets/png/e-portfolio/skills.png';
import timeline from '../assets/png/e-portfolio/timeline.png';
import report from '../assets/png/e-portfolio/report.png';
import list from '../assets/png/rncp/list.png';
import details from '../assets/png/rncp/details.png';
import statistics from '../assets/png/rncp/statistics.png';

const PROJECTS: (Project & { screenshotWidth: string })[] = [
    {
        title: 'Application hybride iOS, Android et PWA',
        organization: { name: 'Campus Skills', href: 'https://campus-skills.com' },
        description: "Développement de la version mobile de l'application web Campus Skills déjà existante",
        technologies: ['React Native', 'Expo', 'TypeScript'],
        screenshots: [
            { href: blocks, alt: "Écran principale de l'application, liste des blocs de compétences" },
            { href: skills, alt: "Écran d'une liste de compétences" },
            { href: timeline, alt: "Écran du livret électronique d'apprentissage" },
            { href: report, alt: "Écran d'un rapport" },
        ],
        screenshotWidth: '12rem',
    },
    {
        title: "Scraper de titres RNCP et interface d'édition avec tableur",
        organization: { name: 'Campus Skills', href: 'https://campus-skills.com' },
        description:
            "Développement d'un scraper de titres RNCP (Référentiel National de Certifications Professionnelles)",
        technologies: ['Go', 'React', 'Next.js', 'TypeScript', 'MongoDB', 'Docker', 'Algolia'],
        screenshots: [
            { href: list, alt: 'Vue de liste des titres RNCP' },
            { href: details, alt: "Vue détails d'un titre RNCP" },
            { href: statistics, alt: 'Vue des statistiques' },
        ],
        screenshotWidth: '24rem',
    },
];

export default PROJECTS;
