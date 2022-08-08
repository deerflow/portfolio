import React, { FC } from 'react';
import { FlexColumn, FlexRow } from '../../layout/Flex';
import ProfilePicture from '../../ProfilePicture';
import Section from '../../Section';
import styled from '@emotion/styled';

const HomeSection: FC = () => {
    return (
        <MainSection backgroundColor='primary' dotted borders='all'>
            <Row grow={1} justifyContent='space-between'>
                <FlexColumn basis='50%' justifyContent='space-evenly' alignItems='stretch'>
                    <Heading>Florian Alù</Heading>
                    <CatchLine>
                        Bonjour, je m’appelle Florian.
                        <br />
                        Bienvenue sur mon CV/Portfolio.
                    </CatchLine>
                    <p>
                        Pas le temps de consulter mon site ? <a href='/CV_Florian_ALÙ.pdf'>CV au format PDF</a>
                    </p>
                </FlexColumn>
                <PictureColumn basis='50%' justifyContent='center' alignItems='center'>
                    <ProfilePicture />
                </PictureColumn>
            </Row>
        </MainSection>
    );
};

const MainSection = styled(Section)`
    height: calc(100vh - (var(--dimension-initial-padding) + var(--dimension-header-height) / 2));
    margin-bottom: var(--dimension-initial-padding);
    padding: calc(var(--dimension-header-height) / 2) 2.875rem 0 2.875rem;
    @media (max-width: 900px) {
        padding: 0 1.4375rem;
    }

    @media (max-width: 340px) {
        padding: 0 0.75rem;
    }
`;

const Row = styled(FlexRow)`
    height: 100%;
    @media (max-width: 775px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Heading = styled.h1`
    margin: 0;
    @media (max-width: 775px) {
        width: fit-content;
    }
    @media (max-width: 620px) {
        font-size: max(10.3vw, 1.75rem);
    }
`;

const PictureColumn = styled(FlexColumn)`
    @media (max-width: 900px) {
        align-items: end;
        flex-basis: fit-content;
    }
`;

const CatchLine = styled.p`
    font-size: 2.25rem;
    font-family: 'IBM Plex Sans', sans-serif;

    @media (max-width: 620px) {
        font-size: max(5.8vw, 1rem);
        width: fit-content;
    }
`;

export default HomeSection;
