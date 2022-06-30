import React from 'react';
import { Stylable } from '../types/_extendFrom';
import { css } from '@emotion/react';
import { FCWithChildren } from '../types/utils';
import darkModeTransition from '../modules/darkModeTransition';

const Section: FCWithChildren<Props> = ({ children, color, css: style }) => {
    return (
        <section
            css={[
                css`
                    background-color: var(--${color});
                    ${darkModeTransition('background-color')}
                `,
                style,
            ]}
        >
            {children}
        </section>
    );
};

interface Props extends Stylable {
    color: 'primary' | 'secondary';
}

export default Section;
