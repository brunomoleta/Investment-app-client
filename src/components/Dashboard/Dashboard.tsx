"use client";
import React from "react";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import InvestorsList from "@/components/Dashboard/InvestorsList";
import Spinner from "@/components/Spinner";
import FinishSession from "@/components/FinishSession";
import Modal from "@/components/Modal";
import MainHeading from "@/components/Dashboard/MainHeading";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function Dashboard() {
  const { userType } = useUserContext() as IUserContext;

  function RenderElement() {
    if (!userType) {
      return <Spinner />;
    } else if (userType === "advisor") {
      return <InvestorsList />;
    }
    return "teste";
  }

  return (
    <>
      <MainWrapper>
        <MainHeading />

        {RenderElement()}
      </MainWrapper>
      <Modal title="Encerrar sessão?" element={<FinishSession />} />
    </>
  );
}

export default Dashboard;
