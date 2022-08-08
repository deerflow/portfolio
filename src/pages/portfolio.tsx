import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import GlobalLayout from '../components/GlobalLayout';
import styled from '@emotion/styled';
import PROJECTS from '../content/PROJECTS';
import Project from '../components/Project';
import StateProvider from '../components/StateProvider';
import Section from '../components/Section';
import META from '../content/META';

const Portfolio: FC<PageProps> = ({ location }) => {
    return (
        <StateProvider>
            <GlobalLayout location={location} title='Portfolio - Florian Alù' description={META.description.portfolio}>
                <HeaderSpace />
                <Section backgroundColor='primary' borders='all-but-bottom' padding dotted>
                    <Heading1>Portfolio</Heading1>
                    <div>
                        {PROJECTS.map((project, index) => (
                            <Project {...project} horizontalRule={index !== PROJECTS.length - 1} />
                        ))}
                    </div>
                </Section>
            </GlobalLayout>
        </StateProvider>
    );
};

const HeaderSpace = styled.div`
    height: var(--dimension-header-height);
`;

const Heading1 = styled.h1`
    margin: 0.75rem 0 1.5rem 0;
    @media (max-width: 370px) {
        font-size: max(17.3vw, 2rem);
    }
    @media (max-width: 230px) {
        overflow-wrap: break-word;
    }
`;

export default Portfolio;
