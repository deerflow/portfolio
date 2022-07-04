import { useContext, useEffect, useRef, useState } from 'react';
import { StateContext } from '../components/StateProvider';
import settings from '../settings';

const MATCH_DARK = '(prefers-color-scheme: dark)';

const useDarkMode = () => {
    const { theme, setTheme, hydrated, setHydrated } = useContext(StateContext);
    const [isMediaDark, setIsMediaDark] = useState(
        (typeof window !== 'undefined' && window.matchMedia(MATCH_DARK)?.matches) || false
    );

    const transitionTimeout = useRef<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const matcher = window.matchMedia(MATCH_DARK);
            const onChange = ({ matches }: MediaQueryListEvent) => setIsMediaDark(matches);
            matcher.addEventListener('change', onChange);
            return () => matcher.removeEventListener('change', onChange);
        }
    }, [setIsMediaDark]);

    useEffect(() => {
        if (theme === null) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.removeItem('theme');
        } else {
            hydrated && document.documentElement.setAttribute('data-theme-transition', 'true');
            clearTimeout(transitionTimeout.current);
            changeTheme(theme);
            transitionTimeout.current = setTimeout(
                () => document.documentElement.removeAttribute('data-theme-transition'),
                settings.themeTransitionDuration
            ) as unknown as number;
        }
        if (!hydrated) setHydrated(true);
    }, [theme]);

    return { theme: theme ?? (isMediaDark ? 'dark' : 'light'), setTheme };
};

const changeTheme = (theme: 'dark' | 'light') => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

export default useDarkMode;
