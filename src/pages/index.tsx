import React, { FC } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Accueil - Florian Alù</title>
            </Helmet>
            <Section
                backgroundColor='primary'
                style={css`
                    height: 100vh;
                `}
                dotted
            >
                <Header />
            </Section>
        </>
    );
};

export default Home;
