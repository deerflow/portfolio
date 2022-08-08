import React from 'react';
import CurrentPageLink from './CurrentPageLink';
import { FCWithChildren } from '../types/utils';
import { Stylable } from '../types/_extendFrom';
import { Link } from 'gatsby';

const HeaderLink: FCWithChildren<Props> = ({ isCurrentRoute, children, className, to, onCurrentPageLinkClick }) => {
    return isCurrentRoute ? (
        <CurrentPageLink to={to} className={className} onClick={onCurrentPageLinkClick}>
            {children}
        </CurrentPageLink>
    ) : (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
};

interface Props extends Stylable {
    isCurrentRoute: boolean;
    to: string;
    onCurrentPageLinkClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default HeaderLink;
