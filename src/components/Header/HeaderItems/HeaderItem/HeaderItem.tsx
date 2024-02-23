import React from "react";
import { ItemLi } from "@/components/Header/headerItems/headerItems.style";
import { upper } from "@/services/service";
import {HeaderLink} from "@/components/Footer/FooterAnchors/FooterItem/FooterItem.style";

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
