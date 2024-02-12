"use client";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "@/components/DashboardNav";
import React from "react";
import useRetrieveUser from "@/hooks/useRetrieveUser";
import useAuth from "@/hooks/useAuth";

export default function InvestorDashboard() {
  useAuth()
  useRetrieveUser();

  return (
    <MainWrapper>
      <DashboardNav />
    </MainWrapper>
  );
}
