"use client";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "@/components/DashboardNav";
import useRetrieveUser from "@/hooks/useRetrieveUser";
import React from "react";
import useAuth from "@/hooks/useAuth";

export default function AdvisorDashboard() {
 useAuth()

  useRetrieveUser();

  return (
    <MainWrapper>
      <DashboardNav />
    </MainWrapper>
  );
}
