import React from 'react';
import { SMList } from '../SocialMediaIcons/SMIcons.style';
import { SMIcons } from '../../../services/data';
import Link from 'next/link';
import Image from 'next/image';

function FooterAnchors() {
  return     <SMList>
    {SMIcons.map((icon) => (
      <li key={icon.id}>
        <Link href={"/"}>
          <Image alt={icon.name} src={icon.image} />
        </Link>
      </li>
    ))}
  </SMList>
    ;
}

export default FooterAnchors;
