import React, { FC } from 'react';
import styled from '@emotion/styled';
import moonSvg from '../assets/moon.svg';
import Moon from './icons/Moon';

const Button = styled.button`
    background-color: var(--button);
    border: 3px solid var(--dark);
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SwitchThemeButton: FC = () => {
    console.log(moonSvg);
    return (
        <Button>
            <Moon />
        </Button>
    );
};

export default SwitchThemeButton;
