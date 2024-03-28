import React from "react";
import { ITextarea } from "@/types/input";
import Field from "@/components/Input/Field";
import { ErrorSpan, Label } from "@/components/Input/Input.styles";
import { isStringFunction } from "@/services/service";
import { StyledTextarea } from "@/components/Input/Textarea/TextArea.style";

const Textarea = React.forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ error, id, label, ...delegated }, ref) => {
    return (
      <Field>
        <Label htmlFor={id}>{isStringFunction(label)} </Label>
        <ErrorSpan>{error && error.message}</ErrorSpan>
        <StyledTextarea id={id} ref={ref} {...delegated} />
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
