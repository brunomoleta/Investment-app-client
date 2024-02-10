'use client'
import React from "react";
import { LogoStyle } from "@/components/Logo/Logo.style";
import Image from "next/image";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

type LogoProps = {
  src: string;
};

const Logo: React.FC<LogoProps> = ({ src }) => {
  const { logoClick } = useUtilsContext() as IUtilsContext;

  return (
    <LogoStyle onClick={logoClick}>
      <Image alt="app logo" src={src} />
    </LogoStyle>
  );
};

export default Logo;
