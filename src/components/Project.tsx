import React, { FC, useMemo } from 'react';
import { Project as IProject } from '../types/api';
import { Technologies } from '../modules/Icons';
import styled from '@emotion/styled';
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
    const ComputedScreenshot = useMemo(
        () => styled.img`
            margin-right: 0.5rem;
            width: 100%;
            max-width: ${screenshotWidth}px;
        `,
        [screenshotWidth]
    );

    return (
        <Root>
            <Title>{title}</Title>
            {organization.href ? (
                <OrganizationLink href={organization.href}>{organization.name}</OrganizationLink>
            ) : (
                <p>{organization.name}</p>
            )}
            <Description>{description}</Description>
            <TechnologyList>
                {technologies.map(technology => (
                    <li>
                        <TechnologyLogo src={Technologies[technology]} alt={`Logo de ${technology}`} />
                        <p>{technology}</p>
                    </li>
                ))}
            </TechnologyList>
            {screenshots && (
                <div>
                    {screenshots.map(screenshot => (
                        <ComputedScreenshot src={screenshot.href} key={screenshot.href} alt={screenshot.alt} />
                    ))}
                </div>
            )}
            {horizontalRule && <HorizontalRule />}
        </Root>
    );
};

const Root = styled.article`
    margin: 1rem 0 1rem 0;
`;

const Title = styled.h2`
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 0 0.75rem;
    font-size: 1.75rem;
    font-weight: 600;
    @media (max-width: 370px) {
        font-size: max(7.6vw, 0.875rem);
    }
`;

const OrganizationLink = styled.a`
    @media (max-width: 370px) {
        font-size: max(4.3vw, 0.5rem);
    }
`;

const Description = styled.p`
    margin-top: 0.5rem;
`;

const TechnologyList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0.45rem 0;
    & li {
        display: flex;
        align-items: center;
        margin: 0.3rem 1rem 0.3rem 0;
    }
    & img {
        margin-right: 0.25rem;
        @media (max-width: 370px) {
        }
    }
`;

const TechnologyLogo = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const HorizontalRule = styled.hr`
    margin-top: 1.3rem;
    height: 0;
    border-width: 2px 0 0 0;
    border-color: var(--color-accent);
    transition: border-color ${settings.themeTransitionDuration}ms;
`;

interface Props extends IProject {
    screenshotWidth?: number;
    horizontalRule?: boolean;
}

export default Project;
