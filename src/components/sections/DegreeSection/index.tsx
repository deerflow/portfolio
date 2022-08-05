import React, { FC } from 'react';
import EventList, { IEvent } from '../../EventList';
import Section from '../../Section';

const degrees: IEvent[] = [
    {
        time: 'Octobre 2020 - Avril 2022',
        title: 'Formation développeur web, titre RNCP de niveau 5',
        organization: 'Campus Numérique in the Alps',
        organizationHref: 'https://le-campus-numerique.fr',
        place: 'Grenoble',
        description: "Formation de développeur web avec 6 mois de cours intensifs puis 1 an d'alternance",
    },
    {
        time: 'Juillet 2020',
        title: 'Baccalauréat Général Scientifique',
        organization: 'Mention Bien',
        place: 'Académie de Grenoble',
    },
];

const DegreeSection: FC = () => {
    return (
        <Section borders='all-but-bottom' backgroundColor='secondary' padding stripped>
            <h2>Diplômes et formations</h2>
            <EventList events={degrees} />
        </Section>
    );
};

export default DegreeSection;
