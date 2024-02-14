"use client";
import UpdatePersonalInfo from "../../../../components/Dashboard/UpdatePersonalInfo";
import RenderPersonalInfo from "../../../../components/Dashboard/RenderPersonalInfo";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import Spinner from "@/components/Spinner";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

export default function AdvisorPersonalInfo() {
  const { activeUser } = useUserContext() as IUserContext;
  const { isEditing } = useUtilsContext() as IUtilsContext;

  function isRendered() {
    if (!activeUser) {
      return <Spinner />;
    }
    if (isEditing) {
      return <UpdatePersonalInfo/>;
    } else {
      return <RenderPersonalInfo/>;
    }
  }

  return (
    <>
      <Heading>Informações pessoais</Heading>
      {isRendered()}
    </>
  );
}
