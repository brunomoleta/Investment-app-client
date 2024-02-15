"use client";
import React from "react";
import { LogoStyle, StyledImage } from "@/components/Logo/Logo.style";
import Image, { StaticImageData } from "next/image";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

interface LogoProps {
  src: string | StaticImageData;
  isDashboard?: boolean;
}

const Logo: React.FC<LogoProps> = ({ src, isDashboard = false }) => {
  const { logoClick, changeUrl } = useUtilsContext() as IUtilsContext;
  const { userType } = useUserContext() as IUserContext;

  const tooltip: string = isDashboard
    ? "Voltar para dashboard"
    : "Ir para homepage";

  const handleClick = isDashboard
    ? () => changeUrl(`/${userType}/dashboard`)
    : logoClick;

  return (
    <LogoStyle title={tooltip} onClick={handleClick} aria-label={tooltip}>
      {!isDashboard ? (
        <Image alt="app logo" src={src} />
      ) : (
        <StyledImage alt={"app logo"} src={src} />
      )}
    </LogoStyle>
  );
};

export default Logo;
