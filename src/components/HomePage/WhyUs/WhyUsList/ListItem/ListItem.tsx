import React from "react";
import { Item } from "@/components/HomePage/WhyUs/WhyUsList/WhyUsList.style";
import Image from "next/image";
import { Title } from "@/components/HomePage/WhyUs/WhyUs.style";

function ListItem({ item }: Props): JSX.Element {
  const { image, name, paragraph } = item;
  return (
    <Item >
      <Image alt="" src={image} />
      <div>
        <Title>{name}</Title>
        <p>{paragraph}</p>
      </div>
    </Item>
  );
}

export default ListItem;

export interface ItemProps {
  image: string;
  name: string;
  paragraph: string;
}

export interface Props {
  item: ItemProps;
}
