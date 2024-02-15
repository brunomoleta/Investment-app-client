"use client";
import React from "react";
import EasyBank from "../../assets/images/logo.svg";
import Logo from "@/components/Logo";
import ChooseUserForm from "@/components/ChooseUserForm";
import {Heading, Main} from "@/components/Login/LoginPage/LoginPage.style";

function ChooseUser() {
  return (
    <>
      <Main>
        <Logo src={EasyBank} />
        <Heading>Identifique-se, por favor :)</Heading>
        <ChooseUserForm />
      </Main>
    </>
  );
}

export default ChooseUser;
