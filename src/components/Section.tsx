import React from 'react';
import { Stylable } from '../types/_extendFrom';
import { css } from '@emotion/react';
import { FCWithChildren } from '../types/utils';
import darkModeTransition from '../modules/darkModeTransition';
import settings from '../settings';

const Section: FCWithChildren<Props> = ({ children, style, backgroundColor, dotted }) => {
    return (
        <section
            css={css`
                background-color: var(--${backgroundColor});
                ${darkModeTransition('background-color')}
                ${dotted && dottedBackgroundStyle}
                ${style}
            `}
        >
            {children}
        </section>
    );
};

const { dotSize, spaceSize } = settings.dottedBackground;

const dottedBackgroundStyle = css`
    background-image: radial-gradient(circle at ${dotSize}px ${dotSize}px, var(--dot) ${dotSize}px, transparent 0);
    background-size: ${spaceSize}px ${spaceSize}px;
`;

interface Props extends Stylable {
    backgroundColor: 'primary' | 'secondary';
    dotted?: boolean;
}

export default Section;
