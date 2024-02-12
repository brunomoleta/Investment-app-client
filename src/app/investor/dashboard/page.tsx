"use client";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "@/components/DashboardNav";
import React from "react";
import useRetrieveUser from "@/hooks/useRetrieveUser";

export default function InvestorDashboard() {
  useRetrieveUser();

  return (
    <>
      <DashboardNav />
      <MainWrapper></MainWrapper>
    </>
  );
}
