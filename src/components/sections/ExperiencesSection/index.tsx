import React, { FC } from 'react';
import Section from '../../Section';
import EventList, { IEvent } from '../../EventList';
import { css } from '@emotion/react';

const experiences: IEvent[] = [
    {
        time: 'Avril 2021 - Avril 2022',
        title: 'Développeur web et mobile',
        organization: 'Campus Skills',
        organizationHref: 'https://campus-skills.com',
        city: 'Grenoble',
        description:
            'Contrat en alternance - Développement d’une application mobile de pédagogie par compétences, ajout de fonctionnalités à une application web existante, développement d’un web scraper',
    },
    {
        time: 'Février 2016',
        title: 'Stage d’observation en entreprise',
        organization: 'Smile',
        organizationHref: 'https://wwW.smile.eu',
        city: 'Grenoble',
        description: 'Découverte de l’informatique embarquée, recettage, inventaire',
    },
    {
        time: 'Janvier 2015',
        title: 'Stage d’observation en entreprise',
        organization: 'HP',
        organizationHref: 'https://hp.com',
        city: 'Grenoble',
        description:
            "Entretien avec différents professionnels dans le domaine de l'informatique : développement, réseaux, maintenance, qualité produit, projet.Visite d'un data center.",
    },
];

const ExperiencesSection: FC = () => {
    return (
        <Section
            borders
            backgroundColor='primary'
            style={css`
                border-bottom: none;
                padding: 3rem 2.875rem;
            `}
        >
            <h2>Expériences</h2>
            <EventList events={experiences} />
        </Section>
    );
};

export default ExperiencesSection;
