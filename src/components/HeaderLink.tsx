import React, { AriaAttributes } from 'react';
import CurrentPageLink from './CurrentPageLink';
import { FCWithChildren } from '../types/utils';
import { Stylable } from '../types/_extendFrom';
import { Link } from 'gatsby';

const HeaderLink: FCWithChildren<Props> = ({
    isCurrentRoute,
    children,
    className,
    to,
    onCurrentPageLinkClick,
    ...props
}) => {
    return isCurrentRoute ? (
        <CurrentPageLink to={to} className={className} onClick={onCurrentPageLinkClick} {...props}>
            {children}
        </CurrentPageLink>
    ) : (
        <Link to={to} className={className} {...props}>
            {children}
        </Link>
    );
};

interface Props extends Stylable, AriaAttributes {
    isCurrentRoute: boolean;
    to: string;
    onCurrentPageLinkClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export default HeaderLink;
