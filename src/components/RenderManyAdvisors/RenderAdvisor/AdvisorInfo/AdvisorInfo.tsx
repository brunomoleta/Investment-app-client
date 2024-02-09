import React from "react";
import {
  AdvisorImage,
  Highlight,
  ImageWrapper,
} from "@/components/RenderManyAdvisors/RenderAdvisor/RenderAdvisor.style";
import { Upper } from "@/services/service";
import { IAdvisor } from "@/types/users";
import {
  Exp,
  MainInfoWrapper,
  Name,
  Speciality,
} from "@/components/RenderManyAdvisors/RenderAdvisor/AdvisorInfo/AdvisorInfo.style";
import { renderExperience } from "@/services/data";
import DefaultImage from "@/assets/illustrations/profile.svg";

function AdvisorInfo({ advisor }: { advisor: IAdvisor }) {
  const { name, speciality, experience, image } = advisor;
  const advisorImage = image ? image : DefaultImage;
  return (
    <MainInfoWrapper>
      <ImageWrapper>
        <AdvisorImage
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill={true}
          src={advisorImage}
          alt={name}
        />
      </ImageWrapper>
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
    </MainInfoWrapper>
  );
}

export default AdvisorInfo;
