import React from 'react';
import {
  Name,
  Speciality
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorCard/AdvisorInfo/AdvisorInfo.style";
import {Highlight} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import {renderRisk, Risk, upper} from "@/services/service";
import {Wrapper} from "@/components/Dashboard/Main/PersonalInfo/RenderPersonalInfo/RenderPersonalInfo.style";

function SpecialityInfo({ name, risk }: SpecialityInfoProps): React.ReactNode {
  return <Wrapper>
    <Name>
      Nome: <Highlight>{upper(name)}</Highlight>
    </Name>
    <Speciality>
      Grau de risco: <Highlight>{renderRisk(risk)}</Highlight>
    </Speciality>
  </Wrapper>;
}

export default SpecialityInfo;

interface SpecialityInfoProps {
  name: string;
  risk: Risk;
}