import React from "react";
import LoginPage from "../../components/Login/LoginPage";
import LoginForm from "@/components/Login/LoginForm";

export default function AdminLogin() {
  return (
    <>
      <LoginPage loginForm={<LoginForm userType="admin" />} />
    </>
  );
}
