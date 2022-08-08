import React, { CSSProperties, useMemo } from 'react';
import { FCWithChildren } from '../../types/utils';
import { css, SerializedStyles } from '@emotion/react';

export const Flex: FCWithChildren<FlexProps> = ({
    children,
    direction,
    justifyContent,
    alignItems,
    wrap,
    grow,
    shrink,
    basis,
    style,
    className,
}) => {
    const computedStyle = useMemo(
        () => css`
            display: flex;
            ${direction ? `flex-direction: ${direction}` : ''};
            ${justifyContent ? `justify-content: ${justifyContent}` : ''};
            ${alignItems ? `align-items: ${alignItems}` : ''};
            ${wrap ? `flex-wrap: wrap` : ''};
            ${grow ? `flex-grow: ${grow}` : ''};
            ${shrink ? `flex-shrink: ${shrink}` : ''};
            ${basis ? `flex-basis: ${basis}` : ''};
            ${style ? style : ''}
        `,
        [direction, justifyContent, alignItems, wrap, grow, shrink, basis, style]
    );

    return (
        <div css={computedStyle} className={className}>
            {children}
        </div>
    );
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
    style?: SerializedStyles;
    className?: string;
}

interface FlexProps extends BaseProps {
    direction?: CSSProperties['flexDirection'];
}
