"use client";
import React from "react";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { Name } from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import { IAdvisor } from "@/types/users";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import Button from "@/components/Button";

function BioData() {
  const { activeUser } = useUserContext() as IUserContext;
  const { setIsEditing } = useUtilsContext() as IUtilsContext;
  const { bio } = activeUser as IAdvisor;
  return (
    <>
      <Name>
        Bio: <Highlight>{bio}</Highlight>
      </Name>
      <Button onClick={() => setIsEditing(true)} content="Editar" />
    </>
  );
}

export default BioData;
