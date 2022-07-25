import React from 'react';
import { FCWithChildren } from '../types/utils';
import { Global } from '@emotion/react';
import globalStyles from '../globalStyles';
import { Helmet } from 'react-helmet';
import Header from './Header';
import { PageProps } from 'gatsby';
import Footer from './Footer';

const GlobalLayout: FCWithChildren<Props> = ({ location, title, children }) => {
    return (
        <>
            <Global styles={globalStyles} />
            <Helmet>
                <meta charSet='utf-8' />
                <title>{title}</title>
            </Helmet>
            <Header location={location} />
            <main>{children}</main>
            <Footer />
        </>
    );
};

interface Props {
    location: PageProps['location'];
    title: string;
}

export default GlobalLayout;
