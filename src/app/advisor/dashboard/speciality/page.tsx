"use client";
import { Heading } from "@/components/Login/LoginPage/LoginPage.style";
import React from "react";
import Speciality from "@/components/Dashboard/Main/Speciality";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

export default function AdvisorPersonalInfo() {
  const { isEditing } = useUtilsContext() as IUtilsContext;

  return (
    <>
      <Heading>
        {!isEditing ? "Sua especidade" : "Editar especialidade"}
      </Heading>
      <Speciality />
    </>
  );
}
