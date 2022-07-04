import React from 'react';
import { Stylable } from '../types/_extendFrom';
import { css } from '@emotion/react';
import { FCWithChildren } from '../types/utils';
import { scrollTransition, themeTransition } from '../modules/Transitions';
import settings from '../settings';

const Section: FCWithChildren<Props> = ({ children, style, backgroundColor, dotted, borders }) => {
    return (
        <section
            css={css`
                background-color: var(--color-${backgroundColor});
                ${themeTransition('background-color', 'border-color')}
                ${scrollTransition('height', 'margin')}
                ${dotted ? dottedBackgroundStyle : ''}
                ${borders ? `border: 2px solid var(--color-dark);` : ''}
                ${style}
            `}
        >
            {children}
        </section>
    );
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

interface Props extends Stylable {
    backgroundColor: 'primary' | 'secondary';
    dotted?: boolean;
    borders?: boolean;
}

export default Section;
