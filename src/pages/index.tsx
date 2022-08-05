import React, { FC } from 'react';
import SkillsSection from '../components/sections/SkillsSection';
import HomeSection from '../components/sections/HomeSection';
import ExperiencesSection from '../components/sections/ExperiencesSection';
import DegreeSection from '../components/sections/DegreeSection';
import PersonalitySection from '../components/sections/PersonalitySection';
import StateProvider from '../components/StateProvider';
import PresentationSection from '../components/sections/PresentationSection';
import { PageProps } from 'gatsby';
import GlobalLayout from '../components/GlobalLayout';
import styled from '@emotion/styled';
import HobbiesSection from '../components/sections/HobbiesSection';

const Home: FC<PageProps> = ({ location }) => {
    return (
        <StateProvider>
            <GlobalLayout location={location} title='Accueil - Florian Alù'>
                <SemiHeaderSpace />
                <HomeSection />
                <PresentationSection />
                <SkillsSection />
                <PersonalitySection />
                <ExperiencesSection />
                <DegreeSection />
                <HobbiesSection />
            </GlobalLayout>
        </StateProvider>
    );
};

const SemiHeaderSpace = styled.div`
    height: calc(var(--dimension-header-height) / 2);
`;

export default Home;
