import React from "react";
import { WhyUsInfo } from "@/services/data";
import {
  Item,
  OList,
} from "@/components/HomePage/WhyUs/WhyUsList/WhyUsList.style";
import ListItem from '@/components/HomePage/WhyUs/WhyUsList/ListItem';

function WhyUsList() {
  return (
    <OList>
      {WhyUsInfo.map((item) => (
      <ListItem key={item.id} item={item} />
      ))}
    </OList>
  );
}

export default WhyUsList;
