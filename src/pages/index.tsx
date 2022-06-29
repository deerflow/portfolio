import { FC } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import { css } from '@emotion/react';

const Home: FC = () => {
    return (
        <Section
            color='primary'
            css={css`
                height: 100vh;
            `}
        >
            <Header />
        </Section>
    );
};

export default Home;
