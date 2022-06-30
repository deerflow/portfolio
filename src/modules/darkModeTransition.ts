import { css } from '@emotion/react';
import settings from '../settings';

const darkModeTransition = (...cssProperties: DarkModeCSSProperty[]) => {
    return css`
        body.theme-transition & {
            transition: ${cssProperties
                .map(cssProperty => `${cssProperty} ${settings.themeTransitionDuration}ms`)
                .join(', ')};
        }
    `;
};

type DarkModeCSSProperty = 'color' | 'background-color' | 'border-color' | 'fill';

export default darkModeTransition;
