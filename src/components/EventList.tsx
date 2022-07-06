import React, { FC } from 'react';
import { FlexRow } from './layout/Flex';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Anchor from './Anchor';

const EventList: FC<{ events: IEvent[] }> = ({ events }) => {
    return (
        <Root>
            {events.map(({ time, title, organization, organizationHref, place, description }, index) => (
                <FlexRow
                    justifyContent='space-evenly'
                    wrap
                    style={
                        index !== events.length - 1
                            ? css`
                                  margin-bottom: 2rem;
                              `
                            : undefined
                    }
                    key={`${title} - ${time}`}
                >
                    <Time>{time}</Time>
                    <Body>
                        <Title>{title}</Title>
                        <p>
                            {organizationHref ? (
                                <Anchor href={organizationHref}>{organization}</Anchor>
                            ) : (
                                <span>{organization}</span>
                            )}
                            , {place}
                        </p>
                        {description && <Description>{description}</Description>}
                    </Body>
                </FlexRow>
            ))}
        </Root>
    );
};

const Root = styled.div`
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.25rem;
`;

const Time = styled.time`
    flex-basis: 17rem;
    display: block;
    text-align: right;
    margin: 0 2rem;
`;

const Body = styled.div`
    flex-basis: 50%;
`;

const Title = styled.h4`
    font-family: inherit;
    margin: 0;
    font-weight: 600;
`;

const Description = styled.p`
    margin-top: 1.25rem;
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
