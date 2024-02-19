"use client";
import React from "react";
import { Eye, EyeOff } from "react-feather";
import { StyledPasswordButton } from "@/components/Input/Input.styles";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function PasswordButton({ type }: { type?: string }) {
  const { changePasswordVisibility } = useUtilsContext() as IUtilsContext;

  return (
    <StyledPasswordButton
      onClick={() => {
        changePasswordVisibility();
      }}
    >
      {type === "text" ? <Eye /> : <EyeOff />}
    </StyledPasswordButton>
  );
}

export default PasswordButton;
