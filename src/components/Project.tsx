import React, { FC } from 'react';
import { Project as IProject } from '../types/api';
import { Technologies } from '../modules/Icons';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import settings from '../settings';

const Project: FC<Props> = ({
    title,
    organization,
    description,
    technologies,
    screenshots,
    screenshotWidth,
    horizontalRule,
}) => {
    return (
        <Root>
            <Title>{title}</Title>
            {organization.href ? <a href={organization.href}>{organization.name}</a> : <p>{organization.name}</p>}
            <Description>{description}</Description>
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
                        <Screenshot
                            src={screenshot.href}
                            key={screenshot.href}
                            alt={screenshot.alt}
                            css={{ width: screenshotWidth }}
                        />
                    ))}
                </div>
            )}
            {horizontalRule && (
                <hr
                    css={css`
                        margin-top: 1.3rem;
                        height: 0;
                        border-width: 2px 0 0 0;
                        border-color: var(--color-accent);
                        transition: border-color ${settings.themeTransitionDuration}ms;
                    `}
                />
            )}
        </Root>
    );
};

const Root = styled.article`
    margin: 1rem 0 1rem 0;
`;

const Title = styled.h2`
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 0 0.75rem 0;
    font-size: 1.75rem;
    font-weight: 600;
`;

const Description = styled.p`
    margin-top: 0.5rem;
`;

const TechnologyList = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0.75rem 0;
    & li {
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    & li img {
        margin-right: 0.25rem;
    }
`;

const Screenshot = styled.img`
    margin-right: 0.5rem;
`;

interface Props extends IProject {
    screenshotWidth?: string;
    horizontalRule?: boolean;
}

export default Project;
