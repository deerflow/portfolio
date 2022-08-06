import { Project } from '../types/api';
import blocks from '../assets/png/e-portfolio/blocks.png';
import skills from '../assets/png/e-portfolio/skills.png';
import timeline from '../assets/png/e-portfolio/timeline.png';
import report from '../assets/png/e-portfolio/report.png';
import list from '../assets/png/rncp/list.png';
import details from '../assets/png/rncp/details.png';
import statistics from '../assets/png/rncp/statistics.png';

const ORGANIZATIONS = {
    campusSkills: { name: 'Campus Skills', href: 'https://campus-skills.com' },
    personal: { name: 'Projet personnel', href: 'https://florianalu.net' },
};

const PROJECTS: (Project & { screenshotWidth?: number })[] = [
    {
        title: 'Application hybride iOS, Android et PWA',
        organization: ORGANIZATIONS.campusSkills,
        description: "Développement de la version mobile de l'application web Campus Skills déjà existante",
        technologies: ['React Native', 'Expo', 'TypeScript'],
        screenshots: [
            { href: blocks, alt: "Écran principale de l'application, liste des blocs de compétences" },
            { href: skills, alt: "Écran d'une liste de compétences" },
            { href: timeline, alt: "Écran du livret électronique d'apprentissage" },
            { href: report, alt: "Écran d'un rapport" },
        ],
        screenshotWidth: 192,
    },
    {
        title: "Scraper de titres RNCP et interface d'édition avec tableur",
        organization: ORGANIZATIONS.campusSkills,
        description:
            "Développement d'un scraper de titres RNCP (Référentiel National de Certifications Professionnelles)",
        technologies: ['Go', 'React', 'Next.js', 'TypeScript', 'MongoDB', 'Docker', 'Algolia'],
        screenshots: [
            { href: list, alt: 'Vue de liste des titres RNCP' },
            { href: details, alt: "Vue détails d'un titre RNCP" },
            { href: statistics, alt: 'Vue des statistiques' },
        ],
        screenshotWidth: 384,
    },
    {
        title: "Ajout de fonctionnalités à l'api Campus Skills",
        organization: ORGANIZATIONS.campusSkills,
        description: "Ajout de fonctionnalité à l'api Campus Skills",
        technologies: ['Node.js', 'Meteor', 'TypeScript', 'MongoDB'],
    },
    {
        title: 'Ce site portfolio',
        organization: ORGANIZATIONS.personal,
        description: 'Développement et design de ce site portfolio',
        technologies: ['React', 'Gatsby', 'TypeScript'],
    },
];

export default PROJECTS;
