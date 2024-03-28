import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import RenderPassword from "@/components/Dashboard/Main/RenderPassword";

export default function InvestorPassword() {
  return (
    <>
      <Heading>Editar senha</Heading>
      <RenderPassword />
    </>
  );
}
