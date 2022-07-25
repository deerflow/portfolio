import React, { FC } from 'react';
import { Project as IProject } from '../types/api';
import Technologies from '../modules/Technologies';
import styled from '@emotion/styled';

const Project: FC<Props> = ({ title, organization, description, technologies, screenshots }) => {
    return (
        <Root>
            <Title>{title}</Title>
            {organization.href ? <a href={organization.href}>{organization.name}</a> : <p>{organization.name}</p>}
            <p>{description}</p>
            <TechnologyList>
                {technologies.map(technology => (
                    <li>
                        <img src={Technologies[technology]} alt={`Logo de ${technology}`} />
                        <p>{technology}</p>
                    </li>
                ))}
            </TechnologyList>
            {screenshots && (
                <div>
                    {screenshots.map(screenshot => (
                        <img src={screenshot.href} key={screenshot.href} alt={screenshot.alt} />
                    ))}
                </div>
            )}
        </Root>
    );
};

const Root = styled.article`
    margin: 1rem 0;
`;

const Title = styled.h2`
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 0 0.75rem 0;
    font-size: 1.75rem;
    font-weight: 600;
`;

const TechnologyList = styled.ul`
    list-style-type: none;
    display: flex;
    margin-top: 1rem;
    & li {
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    & li img {
        margin-right: 0.25rem;
    }
`;

interface Props extends IProject {}

export default Project;
