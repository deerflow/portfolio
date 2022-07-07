import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link, PageProps } from 'gatsby';
import SwitchThemeButton from './SwitchThemeButton';
import FavIcon from './icons/FavIcon';
import styled from '@emotion/styled';
import settings from '../settings';
import HeaderLink from './HeaderLink';

const Header: FC<Props> = ({ location }) => {
    return (
        <Root>
            <BackgroundHider />
            <HeaderTag>
                <LeftPart>
                    <HeaderLink
                        to='/'
                        style={styles.faviconLink}
                        isCurrentRoute={location.pathname === '/'}
                        onCurrentPageLinkClick={handleRootLinkClick}
                    >
                        <FavIcon />
                    </HeaderLink>

                    <Ul>
                        <li>
                            <HeaderLink
                                to='/'
                                isCurrentRoute={location.pathname === '/'}
                                onCurrentPageLinkClick={handleRootLinkClick}
                            >
                                Accueil
                            </HeaderLink>
                        </li>
                        <li>
                            <Link to='#cv' css={styles.cvLink}>
                                Curriculum Vitae
                            </Link>
                        </li>
                        <li>
                            <HeaderLink to='/portfolio' isCurrentRoute={location.pathname === '/portfolio'}>
                                Portfolio
                            </HeaderLink>
                        </li>
                        <li>
                            <HeaderLink to='/contact' isCurrentRoute={location.pathname === '/contact'}>
                                Contact
                            </HeaderLink>
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
    transition: margin ${settings.scrollTransitionDuration}ms, width ${settings.scrollTransitionDuration}ms;
    z-index: 1;
`;

const BackgroundHider = styled.div`
    height: var(--dimension-initial-padding);
    background-color: var(--color-accent);
    transition: height ${settings.scrollTransitionDuration}ms, background-color ${settings.themeTransitionDuration}ms;
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
    transition: height ${settings.scrollTransitionDuration}ms, background-color ${settings.themeTransitionDuration}ms,
        border-color ${settings.themeTransitionDuration}ms;
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

const handleRootLinkClick = () => {
    if (location.pathname === '/' && location.hash !== '') {
        history.pushState({}, '', '/');
    }
};

const styles = {
    faviconLink: css`
        &:hover {
            background: none;
        }
    `,
    cvLink: css`
        scroll-behavior: smooth;
    `,
};

interface Props {
    location: PageProps['location'];
}

export default Header;
