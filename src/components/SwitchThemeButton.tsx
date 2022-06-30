import React, { FC } from 'react';
import styled from '@emotion/styled';
import Moon from './icons/Moon';
import useDarkMode from '../hooks/useDarkMode';
import Sun from './icons/Sun';
import darkModeTransition from '../modules/darkModeTransition';

const Button = styled.button`
    background-color: var(--button);
    border: 3px solid var(--dark);
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: box-shadow 200ms;
    &:hover {
        box-shadow: -6px 6px 0px #746a61;
    }
    cursor: pointer;
    ${darkModeTransition(['background-color', 'border-color'])}
`;

const SwitchThemeButton: FC = () => {
    const { theme, setTheme } = useDarkMode();
    return (
        <Button onClick={() => setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))}>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
    );
};

export default SwitchThemeButton;
