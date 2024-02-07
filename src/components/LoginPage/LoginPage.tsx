import React from "react";
import Logo from "@/components/Logo";
import EasyBank from "@/assets/images/logo.svg";
import {Heading, Main} from "@/components/LoginPage/LoginPage.style";

function LoginPage({
  loginForm,
  signInAlternative,
}: Props): React.ReactElement {
  return (
    <Main>
      <Logo src={EasyBank} />

      <Heading>Acesse a sua conta</Heading>
      {loginForm}
      {signInAlternative}
    </Main>
  );
}

export default LoginPage;

interface Props {
  loginForm: React.ReactNode;
  signInAlternative: React.ReactNode;
}
