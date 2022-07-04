import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import Header from '../components/Header';
import SkillsSection from '../components/sections/SkillsSection';
import HomeSection from '../components/sections/HomeSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';

const Home: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet='utf-8' />
                <title>Accueil - Florian Alù</title>
            </Helmet>
            <Header />
            <SemiHeaderSpace />
            <HomeSection />

            <SkillsSection />
            <ExperiencesSection />
        </>
    );
};

const SemiHeaderSpace = styled.div`
    height: calc(var(--dimension-header-height) / 2);
`;

export default Home;
