import React, { FC, ReactNode } from 'react';
import { FlexRow } from '../../layout/Flex';
import { Hobbies } from '../../../modules/Icons';
import styled from '@emotion/styled';

const Hobby: FC<Props> = ({ hobby, title, sublist }) => {
    return (
        <Root>
            <FlexRow alignItems='center'>
                <HobbyLogo src={Hobbies[hobby].src} alt={Hobbies[hobby].alt} />
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
    @media (max-width: 370px) {
        --dimension-responsive-1-rem: max(4.3vw, 0.5rem);
        &:not(:last-child) {
            margin-bottom: var(--dimension-responsive-1-rem);
        }
        p {
            font-size: max(5.4vw, 0.625rem);
            margin-left: var(--dimension-responsive-1-rem);
        }
        img {
            --dimension-img: max(9.72vw, 1.125rem);
            width: var(--dimension-img);
            height: var(--dimension-img);
        }
    }
`;

const HobbyLogo = styled.img`
    width: 2.25rem;
    height: 2.25rem;
`;

const Title = styled.p`
    font-family: 'IBM Plex Mono', monospace;
    font-size: 1.25rem;
    font-weight: 600;
    margin-left: 1rem;
`;

interface Props {
    hobby: keyof typeof Hobbies;
    title: string;
    sublist?: ReactNode;
}

export default Hobby;
