import { css } from '@emotion/react';
import { scrollTransition, themeTransition } from './modules/Transitions';

const dimensions = css`
    --dimension-header-height: 5.25rem;
    --dimension-initial-padding: 1rem;
    --dimension-section-padding: 2.875rem;

    @media (max-width: 600px) {
        --dimension-section-padding: 1.5rem;
    }

    @media (max-width: 250px) {
        --dimension-section-padding: 0.75rem;
    }
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
    --color-footer: #a7a7a7;
    --color-footer-text: #878787;
    --color-link: #6286e1;
`;

const darkColors = css`
    --color-primary: #513115;
    --color-secondary: #110363;
    --color-text: #e7e7e4;
    --color-dark: #fff;
    --color-light: #000;
    --color-accent: #643b1b;
    --color-shadow: #8b7f74;
    --color-link: #7e9ce7;
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

    html {
        scroll-behavior: smooth;
        ${dimensions};
        ${staticColors};
        ${lightColors};
    }

    html:not([data-hydrated]) * {
        transition: none !important;
    }

    body {
        font-family: 'IBM Plex Sans', 'system-ui', sans-serif;
        color: var(--color-text);
        padding: 0 var(--dimension-initial-padding);
        background: var(--color-accent);
        ${themeTransition('background-color')}
        ${scrollTransition('padding')}
    }

    html[data-theme='dark'] {
        ${darkColors};
    }

    html[data-scrolled] {
        --dimension-initial-padding: 0rem;
    }

    @media (max-width: 340px) {
        html:not([data-scrolled]) {
            --dimension-initial-padding: 0.5rem;
        }
    }

    @media (prefers-color-scheme: dark) {
        html {
            ${darkColors};
        }

        html[data-theme='light'] {
            ${lightColors};
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Josefin Sans', sans-serif;
        color: var(--color-dark);
        ${themeTransition('color')}
    }

    p,
    a,
    time {
        ${themeTransition('color')}
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
        margin: 0 0 2rem;
    }

    h3 {
        font-weight: 600;
        font-size: 2.25rem;
        margin: 0 0 1rem;
    }

    a {
        text-decoration: none;
        color: var(--color-link);
    }

    p {
        margin: 0;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    em {
        font-style: normal;
        font-weight: 600;
    }

    @media (max-width: 370px) {
        h2 {
            font-size: max(13vw, 1.5rem);
        }
        h3 {
            font-size: max(9.7vw, 1.125rem);
        }
        p {
            font-size: max(4.3vw, 0.5rem);
        }
    }

    @media (max-width: 200px) {
        h2,
        h3 {
            overflow-wrap: break-word;
        }
    }

    .sr-only {
        display: none;
    }
`;

export default globalStyles;
