"use client";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "@/components/DashboardNav";
import useRetrieveUser from "@/hooks/useRetrieveUser";
import React from "react";
import DashboardMain from "@/components/DashboardMain";
import Modal from "@/components/Modal";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import FinishSession from "@/components/FinishSession";

export default function AdvisorDashboard() {
  useRetrieveUser();
  const { isModalOpen, setIsModalOpen } = useUtilsContext() as IUtilsContext;

  return (
    <MainWrapper>
      <DashboardNav />
      <DashboardMain />
      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Encerrar sessão"
        element={<FinishSession />}
      />
    </MainWrapper>
  );
}
