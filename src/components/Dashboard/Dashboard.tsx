"use client";
import React from "react";

import Spinner from "@/components/Spinner";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import MainHeading from "@/components/Dashboard/Main/MainHeading";
import InvestorsList from "@/components/Dashboard/Main/InvestorsList";
import CurrentAdvisor from "@/components/Dashboard/Main/InvestorsAdvisor/CurrentAdvisor";

function Dashboard() {
  const { userType } = useUserContext() as IUserContext;

  function RenderElement() {
    if (!userType) {
      return <Spinner />;
    } else if (userType === "advisor") {
      return <InvestorsList />;
    }
    return <CurrentAdvisor/>;
  }

  return (
    <>
      <MainHeading />

      {RenderElement()}
    </>
  );
}

export default Dashboard;
