"use client";
import React from "react";
import { Ol, TipsSection } from "@/components/PasswordTips/PasswordTips.style";

function PasswordTips() {
  return (
    <TipsSection>
      <h3> Sua senha deve cumprir os critérios:</h3>
      <Ol>
        <li>8 caracteres ou mais</li>
        <li>Uma letra Maiúscula</li>
        <li>Uma letra minúscula</li>
        <li>Um caracterer especial (ex: #,$,!,*)</li>
        <li>Um número</li>
      </Ol>
    </TipsSection>
  );
}

export default PasswordTips;
