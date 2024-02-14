"use client";
import React from "react";
import {
  Exp,
  Name,
  Speciality,
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import {
  CardImage,
  Highlight,
  ImageWrapper,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import Button from "@/components/Button";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import DefaultImage from "@/assets/illustrations/profile.svg";
import { IUser } from "@/types/users";
import { formatPhoneNumber } from "@/services/service";
import { Wrapper } from "@/components/Dashboard/RenderPersonalInfo/RenderPersonalInfo.style";
import { useUtilsContext } from "@/providers/UtilsProvider";
import { IUtilsContext } from "@/types/utils";
import RenderAdvisorInfo from "@/components/Dashboard/RenderPersonalInfo/RenderAdvisorInfo";

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
        <RenderAdvisorInfo/>
        <Button content="Editar" onClick={() => setIsEditing(true)} />
      </Wrapper>
    </>
  );
}

export default RenderPersonalInfo;
