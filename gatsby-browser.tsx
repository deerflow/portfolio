import React from 'react';
import '@fontsource/josefin-sans';
import '@fontsource/ibm-plex-sans';
import '@fontsource/ibm-plex-mono';
import { WrapRootElementBrowserArgs } from 'gatsby';
import { Global } from '@emotion/react';
import globalStyles from './src/globalStyles';

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => {
    return (
        <>
            <Global styles={globalStyles} />
        </>
    );
};
