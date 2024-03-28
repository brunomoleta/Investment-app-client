"use client";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import Spinner from "@/components/Spinner";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import { upper } from "@/services/service";
import RemoveAccountForm from "@/components/RemoveAccountForm";
import { TopText } from "@/components/RemoveAccountForm/RemoveAccount.style";

export default function RemoveAccount() {
  const { activeUser } = useUserContext() as IUserContext;

  if (!activeUser) {
    return <Spinner />;
  } else {
    return (
      <>
        <Heading>Excluir conta</Heading>
        <TopText>
          {upper(activeUser.name)}, tens certeza de sua decisão? Ela é
          irrevogável e <em>seus dados serão removidos da nossa plataforma.</em>
        </TopText>
        <RemoveAccountForm />
      </>
    );
  }
}
