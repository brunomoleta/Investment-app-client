import React from "react";
import { Highlight } from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { formatPhoneNumber, renderExperience, upper } from "@/services/service";
import { IAdvisor } from "@/types/users";
import {
  Exp,
  Name,
  Speciality,
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";

function AdvisorInfo({
  advisor,
  isDashboard = false,
}: {
  advisor: IAdvisor;
  isDashboard?: boolean;
}) {
  const { name, email, phone_number, speciality, experience, image } = advisor;
  return (
    <div>
      <Name>
        Nome: <Highlight>{name}</Highlight>
      </Name>
      <Speciality>
        Especialidade: <Highlight>{upper(speciality.type_name)}</Highlight>
      </Speciality>
      <Exp>
        Ótimo em portfólios:{" "}
        <Highlight>{renderExperience(experience)}</Highlight>
      </Exp>
      {isDashboard && (
        <>
          <Name>
            Email: <Highlight>{email}</Highlight>
          </Name>
          <Speciality>
            Número de telefone:{" "}
            <Highlight>{formatPhoneNumber(phone_number)}</Highlight>
          </Speciality>
        </>
      )}
    </div>
  );
}

export default AdvisorInfo;
