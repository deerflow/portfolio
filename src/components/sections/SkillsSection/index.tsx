import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import Section from '../../Section';
import nodeJsIcon from '../../../assets/svg/nodejs.svg';
import britishIcon from '../../../assets/svg/nodejs.svg';
import italianIcon from '../../../assets/svg/nodejs.svg';
import typescriptIcon from '../../../assets/svg/typescript.svg';
import nextJsIcon from '../../../assets/svg/nextjs.svg';
import dockerIcon from '../../../assets/svg/docker.svg';
import sqlIcon from '../../../assets/svg/sql.svg';
import reactIcon from '../../../assets/svg/react.svg';
import goIcon from '../../../assets/svg/go.svg';
import meteorIcon from '../../../assets/svg/meteor.svg';
import graphQlIcon from '../../../assets/svg/graphql.svg';
import mongoDbIcon from '../../../assets/svg/mongodb.svg';
import gitIcon from '../../../assets/svg/git.svg';
import webStormIcon from '../../../assets/svg/webstorm.svg';
import gitHubIcon from '../../../assets/svg/github.svg';
import figmaIcon from '../../../assets/svg/figma.svg';
import SkillCategory from './SkillCategory';

const skillsLists = {
    technologies: [
        [
            { title: 'Node.js', icon: nodeJsIcon },
            { title: 'TypeScript', icon: typescriptIcon },
            { title: 'Next.js', icon: nextJsIcon },
            { title: 'Docker', icon: dockerIcon },
            { title: 'SQL', icon: sqlIcon },
        ],
        [
            { title: 'React & React Native', icon: reactIcon },
            { title: 'Go', icon: goIcon },
            { title: 'Meteor', icon: meteorIcon },
            { title: 'GraphQL', icon: graphQlIcon },
            { title: 'MongoDB', icon: mongoDbIcon },
        ],
    ],
    tools: [
        [
            { title: 'Git', icon: gitIcon },
            { title: 'WebStorm', icon: webStormIcon },
        ],
        [
            { title: 'GitHub', icon: gitHubIcon },
            { title: 'Figma', icon: figmaIcon },
        ],
    ],
    languages: [[{ title: 'Anglais (B2/C1)', icon: britishIcon }], [{ title: 'Italien (B2)', icon: italianIcon }]],
};

const SkillsSection: FC = () => {
    return (
        <Section
            backgroundColor='secondary'
            style={css`
                border-bottom: none;
                padding: 3rem 2.875rem;
                position: relative;
                html[data-scrolled='true'] & {
                    bottom: 2px;
                }
            `}
            borders
        >
            <h2>Compétences</h2>
            <FlexRow>
                <FlexColumn basis='50%'>
                    <SkillCategory title='Technologies' lists={skillsLists.technologies} />
                </FlexColumn>
                <FlexColumn basis='50%' justifyContent='space-between'>
                    <SkillCategory title='Outils' lists={skillsLists.tools} />
                    <SkillCategory title='Langues' lists={skillsLists.languages} />
                </FlexColumn>
            </FlexRow>
        </Section>
    );
};

export default SkillsSection;
