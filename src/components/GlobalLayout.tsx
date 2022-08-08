import React from 'react';
import { FCWithChildren } from '../types/utils';
import { Global } from '@emotion/react';
import globalStyles from '../globalStyles';
import { Helmet } from 'react-helmet';
import Header from './Header';
import { PageProps } from 'gatsby';
import Footer from './Footer';

const GlobalLayout: FCWithChildren<Props> = ({ location, title, description, children }) => {
    return (
        <>
            <Global styles={globalStyles} />
            <Helmet htmlAttributes={{ lang: 'fr' }}>
                <meta charSet='utf-8' />
                <meta name='description' content={description} />
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
    description: string;
}

export default GlobalLayout;
