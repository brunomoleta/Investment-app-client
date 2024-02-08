import React from "react";
import Logo from "@/components/Logo";
import EasyBank from "@/assets/images/logo.svg";
import { Heading, Main } from "@/components/Login/LoginPage/LoginPage.style";

function LoginPage({
  loginForm,
  isLogin=true,
  signInAlternative,
}: Props): React.ReactElement {
  return (
    <Main>
      <Logo src={EasyBank} />

      <Heading>{isLogin ? "Acesse a sua conta" : "Cadastro"}</Heading>
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
