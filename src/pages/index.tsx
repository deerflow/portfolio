import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';
import Header from '../components/Header';
import SkillsSection from '../components/sections/SkillsSection';
import HomeSection from '../components/sections/HomeSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import DegreeSection from '../components/sections/DegreeSection';
import PersonalitySection from '../components/sections/PersonalitySection';
import Footer from '../components/Footer';
import globalStyles from '../globalStyles';
import { Global } from '@emotion/react';
import StateProvider from '../components/StateProvider';
import PresentationSection from '../components/sections/PresentationSection';

const Home: FC = () => {
    return (
        <StateProvider>
            <Global styles={globalStyles} />
            <Helmet>
                <meta charSet='utf-8' />
                <title>Accueil - Florian Alù</title>
            </Helmet>
            <Header />
            <SemiHeaderSpace />
            <HomeSection />
            <PresentationSection />
            <SkillsSection />
            <ExperiencesSection />
            <DegreeSection />
            <PersonalitySection />
            <Footer />
        </StateProvider>
    );
};

const SemiHeaderSpace = styled.div`
    height: calc(var(--dimension-header-height) / 2);
`;

export default Home;
