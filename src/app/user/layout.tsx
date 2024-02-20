import React from "react";
import type { Metadata } from "next";
import Logo from "@/components/Logo";
import LogoI from "@/assets/images/logo.svg";
import { UserHeader } from "@/components/Header/Header.styles";
import {
  DashboardMain,
  MainWrapper,
} from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import Footer from "@/components/Footer";
import { Wrapper } from "@/app/advisor/dashboard/Layout.style";

export const metadata: Metadata = {
  title: "Login | Easybank",
  description: "Invest with a personalized advisor",
};

export default function ChooseUserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wrapper>
      <UserHeader>
        <Logo src={LogoI} />
      </UserHeader>
      <DashboardMain>
        <div style={{ maxWidth: "var(--page-max-width)", margin: "auto" }}>
          <div style={{ width: "fit-content", margin: "auto" }}>{children}</div>
        </div>
      </DashboardMain>
      <Footer isDashboard={true} />
    </Wrapper>
  );
}
