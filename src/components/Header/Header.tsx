import React from "react";
import headerItems from "@/components/Header/headerItems";
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
          <headerItems />
          <AccessButton />
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
}

export default Header;
