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

  function renderElement() {
    if (!userType) {
      return <Spinner />;
    } else if (userType === "advisor") {
      return (
        <>
          <MainHeading />
          {<InvestorsList />};
        </>
      );
    }
    if (userType === "investor") {
      return (
        <>
          <MainHeading />
          <CurrentAdvisor />;
        </>
      );
    } else {
      return null;
    }
  }

  return <>{renderElement}</>;
}

export default Dashboard;
