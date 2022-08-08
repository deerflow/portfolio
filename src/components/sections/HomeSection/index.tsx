import React, { FC } from 'react';
import { css } from '@emotion/react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import ProfilePicture from '../../ProfilePicture';
import Section from '../../Section';

const HomeSection: FC = () => {
    return (
        <Section backgroundColor='primary' css={styles.section} dotted borders='all'>
            <FlexRow grow={1} style={styles.row} justifyContent='space-between'>
                <FlexColumn basis='50%' justifyContent='space-evenly' style={styles.textColumn} alignItems='stretch'>
                    <h1 css={styles.heading}>Florian Alù</h1>
                    <p css={styles.catchLine}>
                        Bonjour, je m’appelle Florian.
                        <br />
                        Bienvenue sur mon CV/Portfolio.
                    </p>
                    <p>
                        Pas le temps de consulter mon site ? <a href='/CV_Florian_ALÙ.pdf'>CV au format PDF</a>
                    </p>
                </FlexColumn>
                <FlexColumn basis='50%' justifyContent='center' alignItems='center' style={styles.pictureColumn}>
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
        padding: calc(var(--dimension-header-height) / 2) 2.875rem 0 2.875rem;
        @media (max-width: 900px) {
            padding: 0 1.4375rem;
        }

        @media (max-width: 340px) {
            padding: 0 0.75rem;
        }
    `,
    row: css`
        height: 100%;
        @media (max-width: 775px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    `,
    heading: css`
        margin: 0;
        @media (max-width: 775px) {
            width: fit-content;
        }
        @media (max-width: 620px) {
            font-size: max(10.3vw, 1.75rem);
        }
    `,
    textColumn: css`
        height: 100%;
    `,
    pictureColumn: css`
        @media (max-width: 900px) {
            align-items: end;
            flex-basis: fit-content;
        }
    `,
    catchLine: css`
        font-size: 2.25rem;
        font-family: 'IBM Plex Sans', sans-serif;

        @media (max-width: 620px) {
            font-size: max(5.8vw, 1rem);
            width: fit-content;
        }
    `,
};

export default HomeSection;
