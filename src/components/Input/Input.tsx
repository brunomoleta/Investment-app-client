import React from "react";
import { ErrorSpan, Label, StyledInput } from "@/components/Input/Input.styles";
import { IInput } from "@/types/input";
import PasswordButton from "@/components/Input/PasswordButton";
import Field from "@/components/Input/Field";
import {Upper} from "@/services/service";

const Input = React.forwardRef(
  (
    { error, id, type = "text", label, ...delegated }: IInput,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <Field type={type}>
          <Label htmlFor={id}>
            {Upper(label)}
          </Label>
          <ErrorSpan>{error && error.message}</ErrorSpan>
          <div style={{ position: "relative" }}>
            <StyledInput type={type} id={id} ref={ref} {...delegated} />
            {label.toLowerCase().includes("senha") && (
              <PasswordButton type={type} />
            )}
          </div>
        </Field>
      </>
    );
  }
);
Input.displayName = "Input";
export default Input;
