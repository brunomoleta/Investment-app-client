import React from "react";
import { ItemLi } from "@/components/Header/HeaderItems/HeaderItems.style";
import Link from "next/link";
import { upper } from "@/services/service";

interface Props {
  item: string;
}

const HeaderItem: React.FC<Props> = ({ item }) => {
  return (
    <ItemLi>
      <Link href="/">{upper(item)}</Link>
    </ItemLi>
  );
};

export default HeaderItem;
