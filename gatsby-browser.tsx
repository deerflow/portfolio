import React from 'react';
import '@fontsource/josefin-sans';
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-mono';
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
