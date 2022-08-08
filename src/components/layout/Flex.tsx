import React, { CSSProperties, useMemo } from 'react';
import { FCWithChildren } from '../../types/utils';
import styled from '@emotion/styled';

export const Flex: FCWithChildren<FlexProps> = ({
    children,
    direction,
    justifyContent,
    alignItems,
    wrap,
    grow,
    shrink,
    basis,
    className,
}) => {
    const ComputedRoot = useMemo(
        () => styled.div`
            display: flex;
            ${direction ? `flex-direction: ${direction}` : ''};
            ${justifyContent ? `justify-content: ${justifyContent}` : ''};
            ${alignItems ? `align-items: ${alignItems}` : ''};
            ${wrap ? `flex-wrap: wrap` : ''};
            ${grow ? `flex-grow: ${grow}` : ''};
            ${shrink ? `flex-shrink: ${shrink}` : ''};
            ${basis ? `flex-basis: ${basis}` : ''};
        `,
        [direction, justifyContent, alignItems, wrap, grow, shrink, basis]
    );

    return <ComputedRoot className={className}>{children}</ComputedRoot>;
};

export const FlexRow: FCWithChildren<BaseProps> = ({ children, ...props }) => <Flex {...props}>{children}</Flex>;
export const FlexColumn: FCWithChildren<BaseProps> = ({ children, ...props }) => (
    <Flex direction='column' {...props}>
        {children}
    </Flex>
);

interface BaseProps {
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    wrap?: boolean;
    grow?: number;
    shrink?: number;
    basis?: CSSProperties['flexBasis'];
    className?: string;
}

interface FlexProps extends BaseProps {
    direction?: CSSProperties['flexDirection'];
}
