"use client";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "../../../components/Dashboard/DashboardNav";
import React from "react";

export default function InvestorDashboard() {

  return (
    <>
      <DashboardNav />
      <MainWrapper></MainWrapper>
    </>
  );
}
