import DashboardNav from "@/components/Dashboard/DashboardNav";
import React from "react";
import { DashboardMain } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import Footer from "@/components/Footer";
import { Wrapper } from "@/app/advisor/dashboard/Layout.style";
import DashboardUsername from "@/components/Dashboard/DashboardUsername";
import Modal from "@/components/Modal";
import FinishSession from "@/components/FinishSession";
import { useVerifyToken } from "@/hooks/useVerifyToken";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Easybank",
  description: "Invest with a personalized advisor",
};

export default function InvestorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useVerifyToken();
  return (
    <Wrapper>
      <DashboardNav />

      <DashboardMain>
        <DashboardUsername />
        {children}
        <Modal title="Encerrar sessão?" element={<FinishSession />} />
      </DashboardMain>

      <Footer isDashboard={true} />
    </Wrapper>
  );
}
