import { css } from '@emotion/react';
import settings from '../settings';

const darkModeTransition = (cssProperties: DarkModeCSSProperty | DarkModeCSSProperty[]) => {
    if (Array.isArray(cssProperties)) {
        return css`
            body.theme-transition & {
                transition: ${cssProperties
                    .map(cssProperty => `${cssProperty} ${settings.themeTransitionDuration}ms`)
                    .join(', ')};
            }
        `;
    }

    return css`
        body.theme-transition & {
            transition: ${cssProperties} ${settings.themeTransitionDuration}ms;
        }
    `;
};

type DarkModeCSSProperty = 'color' | 'background-color' | 'border-color' | 'fill';

export default darkModeTransition;
