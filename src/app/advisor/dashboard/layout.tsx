import DashboardNav from "@/components/Dashboard/DashboardNav";
import React from "react";
import { DashboardMain } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import Footer from "@/components/Footer";
import { Wrapper } from "@/app/advisor/dashboard/Layout.style";
import DashboardUsername from "@/components/Dashboard/DashboardUsername";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Wrapper>
      <DashboardNav />

      <DashboardMain>
        <DashboardUsername />
        {children}
      </DashboardMain>

      <Footer isDashboard={true} />
    </Wrapper>
  );
}
