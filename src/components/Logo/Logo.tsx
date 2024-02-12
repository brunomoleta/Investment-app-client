"use client";
import React from "react";
import { LogoStyle, StyledImage } from "@/components/Logo/Logo.style";
import Image, { StaticImageData } from "next/image";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

interface LogoProps {
  src: string | StaticImageData;
  isDashboard?: boolean;
}

const Logo: React.FC<LogoProps> = ({ src, isDashboard = false }) => {
  const { logoClick } = useUtilsContext() as IUtilsContext;

  return (
    <LogoStyle onClick={logoClick} aria-label="retornar a página inicial">
      {!isDashboard ? (
        <Image alt="app logo" src={src} />
      ) : (
        <StyledImage alt={"app logo"} src={src} />
      )}
    </LogoStyle>
  );
};

export default Logo;
