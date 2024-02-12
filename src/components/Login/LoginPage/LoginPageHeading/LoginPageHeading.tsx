'use client'
import React from "react";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function LoginPageHeading({ isLogin }: { isLogin: boolean }) {
  const { userType, renderUserType } = useUserContext() as IUserContext;

  return (
    <Heading>
      {isLogin
        ? `${renderUserType(userType)}, acesse a sua conta`
        : `Cadastro para ${renderUserType(userType)}`}
    </Heading>
  );
}

export default LoginPageHeading;
