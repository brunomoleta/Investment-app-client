"use client";
import React from "react";
import {headerItems} from "@/services/data";
import {Items, Nav} from "@/components/Header/HeaderItems/HeaderItems.style";
import HeaderItem from "@/components/Header/HeaderItems/HeaderItem";


function HeaderItems() {
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

export default HeaderItems;
