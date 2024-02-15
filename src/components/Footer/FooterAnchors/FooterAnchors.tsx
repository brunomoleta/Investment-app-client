import React from "react";
import { footeritems } from "@/services/data";
import FooterItem from "@/components/Footer/FooterAnchors/FooterItem";
import {AnchorsList} from "@/components/Footer/FooterAnchors/FooterAnchors.style";

function FooterAnchors() {
  return (
    <AnchorsList>
      {footeritems.map((anchor, index) => (
        <FooterItem key={index} anchor={anchor}/>
      ))}
    </AnchorsList>
  );
}

export default FooterAnchors;
