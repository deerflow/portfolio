import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import SwitchThemeButton from './SwitchThemeButton';
import { scrollTransition, themeTransition } from '../modules/Transitions';
import FavIcon from './icons/FavIcon';
import styled from '@emotion/styled';

const Header: FC = () => {
    return (
        <Root>
            <BackgroundHider />
            <HeaderTag>
                <LeftPart>
                    <Link to='/' css={styles.faviconLink}>
                        <FavIcon />
                    </Link>

                    <Ul>
                        <li>
                            <Link to='/'>Accueil</Link>
                        </li>
                        <li>
                            <Link to='#cv'>Curriculum Vitae</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </Ul>
                </LeftPart>
                <SwitchThemeButton />
            </HeaderTag>
        </Root>
    );
};

const Root = styled.div`
    position: fixed;
    width: calc(100% - var(--dimension-initial-padding) * 2);
    margin: 0 0 var(--dimension-initial-padding) 0;
    ${scrollTransition('margin', 'width')}
    z-index: 1
`;

const BackgroundHider = styled.div`
    height: var(--dimension-initial-padding);
    ${scrollTransition('height')}
    background-color: var(--color-accent);
`;

const HeaderTag = styled.header`
    border: 2px solid var(--color-dark);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: var(--color-primary);
    height: var(--dimension-header-height);
    width: 100%;
    top: 0;
    left: 0;
    font-family: 'IBM Plex Mono', monospace;
    ${themeTransition('background-color', 'border-color')}
`;

const LeftPart = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0.75rem;
`;

const Ul = styled.ul`
    display: flex;
    width: 38rem;
    justify-content: space-between;
    margin: 0 0 0 3rem;
    list-style: none;
    font-weight: 500;

    a {
        padding: 2px 4px;
        color: var(--color-text);
        &:hover {
            background-color: var(--color-text);
            color: var(--color-light);
        }
    }
`;

const styles = {
    faviconLink: css`
        &:hover {
            background: none;
        }
    `,
};

export default Header;
