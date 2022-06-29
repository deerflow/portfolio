import React, { FC } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

const Header: FC = () => {
    return (
        <header>
            <ul
                css={css`
                    display: flex;
                    width: 38rem;
                    justify-content: space-between;
                    margin: 0;
                    list-style: none;
                    font-weight: 500;
                    padding: 2rem;
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
        </header>
    );
};

const linkStyle = css`
    padding: 2px 4px;
`;

export default Header;
