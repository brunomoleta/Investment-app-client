import React from "react";
import { StyledField } from "@/components/Input/Input.styles";

function Field({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  return (
    <StyledField
      style={
        type === "radio"
          ? {
              display: "flex",
              flexDirection: "row-reverse",
              gap: "var(--s0)",
            }
          : {}
      }
    >
      {children}
    </StyledField>
  );
}

export default Field;
