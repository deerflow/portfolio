import { Project } from '../types/api';
import blocks from '../assets/png/e-portfolio/blocks.png';
import skills from '../assets/png/e-portfolio/skills.png';
import timeline from '../assets/png/e-portfolio/timeline.png';
import report from '../assets/png/e-portfolio/report.png';
import list from '../assets/png/rncp/list.png';
import details from '../assets/png/rncp/details.png';
import statistics from '../assets/png/rncp/statistics.png';
import lightHouseScore from '../assets/png/portfolio/lighthouse-score.png';

const ORGANIZATIONS = {
    campusSkills: { name: 'Campus Skills', href: 'https://campus-skills.com' },
    personal: { name: 'Projet personnel', href: 'https://florianalu.net' },
};

const PROJECTS: (Project & { screenshotWidth?: number })[] = [
    {
        title: 'Application hybride iOS, Android et PWA',
        organization: ORGANIZATIONS.campusSkills,
        description:
            "Développement de la version mobile de l'application web Campus Skills déjà existante. Campus Skills est une plateforme prônant la pédagogie par compétences, elle permet aux organismes de formations de définir un référentiel de compétences que l'apprenant devra acquérir tout au long de sa formation pour l'obtention de son diplôme. Campus Skills propose deux services communiquant entre eux. Le e-portfolio qui regroupe les compétences acquises ou à acquérir organisées par thématique et proposant une validation de compétences dites tri-partite (apprenant, formateur, tuteur d'alternance). Le livret électronique d'apprentissage est quant à lui une frise chronologique dans laquelle l'apprenant retrouve les temps forts de sa formation et de son alternance, ainsi que les différents rendus à réaliser (rapports, synthèses, bilans). Ces services sont entièrement personnalisables par l'organisme de formation et s'adaptent donc à tout type de formation qui utilisent déjà l'approche par compétences. Il permet également aux formateurs un suivi individuel plus poussé, en un coup d'oeil, ceux-ci peuvent connaître la progression de leurs apprenants.",
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
            "Développement d'un scraper (programme parcourant des sites webs afin d'en récupérer les contenus notamment sur les sites ne proposant pas d'api) de titres RNCP (Référentiel National de Certifications Professionnelles). L'enjeu était de pouvoir récupérer les compétences des titres RNCP sur le site de France Compétences, pour pouvoir proposer à nos clients des compétences en rapport avec leur formation. Il fallait également une interface permettant de consulter et éditer ces titres, notamment pour corriger les erreurs potentielles dû au scraping.",
        technologies: ['Go', 'React', 'Next.js', 'TypeScript', 'MongoDB', 'Docker', 'Algolia'],
        screenshots: [
            { href: list, alt: 'Vue de liste des titres RNCP' },
            { href: details, alt: "Vue détails d'un titre RNCP" },
            { href: statistics, alt: 'Vue des statistiques' },
        ],
        screenshotWidth: 384,
    },
    {
        title: "Ajout de fonctionnalités à l'api de Campus Skills",
        organization: ORGANIZATIONS.campusSkills,
        description:
            "Ajout de fonctionnalité à l'api de Campus Skills avec le framework Meteor, proposant une approche basé le patron de conception éditeur/abonné et sur le protocole des WebSockets. Manipulation d'une base de données MongoDB.",
        technologies: ['Node.js', 'Meteor', 'TypeScript', 'MongoDB'],
    },
    {
        title: 'Ce site portfolio',
        organization: ORGANIZATIONS.personal,
        description: 'Développement et design de ce site portfolio. Ci-dessous le score Google LightHouse du site.',
        screenshots: [
            {
                href: lightHouseScore,
                alt: 'Score Google LightHouse : 96 en performance, 100 en accessibilité, 100 en bonnes pratiques et 100 en optimisation pour les moteurs de recherche',
            },
        ],
        screenshotWidth: 300,
        technologies: ['React', 'Gatsby', 'TypeScript'],
    },
];

export default PROJECTS;
