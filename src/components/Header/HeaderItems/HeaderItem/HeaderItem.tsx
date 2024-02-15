import React from "react";
import { ItemLi } from "@/components/Header/HeaderItems/HeaderItems.style";
import Link from "next/link";
import { Upper } from "@/services/service";

interface Props {
  item: string;
}

const HeaderItem: React.FC<Props> = ({ item }) => {
  return (
    <ItemLi>
      <Link href="/">{Upper(item)}</Link>
    </ItemLi>
  );
};

export default HeaderItem;
