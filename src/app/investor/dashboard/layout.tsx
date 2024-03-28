import React from "react";
import type { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";

export const metadata: Metadata = {
  title: "Investor's Dashboard | Easybank",
  description: "Invest with a personalized advisor",
};

export default function InvestorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
