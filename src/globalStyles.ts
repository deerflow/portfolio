import { css } from '@emotion/react';
import darkModeTransition from './modules/darkModeTransition';

const lightColors = css`
    --primary: #f3e1d1;
    --secondary: #e3defe;
    --text: #33332d;
    --dark: #000;
    --light: #fff;
    --button: #f9f0e9;
    --dot: rgba(128, 128, 128, 0.05);
`;

const darkColors = css`
    --primary: hsl(28, 59%, 20%);
    --secondary: hsl(249, 94%, 20%);
    --text: hsl(60, 6%, 90%);
    --dark: #fff;
    --light: #000;
    --button: hsl(26, 57%, 25%);
`;

const globalStyles = css`
    html,
    head,
    body {
        margin: 0;
        padding: 0;
    }

    body {
        ${lightColors};
        font-family: 'IBM Plex Mono', 'system-ui', sans-serif;
        color: var(--text);
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

    a {
        text-decoration: none;
        color: var(--text);
        ${darkModeTransition('color')}
    }

    a:hover {
        background-color: var(--text);
        color: var(--light);
        transition: background-color 0ms;
    }
`;

export default globalStyles;
