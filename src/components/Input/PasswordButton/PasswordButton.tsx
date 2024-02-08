"use client";
import React from "react";
import { Eye, EyeOff } from "react-feather";
import { StyledPasswordButton } from "@/components/Input/Input.styles";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";

function PasswordButton({ type }: { type?: string }) {
  const { changePasswordVisibility } = useUserContext() as IUserContext;

  return (
    <StyledPasswordButton
      onClick={(event) => {
        event.preventDefault();
        changePasswordVisibility();
      }}
    >
      {type === "text" ? <Eye /> : <EyeOff />}
    </StyledPasswordButton>
  );
}

export default PasswordButton;
