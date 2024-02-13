"use client";
import React from "react";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import InvestorsList from "@/components/Dashboard/InvestorsList";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import FinishSession from "@/components/FinishSession";
import Modal from "@/components/Modal";

function Dashboard() {
  const { isLoading } = useUtilsContext() as IUtilsContext;
  const { isModalOpen, setIsModalOpen } = useUtilsContext() as IUtilsContext;
  return (
    <>
      <DashboardNav />

      <MainWrapper>
        <DashboardMain />
        <Heading>Seus Clientes</Heading>
        {isLoading ? <Spinner /> : <InvestorsList />}
      </MainWrapper>
      <Modal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        title="Encerrar sessão?"
        element={<FinishSession />}
      />
    </>
  );
}

export default Dashboard;
