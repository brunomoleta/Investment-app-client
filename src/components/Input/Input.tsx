"use client";
import React from "react";
import {
  ErrorSpan,
  Field,
  Label,
  PasswordButton,
  StyledInput,
} from "@/components/Input/Input.styles";
import { Eye, EyeOff } from "react-feather";
import { IInput } from "@/types/input";
import {useUserContext} from "@/providers/UserProvider";
import {IUserContext} from "@/types/user";

const Input = React.forwardRef(
  (
    { error, id, type = "text", label, ...delegated }: IInput,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { changePasswordVisibility } = useUserContext() as IUserContext;
    return (
      <>
        <Field>
          <Label htmlFor={id}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
          <ErrorSpan>{error && error.message}</ErrorSpan>

          <div style={{ position: "relative" }}>
            <StyledInput type={type} id={id} ref={ref} {...delegated} />
            {label.toLowerCase().includes("senha") && (
              <PasswordButton
                onClick={(event) => {
                  event.preventDefault();
                  changePasswordVisibility();
                }}
              >
                {type === "text" ? <Eye /> : <EyeOff />}
              </PasswordButton>
            )}
          </div>
        </Field>
      </>
    );
  }
);
Input.displayName = "Input";
export default Input;
