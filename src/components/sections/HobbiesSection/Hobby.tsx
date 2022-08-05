import React, { FC, ReactNode } from 'react';
import { FlexRow } from '../../layout/Flex';
import { Hobbies } from '../../../modules/Icons';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Hobby: FC<Props> = ({ hobby, title, sublist }) => {
    return (
        <Root>
            <FlexRow alignItems='center'>
                <img src={Hobbies[hobby].src} alt={Hobbies[hobby].alt} css={styles.img} />
                <Title>{title}</Title>
            </FlexRow>
            {sublist}
        </Root>
    );
};

const Root = styled.li`
    &:not(:last-child) {
        margin-bottom: 1rem;
    }
`;

const Title = styled.p`
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.25rem;
    font-weight: 600;
    margin-left: 1rem;
`;

const styles = {
    img: css`
        width: 2.25rem;
        height: 2.25rem;
    `,
};

interface Props {
    hobby: keyof typeof Hobbies;
    title: string;
    sublist?: ReactNode;
}

export default Hobby;
