"use client";
import React from "react";
import Logo from "@/components/Logo";
import EasyBank from "@/assets/images/logo.svg";
import { Heading, Main } from "@/components/Login/LoginPage/LoginPage.style";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function LoginPage({
  loginForm,
  isLogin = true,
  signInAlternative,
}: Props): React.ReactElement {
  const { userType, renderUserType } = useUserContext() as IUserContext;
  return (
    <Main>
      <Logo src={EasyBank} />

      <Heading>
        {isLogin
          ? `${renderUserType(userType)}, acesse a sua conta`
          : `Cadastro para ${renderUserType(userType)}`}
      </Heading>
      {loginForm}
      {signInAlternative}
    </Main>
  );
}

export default LoginPage;

interface Props {
  loginForm: React.ReactNode;
  isLogin?: boolean;
  signInAlternative?: React.ReactNode;
}
