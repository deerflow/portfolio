import React, { FC } from 'react';
import Section from '../../Section';
import { themeTransition } from '../../../modules/Transitions';
import styled from '@emotion/styled';

const PersonalitySection: FC = () => {
    return (
        <MainSection backgroundColor='secondary' borders='all-but-bottom' padding stripped stripOrientation='-45deg'>
            <h2>Personnalité</h2>
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
        </MainSection>
    );
};

const MainSection = styled(Section)`
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
    @media (max-width: 370px) {
        font-size: max(5.4vw, 0.625rem);
    }
`;

export default PersonalitySection;
