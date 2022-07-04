import React from 'react';
import styled from '@emotion/styled';
import { themeTransition } from '../modules/Transitions';

export const Svg = styled.svg`
    & path {
        fill: var(--color-dark);
        ${themeTransition('fill')}
    }
`;
