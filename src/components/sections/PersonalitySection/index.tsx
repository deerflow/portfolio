import React, { FC } from 'react';
import Section from '../../Section';
import { css } from '@emotion/react';
import { themeTransition } from '../../../modules/Transitions';

const PersonalitySection: FC = () => {
    return (
        <Section backgroundColor='secondary' borders='all-but-bottom' padding style={styles.section} stripped>
            <h2>Personnalité</h2>
            <p>Ce que j'apporterai à votre entreprise :</p>
            <ul>
                <li>
                    <em>Clarté</em> et <em>vivacité d'esprit</em>
                </li>
                <li>
                    <em>Rigueur</em> et <em>efficacité</em> au travail
                </li>
                <li>
                    <em>Polyvalence</em>, capacité d'<em>adaptation</em>
                </li>
                <li>
                    <em>À l'écoute</em>, bon relationnel, je m'intégrerai facilement dans votre équipe
                </li>
                <li>
                    <em>Créatif</em>, débordant d'<em>idées</em>
                </li>
                <li>
                    <em>Autonome</em>, éternel <em>autodidacte</em>
                </li>
            </ul>
        </Section>
    );
};

const styles = {
    section: css`
        font-family: 'IBM Plex Mono', monospace;
        font-size: 1.25rem;
        ul {
            list-style: none;
        }
        li::before {
            content: '- ';
        }
        li {
            ${themeTransition('color')}
        }
    `,
};

export default PersonalitySection;
