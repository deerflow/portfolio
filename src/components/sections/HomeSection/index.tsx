import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import ProfilePicture from '../../ProfilePicture';
import Section from '../../Section';

const HomeSection: FC = () => {
    return (
        <Section backgroundColor='primary' style={styles.section} dotted borders='all'>
            <FlexRow grow={1} style={styles.row}>
                <FlexColumn basis='50%' justifyContent='space-evenly' style={styles.column}>
                    <h1>Florian Alù</h1>
                    <p css={styles.catchLine}>
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

const styles = {
    section: css`
        height: calc(100vh - (var(--dimension-initial-padding) + var(--dimension-header-height) / 2));
        margin-bottom: var(--dimension-initial-padding);
        padding: 0 2.875rem;
    `,
    row: css`
        height: calc(100% - var(--dimension-header-height));
    `,
    column: css`
        padding: 4rem 0 4rem 0;
    `,
    catchLine: css`
        font-size: 2.25rem;
        font-family: 'IBM Plex Sans', sans-serif;
    `,
};

export default HomeSection;
