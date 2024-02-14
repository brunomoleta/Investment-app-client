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

function RenderPersonalInfo({ setIsEditing }: IState) {
  const { activeUser } = useUserContext() as IUserContext;
  const { name, email, phone_number, image } = activeUser as IUser;

  if (!activeUser) {
    return null;
  }
  const userImage = image ? image : DefaultImage;

  return (
    <>
      <div>
        <ImageWrapper>
          <CardImage
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill={true}
            src={userImage}
            alt={name}
          />
        </ImageWrapper>
        <Name>
          Nome: <Highlight>{name}</Highlight>
        </Name>
        <Speciality>
          email: <Highlight>{email}</Highlight>
        </Speciality>
        <Exp>
          Telefone: <Highlight>{formatPhoneNumber(phone_number)}</Highlight>
        </Exp>
        <Button content="Editar" onClick={() => setIsEditing(true)} />
      </div>
    </>
  );
}

export default RenderPersonalInfo;

interface IState {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}
