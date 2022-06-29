import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { FCWithChildren } from '../types/utils';

export const StateContext = createContext<{
    theme: AppearanceTheme;
    setTheme: Dispatch<SetStateAction<AppearanceTheme>>;
}>({
    theme: null,
    setTheme: () => {},
});

const StateProvider: FCWithChildren = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') as AppearanceTheme);

    return <StateContext.Provider value={{ theme, setTheme }}>{children}</StateContext.Provider>;
};

type AppearanceTheme = null | 'light' | 'dark';

export default StateProvider;
