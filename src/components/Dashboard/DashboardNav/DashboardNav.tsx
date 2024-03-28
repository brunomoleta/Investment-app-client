import React from "react";
import Logo from "@/components/Logo";
import LogoI from "../../../assets/illustrations/LogoIll.png";
import {
  InsideWrapper,
  Wrapper,
} from "@/components/Dashboard/DashboardNav/DashboardNav.style";
import DashboardDropdown from "@/components/Dashboard/DashboardNav/DashboardDropdown";

function DashboardNav() {
  return (
    <Wrapper>
      <InsideWrapper>
        <Logo isDashboard={true} src={LogoI} />
        <DashboardDropdown />
      </InsideWrapper>
    </Wrapper>
  );
}

export default DashboardNav;
