"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";

function MainHeading() {
  const { userType } = useUserContext() as IUserContext;

  return (
    <>
      <Heading>
        {!userType ? (
          <Spinner />
        ) : userType === "advisor" ? (
          "Seus Clientes"
        ) : (
          "Seu assessor pessoal"
        )}
      </Heading>
    </>
  );
}

export default MainHeading;
