import { css } from '@emotion/react';
import darkModeTransition from './modules/darkModeTransition';

const dimensions = css`
    --header-height: 5.25rem;
`;

const staticColors = css`
    --color-static-dot: rgba(128, 128, 128, 0.05);
    --color-static-accent: #f9f0e9;
`;

const lightColors = css`
    --color-primary: #f3e1d1;
    --color-secondary: #e3defe;
    --color-text: #33332d;
    --color-dark: #000;
    --color-light: #fff;
    --color-accent: #f9f0e9;
    --color-shadow: #746a61;
`;

const darkColors = css`
    --color-primary: hsl(28, 59%, 20%);
    --color-secondary: hsl(249, 94%, 20%);
    --color-text: hsl(60, 6%, 90%);
    --color-dark: #fff;
    --color-light: #000;
    --color-accent: hsl(26, 57%, 25%);
    --color-shadow: hsl(28, 9%, 50%);
`;

const globalStyles = css`
    * {
        box-sizing: border-box;
    }

    html,
    head,
    body {
        margin: 0;
        padding: 0;
    }

    body {
        ${dimensions};
        ${staticColors};
        ${lightColors};
        font-family: 'IBM Plex Sans', 'system-ui', sans-serif;
        color: var(--color-text);
        ${darkModeTransition('color')}
    }

    body.dark {
        ${darkColors};
    }

    @media (prefers-color-scheme: dark) {
        body {
            ${darkColors};
        }

        body.light {
            ${lightColors};
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Josefin Sans';
        color: var(--color-dark);
        ${darkModeTransition('color')}
    }

    h1,
    h2 {
        font-weight: 700;
    }

    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 3rem;
    }

    h3 {
        font-weight: 600;
        font-size: 2.25rem;
    }

    a {
        text-decoration: none;
        color: var(--color-text);
        ${darkModeTransition('color')}
    }

    a:hover {
        background-color: var(--color-text);
        color: var(--color-light);
        transition: background-color 0ms;
    }

    p {
        ${darkModeTransition('color')}
    }
`;

export default globalStyles;
