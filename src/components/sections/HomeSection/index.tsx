import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import ProfilePicture from '../../ProfilePicture';
import Section from '../../Section';

const HomeSection: FC = () => {
    return (
        <Section
            backgroundColor='primary'
            style={css`
                height: calc(100vh - (var(--dimension-initial-padding) + var(--dimension-header-height) / 2));
                margin-bottom: var(--dimension-initial-padding);
                padding: 0 2.875rem;
            `}
            dotted
            borders
        >
            <FlexRow
                grow={1}
                style={css`
                    height: calc(100% - var(--dimension-header-height));
                `}
            >
                <FlexColumn
                    basis='50%'
                    justifyContent='space-evenly'
                    style={css`
                        padding: 4rem 0 4rem 0;
                    `}
                >
                    <h1>Florian Alù</h1>
                    <p
                        css={css`
                            font-size: 2.25rem;
                            font-family: 'IBM Plex Sans', sans-serif;
                        `}
                    >
                        Bonjour, je m’appelle Florian.
                        <br />
                        Bienvenue sur mon CV/Portfolio.
                    </p>
                </FlexColumn>
                <FlexColumn basis='50%' justifyContent='center' alignItems='center'>
                    <ProfilePicture />
                </FlexColumn>
            </FlexRow>
        </Section>
    );
};

export default HomeSection;
