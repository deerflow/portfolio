import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import SwitchThemeButton from './SwitchThemeButton';
import darkModeTransition from '../modules/darkModeTransition';
import FavIcon from './icons/FavIcon';

const Header: FC = () => {
    return (
        <header
            css={css`
                border: 2px solid var(--dark);
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem;
                background-color: var(--primary);
                ${darkModeTransition('background-color', 'border-color')}
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
                        padding: 2rem 0;
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
