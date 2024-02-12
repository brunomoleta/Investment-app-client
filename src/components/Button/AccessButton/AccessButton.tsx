'use client'
import React from "react";
import Button from "@/components/Button";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function AccessButton() {
  const { getIsLoggedIn } = useUserContext() as IUserContext;
  return <Button onClick={getIsLoggedIn} content="Entrar" />;
}

export default AccessButton;
