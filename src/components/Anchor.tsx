import React, { FC } from 'react';
import styled from '@emotion/styled';

const Anchor: FC<Props> = ({ id }) => {
    return <AnchorDiv id={id}></AnchorDiv>;
};

const AnchorDiv = styled.div`
    position: relative;
    top: calc(-1 * var(--dimension-header-height));
    visibility: hidden;
`;

interface Props {
    id: string;
}

export default Anchor;
