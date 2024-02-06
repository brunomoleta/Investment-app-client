import React from "react";
import { SMIcons } from "@/services/data";
import { SMList } from "@/components/Footer/SocialMediaIcons/SMIcons.style";
import SMIcon from "@/components/Footer/SocialMediaIcons/SMIcon";

function SocialMediaIcons() {
  return (
    <SMList>
      {SMIcons.map((icon) => (
        <SMIcon key={icon.id} icon={icon}/>
      ))}
    </SMList>
  );
}

export default SocialMediaIcons;
