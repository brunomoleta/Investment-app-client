import React from "react";
import type { Metadata } from "next";
import DashboardLayout from "@/components/DashboardLayout";

export const metadata: Metadata = {
  title: "Advisor's Dashboard | Easybank",
  description: "Invest with a personalized advisor",
};

export default function AdvisorDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
