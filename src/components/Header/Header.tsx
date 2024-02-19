import React from "react";
import HeaderItems from "@/components/Header/HeaderItems";
import {HeaderWrapper, StyledHeader} from "@/components/Header/Header.styles";
import Logo from "@/components/Logo";
import EasyBank from "../../assets/images/logo.svg";
import AccessButton from "@/components/Button/AccessButton";

function Header() {
  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <Logo src={EasyBank} />
          <HeaderItems />
          <AccessButton />
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;
