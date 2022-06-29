import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import SwitchThemeButton from './SwitchThemeButton';

const Header: FC = () => {
    return (
        <header
            css={css`
                border: 2px solid black;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 1rem 0 2rem;
            `}
        >
            <ul
                css={css`
                    display: flex;
                    width: 38rem;
                    justify-content: space-between;
                    margin: 0;
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
            <SwitchThemeButton />
        </header>
    );
};

const linkStyle = css`
    padding: 2px 4px;
`;

export default Header;
