"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import {checkLastLetter} from "@/services/service";

function DashboardMain() {
  const { activeUser } = useUserContext() as IUserContext;

  return (
    <div>
      Bem vind{checkLastLetter(activeUser?.name)} {" "}
      {!activeUser ? <Spinner /> : <Highlight>{activeUser.name}</Highlight>}
    </div>
  );
}

export default DashboardMain;
