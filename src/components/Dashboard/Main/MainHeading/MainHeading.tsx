"use client";
import React from "react";
import Spinner from "@/components/Spinner";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";

function MainHeading() {
  const { userType } = useUserContext() as IUserContext;

  function message() {
    if (!userType) {
      return <Spinner />;
    } else if (userType === "advisor") {
      return <Heading>Seus Clientes</Heading>;
    }
    if (userType === "investor") {
      return <Heading>Seu assessor pessoal</Heading>;
    } else {
      return <Heading>Tipos de investimento</Heading>;
    }
  }

  return <>{message()}</>;
}

export default MainHeading;
