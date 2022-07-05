import React, { createContext, useEffect, useState } from 'react';
import { FCWithChildren, SetState } from '../types/utils';
import useScrollTransition from '../hooks/useScrollTransition';

export const StateContext = createContext<{
    theme: AppearanceTheme;
    setTheme: SetState<AppearanceTheme>;
    isThemeHydrated: boolean;
    setIsThemeHydrated: SetState<boolean>;
    isScrollHydrated: boolean;
    setIsScrollHydrated: SetState<boolean>;
}>({
    theme: null,
    setTheme: () => {},
    isThemeHydrated: false,
    setIsThemeHydrated: () => {},
    isScrollHydrated: false,
    setIsScrollHydrated: () => {},
});

const StateProvider: FCWithChildren = ({ children }) => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' ? (localStorage.getItem('theme') as AppearanceTheme) : null
    );
    const [isThemeHydrated, setIsThemeHydrated] = useState(false);
    const [isScrollHydrated, setIsScrollHydrated] = useState(false);

    useScrollTransition({ setIsScrollHydrated });

    useEffect(() => {
        if (isThemeHydrated && isScrollHydrated) {
            document.documentElement.setAttribute('data-hydrated', '');
        }
    }, [isThemeHydrated, isScrollHydrated]);

    return (
        <StateContext.Provider
            value={{ theme, setTheme, isThemeHydrated, setIsThemeHydrated, isScrollHydrated, setIsScrollHydrated }}
        >
            {children}
        </StateContext.Provider>
    );
};

type AppearanceTheme = null | 'light' | 'dark';

export default StateProvider;
