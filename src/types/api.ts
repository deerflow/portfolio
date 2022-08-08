import { Technologies } from '../modules/Icons';

export interface Project {
    title: string;
    organization: {
        name: string;
        href?: string;
    };
    description: string;
    screenshots?: { href: string; alt: string }[];
    technologies: (keyof typeof Technologies)[];
}

export interface Skill {
    title: string;
    icon: string;
    alt?: string;
}
