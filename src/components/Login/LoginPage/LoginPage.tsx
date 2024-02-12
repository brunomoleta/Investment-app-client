import React from "react";
import Logo from "@/components/Logo";
import EasyBank from "@/assets/images/logo.svg";
import { Main } from "@/components/Login/LoginPage/LoginPage.style";
import LoginPageHeading from "@/components/Login/LoginPage/LoginPageHeading";

function LoginPage({
  loginForm,
  isLogin = true,
  signInAlternative,
}: Props): React.ReactElement {
  return (
    <Main>
      <Logo src={EasyBank} />

      <LoginPageHeading isLogin={isLogin} />
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
