import React, { FC } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import { Helmet } from 'react-helmet';

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Accueil - Florian Alù</title>
            </Helmet>
            <Section color='primary'>
                <Header />
            </Section>
        </>
    );
};

export default Home;
