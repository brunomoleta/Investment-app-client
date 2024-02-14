"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function DashboardUsername() {
  const { activeUser } = useUserContext() as IUserContext;

  return (
    <h1>
      Dashboard de{" "}
      {!activeUser ? <Spinner /> : <Highlight>{activeUser.name}</Highlight>}{" "}
    </h1>
  );
}

export default DashboardUsername;
