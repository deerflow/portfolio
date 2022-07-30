import React, { FC } from 'react';
import { PageProps } from 'gatsby';
import GlobalLayout from '../components/GlobalLayout';
import styled from '@emotion/styled';
import PROJECTS from '../content/PROJECTS';
import Project from '../components/Project';

const Portfolio: FC<PageProps> = ({ location }) => {
    return (
        <GlobalLayout location={location} title='Portfolio - Florian Alù'>
            <HeaderSpace />
            <Heading1>Portfolio</Heading1>
            <div>
                {PROJECTS.map(project => (
                    <Project {...project} />
                ))}
            </div>
        </GlobalLayout>
    );
};

const HeaderSpace = styled.div`
    height: var(--dimension-header-height);
`;

const Heading1 = styled.h1`
    margin-bottom: 1.5rem;
`;

export default Portfolio;
