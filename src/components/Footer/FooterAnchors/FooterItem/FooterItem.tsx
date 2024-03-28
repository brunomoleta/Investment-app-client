import React from "react";
import {
  Li,
  LiLink,
} from "@/components/Footer/FooterAnchors/FooterItem/FooterItem.style";
import { upper } from "@/services/service";

interface FooterItemProps {
  anchor: string;
}

function FooterItem({ anchor }: FooterItemProps) {
  return (
    <Li>
      <LiLink href={"/"}>{upper(anchor)}</LiLink>
    </Li>
  );
}

export default FooterItem;
