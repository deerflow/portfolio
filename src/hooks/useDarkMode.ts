import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../components/StateProvider';

const MATCH_DARK = '(prefers-color-scheme: dark)';

const useDarkMode = () => {
    const { theme, setTheme } = useContext(StateContext);
    const [isMediaDark, setIsMediaDark] = useState(window?.matchMedia(MATCH_DARK)?.matches || false);

    console.log({ isMediaDark });

    useEffect(() => {
        const matcher = window.matchMedia(MATCH_DARK);
        const onChange = ({ matches }: MediaQueryListEvent) => setIsMediaDark(matches);
        matcher.addEventListener('change', onChange);
        return () => matcher.removeEventListener('change', onChange);
    }, [setIsMediaDark]);

    return { theme: theme ?? (isMediaDark ? 'dark' : 'light'), setTheme };
};
export default useDarkMode;
