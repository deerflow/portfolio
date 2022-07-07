import React from 'react';
import { FCWithChildren } from '../types/utils';
import { Stylable } from '../types/_extendFrom';

const ExternalLink: FCWithChildren<Props> = ({ children, style, href, target = '_blank' }) => {
    return (
        <a href={href} target={target} css={style}>
            {children}
        </a>
    );
};

interface Props extends Stylable {
    href: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
}

export default ExternalLink;
