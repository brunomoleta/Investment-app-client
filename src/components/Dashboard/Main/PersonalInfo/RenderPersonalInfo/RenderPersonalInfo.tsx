"use client";
import React from "react";
import {
  CardImage,
  ImageWrapper,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import Button from "@/components/Button";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import DefaultImage from "@/assets/illustrations/profile.svg";
import { IUser } from "@/types/users";

import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import RenderAdvisorInfo from "@/components/Dashboard/Main/PersonalInfo/RenderPersonalInfo/RenderAdvisorInfo";
import { Wrapper } from "@/components/Dashboard/Main/PersonalInfo/RenderPersonalInfo/RenderPersonalInfo.style";

function RenderPersonalInfo() {
  const { activeUser } = useUserContext() as IUserContext;
  const { setIsEditing } = useUtilsContext() as IUtilsContext;
  const { name, image } = activeUser as IUser;

  const userImage = image ? image : DefaultImage;

  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <CardImage
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
            src={userImage}
            alt={name}
          />
        </ImageWrapper>
        <RenderAdvisorInfo />
        <Button content="Editar" onClick={() => setIsEditing(true)} />
      </Wrapper>
    </>
  );
}

export default RenderPersonalInfo;
