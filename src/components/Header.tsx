import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import SwitchThemeButton from './SwitchThemeButton';
import { scrollTransition, themeTransition } from '../modules/Transitions';
import FavIcon from './icons/FavIcon';

const Header: FC = () => {
    return (
        <header
            css={css`
                margin: var(--dimension-initial-padding);
                border: 2px solid var(--color-dark);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;
                background-color: var(--color-primary);
                height: var(--dimension-header-height);
                position: fixed;
                width: calc(100% - var(--dimension-initial-padding) * 2);
                top: 0;
                left: 0;
                font-family: 'IBM Plex Mono', monospace;
                ${themeTransition('background-color', 'border-color')}
                ${scrollTransition('margin', 'width')}
            `}
        >
            <div
                css={css`
                    display: flex;
                    align-items: center;
                    margin-left: 0.75rem;
                `}
            >
                <Link
                    to='/'
                    css={css`
                        &:hover {
                            background: none;
                        }
                    `}
                >
                    <FavIcon />
                </Link>

                <ul
                    css={css`
                        display: flex;
                        width: 38rem;
                        justify-content: space-between;
                        margin: 0 0 0 3rem;
                        list-style: none;
                        font-weight: 500;
                    `}
                >
                    <li>
                        <Link css={linkStyle} to='/'>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link css={linkStyle} to='#cv'>
                            Curriculum Vitae
                        </Link>
                    </li>
                    <li>
                        <Link css={linkStyle} to='/portfolio'>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link css={linkStyle} to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <SwitchThemeButton />
        </header>
    );
};

const linkStyle = css`
    padding: 2px 4px;
`;

export default Header;
