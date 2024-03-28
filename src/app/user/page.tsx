import React from "react";
import ChooseUserForm from "@/components/ChooseUserForm";
import { Heading, Main } from "@/components/Login/LoginPage/LoginPage.style";

function ChooseUser() {
  return (
    <>
      <Heading>Identifique-se, por favor :)</Heading>
      <ChooseUserForm />
    </>
  );
}

export default ChooseUser;
