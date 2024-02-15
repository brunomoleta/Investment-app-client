import React from "react";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import RenderBio from "@/components/Dashboard/Main/Bio";

export default function AdvisorBio() {
  return (
    <>
      <Heading>Sua bio</Heading>
      <RenderBio/>
    </>
  );
}
