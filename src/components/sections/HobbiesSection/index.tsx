import React, { FC } from 'react';
import Section from '../../Section';
import Hobby from './Hobby';
import styled from '@emotion/styled';
import { themeTransition } from '../../../modules/Transitions';

const HobbiesSection: FC = () => {
    return (
        <Section borders='all-but-bottom' backgroundColor='primary' dotted padding>
            <h2>Hobbies</h2>
            <List>
                <Hobby
                    hobby='Music'
                    title='Pratique musicale (12 ans au Conservatoire de Grenoble)'
                    sublist={
                        <SubList>
                            <li>- Cor</li>
                            <li>- Piano</li>
                            <li>- Chant</li>
                            <li>
                                - Musique assistée par ordinateur (
                                <a href='https://soundcloud.com/deerflow' target='_blank'>
                                    Lien Soundcloud
                                </a>
                                )
                            </li>
                            <li>- Composition musicale</li>
                        </SubList>
                    }
                />
                <Hobby hobby='Running' title='Course à pied' />
                <Hobby hobby='Meditation' title='Méditation' />
                <Hobby hobby='Ski' title='Ski' />
            </List>
            <ThankParagraph>Merci d'avoir pris le temps de lire mon CV.</ThankParagraph>
        </Section>
    );
};

const List = styled.ul`
    list-style: none;
`;

const SubList = styled.ul`
    list-style: none;
    margin-left: 3.25rem;
    font-family: 'IBM Plex Mono', monospace;

    li {
        ${themeTransition('color')}
    }
`;

const ThankParagraph = styled.p`
    margin-top: 2rem;
    font-size: 1.25rem;
`;

export default HobbiesSection;
