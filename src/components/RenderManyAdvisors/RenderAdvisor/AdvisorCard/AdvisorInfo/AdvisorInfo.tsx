import React from "react";
import {
  Highlight,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import {renderExperience, Upper} from "@/services/service";
import { IAdvisor } from "@/types/users";
import {
  Exp,
  Name,
  Speciality,
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";



function AdvisorInfo({ advisor }: { advisor: IAdvisor }) {
  const { name, speciality, experience, image } = advisor;
  return (
      <div>
        <Name>
          Nome: <Highlight>{name}</Highlight>
        </Name>
        <Speciality>
          Especialidade: <Highlight>{Upper(speciality.type_name)}</Highlight>
        </Speciality>
        <Exp>
          Ótimo em portfólios{" "}
          <Highlight>{renderExperience(experience)}</Highlight>
        </Exp>
      </div>
  );
}

export default AdvisorInfo;
