import React, { FC } from 'react';
import { FlexRow } from './layout/Flex';
import { css } from '@emotion/react';

const EventList: FC<{ events: IEvent[] }> = ({ events }) => {
    return (
        <div
            css={css`
                font-family: 'IBM Plex Sans', sans-serif;
                font-size: 1.25rem;
            `}
        >
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
                    <time
                        css={css`
                            flex-basis: 17rem;
                            display: block;
                            text-align: right;
                            margin: 0 2rem;
                        `}
                    >
                        {time}
                    </time>
                    <div
                        css={css`
                            flex-basis: 50%;
                        `}
                    >
                        <h4
                            css={css`
                                font-family: inherit;
                                margin: 0;
                                font-weight: 600;
                            `}
                        >
                            {title}
                        </h4>
                        <p>
                            {organizationHref ? (
                                <a href={organizationHref}>{organization}</a>
                            ) : (
                                <span>{organization}</span>
                            )}
                            , {place}
                        </p>
                        {description && (
                            <p
                                css={css`
                                    margin-top: 1.25rem;
                                `}
                            >
                                {description}
                            </p>
                        )}
                    </div>
                </FlexRow>
            ))}
        </div>
    );
};

export interface IEvent {
    time: string;
    title: string;
    organization: string;
    place: string;
    description?: string;
    organizationHref?: string;
}

export default EventList;
