import React, { useMemo } from 'react';
import { Stylable } from '../types/_extendFrom';
import { css } from '@emotion/react';
import { FCWithChildren } from '../types/utils';
import settings from '../settings';
import { scrollTransition, themeTransition } from '../modules/Transitions';
import styled from '@emotion/styled';

const Section: FCWithChildren<Props> = ({
    children,
    style,
    backgroundColor,
    dotted,
    borders,
    padding,
    stripped,
    stripOrientation,
}) => {
    const Section = useMemo(
        () => styled.section`
            background-color: var(--color-${backgroundColor});
            ${themeTransition('background-color', 'border-color')}
            ${scrollTransition('height', 'margin')}
                ${dotted ? dottedBackgroundStyle : ''}
                ${borders ? bindBordersToStyle[borders] : ''}
                ${stripped ? strippedBackgroundStyle(stripOrientation) : ''}
                ${padding
                ? css`
                      padding: 3rem 2.875rem;
                  `
                : ''}
                ${style}
        `,
        []
    );

    return <Section>{children}</Section>;
};

const { dotSize, spaceSize } = settings.dottedBackground;

const dottedBackgroundStyle = css`
    background-image: radial-gradient(
        circle at ${dotSize}px ${dotSize}px,
        var(--color-static-dot) ${dotSize}px,
        transparent 0
    );
    background-size: ${spaceSize}px ${spaceSize}px;
    background-position: 0 15px;
`;

const strippedBackgroundStyle = (stripOrientation: string = '45deg') => css`
    background-image: repeating-linear-gradient(
        ${stripOrientation},
        transparent,
        transparent 25px,
        var(--color-static-dot) 2px,
        var(--color-static-dot) 27px
    );
`;

const bindBordersToStyle = {
    all: css`
        border: 2px solid var(--color-dark);
    `,
    'all-but-bottom': css`
        border: 2px solid var(--color-dark);
        border-bottom: none;
    `,
};

interface Props extends Stylable {
    backgroundColor: 'primary' | 'secondary';
    dotted?: boolean;
    stripped?: boolean;
    borders?: 'all' | 'all-but-bottom';
    padding?: boolean;
    stripOrientation?: string;
}

export default Section;
