import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import Section from '../../Section';
import SkillCategory from './SkillCategory';
import { scrollTransition } from '../../../modules/Transitions';
import { Flags, Technologies, Tools } from '../../../modules/Icons';

const skillsLists = {
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
    languages: [[{ title: 'Anglais (B2/C1)', icon: Flags.English }], [{ title: 'Italien (B2)', icon: Flags.Italian }]],
};

const SkillsSection: FC = () => {
    return (
        <Section backgroundColor='primary' padding css={styles.section} borders='all-but-bottom' dotted>
            <h2>Compétences</h2>
            <FlexRow wrap>
                <FlexColumn basis='calc(50% - 1rem)' style={styles.firstColumn}>
                    <SkillCategory
                        title='Technologies'
                        lists={skillsLists.technologies}
                        css={[styles.skillCategory, styles.skillCategoryGutterBottom]}
                    />
                </FlexColumn>
                <FlexColumn basis='calc(50% - 1rem)' justifyContent='space-between' style={styles.secondColumn}>
                    <SkillCategory
                        title='Outils'
                        lists={skillsLists.tools}
                        css={[styles.skillCategory, styles.skillCategoryGutterBottom]}
                    />
                    <SkillCategory title='Langues' lists={skillsLists.languages} css={styles.skillCategory} />
                </FlexColumn>
            </FlexRow>
        </Section>
    );
};

const styles = {
    section: css`
        position: relative;
        html[data-scrolled] & {
            margin-top: -2px;
        }
        ${scrollTransition('margin')}
    `,
    column: css`
        @media (max-width: 560px) {
            flex-basis: 100%;
        }
    `,
    firstColumn: css`
        margin-right: 2rem;
        @media (max-width: 560px) {
            flex-basis: 100%;
        }
    `,
    secondColumn: css`
        @media (max-width: 560px) {
            flex-basis: 100%;
        }
    `,
    skillCategory: css`
        @media (max-width: 560px) {
            & > div {
                flex-direction: column;
            }
            ul,
            li {
                width: 100%;
            }
        }
    `,
    skillCategoryGutterBottom: css`
        @media (max-width: 1102px) {
            margin-bottom: 1.5rem;
        } ;
    `,
};

export default SkillsSection;
