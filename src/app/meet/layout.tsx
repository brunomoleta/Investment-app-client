import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessores | Easybank",
  description: "Invest with a personalized advisor",
};

export default function MeetAdvisorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
