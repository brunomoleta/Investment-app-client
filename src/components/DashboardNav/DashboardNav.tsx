import React from "react";
import Logo from "@/components/Logo";
import LogoI from "../../assets/illustrations/LogoIll.png";
import {
  HeaderRight,
  Wrapper,
} from "@/components/DashboardNav/DashboardNav.style";
import DashboardDropdown, { AccessType } from "@/components/DashboardDropdown";

function DashboardNav() {




  return (
    <Wrapper>
      <Logo isDashboard={true} src={LogoI} />
      <HeaderRight>
        <DashboardDropdown userType={AccessType.Advisor} />
      </HeaderRight>
    </Wrapper>
  );
}

export default DashboardNav;
