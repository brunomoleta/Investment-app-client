"use client";
import React from "react";
import Button from "@/components/Button";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";

function UpdateButtons() {
  const { setIsEditing } = useUtilsContext() as IUtilsContext;
  return (
    <>
      <Button
        onClick={() => setIsEditing(false)}
        isPrimary={false}
        type="button"
        content="cancelar"
      />
      <Button type="submit" content="Enviar" />
    </>
  );
}

export default UpdateButtons;
