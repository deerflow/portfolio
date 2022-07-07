import React from 'react';
import CurrentPageLink from './CurrentPageLink';
import { FCWithChildren } from '../types/utils';
import { Stylable } from '../types/_extendFrom';
import { Link } from 'gatsby';

const HeaderLink: FCWithChildren<Props> = ({ isCurrentRoute, children, style, to, onCurrentPageLinkClick }) => {
    return isCurrentRoute ? (
        <CurrentPageLink to={to} style={style} onClick={onCurrentPageLinkClick}>
            {children}
        </CurrentPageLink>
    ) : (
        <Link to={to} css={style}>
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
