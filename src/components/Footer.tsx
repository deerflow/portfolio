import React, { FC } from 'react';
import styled from '@emotion/styled';
import { FlexRow } from './layout/Flex';
import SocialIcon from './SocialIcon';
import { css } from '@emotion/react';
import { themeTransition } from '../modules/Transitions';

const Footer: FC = () => {
    return (
        <FooterTag>
            <FlexRow justifyContent='center'>
                <SocialIcon style={socialIconStyle} icon='linkedIn' href='https://www.linkedin.com/in/florian-alù/' />
                <SocialIcon style={socialIconStyle} icon='gitHub' href='https://github.com/deerflow' />
                <SocialIcon style={socialIconStyle} icon='mail' href='mailto:alu.florian@gmail.com' />
            </FlexRow>
            <Copyright>florianalu.net 2022 - No rights reserved</Copyright>
        </FooterTag>
    );
};

const FooterTag = styled.footer`
    border: 2px solid var(--color-dark);
    padding: 2rem;
    color: var(--color-footer);
    ${themeTransition('color', 'border-color')};

    @media (max-width: 370px) {
        padding: max(8.6vw, 0.5rem);
    }
`;

const Copyright = styled.p`
    margin-top: 1rem;
    text-align: center;
    @media (max-width: 370px) {
        margin-top: max(4.3vw, 0.5rem);
    }
`;

const socialIconStyle = css`
    margin: 0 1rem;
    @media (max-width: 370px) {
        margin: 0 max(4.3vw, 0.5rem);
    }
`;

export default Footer;
