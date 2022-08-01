import React, { FC } from 'react';
import Section from '../../Section';
import { css } from '@emotion/react';
import { scrollTransition } from '../../../modules/Transitions';
import ExternalLink from '../../ExternalLink';
import Anchor from '../../Anchor';

const PresentationSection: FC = () => {
    return (
        <>
            <Anchor id='cv' />
            <Section backgroundColor='secondary' borders='all-but-bottom' padding style={styles.section} stripped>
                <article>
                    <p>
                        Bonjour et bienvenue sur mon CV. Je m'appelle <em>Florian Alù</em>, j'ai 22 ans et suis
                        fraîchement diplômé de la formation <em>Technicien Développeur Web</em> du{' '}
                        <ExternalLink href='https://le-campus-numerique.fr/'>Campus Numérique in the Alps</ExternalLink>{' '}
                        à Grenoble (
                        <ExternalLink href='https://le-campus-numerique.fr/formation-developpeur/'>
                            lien vers le programme de ma formation
                        </ExternalLink>
                        ). Cette formation avait une durée d'un an et demi avec six mois de <em>cours intensifs</em>{' '}
                        puis un an en <em>alternance</em>, que j'ai effectué dans la startup{' '}
                        <ExternalLink href='https://campus-skills.com'>Campus Skills</ExternalLink>.
                    </p>
                    <br />
                    <p>
                        Mon alternance s'est terminée en avril et je suis donc{' '}
                        <em>à l'écoute d'opportunités professionnelles</em> dans la région grenobloise.
                    </p>
                </article>
            </Section>
        </>
    );
};

const styles = {
    section: css`
        font-size: 1.25rem;
        position: relative;
        html[data-scrolled] & {
            margin-top: -2px;
        }
        ${scrollTransition('margin')}
    `,
};

export default PresentationSection;
