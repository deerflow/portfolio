import React from 'react';
/* TODO: Put only the required fonts */
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-sans/100.css';
import '@fontsource/ibm-plex-sans/200.css';
import '@fontsource/ibm-plex-sans/300.css';
import '@fontsource/ibm-plex-sans/400.css';
import '@fontsource/ibm-plex-sans/500.css';
import '@fontsource/ibm-plex-sans/600.css';
import '@fontsource/ibm-plex-sans/700.css';

import '@fontsource/josefin-sans/100.css';
import '@fontsource/josefin-sans/200.css';
import '@fontsource/josefin-sans/300.css';
import '@fontsource/josefin-sans/400.css';
import '@fontsource/josefin-sans/500.css';
import '@fontsource/josefin-sans/600.css';
import '@fontsource/josefin-sans/700.css';

import '@fontsource/ibm-plex-mono/100.css';
import '@fontsource/ibm-plex-mono/200.css';
import '@fontsource/ibm-plex-mono/300.css';
import '@fontsource/ibm-plex-mono/400.css';
import '@fontsource/ibm-plex-mono/500.css';
import '@fontsource/ibm-plex-mono/600.css';
import '@fontsource/ibm-plex-mono/700.css';

import { WrapRootElementBrowserArgs } from 'gatsby';
import { Global } from '@emotion/react';
import globalStyles from './src/globalStyles';
import StateProvider from './src/components/StateProvider';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
    return (
        <StateProvider>
            <Global styles={globalStyles} />
            {element}
        </StateProvider>
    );
};
