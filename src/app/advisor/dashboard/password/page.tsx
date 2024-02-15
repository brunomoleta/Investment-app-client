import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import RenderPassword from "@/components/Dashboard/Main/RenderPassword";

export default function AdvisorPassword() {
  return (
    <>
      <Heading>Editar senha</Heading>
      <RenderPassword />
    </>
  );
}
