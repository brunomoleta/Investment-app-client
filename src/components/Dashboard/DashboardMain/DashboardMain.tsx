"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function DashboardMain() {
  const { activeUser } = useUserContext() as IUserContext;
  const { isLoading } = useUtilsContext() as IUtilsContext;

  return <div>DASHBOARD de {!activeUser ? <Spinner /> : activeUser.name}</div>;
}

export default DashboardMain;
