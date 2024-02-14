'use client'
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Spinner from "@/components/Spinner";
import React from "react";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import UpdateBio from "@/components/Dashboard/Main/Bio/UpdateBio";
import RenderBio from "@/components/Dashboard/Main/Bio/RenderBio";

export default function AdvisorBio() {
  const { activeUser } = useUserContext() as IUserContext;
  const { isEditing } = useUtilsContext() as IUtilsContext;

  function isRendered() {
    if (!activeUser) {
      return <Spinner />;
    }
    if (isEditing) {
      return <UpdateBio />;
    } else {
      return <RenderBio />;
    }
  }

  return (
    <>
      <Heading>Sua bio</Heading>
      {isRendered()}
    </>
  );
}
