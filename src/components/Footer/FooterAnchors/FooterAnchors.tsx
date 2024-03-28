import React from "react";
import { footerItems } from "@/services/data";
import FooterItem from "@/components/Footer/FooterAnchors/FooterItem";
import { AnchorsList } from "@/components/Footer/FooterAnchors/FooterAnchors.style";

function FooterAnchors() {
  return (
    <AnchorsList>
      {footerItems.map((anchor, index) => (
        <FooterItem key={index} anchor={anchor} />
      ))}
    </AnchorsList>
  );
}

export default FooterAnchors;
