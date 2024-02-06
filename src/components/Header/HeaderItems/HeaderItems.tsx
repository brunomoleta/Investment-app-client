import React from 'react';
import { headeritems } from '@/services/data';
import Link from 'next/link';
import { ItemLi, Items } from '@/components/Header/HeaderItems/HeaderItems.style';
import { Upper } from '@/services/service';
import HeaderItem from '@/components/Header/HeaderItems/HeaderItem';

function HeaderItems() {
  return <Items>
    {headeritems.map((item, index) =>
      <HeaderItem item={item} key={index}/>
    )}

  </Items>;
}

export default HeaderItems;
