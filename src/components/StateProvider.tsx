import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { FCWithChildren } from '../types/utils';
import useScrollTransition from '../hooks/useScrollTransition';

export const StateContext = createContext<{
    theme: AppearanceTheme;
    setTheme: Dispatch<SetStateAction<AppearanceTheme>>;
    hydrated: boolean;
    setHydrated: Dispatch<SetStateAction<boolean>>;
}>({
    theme: null,
    setTheme: () => {},
    hydrated: false,
    setHydrated: () => {},
});

const StateProvider: FCWithChildren = ({ children }) => {
    useScrollTransition();
    const [theme, setTheme] = useState(localStorage.getItem('theme') as AppearanceTheme);
    const [hydrated, setHydrated] = useState(false);

    return <StateContext.Provider value={{ theme, setTheme, hydrated, setHydrated }}>{children}</StateContext.Provider>;
};

type AppearanceTheme = null | 'light' | 'dark';

export default StateProvider;
