import React from 'react';
import { FCWithChildren } from '../types/utils';
import { Stylable } from '../types/_extendFrom';
import { Link } from 'gatsby';

const CurrentPageLink: FCWithChildren<Props> = ({ children, to, onClick }) => {
    return (
        <Link
            to={to}
            onClick={e => {
                e.preventDefault();
                typeof window !== 'undefined' && window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                onClick?.(e);
            }}
        >
            {children}
        </Link>
    );
};

interface Props extends Stylable {
    to: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default CurrentPageLink;
