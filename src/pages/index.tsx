import React, { FC } from 'react';
import Section from '../components/Section';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import ProfilePicture from '../components/ProfilePicture';
import { FlexColumn, FlexRow } from '../components/Flex';
import styled from '@emotion/styled';
import Header from '../components/Header';

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Accueil - Florian Alù</title>
            </Helmet>
            <Header />
            <Section
                backgroundColor='primary'
                style={css`
                    height: 100vh;
                `}
                dotted
            >
                <HeaderSpace />
                <FlexRow
                    grow={1}
                    style={css`
                        height: calc(100% - var(--header-height));
                    `}
                >
                    <FlexColumn
                        basis='50%'
                        justifyContent='space-evenly'
                        style={css`
                            padding: 4rem 0 4rem 2.875rem;
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
        </>
    );
};

const HeaderSpace = styled.div`
    height: var(--header-height);
`;

export default Home;
