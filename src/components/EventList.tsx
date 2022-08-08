import React, { FC } from 'react';
import { FlexRow } from './layout/Flex';
import styled from '@emotion/styled';
import ExternalLink from './ExternalLink';

const EventList: FC<{ events: IEvent[] }> = ({ events }) => {
    return (
        <Root>
            {events.map(({ time, title, organization, organizationHref, place, description }, index) => (
                <Row justifyContent='space-evenly' key={`${title} - ${time}`}>
                    <Time>{time}</Time>
                    <Body>
                        <Title>{title}</Title>
                        <p>
                            {organizationHref ? (
                                <ExternalLink href={organizationHref}>{organization}</ExternalLink>
                            ) : (
                                <span>{organization}</span>
                            )}
                            , {place}
                        </p>
                        {description && <Description>{description}</Description>}
                    </Body>
                </Row>
            ))}
        </Root>
    );
};

const Root = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.25rem;

    @media (max-width: 370px) {
        p,
        h4,
        time {
            font-size: max(5.4vw, 0.625rem);
        }
    }
`;

const Row = styled(FlexRow)`
    &:not(:last-child) {
        margin-bottom: 2rem;
        @media (max-width: 370px) {
            margin-bottom: max(8.64vw, 1rem);
        }
    }
    @media (max-width: 640px) {
        flex-wrap: wrap;
    }
`;

const Time = styled.time`
    flex-basis: 17rem;
    display: block;
    text-align: right;
    margin: 0 2rem;
    @media (max-width: 640px) {
        flex-basis: 100%;
        text-align: left;
        margin: 1rem 0;
    }

    @media (max-width: 370px) {
        margin: max(4.32vw, 0.5rem) 0;
    }
`;

const Body = styled.div`
    flex-basis: 50%;
    @media (max-width: 640px) {
        flex-basis: 100%;
    }
`;

const Title = styled.h4`
    font-family: inherit;
    margin: 0;
    font-weight: 600;
`;

const Description = styled.p`
    margin-top: 1rem;
    @media (max-width: 370px) {
        margin-top: max(4.32vw, 0.5rem);
    }
`;

export interface IEvent {
    time: string;
    title: string;
    organization: string;
    place: string;
    description?: string;
    organizationHref?: string;
}

export default EventList;
