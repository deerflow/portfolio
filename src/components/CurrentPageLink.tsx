import React, { AriaAttributes } from 'react';
import { FCWithChildren } from '../types/utils';
import { Stylable } from '../types/_extendFrom';
import { Link } from 'gatsby';

const CurrentPageLink: FCWithChildren<Props> = ({ children, to, onClick, ...props }) => {
    return (
        <Link
            to={to}
            onClick={e => {
                e.preventDefault();
                typeof window !== 'undefined' && window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                onClick?.(e);
            }}
            {...props}
        >
            {children}
        </Link>
    );
};

interface Props extends Stylable, AriaAttributes {
    to: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default CurrentPageLink;
