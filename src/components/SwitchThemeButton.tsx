import React, { FC } from 'react';
import styled from '@emotion/styled';
import MoonIcon from './icons/MoonIcon';
import useDarkMode from '../hooks/useDarkMode';
import SunIcon from './icons/SunIcon';
import { themeTransition } from '../modules/Transitions';

const Button = styled.button`
    background-color: var(--color-accent);
    border: 3px solid var(--color-dark);
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 200ms ease-out;
    &:hover {
        box-shadow: -6px 6px 0px var(--color-shadow);
    }
    cursor: pointer;
    ${themeTransition('background-color', 'border-color')};

    @media (max-width: 330px) {
        width: 2rem;
        height: 2rem;
        border: 2px solid var(--color-dark);
    }

    @media (max-width: 240px) {
        display: none;
    }
`;

const SwitchThemeButton: FC = () => {
    const { theme, setTheme } = useDarkMode();
    return (
        <Button onClick={() => setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
};

export default SwitchThemeButton;
