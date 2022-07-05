import { css } from '@emotion/react';
import settings from '../settings';

type DarkModeCSSProperty = 'color' | 'background-color' | 'border-color' | 'fill';

export const themeTransition = (...cssProperties: DarkModeCSSProperty[]) => {
    return css`
        html[data-theme-transition] & {
            transition: ${cssProperties
                .map(cssProperty => `${cssProperty} ${settings.themeTransitionDuration}ms`)
                .join(', ')};
        }
    `;
};

type ScrollCSSProperty = 'width' | 'height' | 'padding' | 'margin';

export const scrollTransition = (...cssProperties: ScrollCSSProperty[]) => {
    return css`
        html[data-just-scrolled] & {
            transition: ${cssProperties
                .map(cssProperty => `${cssProperty} ${settings.scrollTransitionDuration}ms`)
                .join(', ')};
        }
    `;
};
