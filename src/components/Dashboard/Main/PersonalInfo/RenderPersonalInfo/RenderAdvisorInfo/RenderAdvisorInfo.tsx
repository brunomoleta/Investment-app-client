import React from "react";
import {
    AdvisorWrapper,
    Exp,
    Name,
    Speciality,
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { formatPhoneNumber } from "@/services/service";
import { useUserContext } from "@/providers/UserProvider";
import { IUserContext } from "@/types/userContext";
import {IUser} from "@/types/users";

function RenderAdvisorInfo() {
  const { activeUser } = useUserContext() as IUserContext;
  const { name, email, phone_number } = activeUser as IUser;
  return (
    <AdvisorWrapper>
      <Name>
        Nome: <Highlight>{name}</Highlight>
      </Name>
      <Speciality>
        Email: <Highlight>{email}</Highlight>
      </Speciality>
      <Exp>
        Telefone: <Highlight>{formatPhoneNumber(phone_number)}</Highlight>
      </Exp>
    </AdvisorWrapper>
  );
}

export default RenderAdvisorInfo;
