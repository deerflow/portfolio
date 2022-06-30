import { useContext, useEffect, useRef, useState } from 'react';
import { StateContext } from '../components/StateProvider';

const MATCH_DARK = '(prefers-color-scheme: dark)';

const useDarkMode = () => {
    const { theme, setTheme } = useContext(StateContext);
    const [isMediaDark, setIsMediaDark] = useState(window?.matchMedia(MATCH_DARK)?.matches || false);

    const transitionTimeout = useRef<number>(0);

    useEffect(() => {
        const matcher = window.matchMedia(MATCH_DARK);
        const onChange = ({ matches }: MediaQueryListEvent) => setIsMediaDark(matches);
        matcher.addEventListener('change', onChange);
        return () => matcher.removeEventListener('change', onChange);
    }, [setIsMediaDark]);

    useEffect(() => {
        if (theme === null) {
            document.body.classList.remove('light');
            document.body.classList.remove('dark');
            localStorage.removeItem('theme');
        } else {
            document.body.classList.add('theme-transition');
            clearTimeout(transitionTimeout.current);
            changeTheme(theme);
            transitionTimeout.current = window.setTimeout(
                () => document.body.classList.remove('theme-transition'),
                1000
            );
        }
    }, [theme]);

    return { theme: theme ?? (isMediaDark ? 'dark' : 'light'), setTheme };
};

const changeTheme = (theme: 'dark' | 'light') => {
    document.body.classList.remove(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
};

export default useDarkMode;
