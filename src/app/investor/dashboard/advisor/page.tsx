"use client";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import UpdateAdvisor from "@/components/Dashboard/Main/InvestorsAdvisor/UpdateAdvisor";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import Spinner from "@/components/Spinner";

export default function UpdateInvestorsAdvisorInfo() {
  const { activeUser } = useUserContext() as IUserContext;

  if (!activeUser) {
    return <Spinner />;
  } else {
    return (
      <>
        <Heading>Alterar assessor</Heading>
        <UpdateAdvisor />
      </>
    );
  }
}
