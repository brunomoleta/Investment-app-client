import React from "react";
import Link from "next/link";
import Image from "next/image";

function SMIcon({ icon }: Props): JSX.Element {
  return (
    <li>
      <Link href={"/"}>
        <Image alt={icon.name} src={icon.image} />
      </Link>
    </li>
  );
}

export default SMIcon;

interface IconProps {
  name: string;
  image: string;
}

interface Props {
  icon: IconProps;
}
