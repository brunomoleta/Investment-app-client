import React from "react";
import { MainWrapper } from "@/components/RenderManyAdvisors/ManyAdvisors.style";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import InvestorsList from "@/components/Dashboard/InvestorsList";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";


function Dashboard() {
  const { isLoading } = useUtilsContext() as IUtilsContext;
  return (
    <>
      <DashboardNav />
      <DashboardMain />
      <MainWrapper>{isLoading ? <Spinner /> : <InvestorsList />}</MainWrapper>
    </>
  );
}

export default Dashboard;
