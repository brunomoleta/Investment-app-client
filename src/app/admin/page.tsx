import React from "react";
import LoginPage from "@/components/LoginPage";
import LoginForm from "@/components/Login/LoginForm";
import SignInAlternative from "@/components/SignInAlternative";


export default function AdminLogin() {

  return (
    <>
      <LoginPage
          loginForm={<LoginForm userType="admin" />}
          signInAlternative={<SignInAlternative />}
      />
    </>
  );
}
