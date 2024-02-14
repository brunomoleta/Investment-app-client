'use client'
import UpdatePersonalInfo from "@/components/UpdatePersonalInfo";
import RenderPersonalInfo from "@/components/RenderPersonalInfo";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";

export default function AdvisorPersonalInfo() {
  const [isEditing, setIsEditing] = React.useState(false);
  return (
    <>
      <Heading>Informações pessoais</Heading>
      {isEditing ? <UpdatePersonalInfo /> : <RenderPersonalInfo setIsEditing={setIsEditing} />}
    </>
  );
}
