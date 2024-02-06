import React from 'react';
import {Li, LiLink} from '@/components/Footer/FooterAnchors/FooterItem/FooterItem.style';

interface FooterItemProps {
    anchor: string;
}

function FooterItem({ anchor }: FooterItemProps) {
    return (
        <Li>
            <LiLink href={"/"}>{anchor}</LiLink>
        </Li>
    );
}

export default FooterItem;