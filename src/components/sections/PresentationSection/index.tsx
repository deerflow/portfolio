import { FC } from 'react';
import Section from '../../Section';
import { css } from '@emotion/react';
import { scrollTransition } from '../../../modules/Transitions';
import Anchor from '../../Anchor';

const PresentationSection: FC = () => {
    return (
        <Section backgroundColor='secondary' borders='all-but-bottom' padding style={styles.section} stripped>
            <article>
                <p>
                    Bonjour et bienvenue sur mon CV. Je m'appelle <em>Florian Alù</em>, j'ai 22 ans et suis fraîchement
                    diplômé de la formation <em>Technicien Développeur Web</em> du{' '}
                    <Anchor href='https://le-campus-numerique.fr/'>Campus Numérique in the Alps</Anchor> à Grenoble (
                    <Anchor href='https://le-campus-numerique.fr/formation-developpeur/'>
                        lien vers le programme de ma formation
                    </Anchor>
                    ). Cette formation avait une durée d'un an et demi avec six mois de <em>cours intensifs</em> puis un
                    an en <em>alternance</em>, que j'ai effectué dans la startup{' '}
                    <Anchor href='https://campus-skills.com'>Campus Skills</Anchor>.
                </p>
                <br />
                <p>
                    Mon alternance s'est terminée en avril et je suis donc{' '}
                    <em>à l'écoute d'opportunités professionnelles</em> soit dans la région lyonnaise soit en
                    télétravail.
                </p>
            </article>
        </Section>
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
