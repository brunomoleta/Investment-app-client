import React from "react";
import { upper } from "@/services/service";
import {HeaderLink} from "@/components/Footer/FooterAnchors/FooterItem/FooterItem.style";
import {ItemLi} from "@/components/Header/HeaderItems/HeaderItems.style";

interface Props {
  item: string;
}

const HeaderItem: React.FC<Props> = ({ item }) => {
  return (
    <ItemLi>
      <HeaderLink href="/">{upper(item)}</HeaderLink>
    </ItemLi>
  );
};

export default HeaderItem;
