import React, { FC } from 'react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import Section from '../../Section';
import SkillCategory from './SkillCategory';
import { scrollTransition } from '../../../modules/Transitions';
import { Flags, Technologies, Tools } from '../../../modules/Icons';
import styled from '@emotion/styled';
import { Skill } from '../../../types/api';

const skillsLists: Record<'technologies' | 'tools' | 'languages', Skill[][]> = {
    technologies: [
        [
            { title: 'React & React Native', icon: Technologies.React },
            { title: 'Vue.js', icon: Technologies.Vue },
            { title: 'TypeScript', icon: Technologies.TypeScript },
            { title: 'Next.js', icon: Technologies['Next.js'] },
            { title: 'Go', icon: Technologies.Go },
        ],
        [
            { title: 'Node.js', icon: Technologies['Node.js'] },
            { title: 'Laravel', icon: Technologies.Laravel },
            { title: 'SQL', icon: Technologies.SQL },
            { title: 'MongoDB', icon: Technologies.MongoDB },
            { title: 'Docker', icon: Technologies.Docker },
        ],
    ],
    tools: [
        [
            { title: 'Git', icon: Tools.Git },
            { title: 'IDEs Jetbrains', icon: Tools['Jetbrains IDEs'] },
        ],
        [
            { title: 'GitHub', icon: Tools.GitHub },
            { title: 'Figma', icon: Tools.Figma },
        ],
    ],
    languages: [
        [{ title: 'Anglais (B2/C1)', icon: Flags.English, alt: 'Drapeau du Royaume-Uni' }],
        [{ title: 'Italien (B2)', icon: Flags.Italian, alt: 'Drapeau Italien' }],
    ],
};

const SkillsSection: FC = () => {
    return (
        <MainSection backgroundColor='primary' padding borders='all-but-bottom' dotted>
            <h2>Compétences</h2>
            <FlexRow wrap>
                <Column basis='calc(50% - 1rem)'>
                    <StyledSkillCategory title='Technologies' lists={skillsLists.technologies} />
                </Column>
                <Column basis='calc(50% - 1rem)' justifyContent='space-between'>
                    <StyledSkillCategory title='Outils' lists={skillsLists.tools} />
                    <StyledSkillCategory title='Langues' lists={skillsLists.languages} />
                </Column>
            </FlexRow>
        </MainSection>
    );
};

const MainSection = styled(Section)`
    position: relative;
    html[data-scrolled] & {
        margin-top: -2px;
    }
    ${scrollTransition('margin')}
`;

const Column = styled(FlexColumn)`
    &:first-child {
        margin-right: 2rem;
    }
    @media (max-width: 560px) {
        flex-basis: 100%;
    }
`;

const StyledSkillCategory = styled(SkillCategory)`
    @media (max-width: 560px) {
        & > div {
            flex-direction: column;
        }
        ul,
        li {
            width: 100%;
        }
    }
    &:nth-child(2n + 1) {
        @media (max-width: 1102px) {
            margin-bottom: 1.5rem;
        }
    }
`;

export default SkillsSection;
