"use client";
import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { IFullAdvisor, IInvestor } from "@/types/users";
import InvestorItem from "@/components/Dashboard/InvestorsList/InvestorItem";
import Spinner from "@/components/Spinner";

function InvestorsList() {
  const { activeUser } = useUserContext() as IUserContext;

  if (!activeUser) {
    return <Spinner />;
  }

  const { investors } = activeUser as IFullAdvisor;

  if (activeUser) {
    return (
      <ul>
        {investors.map((investor: IInvestor) => (
          <InvestorItem key={investor.id} investor={investor} />
        ))}
      </ul>
    );
  }
}

export default InvestorsList;
