import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Easybank",
  description: "Invest with a personalized advisor",
};

export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
