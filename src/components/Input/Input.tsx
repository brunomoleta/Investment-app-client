import React from "react";
import { ErrorSpan, Label, StyledInput } from "@/components/Input/Input.styles";
import { IInput } from "@/types/input";
import PasswordButton from "@/components/Input/PasswordButton";
import Field from "@/components/Input/Field";
import { isStringFunction } from "@/services/service";

const Input = React.forwardRef(
  (
    { error, id, type = "text", label, ...delegated }: IInput,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const lowerCaseLabel = (
      label: string | React.ReactNode
    ): string | React.ReactNode => {
      if (typeof label === "string" && label.toLowerCase().includes("senha")) {
        return <PasswordButton type={type} />;
      }
      return null;
    };
    return (
      <>
        <Field type={type}>
          <Label htmlFor={id}>{isStringFunction(label)} </Label>
          <ErrorSpan>{error && error.message}</ErrorSpan>
          <div style={{ position: "relative" }}>
            <StyledInput type={type} id={id} ref={ref} {...delegated} />
            {lowerCaseLabel(label)}
          </div>
        </Field>
      </>
    );
  }
);
Input.displayName = "Input";
export default Input;
