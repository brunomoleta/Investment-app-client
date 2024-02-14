import React from "react";
import Logo from "@/components/Logo";
import LogoI from "../../../assets/illustrations/LogoIll.png";
import { Wrapper } from "@/components/Dashboard/DashboardNav/DashboardNav.style";
import DashboardDropdown from "@/components/Dashboard/DashboardNav/DashboardDropdown";

function DashboardNav() {
  return (
    <Wrapper>
      <Logo isDashboard={true} src={LogoI} />
      <DashboardDropdown />
    </Wrapper>
  );
}

export default DashboardNav;
