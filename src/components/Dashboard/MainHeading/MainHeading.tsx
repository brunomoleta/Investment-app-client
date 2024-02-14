"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";

function MainHeading() {
  const { activeUser, userType } = useUserContext() as IUserContext;

  return (
    <>
      <h1>
        Dashboard de{" "}
        {!activeUser ? <Spinner /> : <Highlight>{activeUser.name}</Highlight>}{" "}
      </h1>

      <Heading>
        {!userType ? (
          <Spinner />
        ) : userType === "advisor" ? (
          "Seus Clientes"
        ) : (
          "Seu assessor"
        )}
      </Heading>
    </>
  );
}

export default MainHeading;
