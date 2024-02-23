"use client";
import React from "react";
import { headerItems } from "@/services/data";
import {Items, Nav} from "@/components/Header/headerItems/headerItems.style";
import HeaderItem from "@/components/Header/headerItems/HeaderItem";

function headerItems() {
  return (
    <Nav>
      <Items>
        {headerItems.map((item, index) => (
          <HeaderItem item={item} key={index} />
        ))}
      </Items>
    </Nav>
  );
}

export default headerItems;
