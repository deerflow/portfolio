import React, { FC } from 'react';
import { themeTransition } from '../../modules/Transitions';
import styled from '@emotion/styled';
import { Stylable } from '../../types/_extendFrom';

const FavIcon: FC<Props> = ({ className }) => {
    return (
        <Svg
            xmlns='http://www.w3.org/2000/svg'
            width='59'
            height='52'
            fill='none'
            viewBox='0 0 59 52'
            className={className}
        >
            <path
                fillRule='evenodd'
                d='M.093 44.212 24.942.628c.25-.377.5-.628.874-.628h7.118c.375 0 .624.252.874.628l25.099 43.584c.124.377.124.755 0 1.005l-3.497 6.155c-.25.377-.5.628-.999.628H4.464c-.25 0-.624-.252-.75-.502l-3.62-6.28c-.125-.252-.125-.755 0-1.006H.093Zm9.49-.502 2.497-4.27h27.47l2.498 4.27H9.582Zm34.09 2.01c.75 0 1.249-.88.874-1.508l-14.11-24.368 2.497-4.396 19.854 34.541h-47.7L2.59 45.72h41.082ZM26.316 2.01 2.59 43.71h4.746L31.31 2.01h-4.994Zm6.618.879L13.081 37.556h4.994l14.11-24.494c.25-.627 1.25-.627 1.623 0l20.604 36.049 2.497-4.397L32.935 2.89h-.001ZM20.322 37.556h18.106L29.312 21.73l-8.99 15.826Z'
                clipRule='evenodd'
            />
        </Svg>
    );
};

const Svg = styled.svg`
    width: 2.25rem;
    height: 2.25rem;

    & path {
        fill: var(--color-dark);
        ${themeTransition('fill')}
    }
`;

interface Props extends Stylable {}

export default FavIcon;
