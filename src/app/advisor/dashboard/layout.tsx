import DashboardNav from "@/components/Dashboard/DashboardNav";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DashboardNav />

      {children}
    </>
  );
}
