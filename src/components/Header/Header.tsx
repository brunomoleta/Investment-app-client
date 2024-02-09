"use client";
import React from "react";
import HeaderItems from "@/components/Header/HeaderItems";
import { StyledHeader } from "@/components/Header/Header.styles";
import Button from "@/components/Button";
import Logo from "@/components/Logo";
import EasyBank from "../../assets/images/logo.svg";

function Header() {
  return (
    <>
      <StyledHeader>
        <Logo src={EasyBank} />
        <HeaderItems />
        <Button href={"/investor"} content="Entrar" />
      </StyledHeader>
    </>
  );
}

export default Header;
