import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

import Spinner from "@/components/Spinner";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import UpdatePassword from "@/components/Dashboard/Main/UpdatePassword";

export default function AdvisorPassword() {
  const { activeUser } = useUserContext() as IUserContext;

  function isRendered() {
    if (!activeUser) {
      return <Spinner />;
    }
    return <UpdatePassword />;
  }

  return (
    <>
      <Heading>Editar senha</Heading>
      {isRendered()}
    </>
  );
}
